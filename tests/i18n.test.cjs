'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const assetDir = process.env.PMP_ASSET_DIR
  ? path.resolve(process.env.PMP_ASSET_DIR)
  : path.join(__dirname, '..', 'docs');
const han = /[\u3400-\u9fff]/;

// The translation renderer only needs text nodes, attributes and tree walking.
// A small DOM model keeps these tests runnable with Node alone.
class TextNode {
  constructor(value) { this.nodeValue = String(value); this.parentElement = null; }
  get textContent() { return this.nodeValue; }
  replaceWith(node) {
    const parent = this.parentElement;
    parent.children.splice(parent.children.indexOf(this), 1, node);
    node.parentElement = parent;
    this.parentElement = null;
  }
}
class Element {
  constructor(tag) {
    this.tagName = tag.toLowerCase();
    this.children = [];
    this.attrs = new Map();
    this.dataset = {};
    this.parentElement = null;
  }
  append(...nodes) {
    for (let node of nodes) {
      if (typeof node === 'string') node = new TextNode(node);
      node.parentElement = this;
      this.children.push(node);
    }
  }
  normalize() {}
  set textContent(value) { this.children = []; this.append(String(value)); }
  get textContent() { return this.children.map(node => node.textContent).join(''); }
  set className(value) { this.attrs.set('class', value); }
  get className() { return this.attrs.get('class') || ''; }
  setAttribute(name, value) { this.attrs.set(name, String(value)); }
  getAttribute(name) { return this.attrs.get(name) ?? null; }
  hasAttribute(name) { return this.attrs.has(name); }
  matches(selectors) {
    return selectors.split(',').some(selector => {
      const s = selector.trim();
      if (s.startsWith('[')) return this.hasAttribute(s.slice(1, -1));
      if (s.startsWith('.')) return this.className.split(/\s+/).includes(s.slice(1));
      return this.tagName === s;
    });
  }
  closest(selector) {
    for (let node = this; node; node = node.parentElement) if (node.matches(selector)) return node;
    return null;
  }
  querySelectorAll(selector) {
    return this.children.flatMap(node => node instanceof Element
      ? [...(node.matches(selector) ? [node] : []), ...node.querySelectorAll(selector)] : []);
  }
}
function load(savedMode = null) {
  const stored = new Map(savedMode === null ? [] : [['pmp-language', savedMode]]);
  const events = [];
  const document = {
    documentElement: new Element('html'), body: new Element('body'), title: '',
    createElement: tag => new Element(tag),
    createTreeWalker(root) {
      const texts = [];
      const visit = node => node instanceof TextNode ? texts.push(node) : node.children.forEach(visit);
      visit(root);
      let index = -1;
      return { currentNode: null, nextNode() { this.currentNode = texts[++index]; return !!this.currentNode; } };
    }
  };
  const context = {
    document, NodeFilter: { SHOW_TEXT: 4 },
    Event: class { constructor(type) { this.type = type; } },
    localStorage: { getItem: key => stored.get(key) ?? null, setItem: (key, value) => stored.set(key, value) },
    dispatchEvent: event => events.push(event.type)
  };
  context.window = context;
  vm.createContext(context);
  for (const filename of ['data/curriculum.js', 'data/questions-a.js', 'data/questions-b.js', 'data/translations-a.js', 'data/translations-b.js', 'i18n.js']) {
    vm.runInContext(fs.readFileSync(path.join(assetDir, filename), 'utf8'), context, { filename });
  }
  return { context, document, stored, events, I: context.PMPI18n };
}
const plain = value => JSON.parse(JSON.stringify(value));

