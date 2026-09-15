import type { Metadata } from 'next';
import { CTA, Footer, Header, JsonLd } from './components';
import { sep14BlogTopics } from './sep14-records';

const published = '2026-09-14';
const visible = 'Published: September 14, 2026';
const site = 'https://outsourcedlabor.com';

const articles = sep14BlogTopics.map(([slug, title, focus, artifact, fields], index) => ({
  slug,
  title,
  description: `A practical guide to ${focus} in a bounded Philippines-based operations lane.`,
  image: `/sep14-heroes/${slug}`,
  alt: `Illustrated ${artifact} for ${focus}`,
  sections: [
    [`Define the operating question`, `Start the ${artifact} at the exact point where ${focus} affects a decision, handoff, or release. Name the queue, system, and accountable owner. A narrow trigger keeps the record useful and prevents routine preparation from quietly becoming approval authority.`, `Capture ${fields}. Each field must support an action, a review, or recovery of the saved state; remove fields that merely repeat a dashboard without explaining what the specialist should do next.`],
    ['Separate preparation from approval', `Write down what the Filipino operations specialist may verify, draft, or reconcile and what must stop for an owner. The specialist can assemble evidence and identify an exception without approving money, access, policy deviations, staffing changes, or customer commitments.`, `Pair the ordinary path with one consequential edge case. The exception route should identify the approver, evidence required, response window, and safe state while the decision is pending.`],
    ['Anchor every action to an approved source', `Link the current system record, policy, schedule, or approved instruction used for ${focus}. Record its version or retrieval time when it can change. If approved sources conflict, preserve both, pause only the affected action, and ask a question that names the disputed field.`, `Coordination copies should point back to the source of truth. Limit personal or sensitive data to the authorized system and give each worker only the access required for this lane.`],
    ['Test the record with representative cases', `Use an ordinary item, an incomplete item, a conflicting-source item, and a time-sensitive exception. Ask an authorized reviewer who did not prepare the record to resume the work from the ${artifact}; every avoidable question identifies a missing definition, evidence link, or owner.`, `For this guide’s test order ${index + 1}, measure correctness before speed. Record exclusions and failed cases instead of improving the score by silently removing difficult work.`],
    ['Review, close, and improve', `Close the ${artifact} only when the acceptance condition, reviewer, and evidence are visible. If work remains, preserve the current state and name the next owner and check time.`, `Sample completed and waiting records. Repeated issues should produce a specific change to the source, example, permission, or decision boundary, followed by another bounded test—not a vague request to be more careful.`],
  ],
}));

export const sep14BlogArticles = Object.fromEntries(articles.map((article) => [article.slug, article]));

export function getSep14BlogMetadata(slug: string): Metadata {
  const article = sep14BlogArticles[slug];
  const canonical = `${site}/blog/${slug}`;
  return {
    title: article.title,
    description: article.description,
    alternates: { canonical },
    openGraph: {
      title: article.title,
      description: article.description,
      url: canonical,
      type: 'article',
      publishedTime: published,
      images: [{ url: article.image, width: 1200, height: 630, alt: article.alt }],
    },
  };
}

export function renderSep14BlogArticle(slug: string) {
  const article = sep14BlogArticles[slug];
  const canonical = `${site}/blog/${slug}`;
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    datePublished: published,
    dateModified: published,
    mainEntityOfPage: canonical,
    image: `${site}${article.image}`,
    author: { '@type': 'Organization', name: 'Outsourced Labor', url: site },
    publisher: { '@type': 'Organization', name: 'Outsourced Labor', url: site },
  };
  return <><Header /><main className="article-page"><JsonLd data={schema} /><article className="container article-shell"><header className="article-header"><p className="eyebrow">Operations field guide</p><h1>{article.title}</h1><p className="lead">{article.description}</p><div className="article-meta"><span>11 min read</span><time dateTime={published}>{visible}</time></div><img src={article.image} alt={article.alt} width="1200" height="630" /></header><div className="article-body">{article.sections.map(([heading, first, second]: string[]) => <section key={heading}><h2>{heading}</h2><p>{first}</p><p>{second}</p></section>)}</div><section className="source-list"><h2>Operational references</h2><ol><li><a href="https://www.nist.gov/cyberframework">NIST Cybersecurity Framework 2.0</a></li><li><a href="https://www.gao.gov/products/gao-14-704g">GAO Standards for Internal Control</a></li><li><a href="https://www.ilo.org/publications/major-publications/working-home-invisibility-decent-work">ILO guidance on working from home</a></li></ol></section></article><CTA /></main><Footer /></>;
}
