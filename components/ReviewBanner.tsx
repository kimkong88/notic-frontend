'use client';

import React, { useState } from 'react';
import { X, AlertCircle } from 'lucide-react';

export default function ReviewBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-6 sm:mb-8 relative z-10">
      <div className="glass-card border-[#E63946]/30 rounded-xl sm:rounded-2xl p-4 sm:p-5 flex items-center gap-3 sm:gap-4">
        <div className="flex-shrink-0">
          <AlertCircle className="w-5 h-5 sm:w-6 sm:h-6 text-[#E63946]" />
        </div>
        <div className="flex-grow">
          <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
            <span className="font-semibold text-[#E63946]">Under Review:</span> Floatify is currently being reviewed and will be available very soon!
          </p>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="flex-shrink-0 text-gray-400 hover:text-white transition-colors cursor-pointer"
          aria-label="Dismiss banner"
        >
          <X className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </div>
    </div>
  );
}
