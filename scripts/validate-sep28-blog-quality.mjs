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
assert.equal(state.publicationDate, '2026-09-28', 'Release date must match the actual UTC push/deployment date');

if (!fs.existsSync(contentPath)) {
  console.log('INCOMPLETE: inventory is valid; app/sep28-content.tsx has not been drafted yet');
  process.exitCode = 2;
} else {
  const moduleText = fs.readFileSync(contentPath, 'utf8');
  const present = state.topics.filter(({slug}) => moduleText.includes(`slug: '${slug}'`));
  const missing = state.topics.filter(({slug}) => !moduleText.includes(`slug: '${slug}'`)).map(({slug}) => slug);
  const bodies = present.map(({slug}) => {
    const start = moduleText.indexOf(`slug: '${slug}'`);
    const next = moduleText.indexOf("slug: '", start + 8);
    const articleSource = moduleText.slice(start, next === -1 ? moduleText.length : next);
    return [...articleSource.matchAll(/body:\s*`([\s\S]*?)`/g)].map((match) => match[1]).join('\n');
  });
  const counts = bodies.map((body) => normalize(body).split(' ').filter(Boolean).length);
  const shallow = counts.map((count, index) => ({slug: present[index].slug, count})).filter(({count}) => count < 900);
  let maximum = {score: 0, pair: []};
  const sets = bodies.map((body) => shingles(body));
  for (let left = 0; left < sets.length; left += 1) {
    for (let right = left + 1; right < sets.length; right += 1) {
      const score = jaccard(sets[left], sets[right]);
      if (score > maximum.score) maximum = {score, pair: [present[left].slug, present[right].slug]};
    }
  }
  assert.ok(maximum.score < 0.5, `Maximum five-word-shingle Jaccard is ${maximum.score.toFixed(4)} for ${maximum.pair.join(' / ')}`);
  console.log(JSON.stringify({family: 'blog', drafted: present.map(({slug}, index) => ({slug, bodyWords: counts[index]})), missing, maximumPairwiseFiveWordShingleJaccard: maximum}, null, 2));
  assert.equal(shallow.length, 0, `Body-depth failures: ${shallow.map(({slug, count}) => `${slug}=${count}`).join(', ')}`);
  if (missing.length) {
    console.log(`INCOMPLETE: ${present.length}/12 substantive Blog drafts present`);
    process.exitCode = 2;
  }
}
