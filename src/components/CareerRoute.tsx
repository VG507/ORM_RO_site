import React, { useState } from 'react';
import { careerStages } from '../data/careerRouteData';
import type { CareerStage } from '../types';
import {
  Check,
  ChevronRight,
  ChevronLeft,
  BookOpen,
  ArrowRight,
  Sparkles,
  Layers,
  GraduationCap,
  Copy,
  CheckCheck,
} from 'lucide-react';
import {
  StickerPill,
  RouteConnectorSVG,
} from './decorations/DecorativeSVGs';

export const CareerRoute: React.FC = () => {
  const [selectedStageId, setSelectedStageId] = useState<string>(careerStages[0].id);
  const [copiedStage, setCopiedStage] = useState(false);

  const currentStageIndex = careerStages.findIndex((s) => s.id === selectedStageId);
  const selectedStage = careerStages[currentStageIndex] || careerStages[0];

  const handlePrevStage = () => {
    if (currentStageIndex > 0) {
      setSelectedStageId(careerStages[currentStageIndex - 1].id);
    }
  };

  const handleNextStage = () => {
    if (currentStageIndex < careerStages.length - 1) {
      setSelectedStageId(careerStages[currentStageIndex + 1].id);
    }
  };

  const handleStageKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
    const offset = event.key === 'ArrowRight' ? 1 : event.key === 'ArrowLeft' ? -1 : 0;
    if (offset === 0) return;

    event.preventDefault();
    const next = careerStages[index + offset];
    if (next) {
      setSelectedStageId(next.id);
      document.getElementById(`route-step-${next.id}`)?.focus();
    }
  };

  const handleCopyStage = () => {
    const text = `Этап ${selectedStage.stepNumber}: ${selectedStage.title} (${selectedStage.badge})\n\nСуть:\n${selectedStage.description}\n\nКлючевые задачи:\n${selectedStage.keyTasks.map((t, i) => `${i + 1}. ${t}`).join('\n')}\n\nКомпетенции: ${selectedStage.competencies.join(', ')}\n\nПлатформа «Карьерный маршрут: молодёжная сфера Ростовской области»`;
    navigator.clipboard.writeText(text);
    setCopiedStage(true);
    setTimeout(() => setCopiedStage(false), 2000);
  };

  const getColorClasses = (scheme: CareerStage['colorScheme'], isSelected: boolean) => {
    switch (scheme) {
      case 'lime':
        return isSelected
          ? 'bg-[#C4E538] text-[#062985] border-[#062985] ring-4 ring-[#C4E538]/50 shadow-[6px_6px_0px_#062985]'
          : 'bg-[#F4FCDC] text-[#062985] border-[#062985] hover:bg-[#C4E538] shadow-[3px_3px_0px_#062985]';
      case 'cyan':
        return isSelected
          ? 'bg-[#51C3DD] text-[#062985] border-[#062985] ring-4 ring-[#51C3DD]/50 shadow-[6px_6px_0px_#062985]'
          : 'bg-[#E7F8FC] text-[#062985] border-[#062985] hover:bg-[#51C3DD] shadow-[3px_3px_0px_#062985]';
      case 'purple':
        return isSelected
          ? 'bg-[#9B49DC] text-white border-[#062985] ring-4 ring-[#9B49DC]/50 shadow-[6px_6px_0px_#062985]'
          : 'bg-[#F6ECFC] text-[#062985] border-[#062985] hover:bg-[#9B49DC] hover:text-white shadow-[3px_3px_0px_#062985]';
      case 'navy':
      default:
        return isSelected
          ? 'bg-[#062985] text-white border-[#C4E538] ring-4 ring-[#062985]/50 shadow-[6px_6px_0px_#C4E538]'
          : 'bg-white text-[#062985] border-[#062985] hover:bg-[#062985] hover:text-white shadow-[3px_3px_0px_#062985]';
    }
  };

  return (
    <section
      id="route"
      className="relative py-16 sm:py-20 lg:py-32 bg-white text-[#062985] overflow-hidden border-t-2 border-[#062985]/10"
    >
      <div className="max-w-[1440px] mx-auto px-3 min-[380px]:px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-10 sm:mb-16">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <StickerPill text="Главная траектория" bg="#C4E538" textColor="#062985" rotate="-1deg" />
            <span className="font-hand text-base sm:text-lg text-[#9B49DC] font-bold">
              / путь в профессии шаг за шагом
            </span>
          </div>

          <h2 className="font-display font-extrabold text-2xl min-[380px]:text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-tight uppercase mb-4 text-[#062985] break-words">
            Твой карьерный <br className="hidden sm:inline" />
            <span className="text-[#9B49DC] relative inline-block">
              маршрут
              <span className="absolute -bottom-1.5 sm:-bottom-2 left-0 right-0 h-1 sm:h-1.5 bg-[#C4E538] rounded-full" />
            </span>
          </h2>

          <p className="font-body text-sm sm:text-base lg:text-lg text-[#062985]/75 max-w-2xl leading-relaxed">
            Пошаговая логика роста в молодёжной сфере: от первых шагов в волонтёрском корпусе
            до управления инфраструктурой и формирования региональной повестки.
            Выбери этап, чтобы увидеть задачи, навыки и ресурсы для перехода.
          </p>
        </div>

        {/* Progress Meter Indicator */}
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3 bg-[#F4F6FB] p-3 rounded-2xl border border-[#062985]/15">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#C4E538] ring-4 ring-[#C4E538]/30 animate-pulse" />
            <span className="text-xs font-bold font-display uppercase tracking-wider text-[#062985]">
              Ступень {currentStageIndex + 1} из {careerStages.length}: {selectedStage.title}
            </span>
            <span className="text-xs text-[#062985]/60 font-hand hidden md:inline">
              / на карточках этапов работают клавиши ← →
            </span>
          </div>

          <div className="flex items-center gap-1.5 ml-auto">
            {careerStages.map((s, idx) => (
              <button
                key={s.id}
                type="button"
                onClick={() => setSelectedStageId(s.id)}
                className={`h-2.5 rounded-full transition-all cursor-pointer ${
                  idx === currentStageIndex
                    ? 'w-8 bg-[#062985]'
                    : idx < currentStageIndex
                    ? 'w-3 bg-[#C4E538]'
                    : 'w-3 bg-[#062985]/20 hover:bg-[#062985]/40'
                }`}
                title={`Ступень ${idx + 1}: ${s.title}`}
                aria-label={`Перейти к ступени ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop Interactive Route Steps (Horizontal Connected Flow) */}
        <div className="relative mb-8 sm:mb-12">
          {/* Subtle curved connecting line behind cards */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 -translate-y-1/2 z-0 opacity-40">
            <RouteConnectorSVG />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-4 relative z-10">
            {careerStages.map((stage, index) => {
              const isSelected = stage.id === selectedStageId;
              const colorClasses = getColorClasses(stage.colorScheme, isSelected);

              return (
                <button
                  key={stage.id}
                  id={`route-step-${stage.id}`}
                  type="button"
                  onClick={() => setSelectedStageId(stage.id)}
                  onKeyDown={(event) => handleStageKeyDown(event, index)}
                  className={`min-w-0 text-left p-3 min-[380px]:p-4 sm:p-5 rounded-2xl border-2 sm:border-3 transition-all duration-200 cursor-pointer flex flex-col justify-between min-h-24 sm:min-h-28 relative ${colorClasses} ${
                    isSelected ? 'scale-[1.02] sm:scale-[1.03] z-20' : 'hover:-translate-y-1'
                  }`}
                  aria-pressed={isSelected}
                  aria-label={`Этап ${stage.stepNumber}: ${stage.title}`}
                >
                  {/* Step Number & Badge */}
                  <div>
                    <div className="flex items-center justify-between mb-1.5 sm:mb-2">
                      <span className="font-condensed font-black text-xl min-[380px]:text-2xl sm:text-3xl tracking-tight">
                        {stage.stepNumber}
                      </span>
                      {isSelected && (
                        <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-current animate-ping" />
                      )}
                    </div>
                  </div>

                  <span className="font-body font-bold text-sm sm:text-base leading-snug break-words w-full">
                    {stage.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Detailed Expanded Dossier of Selected Stage */}
        <div className="relative bg-[#062985] text-white rounded-2xl sm:rounded-3xl border-2 sm:border-3 border-[#062985] p-4 min-[380px]:p-6 sm:p-10 lg:p-12 shadow-[4px_4px_0px_#C4E538] sm:shadow-[8px_8px_0px_#C4E538] transition-all">
          {/* Header of Dossier */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 sm:gap-6 pb-6 sm:pb-8 border-b border-white/20 mb-6 sm:mb-8">
            <div className="flex items-start sm:items-center gap-3 sm:gap-4">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-[#C4E538] text-[#062985] font-condensed font-black text-2xl sm:text-3xl flex items-center justify-center shrink-0 shadow-md">
                {selectedStage.stepNumber}
              </div>
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <span className="px-2.5 sm:px-3 py-0.5 rounded-full text-[10px] sm:text-xs font-bold bg-[#9B49DC] text-white uppercase tracking-wider">
                    {selectedStage.badge}
                  </span>
                  <span className="font-hand text-[#C4E538] font-bold text-sm sm:text-base">
                    / ступень карьеры
                  </span>
                </div>
                <h3 className="font-display font-black text-xl sm:text-3xl lg:text-4xl text-white break-words">
                  {selectedStage.title}
                </h3>
                <p className="text-xs sm:text-sm lg:text-base text-[#51C3DD] font-medium mt-0.5">
                  {selectedStage.subtitle}
                </p>
              </div>
            </div>

            <div className="flex items-center w-full sm:w-auto">
              <a
                href="#professions"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#C4E538] hover:bg-[#D9FB5F] text-[#062985] font-display font-bold text-xs uppercase px-5 py-3 rounded-full border-2 border-[#062985] transition-all"
              >
                  <span>Каталог профессий</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Dossier Content Grid: 3 Columns */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 lg:gap-12">
            {/* Description & Tasks */}
            <div className="md:col-span-5 flex flex-col gap-6">
              <div>
                <h4 className="font-display font-bold text-xs uppercase text-[#C4E538] tracking-widest mb-2 flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  Суть ступени
                </h4>
                <p className="text-sm sm:text-base text-white/90 leading-relaxed">
                  {selectedStage.description}
                </p>
                <p className="text-xs text-white/70 mt-2 leading-relaxed">
                  {selectedStage.fullDetails}
                </p>
              </div>

              <div>
                <h4 className="font-display font-bold text-xs uppercase text-[#51C3DD] tracking-widest mb-3 flex items-center gap-2">
                  <Layers className="w-4 h-4" />
                  Ключевые практические задачи
                </h4>
                <ul className="space-y-2.5">
                  {selectedStage.keyTasks.map((task, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-white/90">
                      <span className="w-5 h-5 rounded-md bg-[#51C3DD]/20 text-[#51C3DD] flex items-center justify-center shrink-0 mt-0.5 font-condensed font-bold text-xs">
                        {idx + 1}
                      </span>
                      <span>{task}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Competencies */}
            <div className="md:col-span-4 flex flex-col gap-6">
              <div>
                <h4 className="font-display font-bold text-xs uppercase text-[#C4E538] tracking-widest mb-3 flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#C4E538]" />
                  Необходимые компетенции
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedStage.competencies.map((comp, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/15 text-xs font-semibold text-white border border-white/15 transition-colors"
                    >
                      {comp}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <span className="font-display font-bold text-xs text-[#51C3DD] uppercase tracking-wider block mb-1">
                  Следующий шаг развития:
                </span>
                <div className="space-y-1.5 mt-2">
                  {selectedStage.nextTransitions.map((next, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-white/90 font-medium">
                      <ChevronRight className="w-3.5 h-3.5 text-[#C4E538]" />
                      <span>{next}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Learning Platforms & Resources */}
            <div className="md:col-span-3 flex flex-col justify-between p-5 rounded-2xl bg-white/5 border border-white/10">
              <div>
                <h4 className="font-display font-bold text-xs uppercase text-[#C4E538] tracking-widest mb-3 flex items-center gap-2">
                  <GraduationCap className="w-4 h-4" />
                  Где учиться
                </h4>
                <ul className="space-y-2">
                  {selectedStage.learningPlatforms.map((platform, idx) => (
                    <li key={idx} className="text-xs">
                      {platform.url ? (
                        <a
                          href={platform.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-[#51C3DD] hover:text-[#C4E538] underline transition-colors"
                        >
                          <BookOpen className="w-3.5 h-3.5 shrink-0" />
                          <span>{platform.name}</span>
                        </a>
                      ) : (
                        <span className="flex items-center gap-1.5 text-white/80">
                          <BookOpen className="w-3.5 h-3.5 text-white/40 shrink-0" />
                          <span>{platform.name}</span>
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10">
                <p className="text-[11px] text-white/60 font-hand">
                  *Обучение доступно бесплатно для участников молодёжных программ Ростовской области.
                </p>
              </div>
            </div>
          </div>

          {/* Dossier Bottom Interactive Actions & Navigation */}
          <div className="mt-8 pt-6 border-t border-white/15 flex flex-wrap items-center justify-between gap-4">
            <button
              type="button"
              onClick={handleCopyStage}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-all border border-white/20"
              title="Скопировать чек-лист ступени"
            >
              {copiedStage ? (
                <>
                  <CheckCheck className="w-3.5 h-3.5 text-[#C4E538]" />
                  <span className="text-[#C4E538]">План скопирован!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-[#51C3DD]" />
                  <span>Скопировать план ступени</span>
                </>
              )}
            </button>

            <div className="flex items-center gap-2 ml-auto">
              <button
                type="button"
                onClick={handlePrevStage}
                disabled={currentStageIndex === 0}
                className={`inline-flex items-center gap-1 px-4 py-2.5 rounded-full border text-xs font-bold transition-all ${
                  currentStageIndex === 0
                    ? 'opacity-30 cursor-not-allowed border-white/10 text-white/40'
                    : 'border-white/20 hover:border-[#C4E538] text-white hover:bg-white/10'
                }`}
                aria-label="Предыдущая ступень"
              >
                <ChevronLeft className="w-4 h-4" />
                <span className="hidden sm:inline">Ступень {currentStageIndex > 0 ? currentStageIndex : 1}</span>
              </button>

              <button
                type="button"
                onClick={handleNextStage}
                disabled={currentStageIndex === careerStages.length - 1}
                className={`inline-flex items-center gap-1 px-4 py-2.5 rounded-full border text-xs font-bold transition-all ${
                  currentStageIndex === careerStages.length - 1
                    ? 'opacity-30 cursor-not-allowed border-white/10 text-white/40'
                    : 'bg-[#C4E538] text-[#062985] border-[#C4E538] hover:bg-[#D9FB5F] font-extrabold shadow-[2px_2px_0px_#FFFFFF]'
                }`}
                aria-label="Следующая ступень"
              >
                <span>{currentStageIndex === careerStages.length - 1 ? 'Финал маршрута' : `Ступень ${currentStageIndex + 2}`}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
