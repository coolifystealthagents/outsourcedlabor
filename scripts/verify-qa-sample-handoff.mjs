import fs from 'node:fs';

const record = fs.readFileSync('app/research/oct2-research-records.ts', 'utf8');
const renderer = fs.readFileSync('app/research/[slug]/page.tsx', 'utf8');
const start = record.indexOf("slug:'research-outsourced-qa-sample-size-decision'");
const end = record.indexOf("\n}),", start);

if (start < 0 || end < start) throw new Error('QA sample research record was not found.');
const selected = record.slice(start, end);
const serviceStart = selected.indexOf('service:{');
const serviceEnd = selected.indexOf('},\n body:', serviceStart);
if (serviceStart < 0 || serviceEnd < serviceStart) throw new Error('QA sample service handoff was not found.');
const handoff = selected.slice(serviceStart, serviceEnd + 1);
if (!selected.includes("updated:'2026-10-05'")) throw new Error('QA sample handoff is missing its updated date.');
for (const required of [
  "service:{heading:'Turn the sampling charter into a review lane'",
  "href:'/services/quality-audit-support'",
  "label:'Review Quality Audit Support'",
  'Your manager still decides the review boundary, corrective action, and any change to the work lane.',
]) {
  if (!handoff.includes(required)) throw new Error(`QA sample handoff missing: ${required}`);
}
for (const retired of ['guarantee', 'approve the work lane', 'decides whether the sample is correct']) {
  if (handoff.includes(retired)) throw new Error(`QA sample handoff contains unsafe wording: ${retired}`);
}
for (const required of [
  "const updated = 'updated' in post",
  'post.service',
  'href={post.service.href}',
  'modifiedTime:',
  'dateModified:',
  'article:modified_time',
]) {
  if (!renderer.includes(required)) throw new Error(`Research renderer is missing the QA sample handoff contract: ${required}`);
}
console.log('PASS: QA sample research record has the bounded Quality Audit Support handoff.');