import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://floatify.app';
  
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/privacy', '/terms'], // These are noindex pages
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/privacy', '/terms'],
      },
      // AI Crawlers - Allow for maximum visibility
      {
        userAgent: 'GPTBot',
        allow: '/',
        disallow: ['/privacy', '/terms'],
      },
      {
        userAgent: 'ChatGPT-User',
        allow: '/',
        disallow: ['/privacy', '/terms'],
      },
      {
        userAgent: 'ClaudeBot',
        allow: '/',
        disallow: ['/privacy', '/terms'],
      },
      {
        userAgent: 'PerplexityBot',
        allow: '/',
        disallow: ['/privacy', '/terms'],
      },
      {
        userAgent: 'Google-Extended',
        allow: '/',
        disallow: ['/privacy', '/terms'],
      },
      {
        userAgent: 'CCBot',
        allow: '/',
        disallow: ['/privacy', '/terms'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
