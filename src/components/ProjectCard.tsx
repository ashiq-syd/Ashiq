import React from 'react';
import { ArrowUpRight, Github, ExternalLink, Code2, ShieldCheck } from 'lucide-react';
import { Project } from '../types';
import { ArchitectureGraph } from './ArchitectureGraph';

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => {
  return (
    <div
      id={`project-card-${project.id}`}
      className="group relative border border-[#111111] bg-white p-6 flex flex-col justify-between transition-all duration-200 hover:shadow-[4px_4px_0px_0px_rgba(17,17,17,1)]"
    >
      {/* Top Meta Bar */}
      <div>
        <div className="flex items-center justify-between pb-3 border-b border-[#111111]/20">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold text-[#E52B20]">
              03 / {project.number}
            </span>
            <span className="font-mono text-[10px] text-[#666666] uppercase tracking-wider">
              {project.category}
            </span>
          </div>

          <span className="hd-badge text-[9px] py-0.5 px-2 bg-[#F2F1ED]">
            {project.categoryTag}
          </span>
        </div>

        {/* Project Title */}
        <h3 className="mt-4 text-xl sm:text-2xl font-black uppercase tracking-tight text-[#111111] group-hover:text-[#E52B20] transition-colors leading-tight">
          {project.title}
        </h3>

        {/* Project Description */}
        <p className="mt-3 text-xs sm:text-sm text-[#333333] leading-relaxed font-normal">
          {project.description}
        </p>

        {/* Additional Detail Points */}
        {project.additionalDetails.length > 0 && (
          <div className="mt-3 space-y-1 font-mono text-[11px] text-[#555555]">
            {project.additionalDetails.map((detail, idx) => (
              <div key={idx} className="flex items-start gap-1.5">
                <span className="text-[#E52B20] font-bold">▪</span>
                <span className="leading-snug">{detail}</span>
              </div>
            ))}
          </div>
        )}

        {/* System Architecture Motif Preview */}
        {project.diagramType && (
          <div className="mt-4">
            <ArchitectureGraph type={project.diagramType} isDarkMode={false} />
          </div>
        )}
      </div>

      {/* Bottom Technology Tags & Actions */}
      <div className="mt-6 pt-4 border-t border-[#111111]/20">
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.technologies.map((tech, idx) => (
            <span
              key={idx}
              className="px-2 py-0.5 bg-[#F2F1ED] border border-[#111111]/30 text-[#111111] font-mono text-[10px] uppercase font-bold tracking-wider"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Controls */}
        <div className="flex items-center justify-between gap-2 pt-1">
          <button
            type="button"
            onClick={() => onSelect(project)}
            className="flex-1 py-2.5 px-4 bg-[#111111] text-[#F2F1ED] hover:bg-[#E52B20] font-mono text-[11px] font-bold tracking-wider flex items-center justify-center gap-2 transition-colors border border-[#111111]"
          >
            <span>DEEP DIVE &amp; SPEC</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub Profile & Code Repositories"
              className="p-2.5 border border-[#111111] bg-white text-[#111111] hover:bg-[#111111] hover:text-[#F2F1ED] transition-colors"
              aria-label="View code on GitHub"
            >
              <Github className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
