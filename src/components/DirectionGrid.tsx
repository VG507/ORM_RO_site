import React, { useState } from 'react';
import { directionsData } from '../data/directionsData';
import type { Direction } from '../types';
import { ArrowUpRight, Check, X, Sparkles, FolderKanban } from 'lucide-react';
import { StickerPill } from './decorations/DecorativeSVGs';

export const DirectionGrid: React.FC = () => {
  const [activeModalDirection, setActiveModalDirection] = useState<Direction | null>(null);

  const getCardStyle = (scheme: Direction['colorScheme']) => {
    switch (scheme) {
      case 'navy':
        return 'bg-[#062985] text-white border-3 border-[#062985] shadow-[6px_6px_0px_#C4E538] hover:shadow-[3px_3px_0px_#C4E538]';
      case 'cyan':
        return 'bg-[#51C3DD] text-[#062985] border-3 border-[#062985] shadow-[6px_6px_0px_#062985] hover:shadow-[3px_3px_0px_#062985]';
      case 'lime':
        return 'bg-[#C4E538] text-[#062985] border-3 border-[#062985] shadow-[6px_6px_0px_#062985] hover:shadow-[3px_3px_0px_#062985]';
      case 'purple':
        return 'bg-[#9B49DC] text-white border-3 border-[#062985] shadow-[6px_6px_0px_#062985] hover:shadow-[3px_3px_0px_#062985]';
      case 'light':
      default:
        return 'bg-[#F4FCDC] text-[#062985] border-3 border-[#062985] shadow-[6px_6px_0px_#062985] hover:shadow-[3px_3px_0px_#062985]';
    }
  };

  return (
    <section
      id="directions"
      className="relative py-16 sm:py-20 lg:py-32 bg-[#F4F6FB] text-[#062985] overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-3 min-[380px]:px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-10 sm:mb-14 max-w-3xl">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <StickerPill text="Сферы реализации" bg="#51C3DD" textColor="#062985" rotate="2deg" />
            <span className="font-hand text-base sm:text-lg text-[#062985] font-bold">
              / выбери своё призвание
            </span>
          </div>

          <h2 className="font-display font-extrabold text-2xl min-[380px]:text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-tight uppercase mb-4 text-[#062985] break-words">
            Направления <br className="hidden sm:inline" />
            <span className="text-[#51C3DD] relative inline-block">
              деятельности
              <span className="absolute -bottom-1.5 sm:-bottom-2 left-0 right-0 h-1 sm:h-1.5 bg-[#062985] rounded-full" />
            </span>
          </h2>

          <p className="font-body text-sm sm:text-base lg:text-lg text-[#062985]/75 leading-relaxed">
            В молодёжной политике нет однообразных задач. Каждое направление требует
            своего набора компетенций, характера и драйва. Кликни по направлению,
            чтобы узнать ключевые проекты и форматы участия.
          </p>
        </div>

        {/* Asymmetrical Modular Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-8">
          {directionsData.map((item, index) => {
            const cardClasses = getCardStyle(item.colorScheme);

            // Give asymmetrical col-spans
            let colSpan = 'lg:col-span-4';
            if (item.size === 'large') colSpan = 'lg:col-span-8';
            if (item.size === 'featured') colSpan = 'lg:col-span-6';
            if (index === 4) colSpan = 'lg:col-span-6';

            return (
              <div
                key={item.id}
                onClick={() => setActiveModalDirection(item)}
                className={`group p-5 min-[380px]:p-6 sm:p-8 rounded-2xl sm:rounded-3xl transition-all duration-200 cursor-pointer flex flex-col justify-between hover:-translate-y-1 ${cardClasses} ${colSpan}`}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setActiveModalDirection(item);
                  }
                }}
                aria-label={`Подробнее о направлении: ${item.title}`}
              >
                <div>
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-black/10 inline-block border border-current/20">
                      {item.badge}
                    </span>
                    <div className="w-8 sm:w-9 h-8 sm:h-9 rounded-full bg-current/10 flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-transform shrink-0">
                      <ArrowUpRight className="w-4 sm:w-5 h-4 sm:h-5" />
                    </div>
                  </div>

                  <h3 className="font-display font-extrabold text-lg min-[380px]:text-xl sm:text-2xl lg:text-3xl tracking-tight leading-snug mb-2 break-words">
                    {item.title}
                  </h3>

                  <p className="font-hand text-base sm:text-lg opacity-90 font-bold mb-4">
                    {item.tagline}
                  </p>

                  <p className="text-xs sm:text-sm opacity-85 leading-relaxed line-clamp-3 mb-6">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-current/15 flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
                    <FolderKanban className="w-4 h-4" />
                    {item.keyProjects.length} ключевых проекта
                  </span>
                  <span className="text-xs underline font-display font-bold group-hover:translate-x-1 transition-transform">
                    Подробнее →
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal / Dialog for Direction Detail */}
      {activeModalDirection && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-direction-title"
        >
          <div className="relative w-full max-w-2xl bg-white rounded-2xl sm:rounded-3xl border-2 sm:border-3 border-[#062985] shadow-[4px_4px_0px_#C4E538] sm:shadow-[8px_8px_0px_#C4E538] p-4 min-[380px]:p-6 sm:p-10 max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setActiveModalDirection(null)}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 rounded-full bg-[#062985] text-white hover:bg-[#C4E538] hover:text-[#062985] transition-colors"
              aria-label="Закрыть окно"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            <div className="flex flex-wrap items-center gap-2 mb-3 pr-10">
              <span className="px-2.5 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase bg-[#C4E538] text-[#062985] border border-[#062985]">
                {activeModalDirection.badge}
              </span>
              <span className="font-hand text-xs sm:text-sm font-bold text-[#9B49DC]">
                / подробный профиль направления
              </span>
            </div>

            <h3
              id="modal-direction-title"
              className="font-display font-black text-xl min-[380px]:text-2xl sm:text-3xl text-[#062985] mb-2 leading-tight break-words pr-8"
            >
              {activeModalDirection.title}
            </h3>

            <p className="font-hand text-lg text-[#9B49DC] font-bold mb-4">
              {activeModalDirection.tagline}
            </p>

            <p className="text-sm sm:text-base text-[#062985]/80 leading-relaxed mb-6">
              {activeModalDirection.description}
            </p>

            <div className="p-4 rounded-2xl bg-[#F4F6FB] border-2 border-[#062985]/20 mb-6">
              <h4 className="font-display font-bold text-xs uppercase text-[#062985] tracking-wider mb-2 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#9B49DC]" />
                Ключевые проекты и форматы на Дону
              </h4>
              <ul className="space-y-2">
                {activeModalDirection.keyProjects.map((proj, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-[#062985]">
                    <Check className="w-4 h-4 text-[#C4E538] shrink-0" />
                    <span>{proj}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#062985]/60 block mb-1">
                Целевая аудитория и резиденты:
              </span>
              <p className="text-xs sm:text-sm font-medium text-[#062985]">
                {activeModalDirection.targetAudience}
              </p>
            </div>

            <div className="flex justify-end pt-4 border-t border-[#062985]/15">
              <button
                type="button"
                onClick={() => setActiveModalDirection(null)}
                className="bg-[#062985] text-white hover:bg-[#9B49DC] font-display font-bold text-xs uppercase px-6 py-3 rounded-full transition-colors"
              >
                Понятно, закрыть
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
