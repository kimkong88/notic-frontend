"use client";

import React, { useState, useEffect } from "react";
import Logo from "../Logo";
import Link from "next/link";
import { Chrome, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b py-4 ${
        scrolled
          ? "bg-[var(--bg-primary)]/80 backdrop-blur-md border-[var(--border-primary)] shadow-sm"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 text-[var(--text-primary)] hover:opacity-90 transition-opacity"
        >
          <Logo containerClassName="w-10 h-10 shrink-0" size={22} />
          <span className="text-2xl font-bold tracking-tight">
            Notic
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-[var(--text-secondary)]">
          <a
            href="#features"
            className="hover:text-[var(--text-primary)] transition-colors"
          >
            Features
          </a>
          <a
            href="#features"
            className="hover:text-[var(--text-primary)] transition-colors"
          >
            Features
          </a>
          <a
            href="#pricing"
            className="hover:text-[var(--text-primary)] transition-colors"
          >
            Pricing
          </a>
        </div>

        <Link
          href="/download"
          className="hidden md:inline-flex items-center gap-2 bg-[var(--accent)] text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-[var(--accent-hover)] transition-colors shadow-lg shadow-[var(--accent)]/20"
        >
          <Chrome className="w-4 h-4" /> Add to Chrome
        </Link>

        <button
          type="button"
          className="md:hidden p-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-[var(--bg-primary)] border-t border-[var(--border-primary)] px-6 py-8 overflow-hidden"
          >
            <div className="flex flex-col gap-6 text-lg font-medium text-[var(--text-secondary)]">
              <a
                href="#features"
                onClick={() => setMobileOpen(false)}
                className="hover:text-[var(--text-primary)] transition-colors"
              >
                Features
              </a>
              <a
                href="#features"
                onClick={() => setMobileOpen(false)}
                className="hover:text-[var(--text-primary)] transition-colors"
              >
                Features
              </a>
              <a
                href="#pricing"
                onClick={() => setMobileOpen(false)}
                className="hover:text-[var(--text-primary)] transition-colors"
              >
                Pricing
              </a>
              <hr className="border-[var(--border-primary)]" />
              <Link
                href="/download"
                onClick={() => setMobileOpen(false)}
                className="w-full py-4 rounded-xl sm:rounded-2xl text-base font-semibold bg-[var(--accent)] text-white flex items-center justify-center gap-2 hover:bg-[var(--accent-hover)] transition-colors"
              >
                <Chrome className="w-5 h-5 shrink-0" /> Add to Chrome
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
