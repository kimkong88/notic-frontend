'use client';

import React, { useState } from 'react';
import { Chrome } from 'lucide-react';
import ReviewModal from './ReviewModal';
import { track } from '@vercel/analytics';

export default function HeroCTA() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleInstall = () => {
    track('install');
    setIsModalOpen(true);
  }

  return (
    <>
      <button
        onClick={handleInstall}
        className="bg-[#E63946] px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-xl sm:rounded-2xl text-sm sm:text-base md:text-lg font-bold flex items-center justify-center gap-2 sm:gap-3 transition-all hover:brightness-110 hover:translate-y-[-2px] hover:shadow-[0_12px_24px_rgba(230,57,70,0.3)] cursor-pointer"
      >
        <Chrome size={20} className="sm:w-6 sm:h-6 w-5 h-5" />
        <span className="whitespace-nowrap">Add to Chrome — Free</span>
      </button>
      <ReviewModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
