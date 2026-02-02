"use client";

import React from "react";
import { Chrome } from "lucide-react";
import { track } from "@vercel/analytics";

const baseButtonClass =
  "inline-flex items-center justify-center gap-2 sm:gap-3 bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white px-6 sm:px-8 py-4 sm:py-5 rounded-xl sm:rounded-2xl text-base sm:text-lg font-semibold transition-colors shadow-sm hover:shadow-md cursor-pointer w-full sm:w-auto";

export default function HeroCTA({ className = "" }: { className?: string }) {
  const handleInstall = () => {
    track("install");
  };

  return (
    <a
      href="/download"
      onClick={handleInstall}
      className={`${baseButtonClass} ${className}`.trim()}
    >
      <Chrome className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" />
      <span className="whitespace-nowrap">Add to Chrome — Free</span>
    </a>
  );
}
