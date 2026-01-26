import React from 'react';
import { ExternalLink } from 'lucide-react';
import Link from 'next/link';
import Logo from '../Logo';

export default function Footer() {
  return (
    <footer className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 border-t border-white/5 opacity-50 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6">
        <Link href="/" className="flex items-center gap-2 sm:gap-3 grayscale">
          <Logo size={16} containerClassName="w-7 h-7 sm:w-8 sm:h-8 rounded-lg" />
          <span className="text-lg sm:text-xl font-bold tracking-tight">Floatify</span>
        </Link>
        <p className="text-center md:text-left text-xs sm:text-sm">&copy; 2026 Floatify Player. Not affiliated with YouTube or Google.</p>
        <div className="flex gap-4 sm:gap-6 md:gap-8 flex-wrap justify-center">
          <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
          <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
          <a href="mailto:support@floatify.app" className="hover:text-white transition-colors flex items-center gap-1.5 sm:gap-2">
            Support <ExternalLink className="w-3 h-3 sm:w-3 sm:h-3" />
          </a>
        </div>
      </div>
    </footer>
  );
}