// A missing translation is a content failure, even if the UI can fall back to Chinese.
test('every original question, lesson, week and official source has complete English content', () => {
  const { context: c, I } = load();
  const bank = [...c.PMP_QUESTIONS_A, ...c.PMP_QUESTIONS_B];
  assert.equal(Object.keys(c.PMP_EN.questions).length, 200);
  assert.equal(Object.keys(c.PMP_EN.lessons).length, 24);
  assert.equal(Object.keys(c.PMP_EN.weeks).length, 12);
  assert.equal(Object.keys(c.PMP_EN.sources).length, c.PMP_SOURCES.length);
  for (const q of bank) {
    const en = c.PMP_EN.questions[q.id];
    assert.equal(en.options.length, q.options.length, `${q.id} options`);
    assert.equal(en.eliminations.length, q.eliminations.length, `${q.id} explanations`);
  }
  for (const l of c.PMP_LESSONS) {
    const en = c.PMP_EN.lessons[l.id];
    assert.equal(en.sections.length, l.sections.length, `${l.id} sections`);
    assert.equal(en.takeaways.length, l.takeaways.length, `${l.id} takeaways`);
    assert.equal(typeof en.scenario.answer, 'string', `${l.id} scenario answer`);
  }
  let checked = 0;
  function inspect(value, label) {
    if (typeof value === 'string' && han.test(value)) {
      checked++;
      const translated = I.english(value);
      assert.ok(translated && !han.test(translated), `${label}: ${value}`);
    } else if (Array.isArray(value)) value.forEach((item, i) => inspect(item, `${label}[${i}]`));
    else if (value && typeof value === 'object') {
      for (const [key, item] of Object.entries(value)) {
        // Term cards deliberately teach an English word and its Chinese equivalent.
        if (!['en', 'zh'].includes(key)) inspect(item, `${label}.${key}`);
      }
    }
  }
  [...bank, ...c.PMP_LESSONS, ...c.PMP_WEEKS, ...c.PMP_SOURCES].forEach((item, i) => inspect(item, `content[${i}]`));
  assert.ok(checked >= 2851, `${checked} source strings checked`);
});

test('content and interface language are separate settings that persist and emit only valid changes', () => {
  const { I, document, stored, events } = load();
  assert.equal(I.mode, 'bi');
  assert.equal(I.ui, 'zh');
  I.setMode('en');
  assert.equal(I.getMode(), 'en');
  assert.equal(stored.get('pmp-language'), 'en');
  assert.equal(document.documentElement.dataset.language, 'en');
  assert.equal(document.documentElement.lang, 'zh-CN', 'content language must not change the interface language');
  assert.equal(events.at(-1), 'pmp-language-change');
  I.setMode('invalid');
  assert.equal(events.length, 1);
  assert.equal(I.mode, 'en');
  I.setUi('en');
  assert.equal(stored.get('pmp-ui'), 'en');
  assert.equal(document.documentElement.lang, 'en');
  assert.equal(document.documentElement.dataset.ui, 'en');
  assert.match(document.title, /Ascend/);
  I.setUi('fr');
  assert.equal(I.ui, 'en');
  I.setUi('zh');
  assert.equal(document.documentElement.lang, 'zh-CN');
  assert.equal(I.t('提交答案'), '提交答案');
  // A saved choice from the old single switch carries over: English stays English throughout.
  const legacy = load('en').I;
  assert.equal(legacy.mode, 'en');
  assert.equal(legacy.ui, 'en');
  assert.equal(legacy.t('提交答案'), 'Check answer');
  assert.equal(load('unknown').I.mode, 'bi');
  assert.equal(load('bi').I.ui, 'zh');
});

test('dynamic question, progress and date phrases translate without losing values', () => {
  const { I, context: c } = load('en');
  assert.equal(I.text('第 12 题，已答，已标记'), 'Question 12, answered, flagged');
  assert.equal(I.text('复习 17 道到期题目'), 'Review 17 due questions');
  assert.equal(I.text('9 小时 · 约 12 周（推荐）'), '9 hours · About 12 weeks (recommended)');
  assert.equal(I.text('11月13日'), 'Nov 13');
  assert.equal(I.text('累计 120 次作答'), '120 total attempts');
  const q = c.PMP_QUESTIONS_A[0];
  assert.equal(I.english(`正确答案：A. ${q.options[0]}`), `Correct answer: A. ${I.english(q.options[0])}`);
  assert.equal(I.english('✓ 判断正确 · 正确选项 A'), '✓ Correct decision · Correct option A');
});

