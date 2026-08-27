import React, { useState } from 'react';
import { GraduationCap, Award, ExternalLink, ShieldCheck, CheckCircle2, Copy, Check } from 'lucide-react';
import { CREDENTIALS } from '../data/portfolioData';

export const Credentials: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyVal = (val: string) => {
    navigator.clipboard.writeText(val);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="credentials"
      className="py-20 md:py-32 bg-[#F2F1ED] border-b border-[#111111] relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#111111]">
          <div className="font-mono text-xs font-bold tracking-widest text-[#E52B20] flex items-center gap-2 uppercase">
            <span>05 — CREDENTIALS</span>
          </div>
          <div className="font-mono text-[11px] text-[#555555]">
            [EDUCATION &amp; CERTIFICATION]
          </div>
        </div>

        {/* Section Heading */}
        <div className="pt-8 pb-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase leading-[0.95] text-[#111111]">
            ACADEMIC &amp;<br />
            <span className="text-[#E52B20]">CERTIFIED</span>
          </h2>
        </div>

        {/* Two Major Blocks Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* BLOCK 1: EDUCATION */}
          <div className="border border-[#111111] bg-white p-6 sm:p-8 flex flex-col justify-between hover:shadow-[4px_4px_0px_0px_rgba(17,17,17,1)] transition-all">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-[#111111]/20 font-mono text-xs">
                <span className="flex items-center gap-2 font-bold text-[#111111]">
                  <GraduationCap className="w-4 h-4 text-[#E52B20]" />
                  01 — HIGHER EDUCATION
                </span>
                <span className="px-2 py-0.5 border border-[#111111] bg-[#F2F1ED] text-[#111111] font-bold text-[10px]">
                  2023 — 2027
                </span>
              </div>

              <h3 className="mt-4 text-xl sm:text-2xl font-black uppercase tracking-tight text-[#111111]">
                SRM INSTITUTE OF SCIENCE AND TECHNOLOGY
              </h3>

              <div className="mt-1.5 font-mono text-xs font-bold text-[#E52B20]">
                B.Tech. in Information Technology
              </div>

              <p className="mt-3 text-xs sm:text-sm text-[#444444] leading-relaxed">
                Undergraduate degree emphasizing foundational and applied computer science, cloud infrastructure, network protocols, operating systems, distributed architectures, and software engineering.
              </p>

              <div className="mt-5 p-3.5 bg-[#F2F1ED] border border-[#111111]/20 space-y-1.5 font-mono text-xs text-[#333333]">
                <div className="font-bold text-[11px] text-[#111111]">RELEVANT COURSEWORK &amp; STUDY:</div>
                <div className="grid grid-cols-2 gap-1 text-[11px] text-[#555555]">
                  <div>▪ Cloud Computing</div>
                  <div>▪ Operating Systems &amp; Linux</div>
                  <div>▪ Computer Networks</div>
                  <div>▪ Database Management</div>
                  <div>▪ Data Structures</div>
                  <div>▪ Software Engineering</div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-3 border-t border-[#111111]/20 flex items-center justify-between font-mono text-xs text-[#555555]">
              <span>STATUS: IN PROGRESS</span>
              <span className="text-[#111111] font-bold">BATCH 2027</span>
            </div>
          </div>

          {/* BLOCK 2: CERTIFICATION */}
          <div className="border border-[#111111] bg-[#111111] text-[#F2F1ED] p-6 sm:p-8 flex flex-col justify-between hover:shadow-[4px_4px_0px_0px_rgba(229,43,32,0.8)] transition-all">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-[#333333] font-mono text-xs">
                <span className="flex items-center gap-2 font-bold text-[#E52B20]">
                  <Award className="w-4 h-4 text-[#E52B20]" />
                  02 — INDUSTRY CERTIFICATION
                </span>
                <span className="px-2 py-0.5 border border-[#E52B20] bg-[#E52B20] text-[#F2F1ED] font-bold text-[10px]">
                  VERIFIED
                </span>
              </div>

              {/* AWS Badge Motif */}
              <div className="mt-4 flex items-center gap-3">
                <div className="px-2.5 py-1 bg-[#232F3E] border border-amber-400/40 text-amber-400 font-mono text-xs font-bold tracking-wider">
                  aws certified
                </div>
                <div className="font-mono text-xs text-[#888888]">
                  SYED ASHIQ
                </div>
              </div>

              <h3 className="mt-3 text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-[#F2F1ED]">
                AWS CERTIFIED SOLUTIONS ARCHITECT - ASSOCIATE
              </h3>

              <div className="mt-2 font-mono text-xs text-amber-400">
                Cloud Solutions Architect Certification
              </div>

              <p className="mt-4 text-sm sm:text-base text-[#DCD9D0] leading-relaxed">
                &quot;Certified in designing secure, scalable, and reliable cloud architectures.&quot;
              </p>

              {/* Validation Box */}
              <div className="mt-6 p-4 bg-[#1C1C1C] border border-[#333333] space-y-3 font-mono text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-[#888888]">VALIDATION NUMBER:</span>
                  <button
                    onClick={() => handleCopyVal('8aba81942ba741778b5eef95d900aaae')}
                    className="text-[#E52B20] hover:text-[#F2F1ED] flex items-center gap-1 text-[11px]"
                  >
                    {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                    <span>{copied ? 'COPIED' : 'COPY'}</span>
                  </button>
                </div>
                <div className="p-2 bg-[#111111] border border-[#444444] text-[#F2F1ED] text-[11px] select-all break-all">
                  8aba81942ba741778b5eef95d900aaae
                </div>
                <div className="text-[10px] text-[#888888] flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Valid on Amazon Web Services verification portal</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#333333] flex items-center justify-between">
              <a
                href="https://aws.amazon.com/verification"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 bg-[#E52B20] text-[#F2F1ED] font-mono text-xs font-bold tracking-wider hover:bg-[#c92218] transition-colors flex items-center justify-center gap-2"
              >
                <span>VERIFY ON AWS PORTAL</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
