import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'Terms of Service - Notic',
  description: 'Notic Terms of Service',
  robots: {
    index: false,
    follow: true,
  },
};

export default function TermsOfService() {
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

          <h1 className="text-4xl sm:text-5xl font-bold mb-8 tracking-tighter">Terms of Service</h1>
          <p className="text-[var(--text-muted)] mb-12">Last updated: January 29, 2026</p>

          <div className="prose prose-invert max-w-none space-y-8 text-[var(--text-secondary)] leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">1. Agreement to Terms</h2>
              <p>
                By accessing or using Notic (&quot;Service&quot;), you agree to be bound by these Terms of Service (&quot;Terms&quot;).
                If you disagree with any part of these terms, you may not access the Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">2. Description of Service</h2>
              <p>
                Notic is a Chrome extension that provides a floating note-taking experience over your browser tabs. Notes are stored locally in your browser (Chrome storage). Optional features include: syncing notes across devices when you sign in with Google, exporting notes as .md files, integrations (e.g. Notion, Obsidian), and publishing or sharing notes. The extension works offline for note-taking; sync and image upload require an internet connection.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">3. Free and Pro Plans</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Free (Personal):</strong> Unlimited notes in the browser, markdown, folders, and images. Up to 10 notes can be synced across devices when you sign in. Export to .md is included.</li>
                <li><strong>Pro:</strong> Unlimited synced notes across devices, plus priority support. Available as a monthly subscription ($3.99/month) or yearly subscription ($29.99/year). Billing is processed through Lemon Squeezy.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">4. Subscription and Billing</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Pro subscriptions are processed through Lemon Squeezy. You provide payment details to Lemon Squeezy; we do not store your full payment information.</li>
                <li>Subscriptions automatically renew unless cancelled before the renewal date.</li>
                <li>You may cancel your subscription at any time through your account or by contacting support. Cancellation takes effect at the end of your current billing period; you retain access to Pro features until then.</li>
                <li>All fees are in USD and are non-refundable, except as required by applicable law.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">5. Refund Policy</h2>
              <p>
                All sales are final. We do not offer refunds for subscriptions, except as required by applicable law. You may cancel at any time to prevent future charges.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">6. Acceptable Use</h2>
              <p className="mb-4">You agree not to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Use the Service for any illegal purpose or in violation of any laws</li>
                <li>Reverse engineer, decompile, or disassemble the extension</li>
                <li>Attempt to bypass or circumvent any security or access controls</li>
                <li>Use the Service to infringe upon the rights of others, including intellectual property rights</li>
                <li>Interfere with or disrupt the Service or servers connected to the Service</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">7. Intellectual Property</h2>
              <p>
                The Service, including its original content, features, and functionality, is owned by Notic and protected by applicable copyright, trademark, and other intellectual property laws. You may not copy, modify, distribute, or create derivative works based on the Service without our express written permission. Your notes and data remain yours; we do not claim ownership of your content.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">8. Disclaimer of Warranties</h2>
              <p>
                The Service is provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind, either express or implied. We do not guarantee that the Service will be uninterrupted, error-free, or free from viruses or other harmful components.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">9. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, Notic shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from your use of the Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">10. Third-Party Services</h2>
              <p>
                The Service may integrate with third-party services (e.g. Google for sign-in, Lemon Squeezy for billing, Chrome Web Store for distribution, and optional integrations such as Notion or Obsidian). Your use of those services is subject to their respective terms and privacy policies. We are not responsible for the content, policies, or practices of third-party services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">11. Termination</h2>
              <p>
                We reserve the right to terminate or suspend your access to the Service (including sync and Pro features) immediately, without prior notice, for any breach of these Terms or for any other reason we deem necessary. Upon termination, your data in the extension remains in your browser; you may export it. Data stored on our servers for sync may be deleted in accordance with our data retention practices.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">12. Changes to Terms</h2>
              <p>
                We may modify these Terms at any time. We will notify users of material changes by posting the updated Terms on this page and updating the &quot;Last updated&quot; date. Your continued use of the Service after changes become effective constitutes acceptance of the new Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">13. Governing Law</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of Canada, without regard to its conflict of law provisions. Any disputes arising from these Terms or the Service shall be subject to the exclusive jurisdiction of the courts of Canada.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">14. Contact</h2>
              <p>
                If you have any questions about these Terms, please contact us at{' '}
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
