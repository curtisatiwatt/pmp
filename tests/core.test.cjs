'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const root = path.resolve(__dirname, '..');
const assetDir = process.env.PMP_ASSET_DIR
  ? path.resolve(process.env.PMP_ASSET_DIR)
  : fs.existsSync(path.join(root, 'docs', 'core.js'))
    ? path.join(root, 'docs')
    : path.join(root, 'pmp-path', 'dist');
const C = require(path.join(assetDir, 'core.js'));
const context = vm.createContext({ window: {} });
for (const filename of ['questions-a.js', 'questions-b.js', 'curriculum.js']) {
  vm.runInContext(fs.readFileSync(path.join(assetDir, 'data', filename), 'utf8'), context, { filename });
}
// Plain JSON values avoid cross-realm prototype differences in strict assertions.
const content = JSON.parse(JSON.stringify(context.window));
const bank = [...content.PMP_QUESTIONS_A, ...content.PMP_QUESTIONS_B];
const lessons = content.PMP_LESSONS;
const weeks = content.PMP_WEEKS;
const countDomains = xs => xs.reduce((counts, q) => {
  counts[q.domain] = (counts[q.domain] || 0) + 1;
  return counts;
}, { people: 0, process: 0, business: 0 });
const clone = x => JSON.parse(JSON.stringify(x));
const validState = () => ({
  schema: 1,
  plan: { start: '2026-11-16', hours: 9, region: 'global', name: 'Learner' },
  completed: [lessons[0].id],
  attempts: [{ qid: bank[0].id, answer: bank[0].answer, correct: true, time: 1794873600000 }],
  review: { [bank[0].id]: { streak: 1, due: '2026-11-17', everWrong: false, lastCorrect: true } },
  bookmarks: [bank[1].id],
  notes: { [lessons[0].id]: '复盘：先确认情境与权限。' },
  logs: [{ date: '2026-11-16', minutes: 45 }],
  history: [{
    id: 'test-session', ids: [bank[0].id, bank[1].id],
    answers: { [bank[0].id]: bank[0].answer },
    startedAt: 1794873600000, finishedAt: 1794873900000,
    mode: 'practice', label: '学习练习'
  }],
  checklist: ['eligibility'], session: null, focus: null
});

test('calendar arithmetic crosses leap days, month ends, and year boundaries', () => {
  assert.equal(C.addDays('2028-02-28', 1), '2028-02-29');
  assert.equal(C.addDays('2028-02-29', 1), '2028-03-01');
  assert.equal(C.addDays('2027-02-28', 1), '2027-03-01');
  assert.equal(C.addDays('2026-12-31', 1), '2027-01-01');
  assert.equal(C.addDays('2027-01-01', -1), '2026-12-31');
  assert.equal(C.addDays('2026-01-31', 1), '2026-02-01');
});

test('calendar day differences stay integral across daylight-saving transitions', () => {
  const previousTZ = process.env.TZ;
  try {
    process.env.TZ = 'America/Toronto';
    assert.equal(C.dayDiff('2027-03-15', '2027-03-13'), 2);
    assert.equal(C.dayDiff('2026-11-02', '2026-10-31'), 2);
    assert.equal(C.dayDiff('2026-10-31', '2026-11-02'), -2);
    assert.equal(C.addDays('2027-03-13', 2), '2027-03-15');
  } finally {
    if (previousTZ === undefined) delete process.env.TZ;
    else process.env.TZ = previousTZ;
  }
});

test('the default realistic plan ends on February 7 and lower capacity extends it', () => {
  assert.equal(C.weeksFor(9), 12);
  assert.equal(C.targetDate({ start: '2026-11-16', hours: 9 }), '2027-02-07');
  assert.equal(C.weeksFor(6), 18);
  assert.equal(C.weeksFor(15), 8);
  assert.ok(C.dayDiff(C.targetDate({ start: '2026-11-16', hours: 6 }), '2027-02-07') > 0);
});