test('renderer translates study content by content language and controls by interface language', () => {
  for (const mode of ['zh', 'en', 'bi']) {
    for (const ui of ['zh', 'en']) {
      const { I, document, context: c } = load(mode);
      I.setUi(ui);
      const q = c.PMP_QUESTIONS_A[0];
      const root = document.body;
      const stem = new Element('h2'); stem.setAttribute('data-zone', 'content'); stem.textContent = q.stem;
      const control = new Element('button'); control.textContent = '提交答案'; control.setAttribute('aria-label', '提交答案');
      const notes = new Element('textarea'); notes.textContent = '我的个人笔记，不应被翻译。';
      const user = new Element('span'); user.setAttribute('data-i18n-skip', ''); user.textContent = '学习计划';
      // A control inside a content area opts back into the interface language.
      const inner = new Element('button'); inner.setAttribute('data-zone', 'ui'); inner.textContent = '收藏题目';
      const detail = new Element('div'); detail.setAttribute('data-zone', 'content'); detail.append(inner);
      root.append(stem, control, notes, user, detail);
      I.apply(root);
      const label = `content ${mode}, interface ${ui}`;
      assert.equal(notes.textContent, '我的个人笔记，不应被翻译。', label);
      assert.equal(user.textContent, '学习计划', label);
      assert.equal(control.textContent, ui === 'en' ? 'Check answer' : '提交答案', label);
      assert.equal(control.getAttribute('aria-label'), ui === 'en' ? 'Check answer' : '提交答案', label);
      assert.equal(inner.textContent, ui === 'en' ? I.english('收藏题目') : '收藏题目', label);
      if (mode === 'zh') assert.equal(stem.textContent, q.stem, label);
      else if (mode === 'en') assert.equal(stem.textContent, I.english(q.stem), label);
      else {
        const pair = stem.querySelectorAll('.i18n-pair')[0];
        assert.deepEqual(pair.children.map(n => n.className), ['i18n-en', 'i18n-zh'], 'English comes first, as on the exam');
        assert.equal(stem.querySelectorAll('.i18n-zh')[0].textContent, q.stem);
        const english = stem.querySelectorAll('.i18n-en')[0];
        assert.equal(english.textContent, I.english(q.stem));
        assert.equal(english.lang, 'en');
        I.apply(root);
        assert.equal(stem.querySelectorAll('.i18n-pair').length, 1, 'repeated rendering must not nest translations');
      }
    }
  }
});

test('interface text added with the redesign and course tracking has English', () => {
  const { I } = load();
  for (const zh of ['今日', '章节', '提要', '今天做什么', '天连续', '只做 5 题', '练这一段', '听到这里了', '语言', '外观', '从今天重新排期', '截止日', '加进日历',
    '3 / 11 道做过 · 首次正确率 67%', '比计划慢约 5 小时', '还有 75 天', '还有 6 道没做过', '本节练习 · Project Approaches', '今日最低量 · 5 题', '本站提要 · 20 分钟 · 人员']) {
    assert.doesNotMatch(I.english(zh), han, zh);
  }
  assert.equal(I.english('比计划慢约 5 小时'), 'About 5 h behind plan');
  assert.equal(I.english('本节练习 · Project Approaches'), 'Section practice · Project Approaches');
});

test('English searches find canonical lessons and questions without mutating their IDs or answers', () => {
  const { I, context: c } = load();
  const original = JSON.stringify([c.PMP_QUESTIONS_A, c.PMP_QUESTIONS_B, c.PMP_LESSONS]);
  const q = c.PMP_QUESTIONS_A[0], l = c.PMP_LESSONS[0];
  assert.ok(I.searchText('questions', q.id, q).includes(c.PMP_EN.questions[q.id].stem.toLowerCase()));
  assert.ok(I.searchText('questions', q.id, q).includes(q.stem));
  assert.ok(I.searchText('lessons', l.id, l).includes(c.PMP_EN.lessons[l.id].title.toLowerCase()));
  for (const mode of ['en', 'zh', 'bi']) { I.setMode(mode); I.loadContent(); }
  assert.equal(JSON.stringify([c.PMP_QUESTIONS_A, c.PMP_QUESTIONS_B, c.PMP_LESSONS]), original);
  assert.equal(plain(q).id, 'a001');
});

