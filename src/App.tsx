import React from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { Marquee } from './components/Marquee';
import { TaglineManifesto } from './components/TaglineManifesto';
import { AboutSection } from './components/AboutSection';
import { CareerRoute } from './components/CareerRoute';
import { DirectionGrid } from './components/DirectionGrid';
import { ProfessionCatalog } from './components/ProfessionCatalog';
import { SkillsSection } from './components/SkillsSection';
import { SuccessStories } from './components/SuccessStories';
import { CareerSelector } from './components/CareerSelector';
import { OpportunitiesSection } from './components/OpportunitiesSection';
import { FAQSection } from './components/FAQSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#F4F6FB] text-[#062985] selection:bg-[#C4E538] selection:text-[#062985] overflow-x-hidden w-full relative">
      {/* 1. Header with sticky & scroll states */}
      <Header />

      <main id="main-content" className="flex-grow">
        {/* 2. Hero Section */}
        <HeroSection />

        {/* 3. Marquee Ribbon */}
        <Marquee />

        {/* 4. Tagline Reveal & Regional Youth Policy Manifesto (B11) */}
        <TaglineManifesto />

        {/* 5. About Section */}
        <AboutSection />

        {/* 6. Main Career Route */}
        <CareerRoute />

        {/* 7. Directions of Activity */}
        <DirectionGrid />

        {/* 8. Professions & Roles Catalog */}
        <ProfessionCatalog />

        {/* 9. Skills & Professional Growth */}
        <SkillsSection />

        {/* 10. Success Stories & Case Studies */}
        <SuccessStories />

        {/* 11. Interactive Career Selector */}
        <CareerSelector />

        {/* 12. Additional Opportunities & Ecosystem */}
        <OpportunitiesSection />

        {/* 13. Frequently Asked Questions */}
        <FAQSection />

        {/* 14. Final CTA Block */}
        <FinalCTA />
      </main>

      {/* 15. Footer */}
      <Footer />
    </div>
  );
};

export default App;
