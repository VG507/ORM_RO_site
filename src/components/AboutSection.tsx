import React from 'react';
import { Target, Users, Zap, CheckCircle2 } from 'lucide-react';
import { StickerPill, SignatureWaveLime } from './decorations/DecorativeSVGs';

export const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="relative py-20 lg:py-32 bg-[#F4F6FB] text-[#062985] overflow-hidden"
    >
      {/* Decorative Subtle Background Line */}
      <div className="absolute top-0 right-0 w-96 opacity-30 pointer-events-none">
        <SignatureWaveLime />
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16 max-w-3xl">
          <div className="flex items-center gap-2 mb-4">
            <StickerPill text="О проекте" bg="#9B49DC" textColor="#FFFFFF" rotate="1deg" />
            <span className="font-hand text-lg text-[#062985] font-bold">
              / новая культура молодёжной работы
            </span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-tight uppercase mb-6 text-[#062985]">
            Путь начинается <br className="hidden sm:inline" />
            <span className="bg-[#C4E538] px-3 py-1 inline-block -rotate-1 border-2 border-[#062985] rounded-xl shadow-[3px_3px_0px_#062985]">
              с интереса
            </span>
          </h2>

          <p className="font-body text-lg sm:text-xl text-[#062985]/80 leading-relaxed">
            Молодёжная сфера Ростовской области — это не бюрократия и не формальные отчёты.
            Это динамичная среда, где специалисты создают молодёжные центры, выигрывают миллионные гранты,
            запускают всероссийские форумы и помогают молодым людям Дона находить своё призвание.
          </p>
        </div>

        {/* Asymmetrical Editorial Layout: 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column: Mission Pillars & Value Box */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* Highlighted Quote Box */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border-3 border-[#062985] shadow-[6px_6px_0px_#062985] relative">
              <div className="absolute -top-4 right-8 bg-[#C4E538] px-3 py-1 rounded-full text-xs font-display font-bold uppercase border-2 border-[#062985]">
                Ключевой ориентир
              </div>
              <p className="font-display font-bold text-lg sm:text-2xl text-[#062985] leading-snug mb-4">
                «Наша цель — превратить каждый молодёжный центр Дона в точку притяжения энергии,
                а каждого специалиста — в признанного лидера изменений.»
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-[#062985]/15">
                <span className="font-hand text-base font-bold text-[#9B49DC]">
                  Стандарты Федерального агентства «Росмолодёжь»
                </span>
              </div>
            </div>

            {/* 3 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="bg-[#F4FCDC] p-5 rounded-2xl border-2 border-[#062985] shadow-[3px_3px_0px_#062985]">
                <div className="w-10 h-10 rounded-xl bg-[#062985] text-[#C4E538] flex items-center justify-center mb-3">
                  <Target className="w-5 h-5" />
                </div>
                <h3 className="font-display font-bold text-sm uppercase text-[#062985] mb-2">
                  Инициатива
                </h3>
                <p className="text-xs text-[#062985]/80 leading-relaxed">
                  Поддержка идей от локального кружка до масштабного проекта с грантовым бюджетом.
                </p>
              </div>

              <div className="bg-[#E7F8FC] p-5 rounded-2xl border-2 border-[#062985] shadow-[3px_3px_0px_#062985]">
                <div className="w-10 h-10 rounded-xl bg-[#51C3DD] text-[#062985] flex items-center justify-center mb-3">
                  <Users className="w-5 h-5" />
                </div>
                <h3 className="font-display font-bold text-sm uppercase text-[#062985] mb-2">
                  Синергия
                </h3>
                <p className="text-xs text-[#062985]/80 leading-relaxed">
                  Единая сеть специалистов и обмен лучшими практиками во всех 55 районах региона.
                </p>
              </div>

              <div className="bg-[#F6ECFC] p-5 rounded-2xl border-2 border-[#062985] shadow-[3px_3px_0px_#062985]">
                <div className="w-10 h-10 rounded-xl bg-[#9B49DC] text-white flex items-center justify-center mb-3">
                  <Zap className="w-5 h-5" />
                </div>
                <h3 className="font-display font-bold text-sm uppercase text-[#062985] mb-2">
                  Развитие
                </h3>
                <p className="text-xs text-[#062985]/80 leading-relaxed">
                  Понятный прозрачный карьерный маршрут и доступ к передовым образовательным программам.
                </p>
              </div>
            </div>

            {/* Practical Stats List */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <li className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-[#062985]">
                <CheckCircle2 className="w-4 h-4 text-[#9B49DC] shrink-0" />
                <span>Официальный статус и программы поддержки специалистов</span>
              </li>
              <li className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-[#062985]">
                <CheckCircle2 className="w-4 h-4 text-[#9B49DC] shrink-0" />
                <span>Грантовые фонды Росмолодёжи до 1.5 млн рублей</span>
              </li>
              <li className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-[#062985]">
                <CheckCircle2 className="w-4 h-4 text-[#9B49DC] shrink-0" />
                <span>Участие в окружных форумах и стажировках</span>
              </li>
              <li className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-[#062985]">
                <CheckCircle2 className="w-4 h-4 text-[#9B49DC] shrink-0" />
                <span>Включение в кадровый резерв лидеров Дона</span>
              </li>
            </ul>
          </div>

          {/* Right Column: Editorial Photo Collage */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-sm sm:max-w-md">
              {/* Back Photo Card */}
              <div className="relative rounded-3xl overflow-hidden border-3 border-[#062985] shadow-[8px_8px_0px_#9B49DC] bg-white">
                <img
                  src="/assets/team-photo-3.png"
                  alt="Командная работа специалистов по работе с молодёжью"
                  className="w-full h-80 sm:h-96 object-cover object-center"
                  loading="lazy"
                />
                <div className="p-4 bg-white border-t-2 border-[#062985]">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="font-display font-bold text-xs uppercase text-[#062985] block">
                        Командный интенсив
                      </span>
                      <span className="text-xs text-[#062985]/70">
                        Обмен муниципальными практиками
                      </span>
                    </div>
                    <span className="px-3 py-1 bg-[#C4E538] text-[#062985] rounded-full text-xs font-bold border border-[#062985]">
                      Ростов-на-Дону
                    </span>
                  </div>
                </div>
              </div>

              {/* Overlapping Small Photo Card */}
              <div className="absolute -bottom-8 -left-6 sm:-left-10 w-44 sm:w-56 rounded-2xl overflow-hidden border-3 border-[#062985] shadow-[6px_6px_0px_#C4E538] bg-white hidden sm:block">
                <img
                  src="/assets/team-photo-1.png"
                  alt="Молодой специалист"
                  className="w-full h-32 sm:h-40 object-cover object-center"
                  loading="lazy"
                />
                <div className="p-2 bg-[#062985] text-white text-center">
                  <span className="font-hand text-xs text-[#C4E538] font-bold block">
                    «Творим историю вместе»
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
