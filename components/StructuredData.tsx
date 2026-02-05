export default function StructuredData() {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://getnotic.io";

    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Notic",
        url: baseUrl,
        logo: `${baseUrl}/logo.svg`,
        description:
            "The note that floats over every tab. Local-first sticky notes, Markdown, folders, sync.",
        sameAs: [
            // Add your social media links here when available
            // 'https://twitter.com/getnotic',
            // 'https://github.com/getnotic',
        ],
    };

    const softwareApplicationSchema = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "Notic",
        applicationCategory: "WebApplication",
        operatingSystem: "Any",
        offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "USD",
        },
        description:
            "Sticky notes that float over every tab. Markdown, folders, sync across devices.",
        url: baseUrl,
        screenshot: `${baseUrl}/opengraph-image`,
    };

    const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "Notic",
        url: baseUrl,
        description:
            "The note that floats over every tab. Local-first sticky notes, Markdown, folders, sync.",
        publisher: {
            "@type": "Organization",
            name: "Notic",
            logo: {
                "@type": "ImageObject",
                url: `${baseUrl}/logo.svg`,
            },
        },
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(organizationSchema),
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(softwareApplicationSchema),
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(websiteSchema),
                }}
            />
        </>
    );
}
