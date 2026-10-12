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
      const topOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="relative min-h-[92vh] lg:min-h-screen bg-[#062985] text-white pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden flex flex-col justify-center">
      {/* Background Grids & Decorative Markers */}
      <div className="absolute inset-0 bg-grid-pattern-dark pointer-events-none opacity-40" />

      {/* Signature Hand-drawn Lime Arrow (Slide 1 from PPTX) */}
      <div className="absolute top-12 right-2 sm:right-10 w-48 sm:w-64 lg:w-80 pointer-events-none opacity-70 lg:opacity-90">
        <SignatureLoopArrow />
      </div>

      {/* Floating Sparks */}
      <div className="absolute top-36 left-8 sm:left-20 pointer-events-none">
        <SparkStar size={36} color="#C4E538" className="animate-pulse" />
      </div>
      <div className="absolute bottom-24 right-1/3 pointer-events-none">
        <DiamondSpark size={28} color="#51C3DD" />
      </div>
      <div className="absolute top-1/2 left-4 pointer-events-none hidden sm:block">
        <SparkStar size={24} color="#9B49DC" />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Asymmetrical Typography & Content */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Top Regional Badge */}
            <div className="flex flex-wrap items-center gap-2 mb-6">
              <StickerPill
                text="Ростовская область"
                bg="#C4E538"
                textColor="#062985"
                rotate="-2deg"
              />
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-white/90 border border-white/20">
                <MapPin className="w-3.5 h-3.5 text-[#51C3DD]" />
                55 муниципалитетов Дона
              </span>
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-hand text-[#C4E538] font-bold">
                <HashSymbol size={16} color="#C4E538" />
                #молодёжная_сфера
              </span>
            </div>

            {/* Giant Display Headline */}
            <h1 className="font-display font-black text-4xl sm:text-6xl md:text-7xl xl:text-8xl tracking-tight leading-[0.95] text-white uppercase mb-4">
              КАРЬЕРНЫЙ <br />
              <span className="text-[#C4E538] inline-block hover:scale-[1.02] transition-transform">
                МАРШРУТ
              </span>
            </h1>

            {/* Accent Slogan and Sub-headline */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 sm:w-12 h-1 bg-[#51C3DD] rounded-full" />
              <span className="font-hand text-2xl sm:text-3xl lg:text-4xl text-[#51C3DD] font-bold tracking-wide">
                Молодость. Карьера. Успех.
              </span>
            </div>

            {/* Subtitle / Value Proposition */}
            <p className="font-body text-base sm:text-lg lg:text-xl text-white/85 max-w-2xl leading-relaxed mb-8">
              Единая точка входа в профессию для специалистов по работе с молодёжью Дона:
              от первых волонтёрских инициатив до руководства молодёжными центрами
              и реализации масштабных региональных проектов.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <a
                href="#route"
                onClick={(e) => scrollToSection(e, '#route')}
                className="group inline-flex items-center justify-center gap-3 bg-[#C4E538] hover:bg-[#D9FB5F] text-[#062985] font-display font-extrabold text-sm uppercase px-8 py-4 rounded-full border-3 border-[#062985] shadow-[5px_5px_0px_#FFFFFF] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#FFFFFF] transition-all"
              >
                <span>Изучить карьерный маршрут</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#selector"
                onClick={(e) => scrollToSection(e, '#selector')}
                className="inline-flex items-center justify-center gap-2 bg-transparent hover:bg-[#51C3DD]/10 text-[#51C3DD] hover:text-white font-display font-bold text-sm uppercase px-6 py-4 rounded-full border-2 border-[#51C3DD] transition-all"
              >
                <Compass className="w-4 h-4 text-[#51C3DD]" />
                <span>Подобрать направление</span>
              </a>
            </div>

            {/* Micro Stats Bar */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/15 w-full max-w-lg">
              <div>
                <span className="block font-condensed font-bold text-2xl sm:text-3xl text-[#C4E538]">
                  6
                </span>
                <span className="text-xs text-white/70">ступеней развития</span>
              </div>
              <div>
                <span className="block font-condensed font-bold text-2xl sm:text-3xl text-[#51C3DD]">
                  55
                </span>
                <span className="text-xs text-white/70">территорий Дона</span>
              </div>
              <div>
                <span className="block font-condensed font-bold text-2xl sm:text-3xl text-[#FFFFFF]">
                  100%
                </span>
                <span className="text-xs text-white/70">практический опыт</span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Visual Card */}
          <div className="lg:col-span-5 relative flex justify-center">
            {/* Visual Frame */}
            <div className="relative w-full max-w-md">
              {/* Backing decorative colored card */}
              <div className="absolute inset-0 bg-[#9B49DC] rounded-3xl rotate-3 translate-x-3 translate-y-3 border-2 border-[#C4E538]" />

              {/* Main Photo Card */}
              <div className="relative bg-[#062985] rounded-3xl border-3 border-[#C4E538] overflow-hidden shadow-2xl p-3">
                <div className="relative h-[340px] sm:h-[420px] rounded-2xl overflow-hidden bg-neutral-900">
                  <img
                    src="/assets/hero-specialist.png"
                    alt="Специалист по работе с молодёжью Ростовской области"
                    className="w-full h-full object-cover object-center"
                    loading="eager"
                  />
                  {/* Inner Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#062985] via-transparent to-transparent opacity-80" />

                  {/* Corner Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-[#062985]/90 border border-[#C4E538] text-[#C4E538] font-condensed font-bold text-xs uppercase rounded-lg shadow-md flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-[#C4E538]" />
                      Лидер молодёжной политики
                    </span>
                  </div>

                  {/* Bottom Card Annotation */}
                  <div className="absolute bottom-4 left-4 right-4 bg-[#062985]/90 backdrop-blur-md p-4 rounded-xl border border-white/20">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-hand text-[#C4E538] font-bold text-base">
                        «От идеи — к признанию региона»
                      </span>
                      <Award className="w-4 h-4 text-[#51C3DD]" />
                    </div>
                    <p className="text-xs text-white/90">
                      Молодёжная сфера — пространство, где инициатива превращается в реальную карьеру.
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Neo-Brutalist Sticker */}
              <div className="absolute -bottom-6 -left-6 z-20 hidden sm:block">
                <div className="bg-[#C4E538] text-[#062985] px-4 py-2.5 rounded-2xl border-2 border-[#062985] shadow-[4px_4px_0px_#062985] -rotate-6">
                  <span className="font-display font-extrabold text-xs uppercase block">
                    ТВОЁ БУДУЩЕЕ
                  </span>
                  <span className="font-hand text-sm font-bold block text-[#062985]">
                    начинается на Дону ⚡
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Signature Purple Wavy Line Crossing Hero Bottom Edge (From Slide 1) */}
      <div className="relative w-full -mb-1 mt-10 pointer-events-none">
        <SignatureWavePurple className="w-full max-h-24 sm:max-h-36 object-cover" />
      </div>
    </section>
  );
};
