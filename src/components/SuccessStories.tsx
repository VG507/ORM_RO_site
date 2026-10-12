import React, { useState } from 'react';
import { successStoriesData } from '../data/storiesData';
import type { SuccessStory } from '../types';
import { Quote, MapPin, CheckCircle, ArrowRight, X } from 'lucide-react';
import { StickerPill } from './decorations/DecorativeSVGs';

export const SuccessStories: React.FC = () => {
  const [selectedStory, setSelectedStory] = useState<SuccessStory | null>(null);

  return (
    <section
      id="stories"
      className="relative py-16 sm:py-20 lg:py-32 bg-[#062985] text-white overflow-hidden"
    >
      {/* Background Grids */}
      <div className="absolute inset-0 bg-grid-pattern-dark pointer-events-none opacity-20" />

      <div className="max-w-[1440px] mx-auto px-3 min-[380px]:px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-10 sm:mb-16 max-w-3xl">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <StickerPill text="Люди Дона" bg="#C4E538" textColor="#062985" rotate="-2deg" />
            <span className="font-hand text-base sm:text-lg text-[#51C3DD] font-bold">
              / реальные карьерные маршруты
            </span>
          </div>

          <h2 className="font-display font-extrabold text-2xl min-[380px]:text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-tight uppercase mb-4 text-white break-words">
            Истории и <br className="hidden sm:inline" />
            <span className="text-[#C4E538] relative inline-block">
              реальные примеры
              <span className="absolute -bottom-1.5 sm:-bottom-2 left-0 right-0 h-1 sm:h-1.5 bg-[#51C3DD] rounded-full" />
            </span>
          </h2>

          <p className="font-body text-sm sm:text-base lg:text-lg text-white/80 leading-relaxed">
            За каждым проектом и молодёжным центром стоят конкретные люди, которые
            когда-то пришли волонтёрами, а сегодня ведут за собой тысячи молодых жителей
            Ростовской области.
          </p>
        </div>

        {/* Asymmetrical 3-Card Stories Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {successStoriesData.map((story) => (
            <div
              key={story.id}
              onClick={() => setSelectedStory(story)}
              className="group bg-white text-[#062985] rounded-2xl sm:rounded-3xl border-2 sm:border-3 border-[#C4E538] overflow-hidden shadow-[4px_4px_0px_#9B49DC] sm:shadow-[8px_8px_0px_#9B49DC] hover:shadow-[2px_2px_0px_#9B49DC] hover:translate-x-[2px] hover:translate-y-[2px] transition-all cursor-pointer flex flex-col justify-between"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedStory(story);
                }
              }}
            >
              <div>
                {/* Photo with Overlay Badge */}
                <div className="relative h-64 sm:h-72 overflow-hidden bg-neutral-900">
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                  {/* Top Location Pill */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#062985] text-white border border-[#C4E538]">
                      <MapPin className="w-3.5 h-3.5 text-[#C4E538]" />
                      {story.municipality}
                    </span>
                  </div>

                  {/* Bottom Photo Title */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="font-display font-extrabold text-xl leading-tight mb-0.5">
                      {story.name}
                    </h3>
                    <p className="text-xs text-[#C4E538] font-medium">
                      {story.role}
                    </p>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  {/* Quote Snippet */}
                  <div className="relative pl-6 mb-4">
                    <Quote className="w-5 h-5 text-[#9B49DC] absolute left-0 top-0 opacity-80" />
                    <p className="text-xs sm:text-sm italic text-[#062985]/85 line-clamp-3 leading-relaxed">
                      {story.quote}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {story.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-[#F4F6FB] text-[#062985] border border-[#062985]/15"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Button */}
              <div className="px-6 pb-6 pt-2 border-t border-[#062985]/10 flex items-center justify-between">
                <span className="font-hand text-sm font-bold text-[#9B49DC]">
                  Читать историю пути
                </span>
                <div className="w-8 h-8 rounded-full bg-[#062985] text-[#C4E538] flex items-center justify-center group-hover:translate-x-1 transition-transform">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Story Detail Modal */}
      {selectedStory && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/70 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-3xl bg-white text-[#062985] rounded-2xl sm:rounded-3xl border-2 sm:border-3 border-[#062985] shadow-[4px_4px_0px_#C4E538] sm:shadow-[10px_10px_0px_#C4E538] p-4 min-[380px]:p-6 sm:p-10 max-h-[90vh] overflow-y-auto">
            <button
              type="button"
              onClick={() => setSelectedStory(null)}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 rounded-full bg-[#062985] text-white hover:bg-[#C4E538] hover:text-[#062985] transition-colors"
              aria-label="Закрыть"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mb-6 pb-6 border-b border-[#062985]/15 pr-10 sm:pr-0">
              <div className="w-16 h-16 sm:w-24 sm:h-24 rounded-xl sm:rounded-2xl overflow-hidden border-2 border-[#062985] shrink-0 shadow-md">
                <img
                  src={selectedStory.image}
                  alt={selectedStory.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-bold bg-[#C4E538] text-[#062985] border border-[#062985]">
                    {selectedStory.municipality}
                  </span>
                  <span className="font-hand text-xs sm:text-sm font-bold text-[#9B49DC]">
                    / карьерный кейс
                  </span>
                </div>
                <h3 className="font-display font-black text-xl min-[380px]:text-2xl sm:text-3xl text-[#062985] break-words">
                  {selectedStory.name}
                </h3>
                <p className="text-xs sm:text-sm text-[#062985]/80 font-medium">
                  {selectedStory.role}
                </p>
              </div>
            </div>

            {/* Quote */}
            <div className="bg-[#F4FCDC] p-5 rounded-2xl border-2 border-[#062985] mb-6">
              <p className="font-display font-bold text-sm sm:text-base text-[#062985] italic leading-snug">
                {selectedStory.quote}
              </p>
            </div>

            {/* Background & Milestones */}
            <div className="space-y-6 mb-6">
              <div>
                <h4 className="font-display font-bold text-xs uppercase text-[#062985] tracking-wider mb-2">
                  Как начинался путь:
                </h4>
                <p className="text-xs sm:text-sm text-[#062985]/80 leading-relaxed">
                  {selectedStory.background}
                </p>
              </div>

              <div>
                <h4 className="font-display font-bold text-xs uppercase text-[#062985] tracking-wider mb-3">
                  Ключевые вехи карьеры:
                </h4>
                <div className="space-y-2">
                  {selectedStory.milestones.map((ms, mIdx) => (
                    <div
                      key={mIdx}
                      className="flex items-start gap-2.5 p-3 rounded-xl bg-[#F4F6FB] border border-[#062985]/15 text-xs text-[#062985]"
                    >
                      <CheckCircle className="w-4 h-4 text-[#9B49DC] shrink-0 mt-0.5" />
                      <span className="font-medium">{ms}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#E7F8FC] border border-[#51C3DD]">
                <h4 className="font-display font-bold text-xs uppercase text-[#062985] tracking-wider mb-1">
                  Совет коллегам от героя:
                </h4>
                <p className="text-xs text-[#062985]/90 leading-relaxed font-medium">
                  «{selectedStory.keyAdvice}»
                </p>
              </div>
            </div>

            <div className="flex justify-end pt-4 border-t border-[#062985]/15">
              <button
                type="button"
                onClick={() => setSelectedStory(null)}
                className="bg-[#062985] text-white hover:bg-[#9B49DC] font-display font-bold text-xs uppercase px-6 py-3 rounded-full transition-colors"
              >
                Закрыть историю
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
