import React, { useState } from 'react';
import { Terminal, Layers, ArrowUpRight, Github } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { ProjectCard } from './ProjectCard';
import { ProjectDetailModal } from './ProjectDetailModal';
import { Project } from '../types';

export const Projects: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('ALL');
  const [modalProject, setModalProject] = useState<Project | null>(null);

  const filters = [
    { id: 'ALL', label: 'ALL WORK (05)' },
    { id: 'AWS', label: 'AWS & CLOUD' },
    { id: 'IAC', label: 'TERRAFORM & IAC' },
    { id: 'PYTHON', label: 'PYTHON & WORKLOAD' },
  ];

  const filteredProjects = PROJECTS.filter((p) => {
    if (selectedFilter === 'ALL') return true;
    if (selectedFilter === 'AWS') return p.technologies.some((t) => t.includes('AWS') || t.includes('EC2') || t.includes('Bedrock') || t.includes('VPC'));
    if (selectedFilter === 'IAC') return p.technologies.includes('Terraform') || p.category.includes('INFRASTRUCTURE');
    if (selectedFilter === 'PYTHON') return p.technologies.includes('Python') || p.category.includes('PYTHON') || p.technologies.includes('Generative AI');
    return true;
  });

  return (
    <section
      id="projects"
      className="py-20 md:py-32 bg-[#F2F1ED] border-b border-[#111111] relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-between pb-6 border-b border-[#111111]">
          <div className="font-mono text-xs sm:text-sm font-bold tracking-widest text-[#E52B20] flex items-center gap-2">
            <span>03</span>
            <span className="text-[#111111]">/</span>
            <span className="text-[#111111]">WORK</span>
          </div>
          <div className="font-mono text-xs text-[#555555]">
            [FEATURED BUILDS: 05]
          </div>
        </div>

        {/* Section Heading & Subtitle */}
        <div className="pt-12 pb-8 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold uppercase leading-[0.95] text-[#111111]">
              WHAT I&apos;VE<br />
              <span className="text-[#E52B20]">BUILT</span>
            </h2>
          </div>
          <p className="font-mono text-xs sm:text-sm text-[#444444] max-w-lg leading-relaxed">
            &quot;Cloud-first projects spanning generative AI, monitoring, infrastructure automation and scalable web architecture.&quot;
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 pt-4 pb-8 border-b border-[#111111]/20">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setSelectedFilter(f.id)}
              className={`px-3.5 py-1.5 font-mono text-xs tracking-wider border transition-colors ${
                selectedFilter === f.id
                  ? 'bg-[#111111] text-[#F2F1ED] border-[#111111] font-bold'
                  : 'bg-transparent text-[#555555] border-[#111111]/30 hover:border-[#111111] hover:text-[#111111]'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-10">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={(p) => setModalProject(p)}
            />
          ))}
        </div>

        {/* Verification banner from resume */}
        <div className="mt-12 p-6 border-2 border-[#111111] bg-[#111111] text-[#F2F1ED] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-xs">
          <div className="space-y-1">
            <div className="text-[#E52B20] font-bold uppercase tracking-wider">
              AUTHENTIC REPOSITORY CODE &amp; INFRASTRUCTURE
            </div>
            <div className="text-[#CCCCCC]">
              All projects represent hands-on engineering from Syed Ashiq&apos;s verified resume.
            </div>
          </div>

          <a
            href="https://github.com/ashiq-syd"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#E52B20] text-[#F2F1ED] font-bold tracking-wider hover:bg-[#c92218] transition-colors shrink-0"
          >
            <Github className="w-4 h-4" />
            <span>GITHUB: ashiq-syd</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Modal View */}
      <ProjectDetailModal
        project={modalProject}
        onClose={() => setModalProject(null)}
      />
    </section>
  );
};
