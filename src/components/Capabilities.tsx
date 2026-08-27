import React, { useState } from 'react';
import { ArrowUpRight, Check, ChevronRight, Layers, Sparkles } from 'lucide-react';
import { CAPABILITIES } from '../data/portfolioData';
import { CapabilityCategory } from '../types';

export const Capabilities: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<CapabilityCategory | null>(null);

  return (
    <section
      id="skills"
      className="py-20 md:py-32 bg-[#F2F1ED] border-b border-[#111111] relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#111111]">
          <div className="font-mono text-xs font-bold tracking-widest text-[#E52B20] flex items-center gap-2 uppercase">
            <span>02 — CAPABILITIES</span>
          </div>
          <div className="font-mono text-[11px] text-[#555555]">
            [STACK &amp; EXPERTISE]
          </div>
        </div>

        {/* Section Heading & Subtitle */}
        <div className="pt-8 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase leading-[0.95] text-[#111111]">
              WHAT I<br />
              <span className="text-[#E52B20]">WORK WITH</span>
            </h2>
          </div>
          <p className="font-mono text-xs text-[#555555] max-w-md">
            Engineered competencies across cloud infrastructure, declarative orchestration, operating systems, and backend automation.
          </p>
        </div>

        {/* High Density Capabilities Table / Rows */}
        <div className="mt-4 border-t border-[#111111]">
          {CAPABILITIES.map((cap) => {
            const isSelected = selectedCategory?.number === cap.number;
            return (
              <div
                key={cap.number}
                onClick={() => setSelectedCategory(isSelected ? null : cap)}
                className={`group border-b border-[#111111] py-5 px-4 sm:px-6 transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-[#111111] text-[#F2F1ED]'
                    : 'bg-[#F2F1ED] hover:bg-white text-[#111111]'
                }`}
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3">
                  {/* Left: Number & Category */}
                  <div className="flex items-center gap-4 min-w-[240px]">
                    <span
                      className={`font-mono text-xs sm:text-sm font-bold ${
                        isSelected ? 'text-[#E52B20]' : 'text-[#E52B20]'
                      }`}
                    >
                      {cap.number}
                    </span>
                    <h3 className="text-lg sm:text-xl font-black uppercase tracking-tight">
                      {cap.category}
                    </h3>
                  </div>

                  {/* Center: Technologies list */}
                  <div className="flex-1 lg:px-6">
                    <p
                      className={`font-mono text-xs tracking-wide ${
                        isSelected ? 'text-[#DCD9D0]' : 'text-[#444444] group-hover:text-[#111111]'
                      }`}
                    >
                      {cap.technologies}
                    </p>
                  </div>

                  {/* Right: High Density Tag & Expand Trigger */}
                  <div className="flex items-center gap-2.5 self-start lg:self-center">
                    <span
                      className={`font-mono text-[10px] font-bold px-2 py-0.5 uppercase tracking-wider border ${
                        isSelected
                          ? 'bg-[#E52B20] text-[#F2F1ED] border-[#E52B20]'
                          : 'border-[#111111] bg-white text-[#111111]'
                      }`}
                    >
                      {cap.tag}
                    </span>
                    <div
                      className={`w-6 h-6 flex items-center justify-center border ${
                        isSelected
                          ? 'border-[#E52B20] text-[#E52B20] rotate-90'
                          : 'border-[#111111] text-[#111111]'
                      }`}
                    >
                      <ChevronRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>

                {/* Expanded Capability Detail */}
                {isSelected && (
                  <div className="mt-5 pt-4 border-t border-[#333333] space-y-3 text-xs font-mono">
                    <p className="text-[#CCCCCC] leading-relaxed max-w-3xl">
                      {cap.description}
                    </p>
                    <div className="flex flex-wrap gap-2 pt-1">
                      {cap.techList.map((t, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 bg-[#222222] border border-[#444444] text-[#F2F1ED] flex items-center gap-1.5 text-[11px]"
                        >
                          <Check className="w-3 h-3 text-[#E52B20]" />
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Architecture Checklist Note */}
        <div className="mt-8 p-4 border border-[#111111] bg-[#111111] text-[#F2F1ED] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-[#E52B20] animate-pulse" />
            <span className="font-mono text-xs text-[#DCD9D0]">
              Continuous engineering stack expansion: AWS Bedrock, Infrastructure as Code, CI/CD, Zero-Trust IAM.
            </span>
          </div>
          <a
            href="#projects"
            className="font-mono text-xs text-[#E52B20] hover:underline flex items-center gap-1 shrink-0"
          >
            <span>See practical implementations</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>
      </div>
    </section>
  );
};
