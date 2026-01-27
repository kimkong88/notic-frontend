'use client';

import React from 'react';
import { X } from 'lucide-react';

interface ReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ReviewModal({ isOpen, onClose }: ReviewModalProps) {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
      
      {/* Modal */}
      <div 
        className="relative bg-[#0B0B0C] border border-white/10 rounded-2xl sm:rounded-[28px] p-6 sm:p-8 md:p-10 max-w-md w-full glass-card"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
            Coming Very Soon!
          </h2>
          
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-6 sm:mb-8">
            Floatify is currently under review and will be available very soon. 
            We&apos;re excited to share it with you!
          </p>

          <button
            onClick={onClose}
            className="bg-[#E63946] hover:brightness-110 px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl text-sm sm:text-base font-bold transition-all hover:translate-y-[-2px] hover:shadow-[0_12px_24px_rgba(230,57,70,0.3)] cursor-pointer"
          >
            Got it
          </button>
        </div>
      </div>
    </div>
  );
}
