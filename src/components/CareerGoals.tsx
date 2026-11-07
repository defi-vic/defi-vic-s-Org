import { Target, Compass, Sparkles, Lightbulb, Rocket, Dna } from 'lucide-react';
import { careerGoals } from '../data/siteData.js';
import { useInView } from '../hooks/useInView';
import { DoodleUnderline, DoodleSparkle, DoodleArrow } from './Doodles';

export default function CareerGoals() {
  const { ref, isInView } = useInView();

  const getPillarIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Dna className="w-5 h-5 text-[#D12828]" />;
      case 1:
        return <Rocket className="w-5 h-5 text-[#0000FF]" />;
      case 2:
        return <Lightbulb className="w-5 h-5 text-[#0E2A5C]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#D12828]" />;
    }
  };

  return (
    <section
      id="career-goals"
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
            <Target className="w-4 h-4 text-[#D12828]" />
            <span>06. FUTURE HORIZON & AMBITIONS</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#0E2A5C] mb-2">
            Career Goals &{' '}
            <span className="highlighter border-b-2 border-dashed border-[#D12828]">
              Aspirations
            </span>
          </h2>
          <div className="w-44 mb-3">
            <DoodleUnderline className="w-full h-3 text-[#D12828]" />
          </div>
          <p className="text-lg sm:text-xl text-[#0E2A5C]/85">
            A deliberate strategy to fuse microbial biological science with software engineering and healthcare innovation.
          </p>
        </div>

        {/* Narrative Board Card */}
        <div
          className={`relative sketch-card p-6 sm:p-8 md:p-10 bg-white mb-10 transition-all duration-500 rotate-0.5 hover:rotate-0 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <div className="washi-tape"></div>

          <div className="flex items-center gap-3 mb-5 border-b-2 border-[#333333] pb-4">
            <div className="w-10 h-10 rounded bg-[#FFFFA5] border-2 border-[#333333] shadow-[2px_2px_0px_#333333] flex items-center justify-center -rotate-2">
              <Compass className="w-6 h-6 text-[#D12828]" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#0E2A5C]">
              {careerGoals.intro}
            </h3>
          </div>

          <div className="space-y-4 text-lg text-[#0E2A5C] leading-relaxed max-w-4xl">
            {careerGoals.paragraphs.map((para: string, idx: number) => (
              <p key={idx}>{para}</p>
            ))}
          </div>
        </div>

        {/* 3 Sketchnote Sticky Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {careerGoals.pillars.map((pillar: any, pIdx: number) => (
            <div
              key={pIdx}
              className={`relative sticky-note p-6 transition-all duration-500 transform ${
                pIdx === 0 ? '-rotate-1' : pIdx === 1 ? 'rotate-1' : '-rotate-0.5'
              } hover:rotate-0 hover:-translate-y-1 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: `${pIdx * 80}ms` }}
            >
              <div className="washi-tape-corner"></div>

              <div className="w-10 h-10 rounded bg-white border-2 border-[#333333] flex items-center justify-center mb-4 shadow-[2px_2px_0px_#333333]">
                {getPillarIcon(pIdx)}
              </div>
              <span className="text-xs font-mono font-bold text-[#D12828] block mb-1 uppercase tracking-wider">
                {pillar.subtitle}
              </span>
              <h4 className="text-xl font-bold text-[#0E2A5C] mb-2">
                {pillar.title}
              </h4>
              <p className="text-sm text-[#0E2A5C]/90 leading-relaxed font-bold">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
