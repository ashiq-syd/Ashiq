import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Capabilities } from './components/Capabilities';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Credentials } from './components/Credentials';
import { ResumeSection } from './components/ResumeSection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CommandPaletteModal } from './components/CommandPaletteModal';

export default function App() {
  const [terminalOpen, setTerminalOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Toggle terminal via Ctrl+K or Cmd+K or backtick
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setTerminalOpen((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-[#F2F1ED] text-[#111111] font-sans selection:bg-[#E52B20] selection:text-[#F2F1ED]">
      {/* Accessibility Skip Link */}
      <a
        href="#hero"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-[#E52B20] text-[#F2F1ED] font-mono text-xs font-bold"
      >
        Skip to main content
      </a>

      {/* Sticky Navigation */}
      <Navbar onOpenTerminal={() => setTerminalOpen(true)} />

      {/* Main Content Sections */}
      <main id="main-content">
        <Hero />
        <About />
        <Capabilities />
        <Projects />
        <Experience />
        <Credentials />
        <ResumeSection />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Developer CLI Modal */}
      <CommandPaletteModal
        isOpen={terminalOpen}
        onClose={() => setTerminalOpen(false)}
      />
    </div>
  );
}
