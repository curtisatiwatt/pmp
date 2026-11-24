'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const dir = path.join(__dirname, '..', 'docs');
const context = {}; context.window = context; vm.createContext(context);
for (const f of ['data/curriculum.js', 'data/questions-a.js', 'data/questions-b.js', 'data/course.js', 'core.js']) {
  vm.runInContext(fs.readFileSync(path.join(dir, f), 'utf8'), context, { filename: f });
}
const course = context.PMP_COURSE, weeks = context.PMP_WEEKS, lessons = context.PMP_LESSONS;
const bank = [...context.PMP_QUESTIONS_A, ...context.PMP_QUESTIONS_B];
const C = context.PMPCore;

test('study units cover the 274 lectures once, in order, with video minutes, and point at real notes', () => {
  const known = new Set(lessons.map(l => l.id));
  let expected = 1;
  for (const u of course.units) {
    assert.equal(u.from, expected, `${u.id} starts where the previous unit ended`);
    assert.ok(u.to >= u.from, u.id);
    assert.equal(u.n, u.to - u.from + 1, `${u.id} lecture count`);
    assert.ok(Number.isInteger(u.min) && u.min > 0, `${u.id} minutes`);
    expected = u.to + 1;
    assert.ok(u.title && u.zh && Number.isInteger(u.section), u.id);
    u.lessons.forEach(id => assert.ok(known.has(id), `${u.id} links unknown note ${id}`));
  }
  assert.equal(expected, 275);
  assert.equal(new Set(course.units.map(u => u.id)).size, course.units.length);
  const hours = course.units.reduce((s, u) => s + u.min, 0) / 60;
  assert.ok(hours > 34 && hours < 37, `${hours} hours of video`);
});

test('every unit that is taught has practice questions, and the weekly plan schedules each unit once', () => {
  const pick = u => bank.filter(q => u.kw.some(k => q.topic.includes(k)) || u.pairs.some(([d, a]) => q.domain === d && q.approach === a));
  for (const u of course.units) {
    if (u.section >= 3 && u.section <= 11) assert.ok(pick(u).length >= 6, `${u.id} has only ${pick(u).length} matching questions`);
    u.kw.forEach(k => assert.ok(bank.some(q => q.topic.includes(k)), `${u.id} keyword matches nothing: ${k}`));
  }
  const scheduled = weeks.flatMap(w => w.units || []);
  assert.deepEqual(scheduled.slice().sort(), course.units.map(u => u.id).sort());
  // Units appear in course order across the weeks.
  assert.deepEqual(scheduled, course.units.map(u => u.id));
});

test('a backup may carry the course unit reached, and bad values are rejected', () => {
  const base = { schema: 1, plan: { start: '2026-11-16', hours: 9, region: 'global', name: 'Curtis' }, completed: [], attempts: [], review: {}, bookmarks: [], notes: {}, logs: [], history: [], checklist: [] };
  assert.equal(C.validBackup(base, bank, lessons), true, 'older backups without the field still load');
  assert.equal(C.validBackup({ ...base, unit: 'u08c' }, bank, lessons), true);
  assert.equal(C.validBackup({ ...base, unit: 3 }, bank, lessons), false);
  assert.equal(C.validBackup({ ...base, unit: '<script>' }, bank, lessons), false);
});
