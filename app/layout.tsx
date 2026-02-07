import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono, Plus_Jakarta_Sans } from "next/font/google";
import StructuredData from "@/components/StructuredData";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
    variable: "--font-plus-jakarta-sans",
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
    title: {
        default: "Notic – The note that floats over every tab",
        template: "%s | Notic",
    },
    description:
        "Floating notes that stay over every tab. Markdown, folders, sync. No hunting for that tab.",
    keywords: [
        "notes",
        "sticky notes",
        "floating notes",
        "browser notes",
        "markdown",
        "sync",
        "scratchpad",
        "browser notes",
    ],
    authors: [{ name: "Notic" }],
    creator: "Notic",
    publisher: "Notic",
    metadataBase: new URL(
        process.env.NEXT_PUBLIC_SITE_URL || "https://getnotic.io"
    ),
    alternates: { canonical: "/" },
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "/",
        siteName: "Notic",
        title: "Notic – The note that floats over every tab",
        description:
            "Floating notes that stay over every tab. Markdown, folders, sync.",
        images: [
            {
                url: "/opengraph-image",
                width: 1200,
                height: 630,
                alt: "Notic – The note that floats over every tab",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Notic – The note that floats over every tab",
        description:
            "Floating notes that stay over every tab. Markdown, folders, sync.",
        images: ["/opengraph-image"],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    icons: {
        icon: [
            { url: "/favicon.svg", type: "image/svg+xml" },
            { url: "/logo.svg", type: "image/svg+xml", sizes: "any" },
        ],
        apple: "/logo.svg",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} ${plusJakartaSans.variable} antialiased`}
            >
                <StructuredData />
                {children}
                <Script
                    src="https://cloud.umami.is/script.js"
                    data-website-id="e3874e1a-bb69-4a45-bd5b-f28584930834"
                    strategy="afterInteractive"
                />
                {process.env.NODE_ENV === "production" &&
                    process.env.NEXT_PUBLIC_CLARITY_ID && (
                        <Script
                            id="microsoft-clarity"
                            strategy="lazyOnload"
                        >{`
                            (function(c,l,a,r,i,t,y){
                                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                            })(window,document,"clarity","script","${process.env.NEXT_PUBLIC_CLARITY_ID}");
                        `}</Script>
                    )}
            </body>
        </html>
    );
}
