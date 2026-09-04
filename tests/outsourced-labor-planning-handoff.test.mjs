import assert from 'node:assert/strict';
import fs from 'node:fs';
import test from 'node:test';

const data = fs.readFileSync('app/data.ts', 'utf8');
const page = fs.readFileSync('app/blog/[slug]/page.tsx', 'utf8');
const start = data.indexOf('"outsourced-labor-planning": {');
const end = data.indexOf('\n  }\n} as const;', start);

test('outsourced labor planning owns its vendor coordination handoff', () => {
  assert.ok(start >= 0 && end > start, 'planning record boundaries must resolve');
  const record = data.slice(start, end);
  assert.match(record, /updated: "2026-09-04"/);
  assert.match(record, /href: "\/services\/vendor-coordination"/);
  assert.match(record, /label: "vendor coordination support"/);
});

test('blog renderer accepts a data-owned service handoff', () => {
  assert.match(page, /serviceHandoff\?: ServiceHandoff/);
  assert.match(page, /\?\.serviceHandoff \|\| serviceHandoffs\[post\.slug\]/);
  assert.match(page, /The manager still owns exceptions and final approval/);
});