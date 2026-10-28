import { notFound } from 'next/navigation';
import Oct22Toc from '../../oct22-toc';
import { Footer, Header } from '../../components';
import { site } from '../../data';
import { researchPosts } from '../../fleet-content';
const allResearchPosts=researchPosts;

const formatPublicDate = (date: string) => new Intl.DateTimeFormat('en-US', {
  month: 'long',
  day: 'numeric',
  year: 'numeric',
  timeZone: 'UTC',
}).format(new Date(`${date}T00:00:00Z`));

const hasSourceDetails = (source: { name: string; url: string }): source is typeof source & { publisher: string; checked: string } =>
  'publisher' in source && 'checked' in source;

export function generateStaticParams() {
  return allResearchPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = allResearchPosts.find((item) => item.slug === slug);
  const updated = post && 'updated' in post && typeof post.updated === 'string' ? post.updated : post?.published;

  return post ? {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/research/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.published,
      modifiedTime: post.published === '2026-10-06' ? undefined : updated,
      url: `/research/${post.slug}`,
      images: post.image ? [post.image] : undefined,
    },
  } : undefined;
}

export default async function ResearchArticle({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = allResearchPosts.find((item) => item.slug === slug);
  if (!post) notFound();

  const baseUrl = `https://${site.domain.toLowerCase()}`;
  const canonical = `${baseUrl}/research/${post.slug}`;
  const validResearchSlugs = new Set(allResearchPosts.map((item) => item.slug));
  const relatedResearch = (post.related || []).filter((related) => related !== post.slug && validResearchSlugs.has(related)).slice(0, 3);
  const fallbackResearch = allResearchPosts.find((item) => item.slug !== post.slug)?.slug;
  const organization = { '@type': 'Organization', name: site.brand, url: baseUrl };
  const updated = 'updated' in post && typeof post.updated === 'string' ? post.updated : post.published;
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.published,
    dateModified: post.published === '2026-10-06' ? undefined : updated,
    mainEntityOfPage: canonical,
    author: organization,
    publisher: organization,
    image: post.image ? `${baseUrl}${post.image}` : undefined,
  };

  return <>
    <Header />
    <main id="main-content" className="fleet-main">
      <article className="section article-shell">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <meta property="article:published_time" content={post.published} />
        <meta property="article:modified_time" content={updated} />
        <p className="eyebrow">Philippines staffing research · Published {formatPublicDate(post.published)}</p>
        <h1>{post.title}</h1>
        <p className="lead">{post.excerpt}</p><p className="article-date"><time dateTime={post.published}>Published {formatPublicDate(post.published)}</time></p>
        {post.image && <img src={post.image} alt={`${post.title} research illustration`} width="1200" height="630" />}
        <Oct22Toc /><details className="o22-mobile"><summary>On this page</summary><nav aria-label="Table of contents mobile">{post.body.map((paragraph, index) => paragraph.startsWith("## ") ? <a key={index} href={`#section-${index}`}>{paragraph.replace("## ","")}</a> : null)}</nav></details><nav className="o22-aside" aria-label="Table of contents">{post.body.map((paragraph, index) => paragraph.startsWith("## ") ? <a key={index} href={`#section-${index}`}>{paragraph.replace("## ","")}</a> : null)}</nav><div className="article-body">{post.body.map((paragraph, index) => paragraph.startsWith("## ") ? <h2 key={index} id={`section-${index}`}>{paragraph.replace("## ","")}</h2> : <p key={index}>{paragraph}</p>)}</div>
        {post.headlineStat && <><h2>Key statistic</h2><p>{post.headlineStat}</p></>}
        {post.keyStats && <><h2>Key stats</h2><ul>{post.keyStats.map((stat) => <li key={stat}>{stat}</li>)}</ul></>}
        {post.takeaways && <><h2>Key takeaways</h2><ul>{post.takeaways.map((takeaway) => <li key={takeaway}>{takeaway}</li>)}</ul></>}
        {'service' in post && post.service ? <aside className="card"><h2>{post.service.heading}</h2><p>{post.service.body}</p><a className="btn primary" href={post.service.href}>{post.service.label}</a></aside> : null}
        {post.faqs && <><h2>FAQs</h2>{post.faqs.map((faq) => <section key={faq.q}><h3>{faq.q}</h3><p>{faq.a}</p></section>)}</>}
        <h2>Sources</h2>
        <ol>{(post.sources || []).map((source) => <li key={source.url}><a href={source.url} target="_blank" rel="noreferrer">{source.name}</a>{hasSourceDetails(source) ? ` — ${source.publisher}; checked ${source.checked}` : ''}</li>)}</ol>
        <h2>Related research</h2>
        <ul>{relatedResearch.map((related) => <li key={related}><a href={`/research/${related}`}>{allResearchPosts.find((item) => item.slug === related)?.title || related}</a></li>)}</ul>
        <p>Continue with {relatedResearch[0] || fallbackResearch ? <a href={`/research/${relatedResearch[0] || fallbackResearch}`}>a related research note</a> : <a href="/research">the research library</a>} or <a href="/contact-us">talk with our team</a>.</p>
        <aside className="card"><h2>Next step</h2><p>{post.cta}</p><a className="btn primary" href="/contact-us">Plan the work lane →</a></aside>
      </article>
    </main>
    <Footer />
  </>;
}
