import { CTA, Footer, Header, JsonLd } from './components';
import { sep1BlogTopics as blogTopics } from './sep1-records';

const date = '2026-09-01';
const visibleDate = 'September 1, 2026';
const site = 'https://outsourcedlabor.com';

const retiredInlineBlogTopics = [
  ['philippines-daily-queue-capacity-check', 'Run a Daily Queue Capacity Check with a Philippines Team', 'queue capacity', 'an opening snapshot of ready work, available coverage, deadlines, and constrained skills'],
  ['outsourced-labor-task-acceptance-criteria', 'Write Task Acceptance Criteria for Outsourced Labor', 'acceptance criteria', 'a short acceptance card with required evidence, finish conditions, and return reasons'],
  ['filipino-specialist-safe-fallback-work', 'Define Safe Fallback Work for a Filipino Specialist', 'fallback work', 'an approved list of useful tasks that require no unresolved decision or expanded access'],
  ['philippines-operations-dependency-map', 'Build a Dependency Map for Philippines Operations', 'dependency mapping', 'a map of inputs, systems, approvals, deadlines, and recovery owners'],
  ['outsourced-labor-queue-aging-review', 'Review Queue Aging in Outsourced Labor Operations', 'queue aging', 'an aging view that separates active work from missing inputs, approvals, and system waits'],
  ['filipino-team-correction-reason-codes', 'Use Correction Reason Codes with a Filipino Team', 'correction reasons', 'a compact vocabulary for source errors, instruction gaps, evidence omissions, and boundary mistakes'],
  ['philippines-remote-coverage-readiness', 'Check Remote Coverage Readiness for a Philippines Team', 'coverage readiness', 'a coverage record naming the work window, backup owner, access, handoff, and escalation route'],
  ['outsourced-labor-review-sample-design', 'Design a Review Sample for Outsourced Labor', 'review sampling', 'a sample plan covering ordinary work, exceptions, returns, and consequential boundaries'],
  ['filipino-specialist-access-request-brief', 'Prepare an Access Request Brief for a Filipino Specialist', 'access requests', 'a request linking each permission to a duty, approver, review date, and removal trigger'],
  ['philippines-operations-change-readiness', 'Assess Change Readiness in Philippines Operations', 'change readiness', 'a change record covering scope, training, access, measurements, review, and rollback'],
  ['outsourced-labor-evidence-retention-routine', 'Set an Evidence Retention Routine for Outsourced Labor', 'evidence retention', 'a routine defining what evidence is retained, where it lives, who may view it, and when it expires'],
  ['filipino-team-next-shift-brief', 'Create a Next-Shift Brief for a Filipino Team', 'shift briefing', 'a concise brief of completed work, active items, waits, risk, next actions, and owner decisions'],
] as const;

function makeBlog([slug, title, focus, artifact]: (typeof blogTopics)[number]) {
  const description = `A practical ${focus} routine for reliable Philippines-based outsourced operations.`;
  const hero = '/filipino-operations-specialist.svg';
  const sections = [
    ['Start with the decision', `Define what the ${focus} record must help an owner decide. Name the trigger, authoritative source, operating window, expected outcome, and reviewer. For this routine, create ${artifact}. A narrow question makes the work inspectable and prevents a coordination note from becoming an unsupported policy.`, `Use current, non-sensitive examples from the actual work lane. Include an ordinary item, an incomplete item, and a case near the authority boundary. Write unknowns as questions and identify the person who can resolve them.`],
    ['Record a usable baseline', `Capture the source identifier, received time, current state, assigned owner, evidence location, due time, and next action. For ${focus}, distinguish work the specialist can progress from work that is waiting for an input or accountable decision.`, `Keep the vocabulary small and observable. Ready means the inputs and finish condition are present. Waiting means the missing dependency and its owner are named. Accepted means a reviewer can see why the output met the agreed check.`],
    ['Keep authority explicit', `A Philippines-based specialist can organize records, check approved sources, prepare drafts, and surface exceptions. The business owner retains policy changes, payments, access expansion, deletion, sensitive customer promises, and other consequential decisions.`, `Place the stop rule beside the risky step. An escalation should carry the record, verified facts, attempted checks, consequence, unresolved question, and requested decision. Lack of a response does not grant authority.`],
    ['Review normal work and exceptions', `Sample ordinary outputs and exceptions separately because they reveal different weaknesses. Check source use, completeness, allowed action, evidence, classification, and the clarity of the next owner. Review waiting reasons as well as elapsed time.`, `Repeated corrections may point to a stale example, ambiguous brief, missing permission, or conflicting system source. Preserve the correction reason before changing training or judging performance.`],
    ['Pilot the routine', `Run the ${focus} routine on one bounded queue for a stated period. Agree on acceptance checks before starting, review a representative sample, and note where a second authorized reviewer reaches a different conclusion.`, `Revise definitions with a dated reason and owner. Keep superseded instructions identifiable. Expand only when the record remains useful across routine items, exceptions, and a real handoff.`],
    ['Close with a reproducible handoff', `The closing record should state what changed, what evidence supports it, what remains unresolved, who owns the next action, and when review is due. A receiver should be able to accept, return, or escalate the work without reconstructing private messages.`, `For Outsourced Labor, disciplined ${focus} supports daily continuity without shifting accountable decisions to the contributor. Recheck the routine whenever tools, volume, access, or service commitments change.`],
  ];
  return { slug, title, focus, description, hero, sections };
}

export const sep1BlogArticles = Object.fromEntries(blogTopics.map((topic) => { const article = makeBlog(topic); return [article.slug, article]; }));

