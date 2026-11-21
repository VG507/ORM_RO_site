import React from 'react';
import { ArrowRight, Compass } from 'lucide-react';
import heroPhoto from '../assets/hero-specialist.jpg';
import { SignatureLoopArrow, StickerPill } from './decorations/DecorativeSVGs';

export const HeroSection: React.FC = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      const topOffset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="relative bg-[#062985] text-white pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 lg:pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern-dark pointer-events-none opacity-25" />
      <div className="absolute top-24 right-1 sm:right-10 w-28 sm:w-48 lg:w-64 pointer-events-none opacity-30" aria-hidden="true">
        <SignatureLoopArrow />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-3.5 sm:px-6 lg:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Column: Asymmetrical Typography & Content */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Top Regional Badge */}
            <div className="flex flex-wrap items-center gap-2 mb-4 sm:mb-6">
              <StickerPill
                text="Ростовская область"
                bg="#C4E538"
                textColor="#062985"
                rotate="-2deg"
              />
            </div>

            {/* Giant Display Headline */}
            <h1 className="font-display font-black text-[clamp(1.5rem,8.6vw,4.5rem)] lg:text-[clamp(2.75rem,5.5vw,4.75rem)] tracking-tight leading-none mb-3 sm:mb-4">
              <span className="block whitespace-nowrap">КАРЬЕРНЫЙ</span>
              <span className="block text-[#C4E538] whitespace-nowrap">МАРШРУТ</span>
            </h1>

            {/* Accent Slogan and Sub-headline */}
            <div className="flex items-center gap-2.5 sm:gap-3 mb-4 sm:mb-6">
              <div className="w-6 sm:w-12 h-1 bg-[#51C3DD] rounded-full" />
              <span className="font-hand text-xl min-[380px]:text-2xl sm:text-3xl lg:text-4xl text-[#51C3DD] font-bold tracking-wide">
                Молодость. Карьера. Успех.
              </span>
            </div>

            {/* Subtitle / Value Proposition */}
            <p className="text-base lg:text-lg text-white/90 max-w-xl leading-relaxed mb-6 sm:mb-8">
              Как начать работать с молодёжью в Ростовской области, какие роли есть в этой сфере
              и какие навыки нужны для роста.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3 sm:gap-4 w-full">
              <a
                href="#route"
                onClick={(e) => scrollToSection(e, '#route')}
                className="group inline-flex items-center justify-center gap-2.5 sm:gap-3 bg-[#C4E538] hover:bg-[#D9FB5F] text-[#062985] font-display font-extrabold text-xs sm:text-sm uppercase px-6 sm:px-8 py-3.5 sm:py-4 rounded-full border-3 border-[#062985] shadow-[4px_4px_0px_#FFFFFF] hover:translate-x-[2px] hover:translate-y-[2px] transition-all min-h-[46px]"
              >
                <span>Изучить маршрут</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 shrink-0 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#selector"
                onClick={(e) => scrollToSection(e, '#selector')}
                className="inline-flex items-center justify-center gap-2 bg-transparent hover:bg-[#51C3DD]/10 text-[#51C3DD] hover:text-white font-display font-bold text-xs sm:text-sm uppercase px-5 sm:px-6 py-3.5 sm:py-4 rounded-full border-2 border-[#51C3DD] transition-all min-h-[46px]"
              >
                <Compass className="w-4 h-4 text-[#51C3DD]" />
                <span>Подобрать направление</span>
              </a>
            </div>

          </div>

          <div className="lg:col-span-5 w-full max-w-md mx-auto rounded-3xl overflow-hidden border-2 border-[#C4E538] shadow-[5px_5px_0px_#9B49DC] bg-[#03164D]">
            <img
              src={heroPhoto}
              alt="Выступление на молодёжном мероприятии"
              className="w-full aspect-square object-cover object-[center_35%]"
              width={1080}
              height={1440}
              fetchPriority="high"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
