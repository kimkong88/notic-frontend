"use client";

import React, { useState } from "react";
import { Check, ShieldCheck } from "lucide-react";

declare global {
  interface Window {
    umami?: { track: (event: string, data?: object) => void };
  }
}

export default function PricingSection() {
  const [billingPeriod, setBillingPeriod] = useState<
    "monthly" | "yearly"
  >("monthly");

  const monthlyPrice = 3.99;
  const yearlyPrice = 29.99;
  const yearlySavings = 37; // vs 12 months at monthly

  const handleFreeInstall = () => {
    window.umami?.track("install");
    window.location.href = "/download";
  };

  const handleUpgrade = () => {
    window.umami?.track("upgrade_click");
    window.location.href = "/download#pricing";
  };

  return (
    <section
      id="pricing"
      className="py-16 sm:py-24 md:py-32 bg-[var(--bg-secondary)]"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] mb-3 sm:mb-4 tracking-tight">
            Simple pricing
          </h2>
          <p className="text-[var(--text-muted)] text-base sm:text-lg md:text-xl max-w-xl mx-auto leading-relaxed">
            One window free. Upgrade for unlimited windows and sync.
          </p>

          <div className="inline-flex items-center gap-1 p-1 mt-8 bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-full">
            <button
              type="button"
              onClick={() => setBillingPeriod("monthly")}
              className={`cursor-pointer px-4 sm:px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                billingPeriod === "monthly"
                  ? "bg-white text-[var(--text-primary)] shadow-sm border border-[var(--border-primary)]"
                  : "text-[var(--text-muted)] hover:text-[var(--text-secondary)]"
              }`}
            >
              Monthly
            </button>
            <button
              type="button"
              onClick={() => setBillingPeriod("yearly")}
              className={`cursor-pointer px-4 sm:px-6 py-2 rounded-full text-sm font-medium transition-colors relative ${
                billingPeriod === "yearly"
                  ? "bg-white text-[var(--text-primary)] shadow-sm border border-[var(--border-primary)]"
                  : "text-[var(--text-muted)] hover:text-[var(--text-secondary)]"
              }`}
            >
              Yearly
              <span className="ml-1.5 text-[10px] font-semibold text-emerald-600">
                Save {yearlySavings}%
              </span>
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
          {/* Free */}
          <div className="card rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex flex-col">
            <span className="text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)]">
              Personal
            </span>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[var(--text-primary)] mt-1 mb-6">
              Free
            </h3>
            <ul className="space-y-3 sm:space-y-4 flex-grow text-sm sm:text-base md:text-lg text-[var(--text-secondary)]">
              {[
                "One floating window",
                "Unlimited notes in browser",
                "Markdown, folders, images",
                "Works offline",
                "Export to .md",
              ].map((feature, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[var(--accent-light)] flex items-center justify-center">
                    <Check className="w-3 h-3 text-[var(--accent)]" />
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
            <button
              type="button"
              onClick={handleFreeInstall}
              className="mt-8 w-full py-4 sm:py-5 rounded-xl sm:rounded-2xl text-base sm:text-lg font-semibold border border-[var(--border-primary)] text-[var(--text-primary)] hover:bg-[var(--bg-secondary)] transition-colors cursor-pointer"
            >
              Add to Chrome — Free
            </button>
          </div>

          {/* Pro */}
          <div className="card rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex flex-col border-2 border-[var(--accent)] bg-[var(--bg-primary)] relative">
            <span className="absolute top-0 right-0 bg-[var(--accent)] text-white text-[10px] font-bold uppercase tracking-wider px-4 py-1.5 rounded-bl-xl rounded-tr-2xl">
              Pro
            </span>
            <span className="text-xs font-semibold uppercase tracking-wider text-[var(--accent)]">
              Unlimited sync
            </span>
            <div className="mt-1 mb-6 flex items-baseline gap-1">
              <span className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">
                ${billingPeriod === "yearly" ? yearlyPrice : monthlyPrice}
              </span>
              <span className="text-[var(--text-muted)] font-medium">
                /{billingPeriod === "yearly" ? "year" : "mo"}
              </span>
            </div>
            <ul className="space-y-3 sm:space-y-4 flex-grow text-sm sm:text-base md:text-lg text-[var(--text-secondary)]">
              {[
                "Everything in Free",
                "Unlimited floating windows",
                "Unlimited synced notes",
                "Notion & Obsidian integration",
                "Priority support",
              ].map((feature, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[var(--accent-light)] flex items-center justify-center">
                    <Check className="w-3 h-3 text-[var(--accent)]" />
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
            <button
              type="button"
              onClick={handleUpgrade}
              className="mt-8 w-full py-4 sm:py-5 rounded-xl sm:rounded-2xl text-base sm:text-lg font-semibold bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white transition-colors shadow-sm cursor-pointer"
            >
              Upgrade to Pro
            </button>
            <p className="mt-4 text-center text-xs text-[var(--text-muted)] flex items-center justify-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5" />
              Secure billing (Lemon Squeezy)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