test('repeat correct answers cannot inflate first-attempt accuracy', () => {
  const [a, b] = bank;
  const attempts = [
    { qid: a.id, correct: false },
    { qid: a.id, correct: true },
    { qid: b.id, correct: true },
    { qid: a.id, correct: true }
  ];
  const report = C.stats(attempts, bank);
  assert.equal(report.count, 2);
  assert.equal(report.correct, 1);
  assert.equal(report.accuracy, 50);
  assert.equal(report.totalAttempts, 4);
  assert.equal(report.domains[a.domain].accuracy, 50);
});

test('an unattempted domain has no accuracy instead of a misleading zero score', () => {
  const report = C.stats([], bank);
  assert.equal(report.count, 0);
  assert.equal(report.accuracy, null);
  for (const domain of Object.values(report.domains)) {
    assert.equal(domain.count, 0);
    assert.equal(domain.accuracy, null);
  }
});

test('a full practice exam selects 180 unique questions with rounded domain weights', () => {
  const originalIds = bank.map(q => q.id);
  const selected = C.selectQuestions(bank, 180);
  assert.equal(selected.length, 180);
  assert.equal(new Set(selected.map(q => q.id)).size, 180);
  // 180 × 33/41/26 percent rounds to 59/74/47, totalling exactly 180.
  assert.deepEqual(countDomains(selected), { people: 59, process: 74, business: 47 });
  assert.deepEqual(bank.map(q => q.id), originalIds, 'selection must not mutate source ordering');
});

test('selection prioritizes unseen questions within each domain', () => {
  const seen = ['people', 'process', 'business'].flatMap(domain =>
    bank.filter(q => q.domain === domain).slice(0, 20)
  );
  const seenIds = new Set(seen.map(q => q.id));
  const selected = C.selectQuestions(bank, 30, seen.map(q => ({ qid: q.id })));
  assert.equal(selected.length, 30);
  assert.ok(selected.every(q => !seenIds.has(q.id)), 'enough unseen items exist in every domain');
  assert.deepEqual(countDomains(selected), { people: 10, process: 12, business: 8 });
});

test('domain practice and requests exceeding the bank never duplicate questions', () => {
  const domainQuestions = C.selectQuestions(bank, 100, [], 'business');
  assert.equal(domainQuestions.length, 52);
  assert.ok(domainQuestions.every(q => q.domain === 'business'));
  assert.equal(new Set(domainQuestions.map(q => q.id)).size, 52);
  const all = C.selectQuestions(bank, 300);
  assert.equal(all.length, 200);
  assert.equal(new Set(all.map(q => q.id)).size, 200);
});

test('spaced review expands through 1, 3, 7, 14 and 30 days and then caps', () => {
  let prior;
  let date = '2026-12-01';
  const expectedDates = ['2026-12-02', '2026-12-05', '2026-12-12', '2026-12-26', '2027-01-25', '2027-02-24'];
  for (let i = 0; i < expectedDates.length; i++) {
    prior = C.nextReview(prior, true, date);
    assert.equal(prior.due, expectedDates[i]);
    assert.equal(prior.streak, Math.min(i + 1, 5));
    assert.equal(prior.everWrong, false);
    date = prior.due;
  }
});

test('a wrong answer resets review spacing while preserving wrong-question history', () => {
  const wrong = C.nextReview({ streak: 5, everWrong: false }, false, '2026-11-30');
  assert.deepEqual(wrong, { streak: 0, due: '2026-12-01', everWrong: true, lastCorrect: false });
  const recovered = C.nextReview(wrong, true, '2026-12-01');
  assert.deepEqual(recovered, { streak: 1, due: '2026-12-02', everWrong: true, lastCorrect: true });
});

test('unanswered items remain in the scoring denominator and are not correct', () => {
  const [a, b, c] = bank;
  const result = C.scoreSession({
    ids: [a.id, b.id, c.id],
    answers: { [a.id]: a.answer, [b.id]: (b.answer + 1) % 4 }
  }, bank);
  assert.deepEqual(result, { correct: 1, total: 3, answered: 2, percent: 33 });
  assert.deepEqual(C.scoreSession({ ids: [a.id, b.id], answers: {} }, bank), {
    correct: 0, total: 2, answered: 0, percent: 0
  });
});

