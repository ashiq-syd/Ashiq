import React from 'react';
import { Briefcase, Calendar, CheckCircle2, ChevronRight, MapPin } from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section
      id="experience"
      className="py-20 md:py-32 bg-[#F2F1ED] border-b border-[#111111] relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#111111]">
          <div className="font-mono text-xs font-bold tracking-widest text-[#E52B20] flex items-center gap-2 uppercase">
            <span>04 — EXPERIENCE</span>
          </div>
          <div className="font-mono text-[11px] text-[#555555]">
            [CAREER TIMELINE]
          </div>
        </div>

        {/* Section Heading */}
        <div className="pt-8 pb-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase leading-[0.95] text-[#111111]">
            HANDS-ON<br />
            <span className="text-[#E52B20]">EXPERIENCE</span>
          </h2>
        </div>

        {/* Editorial Timeline Container */}
        <div className="relative border-l-2 border-[#111111] ml-2 sm:ml-4 pl-6 sm:pl-8 space-y-8">
          {EXPERIENCES.map((exp, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline marker */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-2 w-3.5 h-3.5 rounded-full bg-[#111111] border-2 border-[#F2F1ED] group-hover:bg-[#E52B20] transition-colors" />

              {/* Experience Card */}
              <div className="border border-[#111111] bg-white p-6 hover:shadow-[4px_4px_0px_0px_rgba(17,17,17,1)] transition-all">
                {/* Meta header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-[#111111]/20 font-mono text-xs">
                  <span className="px-2 py-0.5 bg-[#111111] text-[#F2F1ED] font-bold tracking-wider inline-block w-fit text-[11px]">
                    {exp.role}
                  </span>
                  <div className="flex items-center gap-2 text-[#555555] text-xs">
                    <Calendar className="w-3.5 h-3.5 text-[#E52B20]" />
                    <span className="font-bold">{exp.duration}</span>
                  </div>
                </div>

                {/* Company Name */}
                <h3 className="mt-3 text-xl sm:text-2xl font-black uppercase tracking-tight text-[#111111]">
                  {exp.company}
                </h3>

                {/* Description */}
                <p className="mt-2 text-xs sm:text-sm text-[#333333] leading-relaxed">
                  &quot;{exp.description}&quot;
                </p>

                {/* Responsibilities list from resume */}
                <div className="mt-4 space-y-2 font-mono text-xs text-[#444444]">
                  <div className="text-[10px] font-bold uppercase text-[#111111] tracking-wider">
                    Key Workflows &amp; Contributions:
                  </div>
                  {exp.responsibilities.map((resp, rIdx) => (
                    <div key={rIdx} className="flex items-start gap-2 bg-[#F2F1ED] p-2.5 border border-[#111111]/20 text-[11px]">
                      <span className="text-[#E52B20] font-bold mt-0.5">▸</span>
                      <span className="leading-relaxed">{resp}</span>
                    </div>
                  ))}
                </div>

                {/* Applied Tags */}
                <div className="mt-4 pt-3 border-t border-[#111111]/20 flex flex-wrap gap-1.5">
                  {exp.techTags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 bg-[#111111] text-[#F2F1ED] font-mono text-[10px] font-bold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
