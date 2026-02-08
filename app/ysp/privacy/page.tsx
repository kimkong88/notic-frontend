import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

export const metadata = {
    title: "Privacy Policy - YouTube Search Plus",
    description: "YouTube Search Plus Privacy Policy",
    robots: {
        index: false,
        follow: true,
    },
};

export default function YSPPrivacyPolicy() {
    return (
        <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
            <Header />

            <main className="pt-32 pb-20 px-4 sm:px-6">
                <div className="max-w-4xl mx-auto">
                    <Link
                        href="/"
                        className="text-[var(--accent)] hover:opacity-80 text-sm mb-8 inline-block transition-opacity"
                    >
                        &larr; Back to Home
                    </Link>

                    <h1 className="text-4xl sm:text-5xl font-bold mb-8 tracking-tighter">
                        Privacy Policy
                    </h1>
                    <p className="text-[var(--text-muted)] mb-2">
                        YouTube Search Plus &mdash; Chrome Extension
                    </p>
                    <p className="text-[var(--text-muted)] mb-12">
                        Last updated: February 7, 2026
                    </p>

                    <div className="prose prose-invert max-w-none space-y-8 text-[var(--text-secondary)] leading-relaxed">
                        <section>
                            <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">
                                1. Introduction
                            </h2>
                            <p>
                                YouTube Search Plus (&quot;YSP,&quot;
                                &quot;we,&quot; &quot;our,&quot; or
                                &quot;us&quot;) is a Chrome extension built by
                                the team behind Notic (getnotic.io). This
                                Privacy Policy explains how we collect, use, and
                                protect your information when you use YouTube
                                Search Plus. We are committed to your privacy:
                                we collect only what is necessary to provide the
                                service, and we do not sell your data.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">
                                2. Information We Collect
                            </h2>
                            <p className="mb-4">
                                YouTube Search Plus collects minimal
                                information:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mb-4">
                                <li>
                                    <strong>
                                        Filter configurations and preferences:
                                    </strong>{" "}
                                    Your saved filters, templates, and settings
                                    (such as export preferences and onboarding
                                    state) are stored locally in your browser
                                    using Chrome&apos;s storage API. This data
                                    never leaves your device except as described
                                    below.
                                </li>
                                <li>
                                    <strong>Subscription status:</strong> When
                                    you upgrade to Pro, your payment is
                                    processed by ExtensionPay
                                    (extensionpay.com). We receive only your
                                    subscription status (active/inactive). We do
                                    not receive or store your payment card
                                    details, name, or billing address.
                                </li>
                                <li>
                                    <strong>Exported data:</strong> When you use
                                    the export feature, search results are
                                    processed entirely in your browser. CSV
                                    files are downloaded directly to your
                                    device. If you export to Notic, data is sent
                                    to the Notic web app (app.getnotic.io) via
                                    your browser&apos;s local storage &mdash; it
                                    does not pass through our servers.
                                </li>
                            </ul>
                            <p>
                                We do <strong>not</strong> collect: your YouTube
                                search queries, browsing history, YouTube
                                account information, video watch history, or any
                                personally identifiable information.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">
                                3. How We Use Your Information
                            </h2>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>
                                    To save and restore your filter
                                    configurations and preferences locally
                                </li>
                                <li>
                                    To determine whether you have an active Pro
                                    subscription (via ExtensionPay)
                                </li>
                                <li>
                                    To export YouTube search results in the
                                    format you choose (CSV or Notic)
                                </li>
                            </ul>
                            <p className="mt-4">
                                We do not use your data for advertising,
                                tracking, analytics, or any purpose other than
                                providing the extension&apos;s functionality.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">
                                4. Third-Party Services
                            </h2>
                            <p className="mb-4">
                                YouTube Search Plus uses the following
                                third-party services:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>
                                    <strong>ExtensionPay:</strong> Processes Pro
                                    subscription payments. Their privacy policy
                                    applies to payment data:{" "}
                                    <a
                                        href="https://extensionpay.com/privacy-policy"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-[var(--accent)] hover:underline"
                                    >
                                        extensionpay.com/privacy-policy
                                    </a>
                                </li>
                                <li>
                                    <strong>YouTube (google.com):</strong> The
                                    extension operates on youtube.com pages. We
                                    inject UI elements into the YouTube search
                                    bar. We do not access or transmit your
                                    YouTube account data.
                                </li>
                                <li>
                                    <strong>Notic (getnotic.io):</strong> If you
                                    use the &quot;Export to Notic&quot; feature,
                                    exported data is transferred to the Notic
                                    web app locally in your browser. No data is
                                    sent to external servers during this
                                    process.
                                </li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">
                                5. Data Storage and Security
                            </h2>
                            <p>
                                All extension data (filters, templates,
                                preferences) is stored locally in your browser
                                using Chrome&apos;s storage API. We do not
                                operate servers that store your data. Your Pro
                                subscription status is cached locally for
                                offline access and refreshed from ExtensionPay
                                when online. We implement reasonable measures to
                                ensure the extension does not expose your data
                                to unauthorized parties.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">
                                6. Permissions
                            </h2>
                            <p className="mb-4">
                                YouTube Search Plus requests the following
                                Chrome permissions:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>
                                    <strong>activeTab:</strong> To detect when
                                    you are on a YouTube search results page
                                </li>
                                <li>
                                    <strong>storage:</strong> To save your
                                    filters, templates, preferences, and
                                    subscription cache locally
                                </li>
                                <li>
                                    <strong>scripting:</strong> To transfer
                                    exported data to the Notic web app when
                                    using the &quot;Export to Notic&quot;
                                    feature
                                </li>
                                <li>
                                    <strong>Host access (youtube.com):</strong>{" "}
                                    To inject the filter and export UI into
                                    YouTube&apos;s search bar
                                </li>
                                <li>
                                    <strong>
                                        Host access (extensionpay.com):
                                    </strong>{" "}
                                    Required by ExtensionPay for payment
                                    processing
                                </li>
                                <li>
                                    <strong>
                                        Host access (app.getnotic.io):
                                    </strong>{" "}
                                    To send exported results to the Notic web
                                    app
                                </li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">
                                7. Your Rights
                            </h2>
                            <p className="mb-4">You have the right to:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>
                                    Uninstall the extension at any time, which
                                    removes all locally stored data
                                </li>
                                <li>
                                    Clear extension data via Chrome&apos;s
                                    settings
                                </li>
                                <li>
                                    Cancel your Pro subscription at any time
                                    through ExtensionPay
                                </li>
                                <li>
                                    Request information about any data we may
                                    hold
                                </li>
                            </ul>
                            <p className="mt-4">
                                To exercise your rights or ask questions,
                                contact us at{" "}
                                <a
                                    href="mailto:support@getnotic.io"
                                    className="text-[var(--accent)] hover:underline"
                                >
                                    support@getnotic.io
                                </a>
                                .
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">
                                8. Children&apos;s Privacy
                            </h2>
                            <p>
                                YouTube Search Plus is not intended for children
                                under 13. We do not knowingly collect
                                information from children under 13.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">
                                9. Changes to This Policy
                            </h2>
                            <p>
                                We may update this Privacy Policy from time to
                                time. We will notify you of any material changes
                                by posting the new policy on this page and
                                updating the &quot;Last updated&quot; date.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">
                                10. Contact Us
                            </h2>
                            <p>
                                If you have questions about this Privacy Policy,
                                please contact us at{" "}
                                <a
                                    href="mailto:support@getnotic.io"
                                    className="text-[var(--accent)] hover:underline"
                                >
                                    support@getnotic.io
                                </a>
                                .
                            </p>
                        </section>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
