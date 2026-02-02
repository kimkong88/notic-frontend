"use client";

import React from "react";
import Logo from "../Logo";
import Link from "next/link";
import { Chrome, LogOut } from "lucide-react";
import { useAppAuth } from "@/components/context/AppAuthContext";

/**
 * Header for (app) route group: billing, published notes.
 * Shows Sign out when logged in (OAuth or token); otherwise Get Notic CTA.
 */
export default function AppHeader() {
  const { isLoggedIn } = useAppAuth();

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

        {isLoggedIn ? (
          <Link
            href="/api/auth/logout"
            className="inline-flex items-center gap-2 text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
          >
            <LogOut className="w-4 h-4" /> Sign out
          </Link>
        ) : (
          <Link
            href="/download"
            className="inline-flex items-center gap-2 bg-[var(--accent)] text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-[var(--accent-hover)] transition-colors"
          >
            <Chrome className="w-4 h-4" /> Get Notic
          </Link>
        )}
      </div>
    </nav>
  );
}
