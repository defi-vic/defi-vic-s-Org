import { Microscope, Code2, Compass, Sparkles } from 'lucide-react';
import { profile } from '../data/siteData.js';
import { useInView } from '../hooks/useInView';
import { DoodleUnderline, DoodleMicrobe, DoodleFlask, DoodleStar } from './Doodles';

export default function About() {
  const { ref, isInView } = useInView();

  return (
    <section
      id="about"
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#FFFFA5] border-2 border-[#333333] shadow-[2px_2px_0px_#333333] text-sm font-bold text-[#0E2A5C] mb-3 -rotate-1">
            <Compass className="w-4 h-4 text-[#D12828]" />
            <span>01. ABOUT ME & MY STORY</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#0E2A5C] mb-2">
            Where Science Meets The{' '}
            <span className="highlighter border-b-2 border-dashed border-[#D12828]">
              World of Code
            </span>
          </h2>
          <div className="w-48 mb-3">
            <DoodleUnderline className="w-full h-3 text-[#D12828]" />
          </div>
          <p className="text-lg sm:text-xl text-[#0E2A5C]/85">
            A snapshot of my dual journey through microbiology laboratories and digital software experiments.
          </p>
        </div>

        {/* Asymmetric Sketch Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Narrative Notebook Page (7 cols) */}
          <div
            className={`lg:col-span-7 relative sketch-card p-6 sm:p-8 bg-[#FFFFFF] transition-all duration-500 delay-100 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            {/* Washi tape on top */}
            <div className="washi-tape"></div>

            <div className="space-y-4 text-lg text-[#0E2A5C] leading-relaxed">
              {profile.aboutIntro.map((paragraph, idx) => (
                <p
                  key={idx}
                  className={
                    idx === 0
                      ? 'text-xl font-bold text-[#0E2A5C] border-l-4 border-[#D12828] pl-3 bg-[#FFFFA5]/30 py-1'
                      : ''
                  }
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Handwritten callout sticky box */}
            <div className="mt-8 pt-5 border-t-2 border-dashed border-[#333333]/30 flex items-start gap-3">
              <div className="p-2 rounded bg-[#FFFFA5] border-2 border-[#333333] shadow-[2px_2px_0px_#333333] text-[#D12828] flex-shrink-0 -rotate-3">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <p className="text-base italic text-[#0E2A5C]/90 font-bold">
                  "Science teaches you to observe, question, and analyze. Technology gives you the leverage to build the answers."
                </p>
                <span className="text-xs font-mono font-bold text-[#333333]/70 mt-1 block">
                  — Akinlabu Victor Erioluwa
                </span>
              </div>
            </div>
          </div>

          {/* Sticky Notes & Pillar Cards (5 cols) */}
          <div
            className={`lg:col-span-5 space-y-6 transition-all duration-500 delay-150 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            {/* Science Sticky Note */}
            <div className="relative sticky-note p-5 transform -rotate-1 hover:rotate-0 transition-transform">
              <div className="washi-tape-corner"></div>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 rounded bg-white border-2 border-[#333333] flex items-center justify-center">
                  <Microscope className="w-5 h-5 text-[#D12828]" />
                </div>
                <div>
                  <h3 className="font-bold text-[#0E2A5C] text-lg">
                    The Laboratory Mindset
                  </h3>
                  <span className="text-xs font-mono text-[#333333]/80">University of Ilorin</span>
                </div>
              </div>
              <p className="text-base text-[#0E2A5C]/90 leading-snug">
                Trained in specimen collection, microscopy, and serological testing. The laboratory instills deep empirical discipline, careful record-keeping, and attention to detail.
              </p>
            </div>

            {/* Tech Sticky Note */}
            <div className="relative sketch-card p-5 bg-[#FDFBF7] transform rotate-1 hover:rotate-0 transition-transform">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 rounded bg-[#FFFFA5] border-2 border-[#333333] flex items-center justify-center">
                  <Code2 className="w-5 h-5 text-[#0000FF]" />
                </div>
                <div>
                  <h3 className="font-bold text-[#0E2A5C] text-lg">
                    The Chronic Vibe Coder
                  </h3>
                  <span className="text-xs font-mono text-[#333333]/80">Python & AI Exploration</span>
                </div>
              </div>
              <p className="text-base text-[#0E2A5C]/90 leading-snug">
                Learning backend architecture, experimenting with Python scripts, and leveraging modern AI developer tools to turn concepts into practical solutions.
              </p>
            </div>

            {/* Quick Stat Note */}
            <div className="p-4 rounded-md bg-[#FFFFA5] border-2 border-[#333333] shadow-[3px_3px_0px_#333333] grid grid-cols-2 gap-3 text-center">
              <div>
                <span className="block text-2xl font-bold text-[#0E2A5C]">
                  2027
                </span>
                <span className="text-xs font-bold text-[#333333]/80">
                  Expected B.Sc. Grad
                </span>
              </div>
              <div>
                <span className="block text-2xl font-bold text-[#D12828]">
                  SIWES
                </span>
                <span className="text-xs font-bold text-[#333333]/80">
                  Lab Training Complete
                </span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