test('a complete exported backup remains importable', () => {
  assert.equal(C.validBackup(validState(), bank, lessons), true);
});

const invalidBackups = [
  ['unknown schema', x => { x.schema = 999; }],
  ['a nontext learner name', x => { x.plan.name = {}; }],
  ['an unsupported exam region', x => { x.plan.region = 'unknown'; }],
  ['impossible plan date', x => { x.plan.start = '2026-02-30'; }],
  ['out-of-range weekly capacity', x => { x.plan.hours = 0; }],
  ['unknown completed lesson', x => { x.completed.push('lesson-missing'); }],
  ['duplicate completed lessons', x => { x.completed.push(x.completed[0]); }],
  ['unknown bookmarked question', x => { x.bookmarks.push('question-missing'); }],
  ['unknown attempted question', x => { x.attempts[0].qid = 'question-missing'; }],
  ['out-of-range selected option', x => { x.attempts[0].answer = 4; }],
  ['nonboolean correctness', x => { x.attempts[0].correct = 'true'; }],
  ['nonfinite attempt time', x => { x.attempts[0].time = Infinity; }],
  ['null attempt entry', x => { x.attempts = [null]; }],
  ['null log entry', x => { x.logs = [null]; }],
  ['impossible log date', x => { x.logs[0].date = '2026-02-30'; }],
  ['negative logged time', x => { x.logs[0].minutes = -1; }],
  ['impossible review date', x => { x.review[bank[0].id].due = '2026-13-40'; }],
  ['invalid review streak', x => { x.review[bank[0].id].streak = 6; }],
  ['an HTML-bearing history identifier', x => { x.history[0].id = 'x"><img src=x onerror=alert(1)>'; }],
  ['history referring to an unknown question', x => { x.history[0].ids.push('missing'); }],
  ['history answer outside its question list', x => { x.history[0].answers[bank[4].id] = 0; }],
  ['oversized note', x => { x.notes[lessons[0].id] = '字'.repeat(20001); }],
  ['nontext checklist entry', x => { x.checklist = [null]; }]
];
for (const [description, corrupt] of invalidBackups) {
  test(`backup import rejects ${description} without throwing`, () => {
    const broken = clone(validState());
    corrupt(broken);
    assert.equal(C.validBackup(broken, bank, lessons), false);
  });
}

const validSession = () => ({
  id: 'session-regression-1',
  mode: 'daily',
  label: '每日练习',
  instant: true,
  ids: [bank[0].id, bank[1].id],
  index: 0,
  answers: { [bank[0].id]: bank[0].answer },
  submitted: { [bank[0].id]: true },
  recorded: { [bank[0].id]: true },
  flags: [bank[1].id],
  startedAt: 1794873600000,
  deadline: null,
  order: {
    [bank[0].id]: [2, 0, 3, 1],
    [bank[1].id]: [1, 3, 0, 2]
  }
});

test('a resumable session retains canonical answers with shuffled display options', () => {
  const session = validSession();
  assert.equal(C.validSession(session, bank), true);
  assert.deepEqual(C.scoreSession(session, bank), {
    correct: 1, total: 2, answered: 1, percent: 50
  });
  const legacy = clone(session);
  delete legacy.order;
  assert.equal(C.validSession(legacy, bank), true, 'older sessions can use original option order');
});

