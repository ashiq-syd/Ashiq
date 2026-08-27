import React, { useState } from 'react';
import { Download, Printer, Copy, Check, FileText, ExternalLink, Sparkles, Shield } from 'lucide-react';
import { RESUME_RAW, PERSONAL_INFO } from '../data/portfolioData';

export const ResumeSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [viewMode, setViewMode] = useState<'document' | 'raw'>('document');

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const plainText = `SYED ASHIQ
${RESUME_RAW.phoneFormatted} | ${RESUME_RAW.email} | LinkedIn: ${RESUME_RAW.linkedin} | GitHub: ${RESUME_RAW.github} | LeetCode: ${RESUME_RAW.leetcode}

PROFESSIONAL SUMMARY
${RESUME_RAW.summary}

EXPERIENCE
${RESUME_RAW.experience.company} | ${RESUME_RAW.experience.role} | ${RESUME_RAW.experience.duration}
${RESUME_RAW.experience.bullets.map((b) => `• ${b}`).join('\n')}

PROJECTS
1. AWS Bedrock Generative AI Application
• Built a generative AI application using AWS Bedrock foundation models.
• Configured IAM roles and policies to provide secure access to AWS resources.

2. Transaction Monitoring System
• Developed a Python-based system to process transaction data and flag anomalies.
• Stored transaction data in AWS S3 and processed workloads using EC2.
• Applied IAM policies and logging to simulate fintech compliance requirements.

3. Terraform Infrastructure Automation
• Provisioned AWS EC2, VPC, and Security Group resources using Terraform.
• Managed infrastructure lifecycle through Terraform plan, apply, and destroy workflows.

4. Secure Scalable Web Application on AWS
• Designed a highly available web application using EC2, Application Load Balancer, and Auto Scaling.
• Implemented VPC public/private subnets and configured IAM roles, Security Groups, and NACLs.
• Automated AWS infrastructure provisioning using Terraform.

5. AI Design Website
• Built a web application with Next.js and TypeScript, demonstrating modern frontend development and deployment-ready project structure.

EDUCATION
${RESUME_RAW.education.institution} | ${RESUME_RAW.education.period}
${RESUME_RAW.education.degree}

TECHNICAL SKILLS
Programming: ${RESUME_RAW.skills.programming.join(', ')}
Cloud: ${RESUME_RAW.skills.cloud.join(', ')}
Infrastructure as Code: ${RESUME_RAW.skills.iac.join(', ')}
DevOps & Systems: ${RESUME_RAW.skills.devops.join(', ')}
Architecture: ${RESUME_RAW.skills.architecture.join(', ')}
Analytics: ${RESUME_RAW.skills.analytics.join(', ')}

CERTIFICATIONS
${RESUME_RAW.certification}
`;

    navigator.clipboard.writeText(plainText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    // Generate text blob for ATS-friendly text resume download
    const plainText = `SYED ASHIQ\n${RESUME_RAW.phoneFormatted} | ${RESUME_RAW.email}\nLinkedIn: https://${RESUME_RAW.linkedin}\nGitHub: https://${RESUME_RAW.github}\nLeetCode: https://${RESUME_RAW.leetcode}\n\nSUMMARY\n${RESUME_RAW.summary}\n\nEXPERIENCE\n${RESUME_RAW.experience.company} - ${RESUME_RAW.experience.role} (${RESUME_RAW.experience.duration})\n${RESUME_RAW.experience.bullets.map((b) => `- ${b}`).join('\n')}\n\nEDUCATION\n${RESUME_RAW.education.institution} (2023 - 2027)\n${RESUME_RAW.education.degree}\n\nCERTIFICATIONS\n${RESUME_RAW.certification}\n`;
    
    const blob = new Blob([plainText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'SYED_ASHIQ_RESUME.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <section
      id="resume"
      className="py-20 md:py-32 bg-[#111111] text-[#F2F1ED] border-b border-[#111111] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#333333]">
          <div className="font-mono text-xs font-bold tracking-widest text-[#E52B20] flex items-center gap-2 uppercase">
            <span>06 — RESUME</span>
          </div>
          <div className="font-mono text-[11px] text-[#888888]">
            [ATS COMPLIANT SPECIFICATION]
          </div>
        </div>

        {/* Section Heading & Actions */}
        <div className="pt-8 pb-8 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase leading-[0.95] text-[#F2F1ED]">
              MY<br />
              <span className="text-[#E52B20]">RESUME</span>
            </h2>
            <p className="mt-3 font-mono text-xs text-[#CCCCCC] max-w-xl leading-relaxed">
              &quot;Education, experience, cloud projects and technical skills in one ATS-friendly document.&quot;
            </p>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-2.5">
            <button
              onClick={handlePrint}
              id="resume-print-btn"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-transparent border border-[#444444] text-[#F2F1ED] hover:bg-[#222222] hover:border-[#F2F1ED] font-mono text-xs font-bold tracking-wider transition-colors"
            >
              <Printer className="w-3.5 h-3.5 text-[#E52B20]" />
              <span>PRINT / PDF</span>
            </button>

            <button
              onClick={handleCopyText}
              id="resume-copy-btn"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-transparent border border-[#444444] text-[#F2F1ED] hover:bg-[#222222] hover:border-[#F2F1ED] font-mono text-xs font-bold tracking-wider transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'COPIED ATS TEXT' : 'COPY RAW TEXT'}</span>
            </button>

            <button
              onClick={handleDownload}
              id="resume-download-btn"
              className="inline-flex items-center gap-2 px-5 py-3 bg-[#E52B20] text-[#F2F1ED] hover:bg-[#c92218] font-mono text-xs font-bold tracking-wider transition-colors shadow-md"
            >
              <Download className="w-4 h-4" />
              <span>↓ DOWNLOAD RESUME</span>
            </button>
          </div>
        </div>

        {/* View Switcher */}
        <div className="flex items-center justify-between pb-3 border-b border-[#333333] font-mono text-xs">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setViewMode('document')}
              className={`px-3 py-1 border transition-colors ${
                viewMode === 'document'
                  ? 'bg-[#E52B20] text-[#F2F1ED] border-[#E52B20] font-bold'
                  : 'bg-transparent text-[#888888] border-[#444444] hover:text-[#F2F1ED]'
              }`}
            >
              FORMATTED DOCUMENT
            </button>
            <button
              onClick={() => setViewMode('raw')}
              className={`px-3 py-1 border transition-colors ${
                viewMode === 'raw'
                  ? 'bg-[#E52B20] text-[#F2F1ED] border-[#E52B20] font-bold'
                  : 'bg-transparent text-[#888888] border-[#444444] hover:text-[#F2F1ED]'
              }`}
            >
              RAW JSON / TEXT
            </button>
          </div>
          <span className="text-[#888888] hidden sm:inline">SOURCE: RESUME.PDF</span>
        </div>

        {/* Embedded ATS Resume Paper View */}
        <div className="mt-6 border-2 border-[#333333] bg-[#F2F1ED] text-[#111111] p-6 sm:p-10 lg:p-14 shadow-2xl">
          {viewMode === 'document' ? (
            <div className="max-w-4xl mx-auto space-y-8 font-sans">
              {/* Header */}
              <div className="text-center space-y-2 pb-6 border-b-2 border-[#111111]">
                <h1 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-[#111111]">
                  {RESUME_RAW.name}
                </h1>
                <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 font-mono text-xs text-[#333333]">
                  <span>{RESUME_RAW.phoneFormatted}</span>
                  <span>|</span>
                  <a href={`mailto:${RESUME_RAW.email}`} className="text-[#E52B20] hover:underline">
                    {RESUME_RAW.email}
                  </a>
                  <span>|</span>
                  <a
                    href="https://www.linkedin.com/in/syed-a-7a4306361"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    LinkedIn
                  </a>
                  <span>|</span>
                  <a
                    href="https://github.com/ashiq-syd"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    GitHub
                  </a>
                  <span>|</span>
                  <a
                    href="https://leetcode.com/u/syd-ash"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    LeetCode
                  </a>
                </div>
              </div>

              {/* Professional Summary */}
              <div className="space-y-2">
                <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-[#111111] border-b border-[#111111] pb-1">
                  PROFESSIONAL SUMMARY
                </h3>
                <p className="text-sm text-[#222222] leading-relaxed">
                  {RESUME_RAW.summary}
                </p>
              </div>

              {/* Experience */}
              <div className="space-y-3">
                <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-[#111111] border-b border-[#111111] pb-1">
                  EXPERIENCE
                </h3>
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center justify-between text-sm font-bold text-[#111111]">
                    <span>{RESUME_RAW.experience.company}</span>
                    <span className="font-mono text-xs font-normal text-[#555555]">
                      {RESUME_RAW.experience.role} | {RESUME_RAW.experience.duration}
                    </span>
                  </div>
                  <ul className="list-disc list-inside text-xs sm:text-sm text-[#333333] space-y-1 pt-1 leading-relaxed">
                    {RESUME_RAW.experience.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Projects */}
              <div className="space-y-4">
                <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-[#111111] border-b border-[#111111] pb-1">
                  PROJECTS
                </h3>

                <div className="space-y-3 text-xs sm:text-sm">
                  <div>
                    <div className="font-bold text-[#111111]">AWS Bedrock Generative AI Application</div>
                    <ul className="list-disc list-inside text-[#333333] space-y-0.5 pt-0.5">
                      <li>Built a generative AI application using AWS Bedrock foundation models.</li>
                      <li>Configured IAM roles and policies to provide secure access to AWS resources.</li>
                    </ul>
                  </div>

                  <div>
                    <div className="font-bold text-[#111111]">Transaction Monitoring System</div>
                    <ul className="list-disc list-inside text-[#333333] space-y-0.5 pt-0.5">
                      <li>Developed a Python-based system to process transaction data and flag anomalies.</li>
                      <li>Stored transaction data in AWS S3 and processed workloads using EC2.</li>
                      <li>Applied IAM policies and logging to simulate fintech compliance requirements.</li>
                    </ul>
                  </div>

                  <div>
                    <div className="font-bold text-[#111111]">Terraform Infrastructure Automation</div>
                    <ul className="list-disc list-inside text-[#333333] space-y-0.5 pt-0.5">
                      <li>Provisioned AWS EC2, VPC, and Security Group resources using Terraform.</li>
                      <li>Managed infrastructure lifecycle through Terraform plan, apply, and destroy workflows.</li>
                    </ul>
                  </div>

                  <div>
                    <div className="font-bold text-[#111111]">Secure Scalable Web Application on AWS</div>
                    <ul className="list-disc list-inside text-[#333333] space-y-0.5 pt-0.5">
                      <li>Designed a highly available web application using EC2, Application Load Balancer, and Auto Scaling.</li>
                      <li>Implemented VPC public/private subnets and configured IAM roles, Security Groups, and NACLs.</li>
                      <li>Automated AWS infrastructure provisioning using Terraform.</li>
                    </ul>
                  </div>

                  <div>
                    <div className="font-bold text-[#111111]">AI Design Website</div>
                    <ul className="list-disc list-inside text-[#333333] space-y-0.5 pt-0.5">
                      <li>Built a web application with Next.js and TypeScript, demonstrating modern frontend development and deployment-ready project structure.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Education */}
              <div className="space-y-2">
                <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-[#111111] border-b border-[#111111] pb-1">
                  EDUCATION
                </h3>
                <div className="flex items-center justify-between text-xs sm:text-sm">
                  <div className="font-bold text-[#111111]">
                    {RESUME_RAW.education.institution}
                  </div>
                  <div className="font-mono text-xs text-[#555555]">
                    {RESUME_RAW.education.period}
                  </div>
                </div>
                <div className="text-xs text-[#444444]">
                  {RESUME_RAW.education.degree}
                </div>
              </div>

              {/* Technical Skills */}
              <div className="space-y-2">
                <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-[#111111] border-b border-[#111111] pb-1">
                  TECHNICAL SKILLS
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-[#333333]">
                  <div>
                    <span className="font-bold text-[#111111]">Programming:</span> {RESUME_RAW.skills.programming.join(', ')}
                  </div>
                  <div>
                    <span className="font-bold text-[#111111]">Cloud:</span> {RESUME_RAW.skills.cloud.join(', ')}
                  </div>
                  <div>
                    <span className="font-bold text-[#111111]">Infrastructure as Code:</span> {RESUME_RAW.skills.iac.join(', ')}
                  </div>
                  <div>
                    <span className="font-bold text-[#111111]">DevOps &amp; Systems:</span> {RESUME_RAW.skills.devops.join(', ')}
                  </div>
                  <div>
                    <span className="font-bold text-[#111111]">Architecture:</span> {RESUME_RAW.skills.architecture.join(', ')}
                  </div>
                  <div>
                    <span className="font-bold text-[#111111]">Analytics:</span> {RESUME_RAW.skills.analytics.join(', ')}
                  </div>
                </div>
              </div>

              {/* Certifications */}
              <div className="space-y-2">
                <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-[#111111] border-b border-[#111111] pb-1">
                  CERTIFICATIONS
                </h3>
                <p className="text-xs font-mono text-[#333333]">
                  {RESUME_RAW.certification}
                </p>
              </div>
            </div>
          ) : (
            <pre className="font-mono text-xs text-[#111111] bg-[#EAE8E2] p-4 overflow-x-auto leading-relaxed border border-[#111111]/30">
              <code>{JSON.stringify(RESUME_RAW, null, 2)}</code>
            </pre>
          )}
        </div>
      </div>
    </section>
  );
};
