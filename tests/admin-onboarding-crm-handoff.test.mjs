import assert from 'node:assert/strict';
import fs from 'node:fs';
import test from 'node:test';

const data = fs.readFileSync('app/data.ts', 'utf8');
const page = fs.readFileSync('app/blog/[slug]/page.tsx', 'utf8');

test('admin onboarding owns a CRM data stewardship handoff', () => {
  assert.match(data, /'philippines-admin-assistant-onboarding': '2026-09-15'/);
  const start = data.indexOf("'philippines-admin-assistant-onboarding': {");
  const end = data.indexOf('\n  },\n};', start);
  assert.ok(start >= 0 && end > start, 'handoff record boundaries must resolve');
  const handoff = data.slice(start, end);
  assert.match(handoff, /href: '\/services\/crm-data-stewardship'/);
  assert.match(handoff, /label: 'CRM data stewardship support'/);
  assert.match(handoff, /access list, approved examples, and review rule/);
});

test('blog renderer keeps the owner boundary and record-level modified time', () => {
  assert.match(page, /serviceHandoff\?: ServiceHandoff/);
  assert.match(page, /The manager still owns exceptions and final approval/);
  assert.match(page, /modifiedTime: detail\?\.updated/);
});
