import React from 'react';
import { SparkStar, HashSymbol } from './decorations/DecorativeSVGs';

export const Marquee: React.FC = () => {
  const repetitions = [1, 2, 3, 4, 5, 6];

  return (
    <section
      className="relative z-20 py-4 bg-[#C4E538] border-y-3 border-[#062985] overflow-hidden select-none -rotate-1 shadow-md shadow-black/10"
      aria-label="Бегущая полоса девиза проекта"
    >
      {/* Top track (Lime with Navy Text) */}
      <div className="flex overflow-hidden">
        <div className="animate-marquee-left flex items-center shrink-0">
          {repetitions.map((i) => (
            <div key={`track-1-${i}`} className="flex items-center gap-6 mx-4">
              <span className="font-display font-black text-2xl sm:text-3xl md:text-4xl text-[#062985] tracking-tight uppercase whitespace-nowrap">
                МОЛОДОСТЬ
              </span>
              <SparkStar size={20} color="#062985" />
              <span className="font-display font-black text-2xl sm:text-3xl md:text-4xl text-[#062985] tracking-tight uppercase whitespace-nowrap">
                КАРЬЕРА
              </span>
              <HashSymbol size={28} color="#9B49DC" />
              <span className="font-display font-black text-2xl sm:text-3xl md:text-4xl text-[#062985] tracking-tight uppercase whitespace-nowrap">
                УСПЕХ
              </span>
              <span className="w-3 h-3 rounded-full bg-[#062985] inline-block" />
            </div>
          ))}
        </div>

        {/* Duplicate track for seamless infinite scroll */}
        <div className="animate-marquee-left flex items-center shrink-0" aria-hidden="true">
          {repetitions.map((i) => (
            <div key={`track-2-${i}`} className="flex items-center gap-6 mx-4">
              <span className="font-display font-black text-2xl sm:text-3xl md:text-4xl text-[#062985] tracking-tight uppercase whitespace-nowrap">
                МОЛОДОСТЬ
              </span>
              <SparkStar size={20} color="#062985" />
              <span className="font-display font-black text-2xl sm:text-3xl md:text-4xl text-[#062985] tracking-tight uppercase whitespace-nowrap">
                КАРЬЕРА
              </span>
              <HashSymbol size={28} color="#9B49DC" />
              <span className="font-display font-black text-2xl sm:text-3xl md:text-4xl text-[#062985] tracking-tight uppercase whitespace-nowrap">
                УСПЕХ
              </span>
              <span className="w-3 h-3 rounded-full bg-[#062985] inline-block" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
