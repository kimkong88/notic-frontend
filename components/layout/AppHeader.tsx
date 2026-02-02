"use client";

import React from "react";
import Logo from "../Logo";
import Link from "next/link";
import { Chrome } from "lucide-react";

/**
 * Header for (app) route group: billing, published notes.
 * Simpler than marketing Header: logo, Billing, Get Notic CTA.
 */
export default function AppHeader() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-[var(--border-primary)] bg-[var(--bg-primary)] py-4">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 text-[var(--text-primary)] hover:opacity-90 transition-opacity"
        >
          <Logo containerClassName="w-10 h-10 shrink-0" size={22} />
          <span className="text-2xl font-bold tracking-tight">Notic</span>
        </Link>

        <div className="flex items-center gap-6">
          <Link
            href="/billing"
            className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
          >
            Billing
          </Link>
          <Link
            href="/download"
            className="inline-flex items-center gap-2 bg-[var(--accent)] text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-[var(--accent-hover)] transition-colors"
          >
            <Chrome className="w-4 h-4" /> Get Notic
          </Link>
        </div>
      </div>
    </nav>
  );
}
