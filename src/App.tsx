/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useMemo } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import CareerGoals from './components/CareerGoals';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useActiveSection } from './hooks/useActiveSection';

export default function App() {
  const sectionIds = useMemo(
    () => [
      'home',
      'about',
      'skills',
      'projects',
      'experience',
      'education',
      'career-goals',
      'contact'
    ],
    []
  );

  const { activeSection, scrolled } = useActiveSection(sectionIds, 120);

  return (
    <div className="relative min-h-screen bg-[#F4F1EA] text-[#0E2A5C] selection:bg-[#FFFFA5] selection:text-[#0E2A5C] overflow-x-hidden">
      {/* Authentic Notebook Red Left Margin Line */}
      <div className="notebook-margin-line" aria-hidden="true" />

      {/* Sticky Top Notebook Navbar */}
      <Navbar
        activeSection={activeSection}
        scrolled={scrolled}
      />

      {/* Main Sketchnote Sections */}
      <main id="main-content" className="relative z-10">
        {/* 1. Home / Hero */}
        <Hero />

        {/* 2. About Me */}
        <About />

        {/* 3. Skills & Capabilities */}
        <Skills />

        {/* 4. Projects & Concepts */}
        <Projects />

        {/* 5. Experience (SIWES Timeline) */}
        <Experience />

        {/* 6. Education */}
        <Education />

        {/* 7. Career Goals & Future Horizon */}
        <CareerGoals />

        {/* 8. Contact & Social Profiles */}
        <Contact />
      </main>

      {/* Notebook Footer */}
      <Footer />
    </div>
  );
}
