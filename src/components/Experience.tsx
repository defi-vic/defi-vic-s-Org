import { Briefcase, Building2, MapPin, Calendar, CheckSquare } from 'lucide-react';
import { experience } from '../data/siteData.js';
import { useInView } from '../hooks/useInView';
import { DoodleUnderline, DoodleSparkle } from './Doodles';
import type { ExperienceItem } from '../types';

export default function Experience() {
  const { ref, isInView } = useInView();

  return (
    <section
      id="experience"
      ref={ref}
      className="py-16 md:py-24 relative scroll-mt-16 bg-[#eae5dc]/40 border-y-2 border-dashed border-[#333333]/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div
          className={`max-w-3xl mb-12 transition-all duration-500 transform ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#FFFFA5] border-2 border-[#333333] shadow-[2px_2px_0px_#333333] text-sm font-bold text-[#0E2A5C] mb-3 rotate-1">
            <Briefcase className="w-4 h-4 text-[#D12828]" />
            <span>04. CLINICAL WORK EXPERIENCE</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#0E2A5C] mb-2">
            Laboratory Field{' '}
            <span className="highlighter border-b-2 border-dashed border-[#D12828]">
              Training
            </span>
          </h2>
          <div className="w-44 mb-3">
            <DoodleUnderline className="w-full h-3 text-[#D12828]" />
          </div>
          <p className="text-lg sm:text-xl text-[#0E2A5C]/85">
            Routine clinical diagnostics, microbiology procedures, and healthcare specimen handling workflows.
          </p>
        </div>

        {/* Vertical Timeline Sketchnote Layout */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical hand-drawn spine line */}
          <div
            className="absolute left-4 sm:left-8 top-3 bottom-3 w-1 bg-[#333333] border-r-2 border-dashed border-[#D12828]/40"
            aria-hidden="true"
          />

          <div className="space-y-8">
            {(experience as ExperienceItem[]).map((exp, idx) => (
              <div
                key={exp.id || idx}
                className={`relative pl-12 sm:pl-20 transition-all duration-500 transform ${
                  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                {/* Timeline Pin / Marker */}
                <div className="absolute left-1 sm:left-5 top-2 w-7 h-7 rounded-full bg-[#FFFFA5] border-2 border-[#333333] shadow-[2px_2px_0px_#333333] flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#D12828]"></div>
                </div>

                {/* Timeline Card in Sketch Style */}
                <div className="relative sketch-card p-6 sm:p-8 bg-white rotate-0.5 hover:rotate-0 transition-transform">
                  <div className="washi-tape"></div>

                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4 pb-4 border-b-2 border-[#333333]">
                    <div>
                      <span className="inline-block text-xs font-mono font-bold text-[#D12828] uppercase tracking-wider mb-1">
                        {exp.program}
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-bold text-[#0E2A5C]">
                        {exp.role}
                      </h3>
                      <div className="flex flex-wrap items-center gap-3 mt-1 text-sm font-bold text-[#333333]/80">
                        <span className="flex items-center gap-1 text-[#0E2A5C]">
                          <Building2 className="w-4 h-4 text-[#0000FF]" />
                          {exp.organization}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4 text-[#D12828]" />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 px-3 py-1 bg-[#FFFFA5] border-2 border-[#333333] shadow-[2px_2px_0px_#333333] rounded text-xs font-mono font-bold text-[#0E2A5C]">
                      <Calendar className="w-3.5 h-3.5 text-[#D12828]" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="text-base sm:text-lg text-[#0E2A5C] leading-relaxed mb-6">
                    {exp.summary}
                  </p>

                  {/* Key Experiences checklist */}
                  <div>
                    <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#333333] mb-3 flex items-center gap-2">
                      <DoodleSparkle className="w-4 h-4 text-[#D12828]" />
                      Documented Lab Procedures & Skills:
                    </h4>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {exp.keyExperience.map((item, bIdx) => (
                        <div
                          key={bIdx}
                          className="flex items-start gap-2.5 p-2.5 rounded bg-[#F4F1EA] border-2 border-[#333333] shadow-[1.5px_1.5px_0px_#333333] text-sm text-[#0E2A5C] font-bold"
                        >
                          <CheckSquare className="w-4 h-4 text-[#D12828] stroke-[2.5] flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Footer note */}
                  <div className="mt-6 pt-3 border-t-2 border-dashed border-[#333333]/30 flex items-center justify-between text-xs font-mono font-bold text-[#333333]/70">
                    <span>Clinical Microbiology Log</span>
                    <span className="text-[#0000FF]">✓ Verified SIWES Attachment</span>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
