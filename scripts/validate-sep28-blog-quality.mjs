import assert from 'node:assert/strict';
import fs from 'node:fs';

const statePath = '.paperclip/daily-content/2026-09-28/blog-run-state.json';
const contentPath = 'app/sep28-content.tsx';
const state = JSON.parse(fs.readFileSync(statePath, 'utf8'));
const normalize = (value) => value.toLowerCase().replace(/[^a-z0-9\s]/g, ' ').replace(/\s+/g, ' ').trim();
const shingles = (value, size = 5) => {
  const words = normalize(value).split(' ').filter(Boolean);
  return new Set(words.slice(0, Math.max(0, words.length - size + 1)).map((_, index) => words.slice(index, index + size).join(' ')));
};
const jaccard = (left, right) => {
  const intersection = [...left].filter((item) => right.has(item)).length;
  const union = new Set([...left, ...right]).size;
  return union ? intersection / union : 0;
};

assert.equal(state.family, 'blog');
assert.equal(state.requiredCount, 12);
assert.equal(state.topics.length, 12);
assert.equal(new Set(state.topics.map(({slug}) => slug)).size, 12);
assert.equal(state.publicationDate, null, 'Publication date must remain unset until the first public verification date is known');

if (!fs.existsSync(contentPath)) {
  console.log('INCOMPLETE: inventory is valid; app/sep28-content.tsx has not been drafted yet');
  process.exitCode = 2;
} else {
  const moduleText = fs.readFileSync(contentPath, 'utf8');
  const bodies = state.topics.map(({slug}) => {
    const start = moduleText.indexOf(`slug: '${slug}'`);
    assert.notEqual(start, -1, `Missing article body for ${slug}`);
    const next = moduleText.indexOf("slug: '", start + 8);
    return moduleText.slice(start, next === -1 ? moduleText.length : next);
  });
  const counts = bodies.map((body) => normalize(body).split(' ').filter(Boolean).length);
  counts.forEach((count, index) => assert.ok(count >= 900, `${state.topics[index].slug}: ${count} body words; requires 900`));
  let maximum = {score: 0, pair: []};
  const sets = bodies.map((body) => shingles(body));
  for (let left = 0; left < sets.length; left += 1) {
    for (let right = left + 1; right < sets.length; right += 1) {
      const score = jaccard(sets[left], sets[right]);
      if (score > maximum.score) maximum = {score, pair: [state.topics[left].slug, state.topics[right].slug]};
    }
  }
  assert.ok(maximum.score < 0.5, `Maximum five-word-shingle Jaccard is ${maximum.score.toFixed(4)} for ${maximum.pair.join(' / ')}`);
  console.log(JSON.stringify({family: 'blog', counts, maximumPairwiseFiveWordShingleJaccard: maximum}, null, 2));
}
