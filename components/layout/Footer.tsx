import React from "react";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import Logo from "../Logo";

export default function Footer() {
  return (
    <footer className="py-12 sm:py-16 border-t border-[var(--border-primary)] bg-[var(--bg-secondary)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8">
          <Link
            href="/"
            className="flex items-center gap-2 text-[var(--text-primary)] hover:opacity-80 transition-opacity"
          >
            <Logo compact size={16} containerClassName="w-7 h-7" />
            <span className="text-lg font-semibold tracking-tight">Notic</span>
          </Link>
          <p className="text-center md:text-left text-sm text-[var(--text-muted)]">
            &copy; {new Date().getFullYear()} Notic. Your notes, your devices.
          </p>
          <div className="flex gap-6 md:gap-8 text-sm text-[var(--text-muted)]">
            <Link
              href="/privacy"
              className="hover:text-[var(--text-primary)] transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="hover:text-[var(--text-primary)] transition-colors"
            >
              Terms
            </Link>
            <a
              href="mailto:hello@getnotic.io"
              className="hover:text-[var(--text-primary)] transition-colors inline-flex items-center gap-1.5"
            >
              Support <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
