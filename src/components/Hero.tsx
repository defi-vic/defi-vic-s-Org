import { useState, useEffect } from 'react';
import { ArrowDown, Mail, Sparkles, Terminal, CheckCircle2 } from 'lucide-react';
import { profile } from '../data/siteData.js';
import {
  DoodleArrow,
  DoodleCurvedArrow,
  DoodleMicrobe,
  DoodleFlask,
  DoodleUnderline,
  DoodleStar,
  DoodleCoffeeStain
} from './Doodles';

export default function Hero() {
  const [displayedTagline, setDisplayedTagline] = useState('');
  const fullTagline = profile.tagline;

  // Typing effect on the handwriting tagline
  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDisplayedTagline(fullTagline);
      return;
    }

    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullTagline.length) {
        setDisplayedTagline(fullTagline.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 40);

    return () => clearInterval(interval);
  }, [fullTagline]);

  const scrollTo = (targetId: string) => {
    const el = document.getElementById(targetId);
    if (el) {
      const navOffset = 75;
      const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - navOffset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[100dvh] flex items-center justify-center pt-24 pb-16 overflow-hidden"
    >
      {/* Decorative notebook doodles & coffee ring in background */}
      <div className="absolute top-12 right-6 lg:right-16 opacity-35 pointer-events-none" aria-hidden="true">
        <DoodleCoffeeStain className="w-36 h-36" />
      </div>
      <div className="absolute bottom-10 left-6 opacity-25 pointer-events-none hidden md:block" aria-hidden="true">
        <DoodleMicrobe className="w-16 h-16 text-[#0000FF]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Asymmetric Sketchnote Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Hand-Drawn Headline, Tagline, Bio, CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Pinned Note Badge */}
            <div className="relative inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#FFFFA5] border-2 border-[#333333] shadow-[3px_3px_0px_#333333] rounded-md -rotate-1 mb-6">
              <span className="w-2.5 h-2.5 rounded-full bg-[#D12828] border border-[#333333]"></span>
              <span className="text-sm font-bold text-[#0E2A5C] tracking-wide">
                {profile.statusText}
              </span>
              <DoodleStar className="w-4 h-4 text-[#0E2A5C]" />
            </div>

            {/* Name with Hand-Drawn Underline */}
            <div className="relative mb-3">
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#0E2A5C] leading-[1.05]">
                {profile.name}
              </h1>
              <div className="w-3/4 max-w-md mt-1">
                <DoodleUnderline className="w-full h-4 text-[#D12828]" />
              </div>
            </div>

            {/* Tagline with Typewriter effect & Highlighter marker */}
            <div className="min-h-[2.75rem] flex items-center my-2">
              <p className="text-2xl sm:text-3xl font-bold text-[#0E2A5C]">
                <span className="highlighter border border-dashed border-[#333333]/30">
                  {displayedTagline}
                </span>
                <span className="inline-block w-2.5 h-6 ml-1 bg-[#D12828] animate-pulse align-middle" />
              </p>
            </div>

            {/* Bio text in handwriting style */}
            <p className="text-lg sm:text-xl text-[#0E2A5C]/90 leading-relaxed max-w-2xl my-5">
              {profile.shortBio}
            </p>

            {/* CTAs with Sketch-Style Button Shadows */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mt-2">
              <button
                onClick={() => scrollTo('projects')}
                className="sketch-btn-primary inline-flex items-center justify-center gap-2 px-6 py-3 text-lg cursor-pointer"
              >
                <span>View My Work</span>
                <ArrowDown className="w-5 h-5 stroke-[2.5]" />
              </button>

              <button
                onClick={() => scrollTo('contact')}
                className="sketch-btn-secondary inline-flex items-center justify-center gap-2 px-6 py-3 text-lg cursor-pointer"
              >
                <Mail className="w-5 h-5 text-[#D12828] stroke-[2.5]" />
                <span>Get In Touch</span>
              </button>
            </div>

            {/* Doodle arrow pointing to buttons */}
            <div className="hidden sm:flex items-center gap-2 mt-4 ml-6 text-sm font-bold text-[#333333]/70">
              <DoodleCurvedArrow className="w-14 h-9 text-[#D12828] transform -rotate-12" />
              <span className="italic">explore notes & concepts below!</span>
            </div>

            {/* University & Location indicator */}
            <div className="mt-8 pt-4 border-t-2 border-dashed border-[#333333]/30 flex flex-wrap items-center gap-4 text-sm font-bold text-[#333333]/80">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#0000FF]"></span>
                {profile.location}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5 text-[#0E2A5C]">
                <Sparkles className="w-4 h-4 text-[#D12828]" />
                Python & Backend Aspirant
              </span>
            </div>
          </div>

          {/* Right Column: Sketchnote Sticky Board (Science 🧪 × Code 💻) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              
              {/* Tape strip holding top of notebook page */}
              <div className="washi-tape"></div>

              {/* Main Sketch Card */}
              <div className="sketch-card p-6 md:p-8 bg-[#FFFFFF] relative rotate-1">
                
                {/* Header note */}
                <div className="flex items-center justify-between border-b-2 border-[#333333] pb-3 mb-5">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#D12828]">
                      NOTEBOOK PAGE 01
                    </span>
                  </div>
                  <span className="text-xs font-mono text-[#333333]">lab_vibe.py</span>
                </div>

                {/* Science Note Block */}
                <div className="p-4 rounded-md bg-[#F4F1EA] border-2 border-[#333333] shadow-[2px_2px_0px_#333333] mb-4">
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-2 font-bold text-base text-[#0E2A5C]">
                      <DoodleFlask className="w-6 h-6 text-[#D12828]" />
                      <span>Microbiology & Diagnostics</span>
                    </div>
                    <span className="text-xs font-bold px-2 py-0.5 rounded bg-[#FFFFA5] border border-[#333333] text-[#0E2A5C]">
                      Final Year
                    </span>
                  </div>
                  <p className="text-sm text-[#0E2A5C]/85 leading-normal">
                    Microscopy, specimen staining, malaria assays, and systematic lab investigation.
                  </p>
                </div>

                {/* Hand-drawn intersection note */}
                <div className="flex items-center justify-center my-3 relative">
                  <div className="absolute inset-x-0 h-0.5 border-t-2 border-dashed border-[#333333]/40"></div>
                  <span className="relative z-10 px-3 py-1 rounded-md bg-[#FFFFA5] border-2 border-[#333333] text-xs font-bold text-[#0E2A5C] shadow-[2px_2px_0px_#333333] -rotate-2">
                    ⚡ The Intersection
                  </span>
                </div>

                {/* Code Note Block */}
                <div className="p-4 rounded-md bg-[#F4F1EA] border-2 border-[#333333] shadow-[2px_2px_0px_#333333] mb-5 font-mono text-xs">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2 font-bold text-sm text-[#0000FF] font-sans">
                      <Terminal className="w-4 h-4 text-[#0000FF]" />
                      <span>Chronic Vibe Coding</span>
                    </div>
                    <span className="text-[11px] px-1.5 py-0.5 rounded bg-[#FFFFA5] border border-[#333333] text-[#333333]">
                      Python
                    </span>
                  </div>
                  <div className="space-y-1 text-[#333333]">
                    <p className="text-[#0000FF]"># Building tools with AI & code</p>
                    <p><span className="text-[#D12828] font-bold">def</span> bridge_disciplines():</p>
                    <p className="pl-4">return "science" + "software"</p>
                  </div>
                </div>

                {/* Hand-drawn bullet checklist */}
                <div className="grid grid-cols-2 gap-2 text-xs font-bold">
                  <div className="p-2 rounded bg-[#FFFFA5] border border-[#333333] flex items-center gap-1.5 -rotate-1">
                    <CheckCircle2 className="w-4 h-4 text-[#D12828]" />
                    <span>SIWES Certified</span>
                  </div>
                  <div className="p-2 rounded bg-[#FFFFA5] border border-[#333333] flex items-center gap-1.5 rotate-1">
                    <CheckCircle2 className="w-4 h-4 text-[#0000FF]" />
                    <span>Python & Backend</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
