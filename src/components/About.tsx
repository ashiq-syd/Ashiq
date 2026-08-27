import React from 'react';
import { ArrowRight, CheckCircle2, Terminal, Shield, Layers, Cloud } from 'lucide-react';
import { PERSONAL_INFO, STATS } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section
      id="about"
      className="py-20 md:py-32 bg-[#F2F1ED] border-b border-[#111111] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Numbering */}
        <div className="flex items-center justify-between pb-6 border-b border-[#111111]">
          <div className="font-mono text-xs sm:text-sm font-bold tracking-widest text-[#E52B20] flex items-center gap-2">
            <span>01</span>
            <span className="text-[#111111]">/</span>
            <span className="text-[#111111]">ABOUT</span>
          </div>
          <div className="font-mono text-xs text-[#555555]">
            [SYED_ASHIQ.PROFILE]
          </div>
        </div>

        {/* Two-Column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 pt-10 items-start">
          {/* Big Editorial Heading & Code Block */}
          <div className="lg:col-span-5 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#111111] pb-8 lg:pb-0 lg:pr-8 space-y-6">
            <div>
              <div className="text-[10px] font-mono font-bold text-[#E52B20] mb-3 uppercase tracking-wider">
                01 — ABOUT
              </div>
              <h2 className="text-4xl sm:text-5xl font-black leading-none uppercase mb-4 text-[#111111]">
                HELLO.<br />
                I BUILD<br />
                <span className="text-[#E52B20]">SYSTEMS.</span>
              </h2>

              <p className="text-xs sm:text-sm leading-relaxed text-[#333333] font-medium mb-5">
                I&apos;m Syed Ashiq, an Information Technology undergraduate at SRM Institute of Science and Technology focused on AWS cloud computing, infrastructure automation, and secure architecture.
              </p>

              {/* High Density Code Block */}
              <div className="bg-[#111111] text-[#F2F1ED] p-4 font-mono text-[11px] border-l-4 border-[#E52B20] leading-relaxed shadow-sm">
                <span className="text-blue-400">const</span> <span className="text-amber-400">ASHIQ</span> = &#123;<br />
                &nbsp;&nbsp;focus: [<span className="text-emerald-400">&apos;AWS&apos;</span>, <span className="text-emerald-400">&apos;DevOps&apos;</span>],<br />
                &nbsp;&nbsp;iac: [<span className="text-emerald-400">&apos;Terraform&apos;</span>],<br />
                &nbsp;&nbsp;role: <span className="text-emerald-400">&apos;Solutions Architect&apos;</span><br />
                &#125;;
              </div>
            </div>

            <div className="flex justify-between border-t border-[#111111] pt-4 font-mono">
              <div>
                <div className="text-[10px] text-[#777777] uppercase font-bold">Education</div>
                <div className="text-xs font-bold text-[#111111]">B.Tech IT — SRMIST &apos;27</div>
              </div>
              <div className="text-right">
                <div className="text-[10px] text-[#777777] uppercase font-bold">Location</div>
                <div className="text-xs font-bold text-[#111111]">Tamil Nadu, IN</div>
              </div>
            </div>
          </div>

          {/* Paragraphs and Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4 text-sm sm:text-base text-[#222222] leading-relaxed">
              <p className="font-semibold text-base sm:text-lg text-[#111111]">
                {PERSONAL_INFO.aboutP1}
              </p>
              <p className="text-[#444444] text-xs sm:text-sm leading-relaxed">
                {PERSONAL_INFO.aboutP2}
              </p>
            </div>

            {/* Quick architectural focus blocks */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-4 border border-[#111111] bg-white hover:bg-[#111111] hover:text-[#F2F1ED] transition-colors group">
                <Cloud className="w-4 h-4 text-[#E52B20] mb-2" />
                <h4 className="font-mono text-xs font-bold uppercase tracking-wider mb-1">
                  AWS Cloud
                </h4>
                <p className="text-[11px] text-[#666666] group-hover:text-[#CCCCCC] leading-normal font-mono">
                  EC2, S3, VPC, IAM, Bedrock foundation models.
                </p>
              </div>

              <div className="p-4 border border-[#111111] bg-white hover:bg-[#111111] hover:text-[#F2F1ED] transition-colors group">
                <Layers className="w-4 h-4 text-[#E52B20] mb-2" />
                <h4 className="font-mono text-xs font-bold uppercase tracking-wider mb-1">
                  Automation
                </h4>
                <p className="text-[11px] text-[#666666] group-hover:text-[#CCCCCC] leading-normal font-mono">
                  Terraform declarative state, Linux &amp; Docker deployments.
                </p>
              </div>

              <div className="p-4 border border-[#111111] bg-white hover:bg-[#111111] hover:text-[#F2F1ED] transition-colors group">
                <Shield className="w-4 h-4 text-[#E52B20] mb-2" />
                <h4 className="font-mono text-xs font-bold uppercase tracking-wider mb-1">
                  Architecture
                </h4>
                <p className="text-[11px] text-[#666666] group-hover:text-[#CCCCCC] leading-normal font-mono">
                  Multi-AZ resilience, NACLs, ALB, and Auto Scaling.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Factual Statistics Strip */}
        <div className="mt-16 pt-12 border-t border-[#111111]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {STATS.map((stat, idx) => (
              <div
                key={idx}
                className="p-6 border border-[#111111] bg-[#F2F1ED] hover:border-[#E52B20] transition-colors relative"
              >
                <div className="font-mono text-[10px] sm:text-xs text-[#666666] tracking-widest uppercase mb-1">
                  {stat.label}
                </div>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-mono text-[#111111] tracking-tight">
                  {stat.value}
                </div>
                <div className="mt-2 text-xs font-mono text-[#444444] border-t border-[#111111]/10 pt-2">
                  {stat.sub}
                </div>
                <div className="absolute top-2 right-2 font-mono text-[10px] text-[#E52B20]">
                  0{idx + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