test('all 200 question displays preserve translated option order and shuffled answer labels in every language', () => {
  const { I, context: c } = load();
  const bank = [...c.PMP_QUESTIONS_A, ...c.PMP_QUESTIONS_B];
  const displayOrder = [2, 0, 3, 1];
  const before = JSON.stringify(bank);
  for (const q of bank) {
    const en = c.PMP_EN.questions[q.id];
    assert.equal(I.english(q.stem), en.stem, `${q.id}: displayed stem`);
    assert.equal(I.english(q.explanation), en.explanation, `${q.id}: displayed reasoning`);
    q.eliminations.forEach((value, i) => assert.equal(I.english(value), en.eliminations[i], `${q.id}: rationale ${i}`));
    for (const [position, canonicalIndex] of displayOrder.entries()) {
      const letter = String.fromCharCode(65 + position);
      const zh = `${letter}. ${q.options[canonicalIndex]}`;
      const expected = `${letter}. ${en.options[canonicalIndex]}`;
      I.setMode('en');
      assert.equal(I.text(zh), expected, `${q.id}: English choice ${letter}`);
      I.setMode('bi');
      assert.equal(I.text(zh), zh === expected ? zh : `${zh}\n${expected}`, `${q.id}: bilingual choice ${letter}`);
      I.setMode('zh');
      assert.equal(I.text(zh), zh, `${q.id}: Chinese choice ${letter}`);
    }
    const correctLetter = String.fromCharCode(65 + displayOrder.indexOf(q.answer));
    const answerLabel = `正确答案：${correctLetter}. ${q.options[q.answer]}`;
    assert.equal(I.english(answerLabel), `Correct answer: ${correctLetter}. ${en.options[q.answer]}`, `${q.id}: correct answer label`);
  }
  assert.equal(JSON.stringify(bank), before, 'language switching must not change canonical answers');
});

test('concatenated start and finish confirmation sentences translate as complete messages', () => {
  const { I } = load('en');
  const cases = [
    [
      '本次为 180 道原创单选题，计时 240 分钟。时间到后自动交卷，离开页面仍继续计时。',
      'This session has 180 original single-answer questions and a 240-minute limit. The timer continues if you leave the page, and submits automatically when it expires.'
    ],
    [
      '本次为 60 道题，计时 80 分钟。时间到后自动交卷，离开页面仍继续计时。',
      'This session has 60 questions and an 80-minute limit. The timer continues if you leave the page, and submits automatically when it expires.'
    ],
    [
      '本组优先使用尚未练习的题目。开始会替换未完成的练习；已经提交的单题学习记录保留。',
      'This set prioritizes questions you have not attempted. Starting replaces the unfinished session. Records for individually submitted answers are kept.'
    ],
    [
      '所有题目均已选择答案。交卷后可查看逐题解析。',
      'You have selected an answer for every question. You can review each explanation after submitting.'
    ]
  ];
  for (const [zh, en] of cases) {
    assert.equal(I.text(zh), en);
    I.setMode('bi');
    assert.equal(I.text(zh), `${zh}\n${en}`);
    I.setMode('en');
  }
  assert.equal(I.english('这是用户输入的未知句子。不要改写它。'), '这是用户输入的未知句子。不要改写它。');
});

test('local-only storage, import and reset messages are translated without promising cloud behavior', () => {
  const { I } = load('en');
  const copy = [
    '学习进度、答题记录和笔记自动保存在当前浏览器。更换设备或浏览器时，可导出备份，再在另一台设备上导入。',
    '导入将替换当前进度，确认前会展示备份摘要。建议定期导出，避免清理浏览器数据后丢失记录。',
    '保留计划设置，清空当前浏览器中的课程、练习与笔记。清空前建议先导出。',
    '将替换当前浏览器中的学习数据。未完成的练习与专注计时不会恢复。',
    '课程进度、答题记录、笔记、时长及未完成练习都会从当前浏览器删除。计划设置保留。此操作无法撤销，建议先导出备份。'
  ];
  for (const zh of copy) {
    const en = I.text(zh);
    assert.doesNotMatch(en, han, zh);
    assert.doesNotMatch(en, /\b(?:cloud|sync|sign in|signed in)\b/i, zh);
    I.setMode('bi');
    assert.equal(I.text(zh), `${zh}\n${en}`);
    I.setMode('en');
  }
});
