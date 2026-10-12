import React from 'react';
import { ArrowRight, Compass, MapPin } from 'lucide-react';
import {
  SignatureWaveLime,
  SparkStar,
  StickerPill,
} from './decorations/DecorativeSVGs';

export const FinalCTA: React.FC = () => {
  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
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
    <section className="relative py-24 lg:py-36 bg-[#062985] text-white overflow-hidden border-t-3 border-[#C4E538]">
      {/* Background Grids */}
      <div className="absolute inset-0 bg-grid-pattern-dark pointer-events-none opacity-30" />

      {/* Floating Sparks */}
      <div className="absolute top-12 left-10 pointer-events-none">
        <SparkStar size={36} color="#C4E538" className="animate-spin" />
      </div>
      <div className="absolute bottom-16 right-16 pointer-events-none">
        <SparkStar size={44} color="#51C3DD" />
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 mb-6">
          <StickerPill text="Время действовать" bg="#C4E538" textColor="#062985" rotate="-2deg" />
          <span className="font-hand text-xl text-[#51C3DD] font-bold">
            / Ростовская область
          </span>
        </div>

        {/* Headline */}
        <h2 className="font-display font-black text-3xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[1.05] uppercase mb-6 max-w-4xl mx-auto">
          Твой следующий шаг <br />
          <span className="text-[#C4E538]">начинается здесь</span>
        </h2>

        {/* Slogan */}
        <p className="font-hand text-2xl sm:text-3xl lg:text-4xl text-[#51C3DD] font-bold mb-8">
          «Молодость. Карьера. Успех.»
        </p>

        <p className="font-body text-base sm:text-lg lg:text-xl text-white/85 max-w-2xl mx-auto leading-relaxed mb-12">
          Присоединяйся к региональному сообществу специалистов по работе с молодёжью Дона.
          Исследуй вакансии, перенимай лучшие практики и развивай свой район.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto mb-14">
          <a
            href="#route"
            onClick={(e) => scrollTo(e, '#route')}
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#C4E538] hover:bg-[#D9FB5F] text-[#062985] font-display font-extrabold text-sm uppercase px-8 py-4 rounded-full border-3 border-[#062985] shadow-[5px_5px_0px_#FFFFFF] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#FFFFFF] transition-all"
          >
            <span>Пройти карьерный маршрут</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="#selector"
            onClick={(e) => scrollTo(e, '#selector')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-transparent hover:bg-[#51C3DD]/10 text-[#51C3DD] font-display font-bold text-sm uppercase px-7 py-4 rounded-full border-2 border-[#51C3DD] transition-all"
          >
            <Compass className="w-4 h-4 text-[#51C3DD]" />
            <span>Пройти тест</span>
          </a>
        </div>

        {/* Territory Indicator */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-xs text-white/80">
          <MapPin className="w-3.5 h-3.5 text-[#C4E538]" />
          <span>Единая платформа для 55 муниципалитетов Ростовской области</span>
        </div>
      </div>

      {/* Decorative Wave Line at bottom */}
      <div className="relative w-full -mb-2 mt-12 pointer-events-none opacity-40">
        <SignatureWaveLime className="w-full max-h-20 object-cover" />
      </div>
    </section>
  );
};