export function getSep1BlogMetadata(slug: string) {
  const article = sep1BlogArticles[slug];
  const canonical = `${site}/blog/${slug}`;
  return { title: article.title, description: article.description, alternates: { canonical }, openGraph: { title: article.title, description: article.description, url: canonical, type: 'article', publishedTime: date, images: [article.hero] } };
}

export function renderSep1BlogArticle(slug: string) {
  const article = sep1BlogArticles[slug];
  const canonical = `${site}/blog/${slug}`;
  const schema = { '@context': 'https://schema.org', '@type': 'Article', headline: article.title, description: article.description, datePublished: date, dateModified: date, mainEntityOfPage: canonical, image: `${site}${article.hero}`, author: { '@type': 'Organization', name: 'Outsourced Labor' }, publisher: { '@type': 'Organization', name: 'Outsourced Labor' } };
  return <><Header /><main className="article-page"><JsonLd data={schema} /><article className="container article-shell"><header className="article-header"><p className="eyebrow">Daily operations guide</p><h1>{article.title}</h1><p className="lead">{article.description}</p><div className="article-meta"><span>11 min read</span><time dateTime={date}>{visibleDate}</time></div><img src={article.hero} alt={`${article.focus} operations illustration`} width="1200" height="630" /></header><div className="article-body">{article.sections.map(([heading, first, second]: string[]) => <section key={heading}><h2>{heading}</h2><p>{first}</p><p>{second}</p></section>)}</div><section className="source-list"><h2>Planning references</h2><ol><li><a href="https://www.nist.gov/cyberframework">NIST Cybersecurity Framework 2.0</a></li><li><a href="https://www.sba.gov/business-guide/manage-your-business/hire-and-manage-employees">U.S. SBA: Hire and Manage Employees</a></li></ol></section></article><CTA /></main><Footer /></>;
}

const retiredResearchTopics = [
  ['research-philippines-queue-aging-evidence', 'Research: Queue Aging Evidence in Philippines Operations', 'queue aging evidence', 'state timestamps, wait reasons, dependency owners, and review outcomes'],
  ['research-outsourced-labor-acceptance-consistency', 'Research: Acceptance Consistency in Outsourced Labor', 'acceptance consistency', 'finish conditions, reviewer agreement, return reasons, and corrected outputs'],
  ['research-filipino-specialist-fallback-work-controls', 'Research: Fallback Work Controls for Filipino Specialists', 'fallback work controls', 'approved task classes, prerequisite checks, authority limits, and interruption rules'],
  ['research-philippines-operations-change-recovery', 'Research: Change Recovery in Philippines-Based Operations', 'change recovery', 'change records, training evidence, exception patterns, rollback signals, and restored service state'],
  ['research-outsourced-labor-review-sample-coverage', 'Research: Review Sample Coverage in Outsourced Labor', 'review sample coverage', 'ordinary items, exceptions, consequential boundaries, return patterns, and reviewer agreement'],
] as const;

const retiredResearchPosts = retiredResearchTopics.map(([slug, title, topic, dimensions], index) => ({
  slug, title, excerpt: `A documentary framework for examining ${topic} in distributed operations.`, published: date, image: '/filipino-operations-specialist.svg',
  headlineStat: undefined, keyStats: undefined, takeaways: undefined, service: undefined, faqs: undefined,
  body: [
    `This research note examines ${topic} in recurring work performed by Philippines-based specialists. The operating question is whether retained evidence supports a consistent management review; it does not assume that a location, staffing model, or tool produces a universal result.`,
    `Use a bounded documentary review and define ${dimensions} before selecting records. Include ordinary work, incomplete inputs, source conflicts, returned items, and cases that reached an authority boundary. Preserve the sampling dates and exclusions.`,
    `Separate facts copied from authoritative sources, actions taken by a contributor, decisions made by an accountable owner, and outcomes observed later. This separation helps a second reviewer reproduce the record without treating a status label as proof.`,
    `For ${topic}, assess source authority, freshness, completeness, traceability, allowed action, and reviewer agreement. Missing identifiers, unexplained waits, inconsistent classifications, and corrections tied to old guidance are useful process signals.`,
    `Timing requires context. A longer cycle can reflect a correct pause for an owner decision, while a short cycle can conceal skipped checks. Compare active time, wait reason, evidence completeness, and review outcome instead of publishing an unsupported productivity benchmark.`,
    `Governance should identify owners for the workflow, source systems, access, review samples, instruction changes, and accepted exceptions. Specialists may prepare and check records; owners retain decisions involving policy, money, access, deletion, and sensitive commitments.`,
    `Begin with a baseline sample and an independent second review. Record agreement, return reasons, missing evidence, wait ownership, and review effort. Revise the operational definition, repeat the sample, and retain the reason for each approved change.`,
    `The method cannot establish causation or generalize across companies, contracts, workloads, systems, or jurisdictions. Privacy, security, legal, employment, and finance questions require the authorized specialists responsible for those domains.`,
    `The practical conclusion is that ${topic} becomes reviewable when ${dimensions} are defined before work is scored. Use the evidence to make a dated decision to keep, narrow, revise, or stop the routine.`,
  ],
  sources: [{ name: 'NIST Cybersecurity Framework 2.0', url: 'https://www.nist.gov/cyberframework' }, { name: 'GAO Standards for Internal Control', url: 'https://www.gao.gov/products/gao-14-704g' }, { name: 'CISA Identity and Access Management', url: 'https://www.cisa.gov/topics/cyber-threats-and-advisories/identity-and-access-management' }],
  related: retiredResearchTopics.filter((_, relatedIndex) => relatedIndex !== index).slice(0, 3).map((item) => item[0]),
  cta: 'Define one evidence question, review a bounded sample, and keep accountable decisions with the owner.',
}));
