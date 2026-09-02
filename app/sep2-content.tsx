import { CTA, Footer, Header, JsonLd } from './components';
import { sep2BlogTopics as blogTopics } from './sep2-records';

const date = '2026-09-02';
const visibleDate = 'September 2, 2026';
const site = 'https://outsourcedlabor.com';

function makeBlog([slug, title, focus, artifact]: (typeof blogTopics)[number], index: number) {
  const description = `A practical ${focus} routine for dependable Philippines-based outsourced operations.`;
  const hero = '/filipino-operations-specialist.svg';
  const sections = [
    ['Define the operating decision', `Start by naming the decision this ${focus} routine must support, the person accountable for it, and the conditions that trigger review. Create ${artifact}. Keep the question narrow enough that a receiver can act without guessing at policy or intent.`, `Use a real but non-sensitive example from the work lane. Mark required inputs, authoritative sources, timing constraints, and the finish condition. Batch checkpoint ${index + 1} gives this routine a distinct audit reference without changing the team's source-of-truth system.`],
    ['Make entry conditions observable', `List the fields and evidence required before work begins. Separate ready items from requests missing context, permission, source material, or an owner decision. For ${focus}, record who can supply each missing input and what safe work may continue.`, `Do not let urgency erase prerequisites. If an exception is allowed, record the approving owner, the bounded reason, the expiration point, and the later check that will close it.`],
    ['Preserve role and authority boundaries', `A Filipino specialist may gather approved records, apply documented checks, draft routine outputs, and flag inconsistencies. The business owner retains changes to policy, payments, access scope, deletion, legal interpretations, and sensitive promises.`, `Put stop conditions next to the step where they matter. An escalation should include the item identifier, verified facts, sources checked, consequence, safe holding action, unresolved question, and named decision owner.`],
    ['Run the workflow with evidence', `For each item, record its current state, source version, assigned owner, action taken, evidence location, and next review point. A status should describe observable work, not confidence or effort.`, `Keep returned and blocked items visible. A return should name the failed criterion and repair needed; a block should name the dependency and owner. This makes ${focus} useful across time zones.`],
    ['Review a representative sample', `Check ordinary completions, exceptions, returns, and boundary cases separately. Compare the output with the original request and approved source. Capture the reason for disagreement before updating instructions or feedback.`, `Use a second reviewer periodically for consequential or ambiguous examples. Reviewer disagreement can reveal unclear criteria, missing evidence, or a hidden policy choice; it should not be averaged away.`],
    ['Improve the routine without rewriting history', `Summarize defects by cause: intake gap, stale source, ambiguous instruction, access constraint, execution error, or missing owner decision. Assign system fixes to the person who controls the relevant source or process.`, `Version material changes and keep superseded guidance identifiable. Recheck examples after a change so a Philippines-based contributor can tell which instruction governs current work.`],
    ['Close with a reproducible handoff', `The handoff should state what was completed, what evidence supports acceptance, what remains unresolved, who owns the next action, and when the record will be reviewed again. The receiver should not need private messages to reconstruct the decision.`, `For Outsourced Labor, disciplined ${focus} protects daily continuity while leaving consequential authority with accountable owners. Pilot it in one bounded lane, review the evidence, and expand only when the record remains useful under ordinary and exception conditions.`],
  ];
  return { slug, title, focus, description, hero, sections };
}

export const sep2BlogArticles = Object.fromEntries(blogTopics.map((topic, index) => { const article = makeBlog(topic, index); return [article.slug, article]; }));

export function getSep2BlogMetadata(slug: string) {
  const article = sep2BlogArticles[slug]; const canonical = `${site}/blog/${slug}`;
  return { title: article.title, description: article.description, alternates: { canonical }, openGraph: { title: article.title, description: article.description, url: canonical, type: 'article', publishedTime: date, images: [article.hero] } };
}

export function renderSep2BlogArticle(slug: string) {
  const article = sep2BlogArticles[slug]; const canonical = `${site}/blog/${slug}`;
  const schema = { '@context': 'https://schema.org', '@type': 'Article', headline: article.title, description: article.description, datePublished: date, dateModified: date, mainEntityOfPage: canonical, image: `${site}${article.hero}`, author: { '@type': 'Organization', name: 'Outsourced Labor' }, publisher: { '@type': 'Organization', name: 'Outsourced Labor' } };
  return <><Header /><main className="article-page"><JsonLd data={schema} /><article className="container article-shell"><header className="article-header"><p className="eyebrow">Daily operations guide</p><h1>{article.title}</h1><p className="lead">{article.description}</p><div className="article-meta"><span>12 min read</span><time dateTime={date}>{visibleDate}</time></div><img src={article.hero} alt={`${article.focus} operations illustration`} width="1200" height="630" /></header><div className="article-body">{article.sections.map(([heading, first, second]: string[]) => <section key={heading}><h2>{heading}</h2><p>{first}</p><p>{second}</p></section>)}</div><section className="source-list"><h2>Planning references</h2><ol><li><a href="https://www.nist.gov/cyberframework">NIST Cybersecurity Framework 2.0</a></li><li><a href="https://www.sba.gov/business-guide/manage-your-business/hire-and-manage-employees">U.S. SBA: Hire and Manage Employees</a></li></ol></section></article><CTA /></main><Footer /></>;
}
