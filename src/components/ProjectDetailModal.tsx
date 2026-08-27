import React from 'react';
import { X, ArrowUpRight, Github, Server, Shield, Layers, CheckCircle } from 'lucide-react';
import { Project } from '../types';
import { ArchitectureGraph } from './ArchitectureGraph';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div
      id="project-detail-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#111111]/80 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="bg-[#F2F1ED] text-[#111111] border-2 border-[#111111] max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-[#111111] text-[#F2F1ED] p-4 sm:p-6 flex items-center justify-between border-b-2 border-[#111111]">
          <div className="flex items-center gap-3">
            <span className="font-mono text-sm font-bold text-[#E52B20]">
              PROJECT {project.number}
            </span>
            <span className="text-[#888888]">/</span>
            <span className="font-mono text-xs text-[#DCD9D0]">
              {project.category}
            </span>
          </div>
          <button
            onClick={onClose}
            id="close-project-modal-btn"
            className="p-1 text-[#DCD9D0] hover:text-[#E52B20] hover:bg-[#222222] transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Title & Tagline */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-[#111111]">
              {project.title}
            </h3>
            <p className="mt-2 text-base text-[#333333] font-medium leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Architecture Topology Motif */}
          {project.diagramType && (
            <div className="space-y-2">
              <div className="font-mono text-xs font-bold text-[#555555] uppercase tracking-wider">
                System Topology &amp; Flow
              </div>
              <ArchitectureGraph type={project.diagramType} />
            </div>
          )}

          {/* Implementation Highlights from Resume */}
          <div className="space-y-3 pt-2">
            <div className="font-mono text-xs font-bold text-[#111111] uppercase tracking-wider flex items-center gap-2">
              <Server className="w-3.5 h-3.5 text-[#E52B20]" />
              Resume Implementation Specifications
            </div>
            <ul className="space-y-2 font-mono text-xs text-[#444444]">
              {project.additionalDetails.map((detail, idx) => (
                <li key={idx} className="flex items-start gap-2.5 bg-[#EAE8E2] p-3 border border-[#111111]/20">
                  <span className="text-[#E52B20] font-bold mt-0.5">▸</span>
                  <span className="leading-relaxed">{detail}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Key Architectural Principles */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            {project.architectureHighlights.map((hl, idx) => (
              <div key={idx} className="p-3 border border-[#111111] bg-[#F2F1ED] space-y-1">
                <div className="font-mono text-xs font-bold text-[#111111] flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-[#E52B20]" />
                  {hl.title}
                </div>
                <p className="text-xs text-[#555555] leading-normal font-mono">
                  {hl.description}
                </p>
              </div>
            ))}
          </div>

          {/* Technologies Stack */}
          <div className="space-y-2 pt-2">
            <div className="font-mono text-xs font-bold text-[#555555] uppercase tracking-wider">
              Applied Technologies
            </div>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((t, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 bg-[#111111] text-[#F2F1ED] font-mono text-xs"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-4 border-t border-[#111111] flex flex-wrap items-center justify-between gap-4">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#111111] text-[#F2F1ED] hover:bg-[#E52B20] font-mono text-xs tracking-wider font-semibold transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>VIEW REPOSITORY (ashiq-syd)</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            )}

            <button
              onClick={onClose}
              className="px-4 py-2.5 border border-[#111111] hover:bg-[#111111] hover:text-[#F2F1ED] font-mono text-xs tracking-wider transition-colors ml-auto"
            >
              CLOSE PREVIEW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
