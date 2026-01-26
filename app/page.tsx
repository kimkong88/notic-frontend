import React from 'react';
import { 
  Chrome, 
  Home, 
  Zap,
  ShieldCheck,
  Keyboard
} from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PricingSection from '@/components/PricingSection';

const CHROME_STORE_URL = "https://chrome.google.com/webstore";

export default function Page() {
  return (
    <div className="min-h-screen bg-[#0B0B0C] text-white selection:bg-[#E63946]/30">
      <Header />

      {/* Hero Section */}
      <header className="pt-24 sm:pt-32 md:pt-48 pb-12 sm:pb-16 md:pb-24 px-4 sm:px-6 relative overflow-hidden">
        {/* Abstract Background Glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full sm:w-[800px] md:w-[1000px] h-[400px] sm:h-[500px] md:h-[600px] bg-[#E63946]/10 blur-[80px] sm:blur-[100px] md:blur-[120px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto text-center relative z-10">          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 sm:mb-8 tracking-tighter">
            YouTube Mini Player, <br />
            <span className="gradient-text">Evolved</span>.
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-8 sm:mb-10 md:mb-12 leading-relaxed">
            The only floating player that lets you <b>Search</b>, <b>Discover Videos</b>, and <b>Multitask</b> without switching tabs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-12 sm:mb-16 md:mb-24">
            <a 
              href={CHROME_STORE_URL} 
              className="bg-[#E63946] px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-xl sm:rounded-2xl text-sm sm:text-base md:text-lg font-bold flex items-center justify-center gap-2 sm:gap-3 transition-all hover:brightness-110 hover:translate-y-[-2px] hover:shadow-[0_12px_24px_rgba(230,57,70,0.3)]"
            >
              <Chrome size={20} className="sm:w-6 sm:h-6 w-5 h-5" />
              <span className="whitespace-nowrap">Add to Chrome — Free</span>
            </a>
            <a 
              href="#features" 
              className="bg-white/5 border border-white/10 hover:bg-white/10 px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-xl sm:rounded-2xl text-sm sm:text-base md:text-lg font-bold transition-all"
            >
              How it works
            </a>
          </div>

          {/* Animated Demo Frame */}
          <div className="max-w-5xl mx-auto floating-ui">
            <div className="glass-card p-1.5 sm:p-2 rounded-2xl sm:rounded-[28px] relative">
              <div className="w-full h-6 sm:h-8 flex items-center px-3 sm:px-4 gap-1.5 sm:gap-2 border-b border-white/5 mb-1.5 sm:mb-2">
                <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#E63946]/50"></div>
                <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-yellow-500/50"></div>
                <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-green-500/50"></div>
                <div className="flex-grow"></div>
                <div className="w-24 sm:w-32 h-2 sm:h-3 bg-white/5 rounded-full"></div>
              </div>
              <div className="aspect-video bg-[#121214] rounded-xl sm:rounded-2xl relative overflow-hidden">
                <video 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src="/videos/demo_2.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Value Prop: The 4 Pillars */}
      <section id="features" className="py-16 sm:py-24 md:py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 md:gap-16">
            <div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#E63946]/10 flex items-center justify-center mb-4 sm:mb-6">
                <Zap className="text-[#E63946] w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Zero-Tab Workflow</h3>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed">Search and discover your next video without leaving your document or code editor. No tab switching required.</p>
            </div>
            <div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#E63946]/10 flex items-center justify-center mb-4 sm:mb-6">
                <Home className="text-[#E63946] w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Your Feed, Anywhere</h3>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed">Your personalized YouTube recommendations in a tiny, movable window. Browse and discover videos without opening YouTube.</p>
            </div>
            <div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#E63946]/10 flex items-center justify-center mb-4 sm:mb-6">
                <ShieldCheck className="text-[#E63946] w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Stealth by Design</h3>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed">Built for the office and library. Privacy Mode blends the player into your background with adjustable opacity and blur.</p>
            </div>
            <div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#E63946]/10 flex items-center justify-center mb-4 sm:mb-6">
                <Keyboard className="text-[#E63946] w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Keyboard-First Controls</h3>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed">Control everything without your mouse. Arrow keys to seek, toggle captions, adjust speed—all at your fingertips.</p>
            </div>
          </div>
        </div>
      </section>

      <PricingSection />

      <Footer />
    </div>
  );
}
