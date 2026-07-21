import { CTA, Footer, Header, JsonLd } from '../../components';
import { blogDetails, blogPosts, site } from '../../data';

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  const canonical = `https://${site.domain.toLowerCase()}/blog/${slug}`;
  return {
    title: post?.title || 'Guide',
    description: post?.excerpt,
    alternates: { canonical },
    openGraph: {
      title: post?.title || 'Guide',
      description: post?.excerpt,
      url: canonical,
      type: 'article',
    },
  };
}

type BlogDetail = (typeof blogDetails)[keyof typeof blogDetails];

export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug) || blogPosts[0];
  const detail = (blogDetails as Record<string, BlogDetail | undefined>)[post.slug];
  const baseUrl = `https://${site.domain.toLowerCase()}`;
  const postUrl = `${baseUrl}/blog/${post.slug}`;

  if (!detail) {
    return (
      <>
        <Header />
        <main className="section">
          <article className="container article-shell">
            <p className="eyebrow">{site.brand} guide</p>
            <h1>{post.title}</h1>
            <p className="lead">{post.excerpt}</p>
            <div className="card article-fallback">
              <h2>The short answer</h2>
              <p>Start with one role, a short task list, and a weekly scorecard. Do not outsource a messy process until examples and rules are clear.</p>
              <h2>What to prepare</h2>
              <ul>
                <li>Task examples and sample replies</li>
                <li>Tool access and permission rules</li>
                <li>Daily output target</li>
                <li>Escalation rules for anything sensitive</li>
              </ul>
            </div>
          </article>
          <CTA />
        </main>
        <Footer />
      </>
    );
  }

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': `${postUrl}#article`,
        headline: post.title,
        description: post.excerpt,
        dateModified: detail.updated,
        datePublished: detail.updated,
        mainEntityOfPage: { '@id': `${postUrl}#webpage` },
        author: { '@type': 'Organization', name: site.brand, url: baseUrl },
        publisher: { '@type': 'Organization', name: site.brand, url: baseUrl },
        citation: detail.sources.map((source) => source.url),
        hasPart: detail.sections.map((section, index) => ({
          '@type': 'WebPageElement',
          position: index + 1,
          name: section.heading,
        })),
      },
      {
        '@type': 'WebPage',
        '@id': `${postUrl}#webpage`,
        name: post.title,
        url: postUrl,
        description: post.excerpt,
        mainEntity: { '@id': `${postUrl}#article` },
      },
      {
        '@type': 'FAQPage',
        '@id': `${postUrl}#faq`,
        mainEntity: detail.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.q,
          acceptedAnswer: { '@type': 'Answer', text: faq.a },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl },
          { '@type': 'ListItem', position: 2, name: 'Guides', item: `${baseUrl}/blog` },
          { '@type': 'ListItem', position: 3, name: post.title, item: postUrl },
        ],
      },
    ],
  };

  return (
    <>
      <Header />
      <main className="article-page">
        <JsonLd data={schema} />
        <article className="container article-shell">
          <header className="article-header">
            <p className="eyebrow">Role planning guide</p>
            <h1>{post.title}</h1>
            <p className="lead">{post.excerpt}</p>
            <div className="article-meta">
              <span>{post.minutes} min read</span>
              <span>Updated {detail.updated}</span>
            </div>
          </header>

          <aside className="takeaway-box" aria-labelledby="takeaway-title">
            <p className="eyebrow" id="takeaway-title">Quick takeaways</p>
            <ul>{detail.takeaways.map((item) => <li key={item}>{item}</li>)}</ul>
          </aside>

          <section className="fit-matrix" aria-labelledby="fit-title">
            <div className="module-heading">
              <p className="eyebrow">Scope check</p>
              <h2 id="fit-title">Is this work ready to hand off?</h2>
            </div>
            <div className="table-scroll">
              <table>
                <thead><tr><th>Signal</th><th>Example</th><th>Why it matters</th></tr></thead>
                <tbody>{detail.fitRows.map((row) => <tr key={row.signal}><th>{row.signal}</th><td>{row.example}</td><td>{row.reason}</td></tr>)}</tbody>
              </table>
            </div>
          </section>

          <div className="article-body">
            {detail.sections.map((section) => (
              <section key={section.heading}>
                <h2>{section.heading}</h2>
                {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </section>
            ))}
          </div>

          <section className="brief-box" aria-labelledby="brief-title">
            <p className="eyebrow">Copy-ready example</p>
            <h2 id="brief-title">A simple role brief</h2>
            <p>Replace the order details with your own work. Keep the decision line.</p>
            <ul>{detail.brief.map((line) => <li key={line}>{line}</li>)}</ul>
          </section>

          <section className="article-faq" aria-labelledby="faq-title">
            <p className="eyebrow">Buyer questions</p>
            <h2 id="faq-title">Outsourced labor planning FAQ</h2>
            <div className="cards">{detail.faqs.map((faq) => <div className="card" key={faq.q}><h3>{faq.q}</h3><p>{faq.a}</p></div>)}</div>
          </section>

          <section className="source-list" aria-labelledby="sources-title">
            <p className="eyebrow">Sources</p>
            <h2 id="sources-title">Planning references</h2>
            <ol>{detail.sources.map((source) => <li key={source.url}><a href={source.url} target="_blank" rel="noreferrer">{source.name}</a><p>{source.note}</p></li>)}</ol>
          </section>
        </article>
        <CTA />
      </main>
      <Footer />
    </>
  );
}
