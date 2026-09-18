import assert from 'node:assert/strict';
import fs from 'node:fs';
import test from 'node:test';

const data = fs.readFileSync('app/data.ts', 'utf8');
const page = fs.readFileSync('app/blog/[slug]/page.tsx', 'utf8');

test('quality scorecard guide owns a Quality Audit Support handoff and a real modified date', () => {
  assert.match(data, /'outsourced-labor-quality-scorecard': '2026-09-18'/);
  assert.match(data, /'outsourced-labor-quality-scorecard': '2026-08-07'/);
  const start = data.indexOf("'outsourced-labor-quality-scorecard': {");
  const end = data.indexOf('\n  },\n};', start);
  assert.ok(start >= 0 && end > start, 'handoff record boundaries must resolve');
  const handoff = data.slice(start, end);
  assert.match(handoff, /href: '\/services\/quality-audit-support'/);
  assert.match(handoff, /label: 'quality audit support'/);
  assert.match(handoff, /sample, source fields, correction owner, and review rule/);
});

test('blog renderer keeps the contextual handoff in the route-local article with owner approval', () => {
  assert.match(page, /const serviceHandoff = .*serviceHandoffs\[post\.slug\]/);
  assert.match(page, /datePublished: datedDetail\?\.published \|\| detail\.updated/);
  assert.match(page, /The manager still owns exceptions and final approval/);
});