"use client";

import React from "react";
import { Chrome, Sparkles } from "lucide-react";
import { APP_URL, DOWNLOAD_URL } from "@/lib/site";

declare global {
  interface Window {
    umami?: { track: (event: string, data?: object) => void };
  }
}

const primaryClass =
  "inline-flex items-center justify-center gap-2 sm:gap-3 bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white px-6 sm:px-8 py-4 sm:py-5 rounded-xl sm:rounded-2xl text-base sm:text-lg font-semibold transition-colors shadow-sm hover:shadow-md w-full sm:w-auto";
const secondaryClass =
  "inline-flex items-center justify-center gap-2 sm:gap-3 bg-[var(--bg-secondary)] text-[var(--text-primary)] border border-[var(--border-primary)] hover:bg-[var(--bg-tertiary)] px-6 sm:px-8 py-4 sm:py-5 rounded-xl sm:rounded-2xl text-base sm:text-lg font-semibold transition-colors w-full sm:w-auto";

export default function HeroCTA({ className = "" }: { className?: string }) {
  const handleTryApp = () => {
    window.umami?.track("cta_try_app");
  };
  const handleChrome = () => {
    window.umami?.track("install");
  };

  return (
    <div className={`flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto ${className}`.trim()}>
      <a
        href={APP_URL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleTryApp}
        className={primaryClass}
      >
        <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" />
        <span className="whitespace-nowrap">Try Notic free</span>
      </a>
      <a
        href={DOWNLOAD_URL}
        onClick={handleChrome}
        className={secondaryClass}
      >
        <Chrome className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" />
        <span className="whitespace-nowrap">Add to Chrome</span>
      </a>
    </div>
  );
}
