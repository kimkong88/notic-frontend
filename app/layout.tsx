import type { Metadata } from "next";
import { Geist, Geist_Mono, Plus_Jakarta_Sans } from "next/font/google";
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
  weight: ["300", "400", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Floatify - Floating YouTube Player",
    template: "%s | Floatify",
  },
  description: "The only floating player that lets you Search, Browse Feed, and Multitask without switching tabs. YouTube Mini Player, Evolved.",
  keywords: ["YouTube", "floating player", "PiP", "picture in picture", "Chrome extension", "video player", "multitasking"],
  authors: [{ name: "Floatify" }],
  creator: "Floatify",
  publisher: "Floatify",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://floatify.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'Floatify',
    title: 'Floatify - Floating YouTube Player',
    description: 'The only floating player that lets you Search, Browse Feed, and Multitask without switching tabs. YouTube Mini Player, Evolved.',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Floatify - Floating YouTube Player',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Floatify - Floating YouTube Player',
    description: 'The only floating player that lets you Search, Browse Feed, and Multitask without switching tabs.',
    images: ['/opengraph-image'],
    creator: '@floatify',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/logo.svg', type: 'image/svg+xml', sizes: 'any' },
    ],
    apple: '/logo.svg',
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
        {children}
      </body>
    </html>
  );
}
