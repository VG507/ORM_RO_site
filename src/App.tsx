import React from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { Marquee } from './components/Marquee';
import { TaglineManifesto } from './components/TaglineManifesto';
import { AboutSection } from './components/AboutSection';
import { RegionalMapSection } from './components/RegionalMapSection';
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

        {/* 6. Regional Infrastructure Map */}
        <RegionalMapSection />

        {/* 7. Main Career Route */}
        <CareerRoute />

        {/* 8. Directions of Activity */}
        <DirectionGrid />

        {/* 9. Professions & Roles Catalog */}
        <ProfessionCatalog />

        {/* 10. Skills & Professional Growth */}
        <SkillsSection />

        {/* 11. Success Stories & Case Studies */}
        <SuccessStories />

        {/* 12. Interactive Career Selector */}
        <CareerSelector />

        {/* 13. Additional Opportunities & Ecosystem */}
        <OpportunitiesSection />

        {/* 14. Frequently Asked Questions */}
        <FAQSection />

        {/* 15. Final CTA Block */}
        <FinalCTA />
      </main>

      {/* 16. Footer */}
      <Footer />
    </div>
  );
};

export default App;