const invalidSessions = [
  ['null', () => null],
  ['missing answer storage', s => { delete s.answers; return s; }],
  ['missing submitted flags', s => { delete s.submitted; return s; }],
  ['missing recorded flags', s => { delete s.recorded; return s; }],
  ['missing review flags', s => { delete s.flags; return s; }],
  ['an index before the first question', s => { s.index = -1; return s; }],
  ['an index beyond the last question', s => { s.index = s.ids.length; return s; }],
  ['a fractional index', s => { s.index = 0.5; return s; }],
  ['duplicate question IDs', s => { s.ids[1] = s.ids[0]; return s; }],
  ['unknown question IDs', s => { s.ids[0] = 'missing'; return s; }],
  ['an answer outside the selected set', s => { s.answers[bank[2].id] = 0; return s; }],
  ['an invalid canonical answer', s => { s.answers[bank[0].id] = 4; return s; }],
  ['nonboolean submitted state', s => { s.submitted[bank[0].id] = 'true'; return s; }],
  ['a flag outside the selected set', s => { s.flags.push(bank[2].id); return s; }],
  ['a nonfinite deadline', s => { s.deadline = Infinity; return s; }],
  ['a repeated display option', s => { s.order[bank[0].id] = [0, 1, 1, 3]; return s; }],
  ['a missing display option', s => { s.order[bank[0].id] = [0, 1, 2]; return s; }],
  ['an out-of-range display option', s => { s.order[bank[0].id] = [0, 1, 2, 4]; return s; }],
  ['a noninteger display option', s => { s.order[bank[0].id] = [0, 1, 2, '3']; return s; }],
  ['display order for an unrelated question', s => { s.order[bank[2].id] = [0, 1, 2, 3]; return s; }]
];
for (const [description, corrupt] of invalidSessions) {
  test(`session restore rejects ${description} without throwing`, () => {
    assert.equal(C.validSession(corrupt(clone(validSession())), bank), false);
  });
}

test('the full question bank has 200 distinct complete items and the intended domain coverage', () => {
  assert.equal(bank.length, 200);
  assert.equal(new Set(bank.map(q => q.id)).size, 200);
  assert.equal(new Set(bank.map(q => q.stem.trim())).size, 200);
  assert.deepEqual(countDomains(bank), { people: 66, process: 82, business: 52 });
  for (const q of bank) {
    assert.match(q.id, /^[ab]\d{3}$/);
    assert.ok(typeof q.stem === 'string' && q.stem.trim().length > 15, q.id);
    assert.ok(['predictive', 'agile', 'hybrid'].includes(q.approach), q.id);
    assert.ok(['基础', '进阶'].includes(q.difficulty), q.id);
    assert.equal(q.options.length, 4, q.id);
    assert.equal(new Set(q.options).size, 4, `${q.id} has repeated options`);
    assert.ok(q.options.every(option => typeof option === 'string' && option.trim()), q.id);
    assert.ok(Number.isInteger(q.answer) && q.answer >= 0 && q.answer < 4, q.id);
    assert.ok(typeof q.explanation === 'string' && q.explanation.trim().length > 15, q.id);
    assert.equal(q.eliminations.length, 4, q.id);
    assert.ok(q.eliminations.every(reason => typeof reason === 'string' && reason.trim().length > 5), q.id);
  }
});

test('all 24 substantive lessons are linked by the 12-week curriculum without dangling references', () => {
  assert.equal(lessons.length, 24);
  assert.equal(new Set(lessons.map(l => l.id)).size, 24);
  assert.equal(weeks.length, 12);
  const known = new Set(lessons.map(l => l.id));
  const covered = new Set();
  for (const lesson of lessons) {
    assert.ok(['people', 'process', 'business'].includes(lesson.domain), lesson.id);
    assert.ok(lesson.sections.length >= 4, lesson.id);
    assert.ok(lesson.sections.every(s => s.title && typeof s.body === 'string' && s.body.length > 30), lesson.id);
    assert.ok(lesson.takeaways.length >= 3, lesson.id);
    assert.ok(lesson.scenario?.prompt && lesson.scenario?.answer, lesson.id);
    assert.ok(lesson.terms.length > 0 && lesson.terms.every(t => t.en && t.zh), lesson.id);
  }
  weeks.forEach((week, index) => {
    assert.equal(week.week, index + 1);
    assert.ok(week.tasks.length >= 3 && week.checkpoint);
    for (const id of week.lessonIds) {
      assert.ok(known.has(id), `week ${week.week} links unknown lesson ${id}`);
      covered.add(id);
    }
  });
  assert.equal(covered.size, 24, 'every lesson should be reachable through the plan');
});
