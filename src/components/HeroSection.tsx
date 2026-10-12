import React from 'react';
import { ArrowRight, Compass, Sparkles, MapPin, Award } from 'lucide-react';
import {
  SignatureWavePurple,
  SignatureLoopArrow,
  SparkStar,
  DiamondSpark,
  HashSymbol,
  StickerPill,
} from './decorations/DecorativeSVGs';

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
    <section className="relative min-h-[90vh] lg:min-h-screen bg-[#062985] text-white pt-24 sm:pt-32 lg:pt-36 pb-12 sm:pb-20 lg:pb-24 overflow-hidden flex flex-col justify-center">
      {/* Background Grids & Decorative Markers */}
      <div className="absolute inset-0 bg-grid-pattern-dark pointer-events-none opacity-40" />

      {/* Signature Hand-drawn Lime Arrow (Slide 1 from PPTX) */}
      <div className="absolute top-14 sm:top-12 right-1 sm:right-10 w-28 min-[400px]:w-40 sm:w-64 lg:w-80 pointer-events-none opacity-50 sm:opacity-75 lg:opacity-90">
        <SignatureLoopArrow />
      </div>

      {/* Floating Sparks */}
      <div className="absolute top-28 left-4 sm:left-20 pointer-events-none">
        <SparkStar size={28} color="#C4E538" className="animate-pulse" />
      </div>
      <div className="absolute bottom-20 right-1/4 pointer-events-none hidden sm:block">
        <DiamondSpark size={24} color="#51C3DD" />
      </div>
      <div className="absolute top-1/2 left-2 pointer-events-none hidden lg:block">
        <SparkStar size={20} color="#9B49DC" />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-3.5 sm:px-6 lg:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
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
              <span className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full text-[11px] sm:text-xs font-semibold bg-white/10 text-white/90 border border-white/20">
                <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#51C3DD]" />
                55 муниципалитетов Дона
              </span>
              <span className="hidden min-[480px]:inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-hand text-[#C4E538] font-bold">
                <HashSymbol size={14} color="#C4E538" />
                #молодёжная_сфера
              </span>
            </div>

            {/* Giant Display Headline */}
            <h1 className="font-display font-black text-3xl min-[380px]:text-4xl sm:text-6xl md:text-7xl xl:text-8xl tracking-tight leading-[0.98] sm:leading-[0.95] text-white uppercase mb-3 sm:mb-4 break-words w-full">
              КАРЬЕРНЫЙ <br />
              <span className="text-[#C4E538] inline-block hover:scale-[1.01] transition-transform">
                МАРШРУТ
              </span>
            </h1>

            {/* Accent Slogan and Sub-headline */}
            <div className="flex items-center gap-2.5 sm:gap-3 mb-4 sm:mb-6">
              <div className="w-6 sm:w-12 h-1 bg-[#51C3DD] rounded-full" />
              <span className="font-hand text-xl min-[380px]:text-2xl sm:text-3xl lg:text-4xl text-[#51C3DD] font-bold tracking-wide">
                Молодость. Карьера. Успех.
              </span>
            </div>

            {/* Subtitle / Value Proposition */}
            <p className="font-body text-sm sm:text-base lg:text-xl text-white/85 max-w-2xl leading-relaxed mb-6 sm:mb-8">
              Единая точка входа в профессию для специалистов по работе с молодёжью Дона:
              от первых волонтёрских инициатив до руководства молодёжными центрами
              и реализации масштабных региональных проектов.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto mb-8 sm:mb-10">
              <a
                href="#route"
                onClick={(e) => scrollToSection(e, '#route')}
                className="group inline-flex items-center justify-center gap-2.5 sm:gap-3 bg-[#C4E538] hover:bg-[#D9FB5F] text-[#062985] font-display font-extrabold text-xs sm:text-sm uppercase px-6 sm:px-8 py-3.5 sm:py-4 rounded-full border-3 border-[#062985] shadow-[4px_4px_0px_#FFFFFF] hover:translate-x-[2px] hover:translate-y-[2px] transition-all min-h-[46px]"
              >
                <span>Изучить карьерный маршрут</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
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

            {/* Micro Stats Bar */}
            <div className="grid grid-cols-3 gap-2 min-[400px]:gap-4 pt-4 sm:pt-6 border-t border-white/15 w-full max-w-lg">
              <div>
                <span className="block font-condensed font-bold text-xl sm:text-3xl text-[#C4E538]">
                  6
                </span>
                <span className="text-[11px] sm:text-xs text-white/70">ступеней развития</span>
              </div>
              <div>
                <span className="block font-condensed font-bold text-xl sm:text-3xl text-[#51C3DD]">
                  55
                </span>
                <span className="text-[11px] sm:text-xs text-white/70">территорий Дона</span>
              </div>
              <div>
                <span className="block font-condensed font-bold text-xl sm:text-3xl text-[#FFFFFF]">
                  100%
                </span>
                <span className="text-[11px] sm:text-xs text-white/70">практика и опыт</span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Visual Card */}
          <div className="lg:col-span-5 relative flex justify-center w-full mt-4 lg:mt-0">
            {/* Visual Frame */}
            <div className="relative w-full max-w-xs sm:max-w-md">
              {/* Backing decorative colored card */}
              <div className="absolute inset-0 bg-[#9B49DC] rounded-3xl rotate-2 sm:rotate-3 translate-x-2 sm:translate-x-3 translate-y-2 sm:translate-y-3 border-2 border-[#C4E538]" />

              {/* Main Photo Card */}
              <div className="relative bg-[#062985] rounded-3xl border-3 border-[#C4E538] overflow-hidden shadow-2xl p-2.5 sm:p-3">
                <div className="relative h-72 sm:h-96 md:h-[420px] rounded-2xl overflow-hidden bg-neutral-900">
                  <img
                    src="/assets/hero-specialist.png"
                    alt="Специалист по работе с молодёжью Ростовской области"
                    className="w-full h-full object-cover object-center"
                    loading="eager"
                  />
                  {/* Inner Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#062985] via-transparent to-transparent opacity-80" />

                  {/* Corner Badge */}
                  <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                    <span className="px-2.5 sm:px-3 py-1 bg-[#062985]/90 border border-[#C4E538] text-[#C4E538] font-condensed font-bold text-[10px] sm:text-xs uppercase rounded-lg shadow-md flex items-center gap-1.5">
                      <Sparkles className="w-3 h-3 text-[#C4E538]" />
                      Лидер молодёжной политики
                    </span>
                  </div>

                  {/* Bottom Card Annotation */}
                  <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 bg-[#062985]/90 backdrop-blur-md p-3 sm:p-4 rounded-xl border border-white/20">
                    <div className="flex items-center justify-between mb-0.5 sm:mb-1">
                      <span className="text-xs sm:text-sm font-hand text-[#C4E538] font-bold">
                        «От идеи — к признанию региона»
                      </span>
                      <Award className="w-3.5 h-3.5 text-[#51C3DD]" />
                    </div>
                    <p className="text-[11px] sm:text-xs text-white/90">
                      Молодёжная сфера — пространство, где инициатива превращается в реальную карьеру.
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Neo-Brutalist Sticker (visible on sm+) */}
              <div className="absolute -bottom-5 -left-4 sm:-bottom-6 sm:-left-6 z-20 hidden sm:block">
                <div className="bg-[#C4E538] text-[#062985] px-3.5 py-2 rounded-2xl border-2 border-[#062985] shadow-[3px_3px_0px_#062985] -rotate-6">
                  <span className="font-display font-extrabold text-[11px] uppercase block">
                    ТВОЁ БУДУЩЕЕ
                  </span>
                  <span className="font-hand text-xs font-bold block text-[#062985]">
                    начинается на Дону ⚡
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Signature Purple Wavy Line Crossing Hero Bottom Edge (From Slide 1) */}
      <div className="relative w-full -mb-1 mt-8 sm:mt-12 pointer-events-none overflow-hidden">
        <SignatureWavePurple className="w-full max-h-16 sm:max-h-28 lg:max-h-36 object-cover" />
      </div>
    </section>
  );
};
