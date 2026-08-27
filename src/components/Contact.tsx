import React, { useState } from 'react';
import { ArrowUpRight, Mail, Phone, Github, Linkedin, Code, Check, Send, Copy, Sparkles } from 'lucide-react';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: 'Cloud & DevOps Engineering Opportunity',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.firstName || !formData.message) return;

    // Direct mailto fallback
    const mailtoSubject = encodeURIComponent(`[Portfolio Contact] ${formData.subject} - from ${formData.firstName} ${formData.lastName}`);
    const mailtoBody = encodeURIComponent(`Sender: ${formData.firstName} ${formData.lastName}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="py-20 md:py-32 bg-[#F2F1ED] border-b border-[#111111] relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#111111]">
          <div className="font-mono text-xs font-bold tracking-widest text-[#E52B20] flex items-center gap-2 uppercase">
            <span>07 — CONTACT</span>
          </div>
          <div className="font-mono text-[11px] text-[#555555]">
            [OPEN TO COMMUNICATE]
          </div>
        </div>

        {/* Section Heading & Subtitle */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 pt-8 items-start">
          {/* Left Column: Direct Info & Social Rows */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase leading-[0.95] text-[#111111]">
                LET&apos;S BUILD<br />
                <span className="text-[#E52B20]">SOMETHING.</span>
              </h2>
              <p className="mt-3 text-xs sm:text-sm text-[#333333] leading-relaxed max-w-md font-medium">
                &quot;For cloud, DevOps, software opportunities, projects or a conversation about technology, reach out.&quot;
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-2.5 font-mono text-xs">
              {/* Email */}
              <div className="p-3.5 border border-[#111111] bg-white flex items-center justify-between group hover:border-[#E52B20] transition-colors">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-[#111111] text-[#F2F1ED]">
                    <Mail className="w-3.5 h-3.5 text-[#E52B20]" />
                  </div>
                  <div>
                    <div className="text-[10px] text-[#666666] font-bold">PRIMARY EMAIL</div>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="font-bold text-[#111111] hover:text-[#E52B20] text-xs sm:text-sm break-all"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-1.5 text-[#555555] hover:text-[#111111] border border-[#111111]/30 hover:border-[#111111] bg-[#F2F1ED]"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              {/* Phone */}
              <div className="p-3.5 border border-[#111111] bg-white flex items-center justify-between group hover:border-[#E52B20] transition-colors">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-[#111111] text-[#F2F1ED]">
                    <Phone className="w-4 h-4 text-[#E52B20]" />
                  </div>
                  <div>
                    <div className="text-[10px] text-[#666666]">DIRECT PHONE</div>
                    <a
                      href={`tel:${PERSONAL_INFO.phoneRaw}`}
                      className="font-bold text-[#111111] hover:text-[#E52B20] text-sm"
                    >
                      {PERSONAL_INFO.phone}
                    </a>
                  </div>
                </div>
                <a
                  href={`tel:${PERSONAL_INFO.phoneRaw}`}
                  className="px-2.5 py-1.5 bg-[#111111] text-[#F2F1ED] font-mono text-[10px] tracking-wider uppercase hover:bg-[#E52B20]"
                >
                  CALL
                </a>
              </div>
            </div>

            {/* Social Rows with Slide Animation */}
            <div className="space-y-2 pt-2">
              <div className="font-mono text-xs font-bold text-[#555555] uppercase tracking-wider mb-2">
                Verified Social &amp; Code Profiles
              </div>

              {SOCIAL_LINKS.map((soc) => (
                <a
                  key={soc.platform}
                  href={soc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  id={`social-link-${soc.platform.toLowerCase()}`}
                  className="group flex items-center justify-between p-4 border-2 border-[#111111] bg-[#F2F1ED] hover:bg-[#111111] hover:text-[#F2F1ED] transition-all transform hover:-translate-y-0.5"
                >
                  <div className="flex items-center gap-3">
                    {soc.platform === 'LINKEDIN' && <Linkedin className="w-4 h-4 text-[#E52B20]" />}
                    {soc.platform === 'GITHUB' && <Github className="w-4 h-4 text-[#E52B20]" />}
                    {soc.platform === 'LEETCODE' && <Code className="w-4 h-4 text-[#E52B20]" />}
                    <div>
                      <div className="font-mono font-bold text-sm tracking-wider uppercase">
                        {soc.platform}
                      </div>
                      <div className="font-mono text-[11px] text-[#666666] group-hover:text-[#DCD9D0]">
                        {soc.handle}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 font-mono text-xs">
                    <span className="hidden sm:inline opacity-0 group-hover:opacity-100 transition-opacity text-[#E52B20]">
                      VISIT PROFILE
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-[#111111] group-hover:text-[#E52B20] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-6">
            <div className="border-2 border-[#111111] bg-[#F2F1ED] p-6 sm:p-8 shadow-[6px_6px_0px_0px_rgba(17,17,17,1)]">
              <div className="pb-4 border-b border-[#111111]/20 flex items-center justify-between font-mono text-xs">
                <span className="font-bold text-[#111111] uppercase tracking-wider">
                  DIRECT MESSAGE INQUIRY
                </span>
                <span className="text-[#E52B20]">● MAILTO GATEWAY</span>
              </div>

              {submitted ? (
                <div className="py-12 text-center space-y-4 font-mono">
                  <div className="w-12 h-12 rounded-full bg-[#111111] text-[#E52B20] flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold text-[#111111] uppercase">
                    Message Prepared
                  </h4>
                  <p className="text-xs text-[#555555] max-w-sm mx-auto leading-relaxed">
                    Your email client has been triggered. You can also write directly to{' '}
                    <a href={`mailto:${PERSONAL_INFO.email}`} className="text-[#E52B20] font-bold">
                      {PERSONAL_INFO.email}
                    </a>
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-4 py-2 border border-[#111111] hover:bg-[#111111] hover:text-[#F2F1ED] text-xs font-bold"
                  >
                    SEND ANOTHER MESSAGE
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  {/* Name Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label htmlFor="firstName" className="block font-mono text-xs font-bold text-[#111111] uppercase">
                        FIRST NAME *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="e.g. John"
                        className="w-full p-3 border-2 border-[#111111] bg-[#F2F1ED] font-mono text-xs text-[#111111] focus:outline-none focus:border-[#E52B20]"
                      />
                    </div>

                    <div className="space-y-1">
                      <label htmlFor="lastName" className="block font-mono text-xs font-bold text-[#111111] uppercase">
                        LAST NAME
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="e.g. Doe"
                        className="w-full p-3 border-2 border-[#111111] bg-[#F2F1ED] font-mono text-xs text-[#111111] focus:outline-none focus:border-[#E52B20]"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="space-y-1">
                    <label htmlFor="email" className="block font-mono text-xs font-bold text-[#111111] uppercase">
                      YOUR EMAIL ADDRESS *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. recruiter@company.com"
                      className="w-full p-3 border-2 border-[#111111] bg-[#F2F1ED] font-mono text-xs text-[#111111] focus:outline-none focus:border-[#E52B20]"
                    />
                  </div>

                  {/* Subject */}
                  <div className="space-y-1">
                    <label htmlFor="subject" className="block font-mono text-xs font-bold text-[#111111] uppercase">
                      SUBJECT / TOPIC
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full p-3 border-2 border-[#111111] bg-[#F2F1ED] font-mono text-xs text-[#111111] focus:outline-none focus:border-[#E52B20]"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-1">
                    <label htmlFor="message" className="block font-mono text-xs font-bold text-[#111111] uppercase">
                      MESSAGE *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Share project requirements, roles, or questions..."
                      className="w-full p-3 border-2 border-[#111111] bg-[#F2F1ED] font-mono text-xs text-[#111111] focus:outline-none focus:border-[#E52B20] resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    id="contact-submit-btn"
                    className="w-full py-4 bg-[#111111] text-[#F2F1ED] font-mono text-xs font-bold tracking-widest uppercase border-2 border-[#111111] hover:bg-[#E52B20] hover:border-[#E52B20] transition-all flex items-center justify-center gap-2 transform active:translate-y-0.5"
                  >
                    <span>SEND MESSAGE</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>

                  <div className="text-[11px] font-mono text-[#666666] text-center pt-1">
                    Direct fallback routes to <span className="text-[#111111] font-semibold">{PERSONAL_INFO.email}</span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
