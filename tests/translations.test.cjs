'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const root = path.resolve(__dirname, '..');
const assetDir = process.env.PMP_ASSET_DIR
  ? path.resolve(process.env.PMP_ASSET_DIR)
  : path.join(root, 'docs');
const canonicalFiles = ['questions-a.js', 'questions-b.js', 'curriculum.js'];
const translationFiles = ['translations-a.js', 'translations-b.js'];
const plain = value => JSON.parse(JSON.stringify(value));

function run(context, filename) {
  vm.runInContext(fs.readFileSync(path.join(assetDir, 'data', filename), 'utf8'), context, { filename });
}

function load(order = translationFiles) {
  const context = vm.createContext({ window: {} });
  canonicalFiles.forEach(file => run(context, file));
  const canonical = plain(context.window);
  order.forEach(file => run(context, file));
  return { context, canonical, translated: plain(context.window.PMP_EN) };
}

const { canonical, translated } = load();
const questions = [...canonical.PMP_QUESTIONS_A, ...canonical.PMP_QUESTIONS_B];
const byId = Object.fromEntries(questions.map(q => [q.id, q]));

function englishText(value, label) {
  assert.equal(typeof value, 'string', label);
  assert.ok(value.trim().length > 0, `${label}: empty`);
  assert.doesNotMatch(value, /[\u3400-\u9fff]/u, `${label}: untranslated Chinese prose`);
  assert.doesNotMatch(value, /\b(?:TODO|TBD|TRANSLATE_ME|PLACEHOLDER)\b/i, `${label}: placeholder`);
}

// Only explicit numerical tokens are compared. This is not a language-equivalence
// test: words such as "one option" need semantic review rather than arithmetic.
// Currency magnitudes must nevertheless survive 万 -> full values / millions.
function numerals(text) {
  const normalized = text
    .replace(/百分之百/g, '100%')
    .replace(/百分之二十/g, '20%')
    .replace(/(\d)\s*[–—]\s*(?=\d)/g, '$1 to ')
    .replace(/−/g, '-')
    .replace(/＋/g, '+');
  return Array.from(normalized.matchAll(/[+-]?\d+(?:,\d{3})*(?:\.\d+)?\s*(?:万|million|thousand)?\s*%?/gi), ([raw]) => {
    const value = Number(raw.match(/[+-]?\d+(?:,\d{3})*(?:\.\d+)?/)[0].replaceAll(',', ''));
    const scale = raw.includes('万') ? 10000 : /million/i.test(raw) ? 1000000 : /thousand/i.test(raw) ? 1000 : 1;
    return { value: value * scale, percent: raw.includes('%') };
  });
}

test('English bank covers the same 200 stable question IDs with complete answer choices', () => {
  const expectedIds = ['a', 'b'].flatMap(prefix => Array.from({ length: 100 }, (_, i) => `${prefix}${String(i + 1).padStart(3, '0')}`));
  assert.deepEqual(questions.map(q => q.id).sort(), expectedIds);
  assert.deepEqual(Object.keys(translated.questions).sort(), expectedIds);
  for (const q of questions) {
    const en = translated.questions[q.id];
    for (const key of ['topic', 'difficulty', 'stem', 'explanation']) englishText(en[key], `${q.id}.${key}`);
    for (const key of ['options', 'eliminations']) {
      assert.equal(en[key].length, 4, `${q.id}.${key}`);
      assert.equal(en[key].length, q[key].length, `${q.id}.${key}: source parity`);
      en[key].forEach((text, index) => englishText(text, `${q.id}.${key}[${index}]`));
    }
    assert.equal(new Set(en.options).size, 4, `${q.id}: duplicate choices`);
  }
});

test('translations retain canonical answer positions and never mutate Chinese content or exam facts', () => {
  const loaded = load();
  const after = plain(loaded.context.window);
  delete after.PMP_EN;
  assert.deepEqual(after, loaded.canonical);
  for (const q of questions) {
    assert.ok(Number.isInteger(q.answer) && q.answer >= 0 && q.answer < 4, q.id);
    const en = translated.questions[q.id];
    if (Object.hasOwn(en, 'answer')) assert.equal(en.answer, q.answer, `${q.id}: answer override`);
    assert.equal(en.eliminations[q.answer], en.explanation, `${q.id}: correct explanation moved`);
    for (let i = 0; i < 4; i++) {
      if (i !== q.answer) assert.notEqual(en.eliminations[i], en.explanation, `${q.id}: distractor ${i} marked correct`);
    }
  }
});

test('numerical question facts and every numerical distractor preserve values, signs, units, percentages, and order', () => {
  let comparedFields = 0;
  for (const q of questions) {
    const en = translated.questions[q.id];
    const fields = [['stem', q.stem, en.stem], ...q.options.map((text, i) => [`options[${i}]`, text, en.options[i]])];
    for (const [label, source, target] of fields) {
      const expected = numerals(source);
      if (expected.length) {
        assert.deepEqual(numerals(target), expected, `${q.id}.${label}`);
        comparedFields++;
      }
    }
  }
  assert.ok(comparedFields >= 60, `Expected the numerical bank to be exercised; checked ${comparedFields} fields`);
});

