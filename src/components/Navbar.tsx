import { useState } from 'react';
import { Menu, X, Bookmark, FileText } from 'lucide-react';
import { navigationItems } from '../data/siteData.js';
import { DoodleFlask, DoodleMicrobe } from './Doodles';

interface NavbarProps {
  activeSection: string;
  scrolled: boolean;
}

export default function Navbar({ activeSection, scrolled }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const navOffset = 75;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-[#F4F1EA]/95 backdrop-blur-sm border-b-2 border-[#333333] shadow-[0_3px_0px_rgba(51,51,51,0.15)]'
          : 'bg-[#F4F1EA] border-b-2 border-dashed border-[#333333]/40'
      }`}
    >
      {/* Spiral notebook binding holes accent along the top */}
      <div className="hidden md:flex justify-around items-center h-2 bg-[#eae5dc] border-b border-[#333333]/20 px-8 overflow-hidden select-none" aria-hidden="true">
        {Array.from({ length: 28 }).map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#333333]/30 shadow-inner" />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Hand-Drawn Brand Monogram */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2 group focus:outline-none rounded-md"
          >
            <div className="w-9 h-9 rounded-md bg-[#FFFFA5] border-2 border-[#333333] shadow-[2px_2px_0px_#333333] flex items-center justify-center transform -rotate-3 group-hover:rotate-0 transition-transform">
              <span className="font-bold text-[#0E2A5C] text-lg">AV</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-[#0E2A5C] group-hover:text-[#D12828] transition-colors leading-none">
                Akinlabu Victor
              </span>
              <span className="text-xs font-mono text-[#333333]/80 flex items-center gap-1 mt-0.5">
                <span className="inline-block w-2 h-2 rounded-full bg-[#0000FF]"></span>
                Microbiology · Vibe Coder
              </span>
            </div>
          </a>

          {/* Desktop Sketchnote Tabs */}
          <nav className="hidden lg:flex items-center gap-1.5 xl:gap-2">
            {navigationItems.map((item) => {
              const itemId = item.href.replace('#', '');
              const isActive = activeSection === itemId;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`relative px-3 py-1.5 text-base font-bold transition-all rounded-md ${
                    isActive
                      ? 'bg-[#FFFFA5] text-[#0E2A5C] border-2 border-[#333333] shadow-[2px_2px_0px_#333333] -rotate-1'
                      : 'text-[#0E2A5C] hover:bg-[#FFFFA5]/50 hover:text-[#D12828]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-2 right-2 h-0.5 bg-[#D12828]" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action: Notebook Paper Tag + Mobile Button */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 bg-[#FFFFA5] border-2 border-[#333333] shadow-[2px_2px_0px_#333333] rounded-md text-xs font-bold text-[#0E2A5C] rotate-1">
              <Bookmark className="w-3.5 h-3.5 text-[#D12828]" />
              <span>Lab & Code Notes</span>
            </div>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
              className="lg:hidden p-2 rounded-md bg-[#F4F1EA] text-[#0E2A5C] border-2 border-[#333333] shadow-[2px_2px_0px_#333333] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sketchnote Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#F4F1EA] border-b-2 border-[#333333] px-4 pt-2 pb-6 shadow-[0_4px_0px_rgba(51,51,51,0.2)]">
          <nav className="flex flex-col space-y-2">
            {navigationItems.map((item) => {
              const itemId = item.href.replace('#', '');
              const isActive = activeSection === itemId;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-3 py-2 rounded-md text-lg font-bold transition-all ${
                    isActive
                      ? 'bg-[#FFFFA5] text-[#0E2A5C] border-2 border-[#333333] shadow-[2px_2px_0px_#333333]'
                      : 'text-[#0E2A5C] hover:bg-[#FFFFA5]/50'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
