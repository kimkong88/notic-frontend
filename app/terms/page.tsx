import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'Terms of Service - Floatify',
  description: 'Floatify Terms of Service',
  robots: {
    index: false,
    follow: true,
  },
};

export default function TermsOfService() {
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
          
          <h1 className="text-4xl sm:text-5xl font-bold mb-8 tracking-tighter">Terms of Service</h1>
          <p className="text-gray-400 mb-12">Last updated: January 26, 2026</p>

          <div className="prose prose-invert max-w-none space-y-8 text-gray-300 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. Agreement to Terms</h2>
              <p>
                By accessing or using Floatify (&quot;Service&quot;), you agree to be bound by these Terms of Service (&quot;Terms&quot;). 
                If you disagree with any part of these terms, you may not access the Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. Description of Service</h2>
              <p>
                Floatify is a Chrome extension that provides a floating YouTube player, allowing users to watch YouTube videos 
                in a resizable window while browsing other content. Premium features include video discovery, search functionality, 
                and privacy mode.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. Free and Premium Plans</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Free Plan:</strong> Provides basic floating player functionality with standard playback controls.</li>
                <li><strong>Premium Plan:</strong> Available as a monthly subscription ($1.99/month) or yearly subscription ($12.99/year). 
                  Includes video discovery, search features, and privacy mode. Premium features are available through a 7-day free trial 
                  (email required). The trial does not automatically convert to a paid subscription.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Subscription and Billing</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Subscriptions are processed through ExtensionPay (powered by Stripe).</li>
                <li>Subscriptions automatically renew unless cancelled before the renewal date.</li>
                <li>You may cancel your subscription at any time through your ExtensionPay account or by contacting support.</li>
                <li>Cancellation takes effect at the end of your current billing period. You will retain access to Premium features until the period ends.</li>
                <li>All fees are in USD and are non-refundable, except as required by law.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. Trial Period</h2>
              <p>
                Premium features include a 7-day free trial. To access the trial, you must provide your email address. 
                You will not be charged during the trial period. The trial does not automatically convert to a paid subscription. 
                If you wish to continue using Premium features after the trial, you must manually subscribe to a paid plan.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">6. Refund Policy</h2>
              <p>
                All sales are final. We do not offer refunds for subscriptions, except as required by applicable Canadian law. 
                You may cancel your subscription at any time to prevent future charges.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">7. Acceptable Use</h2>
              <p className="mb-4">You agree not to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Use the Service for any illegal purpose or in violation of any laws</li>
                <li>Reverse engineer, decompile, or disassemble the extension</li>
                <li>Attempt to bypass or circumvent any security measures</li>
                <li>Use the Service to infringe upon the rights of others, including intellectual property rights</li>
                <li>Interfere with or disrupt the Service or servers connected to the Service</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">8. Intellectual Property</h2>
              <p>
                The Service, including its original content, features, and functionality, is owned by Floatify and protected by 
                international copyright, trademark, and other intellectual property laws. You may not copy, modify, distribute, 
                or create derivative works based on the Service without our express written permission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">9. Disclaimer of Warranties</h2>
              <p>
                The Service is provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind, either express or implied. 
                We do not guarantee that the Service will be uninterrupted, error-free, or free from viruses or other harmful components.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">10. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, Floatify shall not be liable for any indirect, incidental, special, 
                consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, 
                or any loss of data, use, goodwill, or other intangible losses resulting from your use of the Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">11. Third-Party Services</h2>
              <p>
                The Service integrates with YouTube and other third-party services. Your use of these services is subject to 
                their respective terms of service and privacy policies. We are not responsible for the content, policies, or 
                practices of third-party services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">12. Termination</h2>
              <p>
                We reserve the right to terminate or suspend your access to the Service immediately, without prior notice, 
                for any breach of these Terms or for any other reason we deem necessary.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">13. Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms at any time. We will notify users of material changes by posting 
                the updated Terms on this page and updating the &quot;Last updated&quot; date. Your continued use of the Service after 
                changes become effective constitutes acceptance of the new Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">14. Governing Law</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of Canada, without regard to its 
                conflict of law provisions. Any disputes arising from these Terms or the Service shall be subject to the 
                exclusive jurisdiction of the courts of Canada.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">15. Contact Information</h2>
              <p>
                If you have any questions about these Terms, please contact us at{' '}
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
