import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy - Notic',
  description: 'Notic Privacy Policy',
  robots: {
    index: false,
    follow: true,
  },
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <Header />

      <main className="pt-32 pb-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/"
            className="text-[var(--accent)] hover:opacity-80 text-sm mb-8 inline-block transition-opacity"
          >
            ← Back to Home
          </Link>

          <h1 className="text-4xl sm:text-5xl font-bold mb-8 tracking-tighter">Privacy Policy</h1>
          <p className="text-[var(--text-muted)] mb-12">Last updated: January 29, 2026</p>

          <div className="prose prose-invert max-w-none space-y-8 text-[var(--text-secondary)] leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">1. Introduction</h2>
              <p>
                Notic (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) operates the Notic Chrome extension and related services (including our website and optional sync). This Privacy Policy explains how we collect, use, and protect your information when you use our service. Notic is local-first: your notes are stored in your browser by default. We do not mine your notes for AI, and we do not sell your usage data.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">2. Information We Collect</h2>
              <p className="mb-4">We collect minimal information necessary to provide the service:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong>Notes and data in the extension:</strong> Notes, folders, and workspace data are stored locally in your browser (Chrome storage). We do not have access to this data unless you choose to sign in and use sync.</li>
                <li><strong>When you sign in (optional):</strong> If you sign in with Google to use sync, we receive your Google account identifier and store your synced notes, folders, and workspaces on our servers so you can access them from another browser or device. We use this data only to provide sync; we do not use it for advertising, AI training, or selling.</li>
                <li><strong>Payment information:</strong> When you subscribe to Pro, Lemon Squeezy (our payment processor) collects and processes your payment details. We do not store your full payment information. We may receive your email and subscription status from Lemon Squeezy for account and billing purposes.</li>
                <li><strong>Website analytics:</strong> Our website may use analytics (e.g. Vercel Analytics) to collect basic usage statistics (page views, traffic sources). This data is anonymized and aggregated.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">3. How We Use Your Information</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>To provide sync when you sign in (store and serve your notes across devices)</li>
                <li>To process your Pro subscription and manage billing</li>
                <li>To respond to support inquiries</li>
                <li>To improve our service (e.g. aggregated, anonymized analytics on our website)</li>
              </ul>
              <p className="mt-4">We do not use your note content for advertising, AI training, or selling to third parties.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">4. Third-Party Services</h2>
              <p className="mb-4">We use the following third-party services:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Lemon Squeezy:</strong> Processes payments and manages Pro subscriptions. Their privacy policy applies to payment data: <a href="https://www.lemonsqueezy.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[var(--accent)] hover:underline">lemonsqueezy.com/privacy</a></li>
                <li><strong>Google:</strong> Used for optional sign-in (Google account) to enable sync. We receive only the information necessary to identify your account and provide sync. Google&apos;s privacy policy applies: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[var(--accent)] hover:underline">policies.google.com/privacy</a></li>
                <li><strong>Chrome Web Store:</strong> Handles extension distribution. Google&apos;s policies apply to installation and updates.</li>
                <li><strong>Vercel (or similar):</strong> Hosts our website and may provide analytics. Their privacy policy applies to website traffic data.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">5. Data Storage and Security</h2>
              <p>
                Your notes are stored locally in your browser by default. If you use sync, a copy of your synced notes is stored on our servers to enable cross-device access. We implement reasonable security measures to protect data in transit and at rest. We do not store your payment card details; Lemon Squeezy handles and stores payment information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">6. Your Rights</h2>
              <p className="mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access your personal information we hold</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your data (including synced notes on our servers)</li>
                <li>Withdraw consent for data processing (e.g. stop using sync and request deletion of server-side data)</li>
              </ul>
              <p className="mt-4">
                You can export your notes as .md files from the extension at any time. To exercise your rights or request deletion of synced data, contact us at <a href="mailto:hello@getnotic.io" className="text-[var(--accent)] hover:underline">hello@getnotic.io</a>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">7. Cookies and Local Storage</h2>
              <p>
                The Notic extension uses Chrome&apos;s local storage to save your notes, folders, preferences, and theme settings. This data remains on your device. When you sign in, we also store authentication tokens locally so sync can work. Our website may use cookies or similar technologies for analytics; you can control this via your browser settings.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">8. Children&apos;s Privacy</h2>
              <p>
                Our service is not intended for children under 13. We do not knowingly collect information from children under 13.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">9. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the &quot;Last updated&quot; date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">10. Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy or your data, please contact us at{' '}
                <a href="mailto:hello@getnotic.io" className="text-[var(--accent)] hover:underline">hello@getnotic.io</a>.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
