import { Header, Footer, CTA, JsonLd } from '../../components';
import { services, site } from '../../data';

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  return {
    title: service?.title || 'Service',
    description: service?.desc,
  };
}

export default async function Service({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug) || services[0];
  const baseUrl = `https://${site.domain.toLowerCase()}`;
  const serviceUrl = `${baseUrl}/services/${service.slug}`;
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${serviceUrl}#webpage`,
        name: `${service.title} outsourced labor planning`,
        url: serviceUrl,
        description: service.desc,
        mainEntity: { '@id': `${serviceUrl}#service` },
      },
      {
        '@type': 'Service',
        '@id': `${serviceUrl}#service`,
        name: `${service.title} outsourced labor`,
        serviceType: service.title,
        provider: { '@type': 'Organization', name: site.brand, url: baseUrl },
        areaServed: 'United States',
        description: service.desc,
      },
      {
        '@type': 'FAQPage',
        '@id': `${serviceUrl}#faq`,
        mainEntity: service.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.q,
          acceptedAnswer: { '@type': 'Answer', text: faq.a },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl },
          { '@type': 'ListItem', position: 2, name: 'Services', item: `${baseUrl}/#services` },
          { '@type': 'ListItem', position: 3, name: service.title, item: serviceUrl },
        ],
      },
    ],
  };

  return (
    <>
      <Header />
      <main>
        <JsonLd data={schema} />
        <section className="service-hero">
          <div className="container two">
            <div>
              <p className="eyebrow">{site.brand} service</p>
              <h1>{service.title} for outsourced labor teams</h1>
              <p className="lead">{service.desc}</p>
              <a className="btn" href="/contact">Plan this role</a>
            </div>
            <div className="hero-card">
              <img src={site.serviceImage} alt={`${service.title} offshore service team`} />
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container cards">
            <div className="card">
              <h2>Best tasks</h2>
              <ul>{service.bestTasks.map((task) => <li key={task}>{task}</li>)}</ul>
            </div>
            <div className="card">
              <h2>Quality controls</h2>
              <ul>{service.qualityControls.map((control) => <li key={control}>{control}</li>)}</ul>
            </div>
            <div className="card">
              <h2>First week</h2>
              <ul>{service.firstWeek.map((step) => <li key={step}>{step}</li>)}</ul>
            </div>
          </div>
        </section>

        <section className="section band">
          <div className="container two">
            <div>
              <p className="eyebrow">Buyer questions</p>
              <h2>Ask these before you add staff.</h2>
              <p>Good outsourced labor starts small. Use the first week to test examples, access, response time, and review rules before you move more work over.</p>
            </div>
            <div className="cards">
              {service.faqs.map((faq) => (
                <div className="card" key={faq.q}>
                  <h3>{faq.q}</h3>
                  <p>{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <CTA />
      </main>
      <Footer />
    </>
  );
}
