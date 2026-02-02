import React from "react";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Pin, Keyboard, ArrowRight, Sparkles } from "lucide-react";

export const metadata = {
  title: "Welcome to Notic",
  description:
    "You've installed Notic. Pin the extension or use the omnibox to open your floating note from anywhere.",
};

export default function WelcomePage() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] selection:bg-[var(--accent-light)]">
      <Header />

      <main>
        {/* Hero – welcome message */}
        <section className="pt-32 sm:pt-40 pb-16 sm:pb-20 px-4 sm:px-6 overflow-hidden relative">
          <div
            className="absolute inset-0 -z-10 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 80% 50% at 50% 20%, rgba(79, 70, 229, 0.06) 0%, transparent 60%)",
            }}
          />
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[var(--accent-light)] mb-6">
              <Sparkles className="text-[var(--accent)] w-7 h-7" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-4 tracking-tight">
              Welcome to Notic
            </h1>
            <p className="text-[var(--text-muted)] text-lg sm:text-xl max-w-xl mx-auto leading-relaxed">
              Your note now floats over every tab. Here&apos;s how to open it whenever you need it.
            </p>
          </div>
        </section>

        {/* Two ways to open – pin + omnibox */}
        <section className="bento-section pb-20 sm:pb-28 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto space-y-6">
            {/* Pin the extension */}
            <div className="bento-card card rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row gap-6 sm:gap-8 items-start">
              <div className="w-12 h-12 rounded-2xl bg-[var(--accent-light)] flex items-center justify-center shrink-0">
                <Pin className="text-[var(--accent)] w-6 h-6" />
              </div>
              <div className="flex-1 min-w-0">
                <h2 className="text-xl sm:text-2xl font-semibold text-[var(--text-primary)] mb-2">
                  Pin Notic to the toolbar
                </h2>
                <p className="text-[var(--text-muted)] text-sm sm:text-base leading-relaxed mb-4">
                  Click the puzzle piece in Chrome&apos;s toolbar, find Notic, then click the pin icon so it stays visible. One click and your note opens.
                </p>
                <p className="text-sm text-[var(--text-secondary)]">
                  Chrome toolbar → Extensions (puzzle) → Notic → Pin
                </p>
              </div>
            </div>

            {/* Omnibox shortcut */}
            <div className="bento-card card rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row gap-6 sm:gap-8 items-start">
              <div className="w-12 h-12 rounded-2xl bg-[var(--accent-light)] flex items-center justify-center shrink-0">
                <Keyboard className="text-[var(--accent)] w-6 h-6" />
              </div>
              <div className="flex-1 min-w-0">
                <h2 className="text-xl sm:text-2xl font-semibold text-[var(--text-primary)] mb-2">
                  Open from the address bar
                </h2>
                <p className="text-[var(--text-muted)] text-sm sm:text-base leading-relaxed mb-4">
                  Type the Notic keyword in the omnibox, then press Space and Enter to open your note from anywhere.
                </p>
                <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[var(--bg-tertiary)] border border-[var(--border-primary)] font-mono text-sm text-[var(--text-primary)]">
                  <kbd className="font-semibold text-[var(--accent)]">nl</kbd>
                  <span className="text-[var(--text-muted)]">+</span>
                  <kbd>Space</kbd>
                  <span className="text-[var(--text-muted)]">+</span>
                  <kbd>Enter</kbd>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA – landing page */}
        <section className="pb-24 sm:pb-32 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-[var(--text-muted)] text-base sm:text-lg mb-6">
              Learn more about features, sync, and pricing.
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-[var(--accent)] text-white px-6 py-3 rounded-xl sm:rounded-2xl text-base font-semibold hover:bg-[var(--accent-hover)] transition-colors shadow-lg shadow-[var(--accent)]/20"
            >
              Visit Notic home
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
