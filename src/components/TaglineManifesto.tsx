import React, { useEffect, useRef, useState } from 'react';
import { SparkStar, StickerPill } from './decorations/DecorativeSVGs';
import { Award, Zap, Compass } from 'lucide-react';

export const TaglineManifesto: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (sectionRef.current) {
            const rect = sectionRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            // Calculate progress through viewport from 0 to 1
            const start = windowHeight * 0.85;
            const end = windowHeight * 0.15;
            const progress = Math.max(0, Math.min(1, (start - rect.top) / (start - end)));
            setScrollProgress(progress);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Manifesto words with special accent styling
  const lines = [
    {
      words: [
        { text: 'ЗДЕСЬ', highlight: false },
        { text: 'ИНИЦИАТИВА', highlight: 'lime' },
        { text: 'ОБРЕТАЕТ', highlight: false },
        { text: 'МАСШТАБ.', highlight: 'cyan' },
      ],
    },
    {
      words: [
        { text: 'От', highlight: false },
        { text: 'первого', highlight: false },
        { text: 'молодёжного', highlight: false },
        { text: 'центра', highlight: false },
        { text: 'на', highlight: false },
        { text: 'Дону', highlight: 'lime' },
        { text: '—', highlight: false },
        { text: 'до', highlight: false },
        { text: 'признанных', highlight: false },
        { text: 'лидеров', highlight: 'purple' },
        { text: 'страны.', highlight: false },
      ],
    },
  ];

  // Flatten to count total words for staggered activation
  const totalWords = lines.reduce((acc, line) => acc + line.words.length, 0);
  let globalWordIdx = 0;

  return (
    <section
      ref={sectionRef}
      className="relative py-24 sm:py-32 lg:py-40 bg-[#062985] text-white overflow-hidden border-t-3 border-b-3 border-[#C4E538]"
      aria-label="Манифест молодёжной политики Ростовской области"
    >
      {/* Background Subtle Grid & Floating Spark */}
      <div className="absolute inset-0 bg-grid-pattern-dark pointer-events-none opacity-25" />
      <div className="absolute -top-6 right-12 pointer-events-none">
        <SparkStar size={42} color="#C4E538" className="animate-spin" />
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Top Eyebrow Tag */}
        <div className="flex flex-wrap items-center gap-3 mb-8 sm:mb-12">
          <StickerPill
            text="Манифест профессии"
            bg="#C4E538"
            textColor="#062985"
            rotate="-1.5deg"
          />
          <span className="font-hand text-base sm:text-xl text-[#51C3DD] font-bold">
            / создаём будущее своими руками
          </span>
        </div>

        {/* Dynamic Word-by-Word Reveal Statement */}
        <div className="max-w-5xl">
          {lines.map((line, lIdx) => (
            <div
              key={lIdx}
              className={`flex flex-wrap items-baseline gap-x-3 sm:gap-x-4 gap-y-1 sm:gap-y-2 font-display font-extrabold uppercase tracking-tight leading-[1.1] ${
                lIdx === 0
                  ? 'text-3xl sm:text-5xl md:text-6xl lg:text-7xl mb-4 sm:mb-6'
                  : 'text-xl sm:text-3xl md:text-4xl lg:text-5xl text-white/90'
              }`}
            >
              {line.words.map((item, wIdx) => {
                const currentIdx = globalWordIdx++;
                // Calculate word threshold: word activates as progress reaches its slice
                const threshold = currentIdx / totalWords;
                const isActivated = scrollProgress >= threshold;

                let activeColor = 'text-white';
                if (item.highlight === 'lime') activeColor = 'text-[#C4E538]';
                if (item.highlight === 'cyan') activeColor = 'text-[#51C3DD]';
                if (item.highlight === 'purple') activeColor = 'text-[#C4E538] underline decoration-[#9B49DC] decoration-4';

                return (
                  <span
                    key={wIdx}
                    className={`transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] inline-block ${
                      isActivated
                        ? `${activeColor} opacity-100 scale-100 translate-y-0`
                        : 'text-white/20 opacity-20 scale-[0.98] translate-y-1'
                    }`}
                  >
                    {item.text}
                  </span>
                );
              })}
            </div>
          ))}
        </div>

        {/* Bottom Supporting Pillars Bar */}
        <div className="mt-12 sm:mt-16 pt-8 border-t border-white/15 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#C4E538] text-[#062985] flex items-center justify-center shrink-0 font-black shadow-md">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <span className="font-display font-bold text-xs uppercase tracking-wider text-[#C4E538] block mb-1">
                Энергия действия
              </span>
              <p className="text-xs text-white/75 leading-relaxed">
                От волонтёрской идеи до грантов Росмолодёжи до 1.5 млн рублей.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#51C3DD] text-[#062985] flex items-center justify-center shrink-0 font-black shadow-md">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <span className="font-display font-bold text-xs uppercase tracking-wider text-[#51C3DD] block mb-1">
                Прозрачный рост
              </span>
              <p className="text-xs text-white/75 leading-relaxed">
                6 подтверждённых ступеней карьерного маршрута с наставничеством.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#9B49DC] text-white flex items-center justify-center shrink-0 font-black shadow-md">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <span className="font-display font-bold text-xs uppercase tracking-wider text-[#C4E538] block mb-1">
                Региональное сообщество
              </span>
              <p className="text-xs text-white/75 leading-relaxed">
              Справочник 55 городских округов и районов Дона.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
