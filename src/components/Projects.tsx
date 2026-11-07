import { useState } from 'react';
import {
  FolderGit2,
  ExternalLink,
  Github,
  ChevronDown,
  ChevronUp,
  CreditCard,
  HeartPulse,
  Code2,
  Tag
} from 'lucide-react';
import { projects } from '../data/siteData.js';
import { useInView } from '../hooks/useInView';
import { DoodleUnderline, DoodleSparkle, DoodleArrow } from './Doodles';
import type { ProjectItem } from '../types';

export default function Projects() {
  const { ref, isInView } = useInView();
  const [experimentsExpanded, setExperimentsExpanded] = useState(false);

  const getStatusBadgeStyle = (status: string) => {
    if (status.includes('In Development')) {
      return 'bg-[#FFFFA5] text-[#0E2A5C] border-[#333333]';
    }
    if (status.includes('Ongoing')) {
      return 'bg-[#FFFFA5] text-[#D12828] border-[#333333]';
    }
    return 'bg-[#F4F1EA] text-[#0000FF] border-[#333333]';
  };

  const getProjectIcon = (id: string) => {
    switch (id) {
      case 'kudigo':
        return <CreditCard className="w-5 h-5 text-[#0000FF]" />;
      case 'guided-care-finder':
        return <HeartPulse className="w-5 h-5 text-[#D12828]" />;
      case 'experiments':
        return <Code2 className="w-5 h-5 text-[#0E2A5C]" />;
      default:
        return <FolderGit2 className="w-5 h-5 text-[#333333]" />;
    }
  };

  return (
    <section
      id="projects"
      ref={ref}
      className="py-16 md:py-24 relative scroll-mt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div
          className={`max-w-3xl mb-12 transition-all duration-500 transform ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#FFFFA5] border-2 border-[#333333] shadow-[2px_2px_0px_#333333] text-sm font-bold text-[#0E2A5C] mb-3 -rotate-1">
            <FolderGit2 className="w-4 h-4 text-[#D12828]" />
            <span>03. BLUEPRINTS & PROJECTS</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#0E2A5C] mb-2">
            Ideas, Sketches &{' '}
            <span className="highlighter border-b-2 border-dashed border-[#D12828]">
              Concepts
            </span>
          </h2>
          <div className="w-48 mb-3">
            <DoodleUnderline className="w-full h-3 text-[#D12828]" />
          </div>
          <p className="text-lg sm:text-xl text-[#0E2A5C]/85">
            Digital solution concepts tackling real-world problems in finance, healthcare triage, and iterative Python code.
          </p>
        </div>

        {/* Asymmetric Grid Layout (varied card sizes, no 3-equal-columns) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Project 1: KudiGo (7 cols) */}
          {(() => {
            const project = projects[0] as ProjectItem;
            if (!project) return null;
            const hasLiveLink = Boolean(project.liveUrl && project.liveUrl.trim().length > 0);
            const hasGithubLink = Boolean(project.githubUrl && project.githubUrl.trim().length > 0);

            return (
              <div
                className={`lg:col-span-7 relative sketch-card p-6 sm:p-8 bg-white flex flex-col justify-between transition-all duration-500 -rotate-0.5 hover:rotate-0 ${
                  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                <div className="washi-tape"></div>

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2.5">
                      <div className="w-10 h-10 rounded bg-[#FFFFA5] border-2 border-[#333333] flex items-center justify-center">
                        {getProjectIcon(project.id)}
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-[#0E2A5C]">
                        {project.title}
                      </h3>
                    </div>
                    <span
                      className={`text-xs font-mono font-bold px-3 py-1 rounded border-2 shadow-[2px_2px_0px_#333333] ${getStatusBadgeStyle(
                        project.status
                      )}`}
                    >
                      {project.status}
                    </span>
                  </div>

                  <p className="text-lg text-[#0E2A5C]/90 leading-relaxed mb-5">
                    {project.description}
                  </p>

                  {/* Highlights Bullet List */}
                  {project.highlights && project.highlights.length > 0 && (
                    <div className="p-4 rounded-md bg-[#F4F1EA] border-2 border-[#333333] shadow-[2px_2px_0px_#333333] mb-5 space-y-2">
                      <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#D12828] block">
                        Concept Notes & Architecture:
                      </span>
                      {project.highlights.map((item, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2 text-sm text-[#0E2A5C] font-bold">
                          <span className="text-[#D12828] mt-0.5">→</span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="inline-flex items-center gap-1 text-xs font-mono font-bold px-2.5 py-1 rounded bg-[#FFFFA5] border border-[#333333] text-[#0E2A5C]"
                      >
                        <Tag className="w-3 h-3 text-[#D12828]" />
                        <span>{tag}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Buttons (Hidden if link is empty) */}
                <div className="pt-4 border-t-2 border-dashed border-[#333333]/30 flex items-center gap-3">
                  {hasLiveLink && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="sketch-btn-primary inline-flex items-center gap-1.5 px-4 py-2 text-sm"
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                  {hasGithubLink && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="sketch-btn-secondary inline-flex items-center gap-1.5 px-4 py-2 text-sm"
                    >
                      <Github className="w-4 h-4" />
                      <span>GitHub</span>
                    </a>
                  )}
                  {!hasLiveLink && !hasGithubLink && (
                    <span className="text-sm font-bold text-[#333333]/70 italic">
                      [Design Blueprint in Progress — Code Repository Soon]
                    </span>
                  )}
                </div>
              </div>
            );
          })()}

          {/* Project 2: Guided Care Finder (5 cols) */}
          {(() => {
            const project = projects[1] as ProjectItem;
            if (!project) return null;
            const hasLiveLink = Boolean(project.liveUrl && project.liveUrl.trim().length > 0);
            const hasGithubLink = Boolean(project.githubUrl && project.githubUrl.trim().length > 0);

            return (
              <div
                className={`lg:col-span-5 relative sketch-card p-6 sm:p-8 bg-white flex flex-col justify-between transition-all duration-500 rotate-0.5 hover:rotate-0 ${
                  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: '100ms' }}
              >
                <div className="washi-tape"></div>

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2.5">
                      <div className="w-10 h-10 rounded bg-[#FFFFA5] border-2 border-[#333333] flex items-center justify-center">
                        {getProjectIcon(project.id)}
                      </div>
                      <h3 className="text-2xl font-bold text-[#0E2A5C]">
                        {project.title}
                      </h3>
                    </div>
                    <span
                      className={`text-xs font-mono font-bold px-2.5 py-1 rounded border-2 shadow-[2px_2px_0px_#333333] ${getStatusBadgeStyle(
                        project.status
                      )}`}
                    >
                      {project.status}
                    </span>
                  </div>

                  <p className="text-base text-[#0E2A5C]/90 leading-relaxed mb-5">
                    {project.description}
                  </p>

                  {/* Highlights Bullet List */}
                  {project.highlights && project.highlights.length > 0 && (
                    <div className="p-3.5 rounded-md bg-[#FFFFA5]/40 border-2 border-[#333333] shadow-[2px_2px_0px_#333333] mb-5 space-y-1.5">
                      {project.highlights.map((item, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-1.5 text-xs text-[#0E2A5C] font-bold">
                          <span className="text-[#0000FF] mt-0.5">✓</span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="inline-flex items-center gap-1 text-xs font-mono font-bold px-2 py-0.5 rounded bg-[#F4F1EA] border border-[#333333] text-[#0E2A5C]"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Buttons (Hidden if link is empty) */}
                <div className="pt-4 border-t-2 border-dashed border-[#333333]/30 flex items-center gap-3">
                  {hasLiveLink && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="sketch-btn-primary inline-flex items-center gap-1.5 px-4 py-2 text-sm"
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                  {hasGithubLink && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="sketch-btn-secondary inline-flex items-center gap-1.5 px-4 py-2 text-sm"
                    >
                      <Github className="w-4 h-4" />
                      <span>GitHub</span>
                    </a>
                  )}
                  {!hasLiveLink && !hasGithubLink && (
                    <span className="text-xs font-mono font-bold text-[#333333]/70 italic">
                      [Triage logic prototype in design]
                    </span>
                  )}
                </div>
              </div>
            );
          })()}

          {/* Project 3: Experiments (Full 12 cols, Expandable) */}
          {(() => {
            const project = projects[2] as ProjectItem;
            if (!project) return null;
            const hasGithubLink = Boolean(project.githubUrl && project.githubUrl.trim().length > 0);

            return (
              <div
                className={`lg:col-span-12 relative sketch-card p-6 sm:p-8 bg-[#FFFFA5]/30 border-2 border-[#333333] shadow-[4px_4px_0px_#333333] transition-all duration-500 ${
                  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: '150ms' }}
              >
                <div className="washi-tape"></div>

                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded bg-[#FFFFA5] border-2 border-[#333333] flex items-center justify-center">
                      {getProjectIcon(project.id)}
                    </div>
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-[#0E2A5C]">
                        {project.title}
                      </h3>
                      <span className="text-xs font-mono font-bold text-[#333333]/70">
                        Scratchpad & Learning Experiments
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-bold px-3 py-1 rounded bg-[#FFFFA5] border-2 border-[#333333] shadow-[2px_2px_0px_#333333] text-[#D12828]">
                      {project.status}
                    </span>
                    {hasGithubLink && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="sketch-btn-secondary inline-flex items-center gap-1.5 px-3 py-1 text-xs"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>GitHub Profile</span>
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-lg text-[#0E2A5C] leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Friendly "More coming soon" initial state box */}
                <div className="p-3.5 rounded-md bg-[#FFFFA5] border-2 border-[#333333] shadow-[2px_2px_0px_#333333] text-base font-bold text-[#0E2A5C] flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <DoodleSparkle className="w-5 h-5 text-[#D12828]" />
                    <span>{project.emptyStateMessage || 'More coming soon'}</span>
                  </div>
                  <button
                    onClick={() => setExperimentsExpanded(!experimentsExpanded)}
                    className="sketch-btn-secondary inline-flex items-center gap-1.5 px-3 py-1 text-xs"
                  >
                    <span>{experimentsExpanded ? 'Collapse Scratchpad' : 'Open Scratchpad Roadmap (3)'}</span>
                    {experimentsExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                </div>

                {/* Expanded Experiments Roadmap */}
                {experimentsExpanded && project.experimentsList && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-3 border-t-2 border-dashed border-[#333333]/30">
                    {project.experimentsList.map((exp, eIdx) => (
                      <div
                        key={eIdx}
                        className="p-4 rounded-md bg-white border-2 border-[#333333] shadow-[2px_2px_0px_#333333] flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex items-center justify-between mb-1.5">
                            <h4 className="font-bold text-[#0E2A5C] text-base">
                              {exp.name}
                            </h4>
                            <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-[#FFFFA5] border border-[#333333] text-[#D12828]">
                              {exp.status}
                            </span>
                          </div>
                          <p className="text-xs text-[#0E2A5C]/85 leading-normal mb-3">
                            {exp.desc}
                          </p>
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {exp.tools.map((t, tIdx) => (
                            <span
                              key={tIdx}
                              className="text-[10px] font-mono font-bold px-1.5 py-0.2 rounded bg-[#F4F1EA] border border-[#333333] text-[#0E2A5C]"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })()}

        </div>
      </div>
    </section>
  );
}
