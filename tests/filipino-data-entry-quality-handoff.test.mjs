import assert from 'node:assert/strict';
import fs from 'node:fs';
import test from 'node:test';

const data = fs.readFileSync('app/data.ts', 'utf8');
const page = fs.readFileSync('app/blog/[slug]/page.tsx', 'utf8');

test('data entry quality checks own an inventory administration handoff', () => {
  assert.match(data, /'filipino-data-entry-quality-checks': '2026-09-13'/);
  const start = data.indexOf("'filipino-data-entry-quality-checks': {");
  const end = data.indexOf('\n  },\n};', start);
  assert.ok(start >= 0 && end > start, 'handoff record boundaries must resolve');
  const handoff = data.slice(start, end);
  assert.match(handoff, /href: '\/services\/inventory-administration'/);
  assert.match(handoff, /label: 'inventory administration support'/);
  assert.match(handoff, /record checks, source notes, and exception list/);
});

test('blog renderer keeps the manager approval boundary beside a data-owned handoff', () => {
  assert.match(page, /serviceHandoff\?: ServiceHandoff/);
  assert.match(page, /The manager still owns exceptions and final approval/);
});