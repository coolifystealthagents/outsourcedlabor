import assert from 'node:assert/strict';
import fs from 'node:fs';
import test from 'node:test';

const data = fs.readFileSync('app/data.ts', 'utf8');
const page = fs.readFileSync('app/blog/[slug]/page.tsx', 'utf8');

test('task queue guide owns a Procurement Follow-Up handoff and a real modified date', () => {
  assert.match(data, /'outsourced-labor-task-queue-design': '2026-09-17'/);
  const start = data.indexOf("'outsourced-labor-task-queue-design': {");
  const end = data.indexOf('\n  },\n};', start);
  assert.ok(start >= 0 && end > start, 'handoff record boundaries must resolve');
  const handoff = data.slice(start, end);
  assert.match(handoff, /href: '\/services\/procurement-follow-up'/);
  assert.match(handoff, /label: 'procurement follow-up support'/);
  assert.match(handoff, /supplier, source record, due date, and decision owner/);
});

test('blog renderer keeps the contextual handoff in the route-local article with owner approval', () => {
  assert.match(page, /const serviceHandoff = .*serviceHandoffs\[post\.slug\]/);
  assert.match(page, /The manager still owns exceptions and final approval/);
});