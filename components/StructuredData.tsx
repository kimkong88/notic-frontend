export default function StructuredData() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://floatify.app';
  
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Floatify',
    url: baseUrl,
    logo: `${baseUrl}/logo.svg`,
    description: 'Floating YouTube Player - Search, Browse Feed, and Multitask without switching tabs.',
    sameAs: [
      // Add your social media links here when available
      // 'https://twitter.com/floatify',
      // 'https://github.com/floatify',
    ],
  };

  const softwareApplicationSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Floatify',
    applicationCategory: 'BrowserExtension',
    operatingSystem: 'Chrome',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      ratingCount: '1',
    },
    description: 'The only floating player that lets you Search, Browse Feed, and Multitask without switching tabs. YouTube Mini Player, Evolved.',
    url: baseUrl,
    screenshot: `${baseUrl}/opengraph-image`,
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Floatify',
    url: baseUrl,
    description: 'Floating YouTube Player - Search, Browse Feed, and Multitask without switching tabs.',
    publisher: {
      '@type': 'Organization',
      name: 'Floatify',
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/logo.svg`,
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}
