'use client';

import React, { useState } from 'react';
import { Check, ShieldCheck } from 'lucide-react';
import { track } from '@vercel/analytics';

const EXTPAY_CHECKOUT_URL = 'https://extensionpay.com/extension/floatify/choose-plan?api_key=608438ef-ebe6-46ef-bbd7-992372e2b2f5';
const EXTPAY_TRIAL_URL = 'https://extensionpay.com/extension/floatify/trial?api_key=608438ef-ebe6-46ef-bbd7-992372e2b2f5';

export default function PricingSection() {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly');

  const monthlyPrice = 1.99;
  const yearlyPrice = 12.99;
  const yearlySavings = 45; // 45% off

  const handleFreeInstall = () => {
    track('install');
    window.location.href = '/download';
  };
  const handleTrialInstall = () => {
    track('trial_install');
    window.location.href = EXTPAY_TRIAL_URL;
  };
  const handlePremiumInstall = () => {
    track('premium_install');
    window.location.href = EXTPAY_CHECKOUT_URL;
  };

  return (
    <section id="pricing" className="py-16 sm:py-24 md:py-32 bg-white/[0.01]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 tracking-tighter">Simple Pricing</h2>
          <p className="text-gray-400 text-base sm:text-lg mb-6 sm:mb-8">Choose the plan that fits your multitasking needs.</p>
          
          {/* Billing Toggle */}
          <div className="inline-flex items-center gap-3 sm:gap-4 bg-white/5 border border-white/10 rounded-full p-1">
            <button 
              onClick={() => setBillingPeriod('monthly')}
              className={`px-4 sm:px-6 py-2 rounded-full text-sm sm:text-base font-medium transition-all ${
                billingPeriod === 'monthly' 
                  ? 'bg-[#E63946] text-white font-bold' 
                  : 'text-gray-400 hover:text-white cursor-pointer'
              }`}
            >
              Monthly
            </button>
            <button 
              onClick={() => setBillingPeriod('yearly')}
              className={`px-4 sm:px-6 py-2 rounded-full text-sm sm:text-base font-medium transition-all relative ${
                billingPeriod === 'yearly' 
                  ? 'bg-[#E63946] text-white font-bold' 
                  : 'text-gray-400 hover:text-white cursor-pointer'
              }`}
            >
              Yearly
              {billingPeriod === 'yearly' && (
                <span className="absolute -top-2 -right-2 bg-green-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                  {yearlySavings}% OFF
                </span>
              )}
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          {/* Free Tier */}
          <div className="glass-card p-6 sm:p-8 md:p-12 flex flex-col border-transparent rounded-2xl sm:rounded-[28px]">
            <div className="mb-6 sm:mb-8 md:mb-10">
              <span className="text-xs font-bold uppercase tracking-widest text-gray-500">Standard</span>
              <h3 className="text-3xl sm:text-4xl font-bold mt-2">Free</h3>
            </div>
            <ul className="space-y-3 sm:space-y-4 md:space-y-5 mb-8 sm:mb-10 md:mb-12 flex-grow">
              <li className="flex items-center gap-3 sm:gap-4 text-sm sm:text-base text-gray-300">
                <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0"><Check className="w-2.5 h-2.5 sm:w-3 sm:h-3" /></div>
                Floating YouTube Player
              </li>
              <li className="flex items-center gap-3 sm:gap-4 text-sm sm:text-base text-gray-300">
                <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0"><Check className="w-2.5 h-2.5 sm:w-3 sm:h-3" /></div>
                Playback Controls
              </li>
              <li className="flex items-center gap-3 sm:gap-4 text-sm sm:text-base text-gray-600 line-through">
                <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full flex-shrink-0"></div>
                Browse & Discover Videos
              </li>
              <li className="flex items-center gap-3 sm:gap-4 text-sm sm:text-base text-gray-600 line-through">
                <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full flex-shrink-0"></div>
                Quick Video Search
              </li>
              <li className="flex items-center gap-3 sm:gap-4 text-sm sm:text-base text-gray-600 line-through">
                <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full flex-shrink-0"></div>
                Privacy Mode
              </li>
            </ul>
            <div className="mt-auto mb-3 sm:mb-4">
              <button 
                className="block w-full py-3 sm:py-4 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 text-center text-sm sm:text-base font-bold hover:bg-white/10 transition-all cursor-pointer"
                onClick={handleFreeInstall}
              >
                Install Free
              </button>
            </div>
            <div className="h-[18px] sm:h-[20px]"></div>
          </div>

          {/* Premium Tier */}
          <div className="glass-card p-6 sm:p-8 md:p-12 flex flex-col border-[#E63946]/20 relative rounded-2xl sm:rounded-[28px] h-full">
            <div className="absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2 bg-[#E63946] text-white text-[9px] sm:text-[10px] font-bold px-4 sm:px-6 py-1.5 sm:py-2 rounded-full uppercase tracking-widest shadow-xl shadow-[#E63946]/40">
              Highly Recommended
            </div>
            <div className="mb-6 sm:mb-8 md:mb-10">
              <span className="text-xs font-bold uppercase tracking-widest text-[#E63946]">Full Access</span>
              <div className="mt-2">
                {billingPeriod === 'yearly' ? (
                  <>
                    {/* Yearly Price */}
                    <div className="flex items-baseline gap-2">
                      <h3 className="text-3xl sm:text-4xl font-bold">${yearlyPrice.toFixed(2)}</h3>
                      <span className="text-sm sm:text-base text-gray-500">/year</span>
                      <span className="ml-2 bg-green-500/20 text-green-400 text-[10px] sm:text-xs font-bold px-2 py-0.5 rounded-full">
                        {yearlySavings}% OFF
                      </span>
                    </div>
                    <div className="flex items-center gap-2 mt-1.5">
                      <span className="text-xs sm:text-sm text-gray-500 line-through">
                        ${(monthlyPrice * 12).toFixed(2)}/year
                      </span>
                      <span className="text-xs sm:text-sm text-gray-400">or</span>
                      <span className="text-xs sm:text-sm text-gray-400">${monthlyPrice.toFixed(2)}/mo</span>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Monthly Price */}
                    <div className="flex items-baseline gap-2">
                      <h3 className="text-3xl sm:text-4xl font-bold">${monthlyPrice.toFixed(2)}</h3>
                      <span className="text-sm sm:text-base text-gray-500">/mo</span>
                    </div>
                    <div className="flex items-center gap-2 mt-1.5">
                      <span className="text-xs sm:text-sm text-gray-400">or</span>
                      <span className="text-xs sm:text-sm text-green-400 font-medium">
                        ${yearlyPrice.toFixed(2)}/year
                      </span>
                      <span className="text-xs sm:text-sm text-gray-500">(Save {yearlySavings}%)</span>
                    </div>
                  </>
                )}
              </div>
            </div>
            <ul className="space-y-3 sm:space-y-4 md:space-y-5 mb-8 sm:mb-10 md:mb-12 flex-grow">
              <li className="flex items-center gap-3 sm:gap-4 text-sm sm:text-base text-white">
                <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#E63946]/20 flex items-center justify-center flex-shrink-0"><Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#E63946]" /></div>
                <b>Browse & Discover Videos</b>
              </li>
              <li className="flex items-center gap-3 sm:gap-4 text-sm sm:text-base text-white">
                <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#E63946]/20 flex items-center justify-center flex-shrink-0"><Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#E63946]" /></div>
                <b>Quick Video Search</b>
              </li>
              <li className="flex items-center gap-3 sm:gap-4 text-sm sm:text-base text-white">
                <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#E63946]/20 flex items-center justify-center flex-shrink-0"><Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#E63946]" /></div>
                <b>Privacy Mode</b>
              </li>
              <li className="flex items-center gap-3 sm:gap-4 text-sm sm:text-base text-white">
                <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#E63946]/20 flex items-center justify-center flex-shrink-0"><Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#E63946]" /></div>
                Priority Support
              </li>
            </ul>
            <div className="mt-auto">
              <div className="space-y-3 mb-3 sm:mb-4">
                <button 
                  className="block w-full py-3 sm:py-4 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 text-center text-sm sm:text-base font-bold hover:bg-white/10 transition-all cursor-pointer"
                onClick={handleTrialInstall}
               >
                  Start 7-Day Free Trial
                </button>
                <button 
                  onClick={handlePremiumInstall}
                  className="block bg-[#E63946] w-full py-4 sm:py-5 rounded-xl sm:rounded-2xl text-center text-sm sm:text-base font-bold shadow-lg shadow-[#E63946]/20 transition-all hover:brightness-110 hover:translate-y-[-2px] cursor-pointer"
                >
                  Unlock Premium Now
                </button>
              </div>
            </div>
            <p className="text-center text-[9px] sm:text-[10px] text-gray-500 flex items-center justify-center gap-1">
              <ShieldCheck className="w-2.5 h-2.5 sm:w-3 sm:h-3" /> Secure Stripe Payment
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
