"use client";

import React, { useState, useEffect } from "react";
import Logo from "../Logo";
import Link from "next/link";
import { Chrome, LogOut } from "lucide-react";
import { useAppAuth } from "@/components/context/AppAuthContext";

/**
 * Header for (app) route group: billing, published notes.
 * Glassy style; no shadow when at top, border + shadow when scrolled (matches landing).
 */
export default function AppHeader() {
  const { isLoggedIn } = useAppAuth();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 border-b py-4 transition-all duration-300 bg-[var(--bg-primary)]/60 backdrop-blur-xl ${
        scrolled
          ? "border-[var(--border-primary)] shadow-sm"
          : "border-transparent"
      }`}
    >
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
            className="inline-flex items-center gap-2 bg-[var(--accent)] text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-[var(--accent-hover)] transition-colors shadow-lg shadow-[var(--accent)]/20"
          >
            <Chrome className="w-4 h-4" /> Add to Chrome
          </Link>
        )}
      </div>
    </nav>
  );
}
