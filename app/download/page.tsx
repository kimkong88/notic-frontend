import React from "react";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Logo from "@/components/Logo";
import { Chrome } from "lucide-react";

export const metadata = {
  title: "Download Notic",
  description:
    "Notic – the note that floats over every tab. Coming soon to the Chrome Web Store.",
};

export default function DownloadPage() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] selection:bg-[var(--accent-light)] flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-24 sm:py-32">
        <div className="max-w-lg mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-[var(--accent-light)] mb-8">
            <Chrome className="w-10 h-10 sm:w-12 sm:h-12 text-[var(--accent)]" />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-4 tracking-tight">
            Coming soon
          </h1>
          <p className="text-lg sm:text-xl text-[var(--text-muted)] mb-10 leading-relaxed">
            Notic isn&apos;t on the Chrome Web Store yet. We&apos;re putting the finishing touches on the extension—your floating notes are almost here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-[var(--accent)] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[var(--accent-hover)] transition-colors"
            >
              <Logo containerClassName="w-7 h-7 shrink-0" size={18} />
              Back to Notic
            </Link>
            <Link
              href="/#features"
              className="inline-flex items-center text-[var(--text-secondary)] hover:text-[var(--text-primary)] font-medium transition-colors"
            >
              See what&apos;s coming
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
