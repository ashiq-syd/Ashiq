import React from 'react';
import { ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="main-footer"
      className="bg-[#111111] text-[#F2F1ED] py-12 border-t-2 border-[#111111] font-mono text-xs"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#2A2A2A]">
          {/* Left: Identifier */}
          <div className="flex items-center gap-2 font-bold tracking-wider text-sm">
            <span className="w-2 h-2 rounded-full bg-[#E52B20]" />
            <span>{PERSONAL_INFO.identifier}</span>
          </div>

          {/* Center: Domain Focus */}
          <div className="text-[#888888] tracking-widest uppercase text-center">
            CLOUD · DEVOPS · AWS
          </div>

          {/* Right: Copyright & Back to Top */}
          <div className="flex items-center gap-4">
            <span className="text-[#888888]">© 2026</span>
            <button
              onClick={scrollToTop}
              title="Back to Top"
              className="p-2 bg-[#1C1C1C] text-[#F2F1ED] hover:bg-[#E52B20] border border-[#333333] transition-colors"
              aria-label="Scroll back to top of page"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Minimal Sub-line */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-[#555555]">
          <span>Built with zero templates. Space Grotesk &amp; DM Mono.</span>
          <span className="text-[#888888]">AWS Certified Solutions Architect — Associate</span>
        </div>
      </div>
    </footer>
  );
};