test('calculation answers match independently computed critical-path, PERT, EVM, forecast, and EMV results', () => {
  const cases = [
    ['a037', [Math.max(12, 9 - 2)]],
    ['a039', [0.80, 0.89]],
    ['a040', [2000000 / 0.80]],
    ['a041', [500000 - 650000]],
    ['a064', [(4 + 4 * 7 + 16) / 6]],
    ['b038', [Math.max(3 + 5 + 2, 4 + 3 + 2)]],
    ['b039', [9 - 6]],
    ['b040', [(6 + 4 * 9 + 18) / 6]],
    ['b041', [900000 / 1000000, 900000 / 1200000]],
    ['b042', [8000000 / (2400000 / 3000000)]],
    ['b043', [750000 + 450000]],
    ['b044', [(5000000 - 2000000) / (5000000 - 2500000)]],
    ['b045', [0.20 * 500000]],
    ['b058', [(24 + 28 + 26) / 3]],
    ['b072', [24 / 8, Math.ceil(24 / 5)]]
  ];
  for (const [id, expected] of cases) {
    const q = byId[id];
    const values = numerals(translated.questions[id].options[q.answer]).map(n => n.value);
    assert.deepEqual(values, expected, id);
  }
});

test('all 24 lessons retain sections, takeaways, scenarios, and the original bilingual glossary', () => {
  assert.equal(canonical.PMP_LESSONS.length, 24);
  assert.deepEqual(Object.keys(translated.lessons).sort(), canonical.PMP_LESSONS.map(l => l.id).sort());
  for (const lesson of canonical.PMP_LESSONS) {
    const en = translated.lessons[lesson.id];
    for (const key of ['title', 'summary']) englishText(en[key], `${lesson.id}.${key}`);
    assert.equal(en.sections.length, lesson.sections.length, `${lesson.id}.sections`);
    en.sections.forEach((section, index) => {
      englishText(section.title, `${lesson.id}.sections[${index}].title`);
      englishText(section.body, `${lesson.id}.sections[${index}].body`);
    });
    assert.equal(en.takeaways.length, lesson.takeaways.length, `${lesson.id}.takeaways`);
    en.takeaways.forEach((text, index) => englishText(text, `${lesson.id}.takeaways[${index}]`));
    for (const key of ['prompt', 'answer']) englishText(en.scenario[key], `${lesson.id}.scenario.${key}`);
    // Terms already have both languages; an absent override deliberately retains them.
    assert.deepEqual(en.terms || lesson.terms, lesson.terms, `${lesson.id}.terms`);
  }
});

test('all 12 weeks and all official resources have complete English content with stable references', () => {
  assert.equal(canonical.PMP_WEEKS.length, 12);
  assert.deepEqual(Object.keys(translated.weeks).sort(), canonical.PMP_WEEKS.map(w => String(w.week)).sort());
  for (const week of canonical.PMP_WEEKS) {
    const en = translated.weeks[week.week];
    for (const key of ['title', 'focus', 'checkpoint']) englishText(en[key], `week${week.week}.${key}`);
    assert.equal(en.tasks.length, week.tasks.length, `week${week.week}.tasks`);
    en.tasks.forEach((task, index) => englishText(task, `week${week.week}.tasks[${index}]`));
    // Hour budgets and question counts use Arabic numerals in both versions.
    week.tasks.forEach((task, index) => {
      const sourceValues = numerals(task);
      const targetValues = numerals(en.tasks[index]);
      // Lesson counts and week references are sometimes written out in English.
      const writtenNumbers = { one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9, ten: 10, eleven: 11, twelve: 12 };
      const targetWithWords = en.tasks[index]
        .replace(/\b(?:an|another) hour\b/gi, '1 hour')
        .replace(/\b(one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve)\b/gi, word => writtenNumbers[word.toLowerCase()]);
      const sorted = values => values.slice().sort((a, b) => a.value - b.value || Number(a.percent) - Number(b.percent));
      if (sourceValues.length !== targetValues.length) {
        assert.deepEqual(sorted(numerals(targetWithWords)), sorted(sourceValues), `week${week.week}.tasks[${index}]: numbers`);
      } else assert.deepEqual(sorted(targetValues), sorted(sourceValues), `week${week.week}.tasks[${index}]: numbers`);
    });
  }
  assert.deepEqual(Object.keys(translated.sources).sort(), canonical.PMP_SOURCES.map(s => s.url).sort());
  for (const source of canonical.PMP_SOURCES) {
    const en = translated.sources[source.url];
    assert.equal(en.url, source.url);
    englishText(en.title, `${source.url}.title`);
    englishText(en.note, `${source.url}.note`);
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const normalizeDates = text => text.replace(new RegExp(`\\b(${months.join('|')})\\b`, 'g'), month => String(months.indexOf(month) + 1));
    const sortedNumbers = text => numerals(normalizeDates(text)).sort((a, b) => a.value - b.value || Number(a.percent) - Number(b.percent));
    assert.deepEqual(sortedNumbers(en.note), sortedNumbers(source.note), `${source.url}: source dates and exam figures`);
  }
});

test('translation bundles compose in either order and can load before canonical data or more than once', () => {
  assert.deepEqual(load([...translationFiles].reverse()).translated, translated);
  assert.deepEqual(load([...translationFiles, ...translationFiles]).translated, translated);
  const early = vm.createContext({ window: {} });
  translationFiles.forEach(file => run(early, file));
  canonicalFiles.forEach(file => run(early, file));
  assert.deepEqual(plain(early.window.PMP_EN), translated);
  assert.deepEqual(plain(early.window.PMP_QUESTIONS_A), canonical.PMP_QUESTIONS_A);
  assert.deepEqual(plain(early.window.PMP_QUESTIONS_B), canonical.PMP_QUESTIONS_B);
});
