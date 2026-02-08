import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

export const metadata = {
    title: "Terms of Service - YouTube Search Plus",
    description: "YouTube Search Plus Terms of Service",
    robots: {
        index: false,
        follow: true,
    },
};

export default function YSPTermsOfService() {
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
                        Terms of Service
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
                                1. Agreement to Terms
                            </h2>
                            <p>
                                By installing or using YouTube Search Plus
                                (&quot;Extension,&quot; &quot;Service&quot;),
                                you agree to be bound by these Terms of Service
                                (&quot;Terms&quot;). If you disagree with any
                                part of these Terms, you must uninstall the
                                Extension and stop using the Service.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">
                                2. Description of Service
                            </h2>
                            <p>
                                YouTube Search Plus is a Chrome extension that
                                adds advanced search filters and result export
                                functionality to YouTube&apos;s search bar. The
                                Extension allows you to filter YouTube search
                                results by date range, title keywords, exact
                                phrases, channel names, hashtags, and
                                exclusions. It also allows you to export search
                                results as CSV files or Markdown to the Notic
                                note-taking app. All data processing happens
                                locally in your browser.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">
                                3. Free and Pro Plans
                            </h2>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>
                                    <strong>Free:</strong> All search filters,
                                    query preview, export to Notic (Markdown),
                                    and guided onboarding. Filters are cleared
                                    after each search.
                                </li>
                                <li>
                                    <strong>Pro:</strong> Everything in Free,
                                    plus CSV export, saved filter templates, and
                                    persistent filters (keep after search).
                                    Available as a monthly subscription
                                    ($1.99/month) or yearly subscription
                                    ($12.99/year). Billing is processed through
                                    ExtensionPay.
                                </li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">
                                4. Subscription and Billing
                            </h2>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>
                                    Pro subscriptions are processed through
                                    ExtensionPay (extensionpay.com). You provide
                                    payment details to ExtensionPay; we do not
                                    store your payment information.
                                </li>
                                <li>
                                    Subscriptions automatically renew unless
                                    cancelled before the renewal date.
                                </li>
                                <li>
                                    You may cancel your subscription at any time
                                    through ExtensionPay. Cancellation takes
                                    effect at the end of your current billing
                                    period; you retain access to Pro features
                                    until then.
                                </li>
                                <li>
                                    All fees are in USD and are non-refundable,
                                    except as required by applicable law.
                                </li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">
                                5. Refund Policy
                            </h2>
                            <p>
                                All sales are final. We do not offer refunds for
                                subscriptions, except as required by applicable
                                law. You may cancel at any time to prevent
                                future charges.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">
                                6. YouTube and Third-Party Services
                            </h2>
                            <p>
                                YouTube Search Plus operates on youtube.com by
                                injecting UI elements into the page. The
                                Extension is not affiliated with, endorsed by,
                                or sponsored by YouTube or Google. YouTube is a
                                trademark of Google LLC. Your use of YouTube is
                                subject to YouTube&apos;s own Terms of Service
                                and Privacy Policy. We are not responsible for
                                changes to YouTube&apos;s website that may
                                affect the Extension&apos;s functionality.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">
                                7. Acceptable Use
                            </h2>
                            <p className="mb-4">You agree not to:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>
                                    Use the Extension for any illegal purpose or
                                    in violation of any laws
                                </li>
                                <li>
                                    Reverse engineer, decompile, or disassemble
                                    the Extension
                                </li>
                                <li>
                                    Attempt to bypass or circumvent any security
                                    or access controls
                                </li>
                                <li>
                                    Use the Extension to scrape or harvest data
                                    in violation of YouTube&apos;s Terms of
                                    Service
                                </li>
                                <li>
                                    Redistribute, resell, or sublicense the
                                    Extension
                                </li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">
                                8. Intellectual Property
                            </h2>
                            <p>
                                The Extension, including its code, design, and
                                functionality, is owned by Notic and protected
                                by applicable copyright and intellectual
                                property laws. You may not copy, modify,
                                distribute, or create derivative works based on
                                the Extension without our express written
                                permission. Data you export using the Extension
                                remains yours.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">
                                9. Disclaimer of Warranties
                            </h2>
                            <p>
                                The Extension is provided &quot;as is&quot; and
                                &quot;as available&quot; without warranties of
                                any kind, either express or implied. We do not
                                guarantee that the Extension will be
                                uninterrupted, error-free, or compatible with
                                future versions of YouTube or Chrome. YouTube
                                may change its website structure at any time,
                                which could temporarily affect the
                                Extension&apos;s functionality.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">
                                10. Limitation of Liability
                            </h2>
                            <p>
                                To the maximum extent permitted by law, Notic
                                shall not be liable for any indirect,
                                incidental, special, consequential, or punitive
                                damages, or any loss of profits or revenues,
                                whether incurred directly or indirectly, or any
                                loss of data, use, goodwill, or other intangible
                                losses resulting from your use of the Extension.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">
                                11. Termination
                            </h2>
                            <p>
                                We reserve the right to terminate or suspend
                                your access to Pro features immediately, without
                                prior notice, for any breach of these Terms. You
                                may stop using the Extension at any time by
                                uninstalling it from Chrome.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">
                                12. Changes to Terms
                            </h2>
                            <p>
                                We may modify these Terms at any time. We will
                                notify users of material changes by posting the
                                updated Terms on this page and updating the
                                &quot;Last updated&quot; date. Your continued
                                use of the Extension after changes become
                                effective constitutes acceptance of the new
                                Terms.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">
                                13. Governing Law
                            </h2>
                            <p>
                                These Terms shall be governed by and construed
                                in accordance with the laws of Canada, without
                                regard to its conflict of law provisions. Any
                                disputes arising from these Terms or the
                                Extension shall be subject to the exclusive
                                jurisdiction of the courts of Canada.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">
                                14. Contact
                            </h2>
                            <p>
                                If you have any questions about these Terms,
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
