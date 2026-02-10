import React from "react";
import Link from "next/link";
import { Chrome, Globe, ArrowRight, Sparkles } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import {
    APP_URL,
    CHROME_STORE_URL,
} from "@/lib/site";

export const metadata = {
    title: "Download Notic",
    description:
        "Get Notic — the main app in your browser or the Chrome extension for always-on-top floating notes and enhanced capture.",
};

export default function DownloadPage() {
    return (
        <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] selection:bg-[var(--accent-light)]">
            <Header />

            <main className="pt-32 sm:pt-40 pb-20 px-4 sm:px-6">
                <div className="max-w-3xl mx-auto text-center">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-4 tracking-tight">
                        Get Notic
                    </h1>
                    <p className="text-[var(--text-muted)] text-lg sm:text-xl mb-12 sm:mb-16">
                        Choose how you want to use Notic — full app in the
                        browser or the extension for floating notes and quick
                        capture.
                    </p>

                    <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
                        {/* Main app – browser */}
                        <a
                            href={APP_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="card rounded-2xl sm:rounded-3xl p-8 sm:p-10 flex flex-col items-center text-center group hover:border-[var(--accent)] transition-colors border-2 border-transparent"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-[var(--accent-light)] flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                                <Globe className="text-[var(--accent)] w-7 h-7" />
                            </div>
                            <h2 className="text-xl sm:text-2xl font-semibold text-[var(--text-primary)] mb-2">
                                Notic (browser app)
                            </h2>
                            <p className="text-[var(--text-muted)] text-sm sm:text-base mb-6 flex-1">
                                The full Notic experience — notes, folders, sync,
                                and sharing. Use it in any browser, no install.
                            </p>
                            <span className="inline-flex items-center gap-2 text-[var(--accent)] font-semibold">
                                Open in browser
                                <ArrowRight className="w-4 h-4" />
                            </span>
                        </a>

                        {/* Chrome extension */}
                        <a
                            href={CHROME_STORE_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="card rounded-2xl sm:rounded-3xl p-8 sm:p-10 flex flex-col items-center text-center group hover:border-[var(--accent)] transition-colors border-2 border-transparent"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-[var(--accent-light)] flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                                <Chrome className="text-[var(--accent)] w-7 h-7" />
                            </div>
                            <h2 className="text-xl sm:text-2xl font-semibold text-[var(--text-primary)] mb-2">
                                Chrome extension
                            </h2>
                            <p className="text-[var(--text-muted)] text-sm sm:text-base mb-6 flex-1">
                                Always-on-top floating notes, reader mode, quick
                                capture, and screenshots. Browser wrapper with
                                enhanced features.
                            </p>
                            <span className="inline-flex items-center gap-2 bg-[var(--accent)] text-white px-5 py-2.5 rounded-xl font-semibold group-hover:bg-[var(--accent-hover)] transition-colors">
                                <Sparkles className="w-4 h-4" />
                                Add to Chrome
                            </span>
                        </a>
                    </div>

                    <p className="mt-10 sm:mt-12 text-sm text-[var(--text-muted)]">
                        <Link
                            href="/"
                            className="hover:text-[var(--text-primary)] transition-colors underline underline-offset-2"
                        >
                            Back to home
                        </Link>
                    </p>
                </div>
            </main>

            <Footer />
        </div>
    );
}
