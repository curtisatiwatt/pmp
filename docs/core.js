(function(root){
  'use strict';
  const DAY=86400000;
  const localDate=(d=new Date())=>`${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
  const parseDate=s=>new Date(`${s}T12:00:00`);
  const addDays=(s,n)=>{const d=parseDate(s);d.setDate(d.getDate()+n);return localDate(d)};
  const dayDiff=(a,b)=>Math.round((parseDate(a)-parseDate(b))/DAY);
  const weeksFor=hours=>Math.max(8,Math.ceil(108/Math.max(3,Number(hours)||9)));
  const targetDate=plan=>addDays(plan.start,weeksFor(plan.hours)*7-1);
  const shuffle=items=>{const a=[...items];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a};
  function selectQuestions(bank,count,attempts=[],domain='all'){
    const seen=new Set(attempts.map(a=>a.qid));
    const pool=bank.filter(q=>domain==='all'||q.domain===domain);
    const prioritize=arr=>[...shuffle(arr.filter(q=>!seen.has(q.id))),...shuffle(arr.filter(q=>seen.has(q.id)))];
    if(domain!=='all')return prioritize(pool).slice(0,count);
    const allocations={people:Math.round(count*.33),process:Math.round(count*.41)};
    allocations.business=count-allocations.people-allocations.process;
    const chosen=Object.entries(allocations).flatMap(([key,n])=>prioritize(pool.filter(q=>q.domain===key)).slice(0,n));
    const ids=new Set(chosen.map(q=>q.id));
    if(chosen.length<count)chosen.push(...prioritize(pool.filter(q=>!ids.has(q.id))).slice(0,count-chosen.length));
    return shuffle(chosen);
  }
  function stats(attempts,bank){
    const first=new Map();for(const a of attempts){if(!first.has(a.qid))first.set(a.qid,a)}
    const rows=[...first.values()];const byId=new Map(bank.map(q=>[q.id,q]));
    const measure=xs=>({count:xs.length,correct:xs.filter(x=>x.correct).length,accuracy:xs.length?Math.round(xs.filter(x=>x.correct).length/xs.length*100):null});
    return {...measure(rows),totalAttempts:attempts.length,domains:Object.fromEntries(['people','process','business'].map(d=>[d,measure(rows.filter(a=>byId.get(a.qid)?.domain===d))]))};
  }
  function nextReview(previous,correct,date=localDate()){
    const streak=correct?Math.min((previous?.streak||0)+1,5):0;
    return {streak,due:addDays(date,correct?[1,3,7,14,30][streak-1]:1),everWrong:!correct||!!previous?.everWrong,lastCorrect:correct};
  }
  const scoreSession=(session,bank)=>{
    const map=new Map(bank.map(q=>[q.id,q]));let correct=0;
    for(const id of session.ids)if(session.answers[id]===map.get(id)?.answer)correct++;
    return {correct,total:session.ids.length,answered:Object.keys(session.answers).length,percent:Math.round(correct/session.ids.length*100)};
  };
  const validDate=s=>typeof s==='string'&&/^\d{4}-\d{2}-\d{2}$/.test(s)&&Number.isFinite(parseDate(s).getTime())&&localDate(parseDate(s))===s;
  const plain=x=>!!x&&typeof x==='object'&&!Array.isArray(x);
  function validSession(s,bank){
    const ids=new Set(bank.map(q=>q.id));
    if(!plain(s)||typeof s.id!=='string'||!/^[\w-]+$/.test(s.id)||typeof s.label!=='string'||typeof s.mode!=='string'||typeof s.instant!=='boolean'||!Array.isArray(s.ids)||!s.ids.length||new Set(s.ids).size!==s.ids.length||!s.ids.every(id=>ids.has(id))||!Number.isInteger(s.index)||s.index<0||s.index>=s.ids.length)return false;
    if(!plain(s.answers)||!Object.entries(s.answers).every(([id,a])=>s.ids.includes(id)&&Number.isInteger(a)&&a>=0&&a<4))return false;
    if(![s.submitted,s.recorded].every(v=>plain(v)&&Object.entries(v).every(([id,b])=>s.ids.includes(id)&&typeof b==='boolean'&&(!b||s.answers[id]!==undefined))))return false;
    if(s.instant&&Object.entries(s.recorded).some(([id,b])=>b&&!s.submitted[id]))return false;
    if(!Array.isArray(s.flags)||!s.flags.every(id=>s.ids.includes(id))||!Number.isFinite(s.startedAt)||(s.deadline!==null&&!Number.isFinite(s.deadline)))return false;
    return !s.order||(plain(s.order)&&Object.entries(s.order).every(([id,v])=>s.ids.includes(id)&&Array.isArray(v)&&v.length===4&&new Set(v).size===4&&v.every(n=>Number.isInteger(n)&&n>=0&&n<4)));
  }
  function validBackup(x,bank,lessons){
    if(!x||x.schema!==1||!x.plan||!/^\d{4}-\d{2}-\d{2}$/.test(x.plan.start)||!Number.isFinite(parseDate(x.plan.start).getTime())||localDate(parseDate(x.plan.start))!==x.plan.start||!Number.isFinite(x.plan.hours)||x.plan.hours<3||x.plan.hours>20)return false;
    if(typeof x.plan.name!=='string'||x.plan.name.length>30||!['global','china'].includes(x.plan.region))return false;
    if(!Array.isArray(x.attempts)||!Array.isArray(x.completed)||!Array.isArray(x.history)||!Array.isArray(x.logs)||!Array.isArray(x.bookmarks)||!Array.isArray(x.checklist))return false;
    const ids=new Set(bank.map(q=>q.id)),lids=new Set(lessons.map(l=>l.id));
    if(new Set(x.completed).size!==x.completed.length||!x.completed.every(id=>lids.has(id))||!x.bookmarks.every(id=>ids.has(id)))return false;
    if(!x.attempts.every(a=>a&&ids.has(a.qid)&&Number.isInteger(a.answer)&&a.answer>=0&&a.answer<4&&typeof a.correct==='boolean'&&Number.isFinite(a.time)))return false;
    if(!x.logs.every(l=>l&&validDate(l.date)&&Number.isFinite(l.minutes)&&l.minutes>0&&l.minutes<=1440))return false;
    if(!x.notes||typeof x.notes!=='object'||Array.isArray(x.notes)||!Object.values(x.notes).every(n=>typeof n==='string'&&n.length<=20000))return false;
    if(!x.review||typeof x.review!=='object'||Array.isArray(x.review))return false;
    if(!Object.entries(x.review).every(([id,r])=>ids.has(id)&&r&&Number.isInteger(r.streak)&&r.streak>=0&&r.streak<=5&&validDate(r.due)&&typeof r.everWrong==='boolean'&&typeof r.lastCorrect==='boolean'))return false;
    if(!x.history.every(h=>h&&typeof h.id==='string'&&/^[\w-]+$/.test(h.id)&&typeof h.label==='string'&&Array.isArray(h.ids)&&h.ids.length>0&&new Set(h.ids).size===h.ids.length&&h.ids.every(id=>ids.has(id))&&plain(h.answers)&&Object.entries(h.answers).every(([id,a])=>h.ids.includes(id)&&Number.isInteger(a)&&a>=0&&a<4)&&Number.isFinite(h.finishedAt)&&Number.isFinite(h.startedAt)&&typeof h.mode==='string'))return false;
    // The course unit the learner has reached. Optional: backups made before that existed have none.
    if(x.unit!==undefined&&!(typeof x.unit==='string'&&/^u\d{2}[a-z]?$/.test(x.unit)))return false;
    return x.checklist.every(v=>typeof v==='string');
  }
  const api={localDate,addDays,dayDiff,weeksFor,targetDate,shuffle,selectQuestions,stats,nextReview,scoreSession,validBackup,validSession};
  root.PMPCore=api;if(typeof module!=='undefined')module.exports=api;
})(typeof window!=='undefined'?window:globalThis);
