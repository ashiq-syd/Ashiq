import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Terminal } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenTerminal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenTerminal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ['about', 'skills', 'projects', 'experience', 'credentials', 'resume', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: '01 — ABOUT', href: '#about', id: 'about' },
    { label: '02 — SKILLS', href: '#skills', id: 'skills' },
    { label: '03 — WORK', href: '#projects', id: 'projects' },
    { label: '04 — EXP', href: '#experience', id: 'experience' },
    { label: '05 — CERTS', href: '#credentials', id: 'credentials' },
    { label: 'RESUME', href: '#resume', id: 'resume', isHighlight: true },
    { label: 'CONTACT', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      id="main-navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 bg-[#F2F1ED] border-b border-[#111111] ${
        scrolled ? 'py-3 shadow-sm' : 'py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Name */}
        <a
          href="#"
          id="nav-brand-link"
          className="group flex items-center gap-2.5 font-mono font-bold tracking-widest text-sm text-[#111111] hover:text-[#E52B20] transition-colors"
        >
          <div className="w-2 h-2 rounded-full bg-[#E52B20] shadow-[0_0_8px_#E52B20]" />
          <span>{PERSONAL_INFO.identifier}</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8 text-[11px] font-mono font-bold uppercase" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                id={`nav-link-${link.id}`}
                className={`transition-colors py-1 ${
                  link.isHighlight
                    ? 'hover:text-[#E52B20] underline decoration-[#E52B20] decoration-2 underline-offset-4'
                    : isActive
                    ? 'text-[#E52B20]'
                    : 'text-[#111111] hover:text-[#E52B20]'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Action Group */}
        <div className="flex items-center gap-3">
          {onOpenTerminal && (
            <button
              onClick={onOpenTerminal}
              id="nav-terminal-btn"
              title="Open Developer Console"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 border border-[#111111] bg-white text-[#111111] hover:bg-[#111111] hover:text-[#F2F1ED] text-[11px] font-mono font-bold uppercase transition-colors"
            >
              <Terminal className="w-3.5 h-3.5 text-[#E52B20]" />
              <span className="hidden xl:inline">CLI</span>
            </button>
          )}

          <a
            href="#contact"
            id="nav-talk-cta"
            className="bg-[#111111] text-[#F2F1ED] px-5 py-2 text-[11px] font-mono font-bold hover:bg-[#E52B20] transition-all flex items-center tracking-wider border border-[#111111]"
          >
            <span>LET&apos;S TALK</span>
            <span className="ml-2">↗</span>
          </a>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            id="nav-mobile-toggle-btn"
            aria-label="Toggle navigation menu"
            className="lg:hidden p-2 border border-[#111111] text-[#111111] hover:bg-[#111111] hover:text-[#F2F1ED] transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          className="lg:hidden bg-[#F2F1ED] border-b border-[#111111] px-4 pt-4 pb-6 space-y-3 transition-all"
        >
          <div className="flex items-center justify-between pb-2 border-b border-[#111111]/20">
            <span className="font-mono text-xs text-[#555555]">NAVIGATION</span>
            <span className="font-mono text-xs text-[#E52B20]">● ONLINE</span>
          </div>

          <div className="grid grid-cols-2 gap-2 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2 font-mono text-xs tracking-wider border border-[#111111]/30 hover:border-[#111111] hover:bg-[#111111] hover:text-[#F2F1ED] transition-colors ${
                  activeSection === link.id ? 'bg-[#111111] text-[#F2F1ED] border-[#111111]' : 'text-[#111111]'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3 bg-[#E52B20] text-[#F2F1ED] font-mono text-xs tracking-wider font-bold"
            >
              <span>LET&apos;S TALK</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
