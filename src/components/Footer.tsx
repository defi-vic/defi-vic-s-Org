import { ArrowUp, Heart } from 'lucide-react';
import { profile } from '../data/siteData.js';
import { DoodleFlask, DoodleMicrobe } from './Doodles';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 border-t-2 border-dashed border-[#333333]/40 bg-[#eae5dc]/60 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded bg-[#FFFFA5] border-2 border-[#333333] shadow-[2px_2px_0px_#333333] flex items-center justify-center -rotate-2">
              <span className="font-bold text-[#0E2A5C] text-base">AV</span>
            </div>
            <div>
              <span className="block text-xl font-bold text-[#0E2A5C]">
                {profile.name}
              </span>
              <span className="block text-xs font-mono font-bold text-[#333333]/70">
                Microbiology Student · Chronic Vibe Coder
              </span>
            </div>
          </div>

          {/* Philosophy note */}
          <div className="text-center text-sm font-bold text-[#0E2A5C] flex items-center gap-1.5">
            <span>Drawn with curiosity at the intersection of microbiology and software</span>
          </div>

          {/* Right Action */}
          <div className="flex items-center gap-4">
            <span className="text-xs font-mono font-bold text-[#333333]">
              © {currentYear}
            </span>
            <button
              onClick={scrollToTop}
              aria-label="Scroll back to top of notebook"
              className="sketch-btn-secondary p-2.5 rounded-md cursor-pointer"
            >
              <ArrowUp className="w-5 h-5 stroke-[2.5]" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
}
