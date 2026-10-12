import React from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { Marquee } from './components/Marquee';
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
    <div className="min-h-screen flex flex-col bg-[#F4F6FB] text-[#062985] selection:bg-[#C4E538] selection:text-[#062985]">
      {/* 1. Header with sticky & scroll states */}
      <Header />

      <main className="flex-grow">
        {/* 2. Hero Section */}
        <HeroSection />

        {/* 3. Marquee Ribbon */}
        <Marquee />

        {/* 4. About Section */}
        <AboutSection />

        {/* 5. Regional Infrastructure Map */}
        <RegionalMapSection />

        {/* 6. Main Career Route */}
        <CareerRoute />

        {/* 6. Directions of Activity */}
        <DirectionGrid />

        {/* 7. Professions & Roles Catalog */}
        <ProfessionCatalog />

        {/* 8. Skills & Professional Growth */}
        <SkillsSection />

        {/* 9. Success Stories & Case Studies */}
        <SuccessStories />

        {/* 10. Interactive Career Selector */}
        <CareerSelector />

        {/* 11. Additional Opportunities & Ecosystem */}
        <OpportunitiesSection />

        {/* 12. Frequently Asked Questions */}
        <FAQSection />

        {/* 13. Final CTA Block */}
        <FinalCTA />
      </main>

      {/* 14. Footer */}
      <Footer />
    </div>
  );
};

export default App;
