import { notFound } from 'next/navigation';
import { Footer, Header } from '../../components';
import { site } from '../../data';
import { researchPosts } from '../../fleet-content';
import { aug31ResearchPosts } from '../../aug31-content';
const allResearchPosts=[...aug31ResearchPosts,...researchPosts];

const formatPublicDate = (date: string) => new Intl.DateTimeFormat('en-US', {
  month: 'long',
  day: 'numeric',
  year: 'numeric',
  timeZone: 'UTC',
}).format(new Date(`${date}T00:00:00Z`));

export function generateStaticParams() {
  return allResearchPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = allResearchPosts.find((item) => item.slug === slug);

  return post ? {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/research/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.published,
      url: `/research/${post.slug}`,
    },
  } : undefined;
}

export default async function ResearchArticle({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = allResearchPosts.find((item) => item.slug === slug);
  if (!post) notFound();

  const baseUrl = `https://${site.domain.toLowerCase()}`;
  const canonical = `${baseUrl}/research/${post.slug}`;
  const organization = { '@type': 'Organization', name: site.brand, url: baseUrl };
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.published,
    dateModified: post.published,
    mainEntityOfPage: canonical,
    author: organization,
    publisher: organization,
    image: post.image ? `${baseUrl}${post.image}` : undefined,
  };

  return <>
    <Header />
    <main className="fleet-main">
      <article className="section article-shell">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <meta property="article:published_time" content={post.published} />
        <p className="eyebrow">Philippines staffing research · {formatPublicDate(post.published)}</p>
        <h1>{post.title}</h1>
        <p className="lead">{post.excerpt}</p>
        {post.image && <img src={post.image} alt="" width="1200" height="630" />}
        <div className="article-body">{post.body.map((paragraph, index) => <p key={index}>{paragraph}</p>)}</div>
        {post.headlineStat && <><h2>Key statistic</h2><p>{post.headlineStat}</p></>}
        {post.keyStats && <><h2>Key stats</h2><ul>{post.keyStats.map((stat) => <li key={stat}>{stat}</li>)}</ul></>}
        {post.takeaways && <><h2>Key takeaways</h2><ul>{post.takeaways.map((takeaway) => <li key={takeaway}>{takeaway}</li>)}</ul></>}
        {post.service && <aside className="card"><h2>{post.service.heading}</h2><p>{post.service.body}</p><a className="btn primary" href={post.service.href}>{post.service.label}</a></aside>}
        {post.faqs && <><h2>FAQs</h2>{post.faqs.map((faq) => <section key={faq.q}><h3>{faq.q}</h3><p>{faq.a}</p></section>)}</>}
        <h2>Sources</h2>
        <ol>{(post.sources || []).map((source) => <li key={source.url}><a href={source.url} target="_blank" rel="noreferrer">{source.name}</a></li>)}</ol>
        <h2>Related research</h2>
        <ul>{(post.related || []).slice(0, 3).map((related) => <li key={related}><a href={`/research/${related}`}>{related}</a></li>)}</ul>
        <p>Continue with <a href={`/research/${post.related?.[0] || researchPosts[0].slug}`}>a related research note</a> or <a href="/contact">talk with our team</a>.</p>
        <aside className="card"><h2>Next step</h2><p>{post.cta}</p><a className="btn primary" href="/contact">Plan the work lane →</a></aside>
      </article>
    </main>
    <Footer />
  </>;
}
