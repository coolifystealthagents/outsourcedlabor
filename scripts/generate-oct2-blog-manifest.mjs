import crypto from 'node:crypto';
import fs from 'node:fs';

const source = fs.readFileSync('app/oct2-content.tsx', 'utf8');
const state = JSON.parse(fs.readFileSync('.paperclip/daily-content/2026-10-02/blog-run-state.json', 'utf8'));
const entries = state.topics.map(({slug, pillar}) => {
  const start = source.indexOf(`slug: '${slug}'`);
  const next = source.indexOf("slug: '", start + 8);
  const article = source.slice(start, next === -1 ? source.indexOf('}] as const;', start) : next);
  const title = article.match(/title:\s*'([^']+)'/)?.[1];
  const bodies = [...article.matchAll(/body:\s*`([\s\S]*?)`/g)].map((match) => match[1]);
  const sources = [...article.matchAll(/https:\/\/[^'\]]+/g)].map((match) => match[0]);
  const contentHash = crypto.createHash('sha256').update(bodies.join('\n\n')).digest('hex');
  return {family:'blog',topic:pillar,slug,title,sources,contentHash,bodyWords:bodies.join(' ').replace(/[^A-Za-z0-9'’ -]/g,' ').split(/\s+/).filter(Boolean).length,publicationDate:'2026-10-02',commitSha:null,deploymentEvidence:null,liveUrl:`https://outsourcedlabor.com/blog/${slug}`,verifiedAt:null};
});
const manifest = {schemaVersion:1,family:'blog',cycleLabel:'2026-10-02',repository:'coolifystealthagents/outsourcedlabor',productionBranch:'main',timezone:'UTC',requiredCount:12,publicationDate:'2026-10-02',contentCommit:null,deploymentCommit:null,deploymentEvidence:null,verifiedCount:0,entries};
fs.mkdirSync('.paperclip/2026-10-02',{recursive:true});
fs.writeFileSync('.paperclip/2026-10-02/blog.json',`${JSON.stringify(manifest,null,2)}\n`);
