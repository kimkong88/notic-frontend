import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy - Floatify',
  description: 'Floatify Privacy Policy',
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#0B0B0C] text-white">
      <Header />
      
      <main className="pt-32 pb-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <Link 
            href="/" 
            className="text-[#E63946] hover:text-[#E63946]/80 text-sm mb-8 inline-block transition-colors"
          >
            ← Back to Home
          </Link>
          
          <h1 className="text-4xl sm:text-5xl font-bold mb-8 tracking-tighter">Privacy Policy</h1>
          <p className="text-gray-400 mb-12">Last updated: January 26, 2026</p>

          <div className="prose prose-invert max-w-none space-y-8 text-gray-300 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
              <p>
                Floatify (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) operates the Floatify Chrome extension and related services. 
                This Privacy Policy explains how we collect, use, and protect your information when you use our service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. Information We Collect</h2>
              <p className="mb-4">We collect minimal information necessary to provide our service:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong>Payment Information:</strong> When you subscribe to Premium, ExtensionPay (our payment processor) collects your email address and payment details. Payment processing is handled by Stripe. We do not store your payment information.</li>
                <li><strong>Usage Analytics:</strong> Our landing page uses Vercel Analytics to collect basic usage statistics (page views, traffic sources). This data is anonymized and aggregated.</li>
                <li><strong>Extension Data:</strong> The Floatify extension operates locally on your device. We do not collect, store, or transmit your YouTube watch history, preferences, or any personal data from your browser.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. How We Use Your Information</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>To process your Premium subscription and manage your account</li>
                <li>To improve our service and user experience</li>
                <li>To communicate with you about your subscription or support inquiries</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Third-Party Services</h2>
              <p className="mb-4">We use the following third-party services:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>ExtensionPay/Stripe:</strong> Processes payments and manages subscriptions. Their privacy policy applies to payment data: <a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#E63946] hover:underline">stripe.com/privacy</a></li>
                <li><strong>Vercel Analytics:</strong> Provides website analytics. Their privacy policy: <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-[#E63946] hover:underline">vercel.com/legal/privacy-policy</a></li>
                <li><strong>Chrome Web Store:</strong> Handles extension distribution. Google&apos;s privacy policy applies: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#E63946] hover:underline">policies.google.com/privacy</a></li>
                <li><strong>YouTube/Google:</strong> Our extension interacts with YouTube, but we do not collect or store any YouTube data.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. Data Storage and Security</h2>
              <p>
                We do not store user data directly. Payment and subscription data is stored by ExtensionPay/Stripe. 
                We implement reasonable security measures to protect information transmitted through our service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">6. Your Rights</h2>
              <p className="mb-4">Under Canadian privacy laws, you have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access your personal information</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your data</li>
                <li>Withdraw consent for data processing</li>
              </ul>
              <p className="mt-4">
                To exercise these rights, contact us at <a href="mailto:support@floatify.app" className="text-[#E63946] hover:underline">support@floatify.app</a>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">7. Cookies and Local Storage</h2>
              <p>
                Our extension may use browser local storage to save your preferences (such as player settings). 
                This data remains on your device and is not transmitted to us. ExtensionPay may use cookies for payment processing.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">8. Children&apos;s Privacy</h2>
              <p>
                Our service is not intended for children under 13. We do not knowingly collect information from children under 13.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">9. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the &quot;Last updated&quot; date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">10. Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy, please contact us at{' '}
                <a href="mailto:support@floatify.app" className="text-[#E63946] hover:underline">support@floatify.app</a>.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
