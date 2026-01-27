'use client';

import React, { useState } from 'react';
import Logo from '../Logo';
import Link from 'next/link';
import ReviewModal from '../ReviewModal';

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <nav className="fixed w-full z-50 top-0 left-0 bg-black/40 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 sm:gap-3">
            <Logo containerClassName="w-8 h-8 sm:w-10 sm:h-10" size={20} />
            <span className="text-xl sm:text-2xl font-bold tracking-tight">Floatify</span>
          </Link>
          
          <div className="hidden md:flex gap-6 lg:gap-8 text-sm font-medium text-gray-400">
            <a href="#features" className="hover:text-[#E63946] transition-colors">Features</a>
            <a href="#pricing" className="hover:text-[#E63946] transition-colors">Pricing</a>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="hover:text-[#E63946] transition-colors cursor-pointer"
            >
              Install
            </button>
          </div>

          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-[#E63946] hover:brightness-110 px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all hover:translate-y-[-2px] hover:shadow-[0_12px_24px_rgba(230,57,70,0.3)] cursor-pointer"
          >
            Get Premium
          </button>
        </div>
      </nav>
      <ReviewModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
