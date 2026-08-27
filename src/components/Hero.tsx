import React from 'react';
import { ArrowDownRight, ArrowUpRight, Cloud, ShieldCheck, Terminal, Cpu } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { TerminalBlock } from './TerminalBlock';

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-16 md:py-32 flex flex-col justify-between bg-[#F2F1ED] bg-tech-grid border-b border-[#111111]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-center">
        {/* Top Metadata Row */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#111111] mb-8">
          <div className="flex items-center space-x-2.5">
            <div className="w-2 h-2 rounded-full bg-[#E52B20] shadow-[0_0_8px_#E52B20]" />
            <span className="text-[10px] sm:text-xs font-mono font-bold tracking-widest uppercase text-[#111111]">
              AVAILABLE FOR OPPORTUNITIES — CLOUD &amp; DEVOPS ENGINEER
            </span>
          </div>

          <div className="flex items-center gap-3 sm:gap-4 font-mono text-[11px] text-[#555555]">
            <span className="hd-badge">AWS CLOUD</span>
            <span className="hd-badge">TERRAFORM · IaC</span>
            <span className="hd-badge bg-[#111111] text-[#F2F1ED] border-[#111111]">B.TECH IT &apos;27</span>
          </div>
        </div>

        {/* Massive High Density Hero Headline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          <div className="lg:col-span-7 space-y-5">
            <div className="space-y-0 tracking-tighter select-none">
              <h1 className="text-6xl sm:text-8xl md:text-9xl xl:text-[130px] font-black uppercase leading-[0.82] text-[#111111]">
                CLOUD
              </h1>
              <h1 className="text-6xl sm:text-8xl md:text-9xl xl:text-[130px] font-black uppercase leading-[0.82] text-[#111111]">
                DEVOPS
              </h1>
              <h1 className="text-6xl sm:text-8xl md:text-9xl xl:text-[130px] font-black uppercase leading-[0.82] text-stroke-2 flex items-center">
                <span>ENGINEER</span>
                <span className="text-[#E52B20] text-stroke-none ml-1 animate-cursor-blink">_</span>
              </h1>
            </div>

            {/* Supporting Bio Text */}
            <p className="text-sm sm:text-base md:text-lg text-[#333333] max-w-xl font-medium leading-relaxed pt-2">
              &quot;{PERSONAL_INFO.heroTagline}&quot;
            </p>

            {/* CTAs */}
            <div className="pt-3 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                id="hero-cta-work"
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#111111] text-[#F2F1ED] font-mono text-xs tracking-wider font-bold border border-[#111111] hover:bg-[#E52B20] hover:border-[#E52B20] transition-all"
              >
                <span>VIEW MY WORK</span>
                <ArrowDownRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
              </a>

              <a
                href="#contact"
                id="hero-cta-contact"
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 bg-transparent text-[#111111] font-mono text-xs tracking-wider font-bold border border-[#111111] hover:bg-[#111111] hover:text-[#F2F1ED] transition-all"
              >
                <span>GET IN TOUCH</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-[#E52B20] group-hover:text-[#F2F1ED]" />
              </a>
            </div>

            {/* Factual Sub-headline & Tag */}
            <div className="pt-2 flex flex-wrap items-center gap-2 text-[11px] font-mono text-[#666666]">
              <span className="hd-badge">
                SRM IST IT &apos;27
              </span>
              <span>•</span>
              <span className="hd-badge bg-[#EAE8E2]">
                AWS CERTIFIED SOLUTIONS ARCHITECT
              </span>
            </div>
          </div>

          {/* Right Column: Interactive Terminal Block */}
          <div className="lg:col-span-5 w-full">
            <div className="relative">
              <div className="absolute -top-2.5 -right-2.5 w-full h-full border border-[#111111] pointer-events-none hidden sm:block" />
              <TerminalBlock interactive={true} />
            </div>
          </div>
        </div>
      </div>

      {/* Hero Bottom Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-5 border-t border-[#111111] font-mono text-xs">
          <div className="p-3 border-r border-[#111111]/20">
            <span className="text-[#888888] block text-[10px] uppercase font-bold">Stack</span>
            <span className="font-bold text-[#111111] text-xs">AWS &amp; DEVOPS</span>
          </div>
          <div className="p-3 border-r border-[#111111]/20">
            <span className="text-[#888888] block text-[10px] uppercase font-bold">Infrastructure</span>
            <span className="font-bold text-[#111111] text-xs">TERRAFORM / IaC</span>
          </div>
          <div className="p-3 border-r border-[#111111]/20">
            <span className="text-[#888888] block text-[10px] uppercase font-bold">Backend &amp; AI</span>
            <span className="font-bold text-[#111111] text-xs">PYTHON / BEDROCK</span>
          </div>
          <div className="p-3">
            <span className="text-[#888888] block text-[10px] uppercase font-bold">Philosophy</span>
            <span className="font-bold text-[#E52B20] text-xs">SECURITY FIRST</span>
          </div>
        </div>
      </div>
    </section>
  );
};
