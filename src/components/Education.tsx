import { GraduationCap, Sparkles, CheckSquare, Award } from 'lucide-react';
import { education } from '../data/siteData.js';
import { useInView } from '../hooks/useInView';
import { DoodleUnderline, DoodleStar } from './Doodles';

export default function Education() {
  const { ref, isInView } = useInView();

  return (
    <section
      id="education"
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
            <GraduationCap className="w-4 h-4 text-[#0000FF]" />
            <span>05. ACADEMIC FOUNDATION</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#0E2A5C] mb-2">
            Undergraduate{' '}
            <span className="highlighter border-b-2 border-dashed border-[#0000FF]">
              Studies
            </span>
          </h2>
          <div className="w-40 mb-3">
            <DoodleUnderline className="w-full h-3 text-[#0000FF]" />
          </div>
          <p className="text-lg sm:text-xl text-[#0E2A5C]/85">
            Developing scientific rigor in microbiology while simultaneously cultivating software engineering habits.
          </p>
        </div>

        {/* Education Sketch Card */}
        <div
          className={`max-w-4xl mx-auto relative sketch-card p-6 sm:p-10 bg-white transition-all duration-500 rotate-0.5 hover:rotate-0 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <div className="washi-tape"></div>

          {/* Top header row */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b-2 border-[#333333]">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-md bg-[#FFFFA5] border-2 border-[#333333] shadow-[3px_3px_0px_#333333] flex items-center justify-center flex-shrink-0 -rotate-2">
                <GraduationCap className="w-8 h-8 text-[#0E2A5C]" />
              </div>
              <div>
                <span className="text-xs font-mono font-bold text-[#D12828] uppercase tracking-wider">
                  Degree in Progress
                </span>
                <h3 className="text-3xl sm:text-4xl font-bold text-[#0E2A5C]">
                  {education.institution}
                </h3>
                <p className="text-xl font-bold text-[#0000FF] mt-0.5">
                  {education.degree}
                </p>
              </div>
            </div>

            {/* Badges */}
            <div className="flex flex-row md:flex-col items-start md:items-end gap-2">
              <span className="px-3 py-1 bg-[#FFFFA5] border-2 border-[#333333] shadow-[2px_2px_0px_#333333] rounded text-sm font-bold text-[#0E2A5C] -rotate-1">
                ⭐ {education.status}
              </span>
              <span className="text-xs font-mono font-bold text-[#333333]/80">
                Graduation: <strong className="text-[#D12828]">{education.expectedGraduation}</strong>
              </span>
            </div>
          </div>

          {/* Quote in Sticky Note Style */}
          <div className="my-6">
            <div className="p-4 sm:p-5 rounded-md bg-[#FFFFA5] border-2 border-[#333333] shadow-[3px_3px_0px_#333333] text-lg italic text-[#0E2A5C] font-bold leading-relaxed flex items-start gap-3 -rotate-0.5">
              <Sparkles className="w-6 h-6 text-[#D12828] flex-shrink-0 mt-0.5" />
              <span>"{education.quote}"</span>
            </div>
          </div>

          {/* Highlights checklist */}
          {education.highlights && education.highlights.length > 0 && (
            <div className="pt-2 space-y-2">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#333333] mb-3">
                Key Academic & Research Dimensions:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {education.highlights.map((item: string, idx: number) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2 text-sm font-bold text-[#0E2A5C] p-2.5 rounded bg-[#F4F1EA] border-2 border-[#333333] shadow-[1.5px_1.5px_0px_#333333]"
                  >
                    <CheckSquare className="w-4 h-4 text-[#0000FF] flex-shrink-0 mt-0.5 stroke-[2.5]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
