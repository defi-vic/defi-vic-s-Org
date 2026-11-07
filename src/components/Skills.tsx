import { Code2, Laptop, FlaskConical, Layers, CheckSquare } from 'lucide-react';
import { skills } from '../data/siteData.js';
import { useInView } from '../hooks/useInView';
import { DoodleUnderline, DoodleStar } from './Doodles';
import type { SkillCategory, SkillItem } from '../types';

export default function Skills() {
  const { ref, isInView } = useInView();

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="w-5 h-5 text-[#0000FF]" />;
      case 'Laptop':
        return <Laptop className="w-5 h-5 text-[#0E2A5C]" />;
      case 'FlaskConical':
        return <FlaskConical className="w-5 h-5 text-[#D12828]" />;
      default:
        return <Layers className="w-5 h-5 text-[#333333]" />;
    }
  };

  return (
    <section
      id="skills"
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
            <Layers className="w-4 h-4 text-[#0000FF]" />
            <span>02. SKILLS & COMPETENCY NOTES</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#0E2A5C] mb-2">
            The Laboratory & Software{' '}
            <span className="highlighter border-b-2 border-dashed border-[#0000FF]">
              Toolbox
            </span>
          </h2>
          <div className="w-44 mb-3">
            <DoodleUnderline className="w-full h-3 text-[#0000FF]" />
          </div>
          <p className="text-lg sm:text-xl text-[#0E2A5C]/85">
            Practical skills spanning hands-on laboratory science, digital tools, and self-taught programming.
          </p>
        </div>

        {/* 3 Sketchnote Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {(skills as SkillCategory[]).map((category, catIdx) => (
            <div
              key={category.id}
              className={`relative sketch-card p-6 bg-white flex flex-col justify-between transition-all duration-500 transform ${
                catIdx % 2 === 0 ? '-rotate-0.5' : 'rotate-0.5'
              } hover:rotate-0 hover:-translate-y-1.5 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{
                transitionDelay: `${catIdx * 80}ms`
              }}
            >
              {/* Tape strip on top */}
              <div className="washi-tape"></div>

              <div>
                {/* Header with Icon and Title */}
                <div className="flex items-center justify-between border-b-2 border-[#333333] pb-3 mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded bg-[#FFFFA5] border-2 border-[#333333] flex items-center justify-center">
                      {getCategoryIcon(category.icon)}
                    </div>
                    <div>
                      <h3 className="font-bold text-[#0E2A5C] text-xl leading-none">
                        {category.title}
                      </h3>
                      <span className="text-xs font-mono font-bold text-[#333333]/70">
                        {category.items.length} skills listed
                      </span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-[#0E2A5C]/85 leading-relaxed mb-5">
                  {category.description}
                </p>

                {/* Skill Chips with Hand-Drawn Box Look */}
                <div className="space-y-2">
                  {category.items.map((skill: SkillItem, sIdx: number) => (
                    <div
                      key={sIdx}
                      className="flex items-center justify-between px-3 py-1.5 rounded bg-[#F4F1EA] border-2 border-[#333333] text-base font-bold text-[#0E2A5C] shadow-[1.5px_1.5px_0px_#333333] hover:bg-[#FFFFA5] transition-colors"
                    >
                      <div className="flex items-center gap-2">
                        <CheckSquare className="w-4 h-4 text-[#D12828] stroke-[2.5]" />
                        <span>{skill.name}</span>
                      </div>
                      {skill.level && (
                        <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-[#FFFFA5] border border-[#333333] text-[#D12828]">
                          {skill.level}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer Note */}
              <div className="mt-6 pt-3 border-t-2 border-dashed border-[#333333]/30 flex items-center justify-between text-xs font-mono font-bold text-[#333333]/80">
                <span>Field Verified</span>
                <span className="text-[#0000FF]">✓ Active Study</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
