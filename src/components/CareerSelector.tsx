import React, { useState } from 'react';
import { selectorQuestionsData } from '../data/selectorQuestionsData';
import { professionRolesData } from '../data/professionsData';
import { careerStages } from '../data/careerRouteData';
import type { SelectorOption } from '../types';
import { ArrowRight, RotateCcw, Check, Target } from 'lucide-react';
import { StickerPill } from './decorations/DecorativeSVGs';

export const CareerSelector: React.FC = () => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, SelectorOption>>({});
  const [isCompleted, setIsCompleted] = useState(false);

  const currentQuestion = selectorQuestionsData[currentStepIndex];
  const totalQuestions = selectorQuestionsData.length;

  const handleSelectOption = (option: SelectorOption) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [currentStepIndex]: option,
    }));
  };

  const handleNext = () => {
    if (currentStepIndex < totalQuestions - 1) {
      setCurrentStepIndex((prev) => prev + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handleBack = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex((prev) => prev - 1);
    }
  };

  const handleReset = () => {
    setCurrentStepIndex(0);
    setSelectedAnswers({});
    setIsCompleted(false);
  };

  // Determine recommended role and starting stage from answers
  const recommendedRoleId =
    selectedAnswers[0]?.recommendedRoleId ||
    selectedAnswers[1]?.recommendedRoleId ||
    'specialist-orm';

  const recommendedRole =
    professionRolesData.find((r) => r.id === recommendedRoleId) ||
    professionRolesData[0];

  const startingStageId =
    selectedAnswers[2]?.directionTag || recommendedRole.careerPathStageId || 'stage-1';

  const startingStage =
    careerStages.find((s) => s.id === startingStageId) || careerStages[0];

  return (
    <section
      id="selector"
      className="relative py-16 sm:py-20 lg:py-32 bg-[#F4F6FB] text-[#062985] overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-3 min-[380px]:px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-10 sm:mb-12 max-w-2xl mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-2 mb-3">
            <StickerPill text="Интерактивный тест" bg="#9B49DC" textColor="#FFFFFF" rotate="-1deg" />
            <span className="font-hand text-base sm:text-lg text-[#062985] font-bold">
              / 3 простых вопроса
            </span>
          </div>

          <h2 className="font-display font-extrabold text-2xl min-[380px]:text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-tight uppercase mb-4 text-[#062985] break-words">
            Найди свою точку <br />
            <span className="bg-[#C4E538] px-2.5 sm:px-3 py-0.5 inline-block -rotate-1 border-2 border-[#062985] rounded-xl shadow-[3px_3px_0px_#062985]">
              входа в профессию
            </span>
          </h2>

          <p className="font-body text-sm sm:text-base lg:text-lg text-[#062985]/75 leading-relaxed">
            Ответь на три ключевых вопроса, чтобы алгоритм платформы определил
            наиболее подходящую роль и порекомендовал стартовую ступень карьерного маршрута.
          </p>
        </div>

        {/* Questionnaire Box */}
        <div className="max-w-3xl mx-auto bg-white rounded-2xl sm:rounded-3xl border-2 sm:border-3 border-[#062985] shadow-[4px_4px_0px_#062985] sm:shadow-[8px_8px_0px_#062985] p-4 min-[380px]:p-6 sm:p-10 lg:p-12 relative">
          {!isCompleted ? (
            <div>
              {/* Progress Bar */}
              <div className="mb-6 sm:mb-8">
                <div className="flex items-center justify-between text-[11px] sm:text-xs font-bold uppercase text-[#062985]/70 mb-2">
                  <span>Вопрос {currentStepIndex + 1} из {totalQuestions}</span>
                  <span>{Math.round(((currentStepIndex + 1) / totalQuestions) * 100)}% пройдено</span>
                </div>
                <div className="w-full h-2.5 sm:h-3 bg-[#F4F6FB] rounded-full border-2 border-[#062985] overflow-hidden">
                  <div
                    className="h-full bg-[#C4E538] transition-all duration-300"
                    style={{
                      width: `${((currentStepIndex + 1) / totalQuestions) * 100}%`,
                    }}
                  />
                </div>
              </div>

              {/* Question Text */}
              <div className="mb-6 sm:mb-8">
                <h3 className="font-display font-extrabold text-lg min-[380px]:text-xl sm:text-2xl lg:text-3xl text-[#062985] leading-snug mb-1.5 sm:mb-2 break-words">
                  {currentQuestion.title}
                </h3>
                <p className="font-hand text-sm sm:text-base lg:text-lg text-[#9B49DC] font-bold">
                  {currentQuestion.subtitle}
                </p>
              </div>

              {/* Options List */}
              <div className="space-y-3 sm:space-y-3.5 mb-8 sm:mb-10">
                {currentQuestion.options.map((option) => {
                  const isSelected =
                    selectedAnswers[currentStepIndex]?.id === option.id;

                  return (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => handleSelectOption(option)}
                      className={`w-full text-left p-3.5 min-[380px]:p-4 sm:p-5 rounded-xl sm:rounded-2xl border-2 sm:border-3 transition-all flex items-start justify-between gap-3 sm:gap-4 cursor-pointer ${
                        isSelected
                          ? 'bg-[#C4E538] text-[#062985] border-[#062985] shadow-[3px_3px_0px_#062985] sm:shadow-[4px_4px_0px_#062985] scale-[1.01]'
                          : 'bg-[#F4F6FB] text-[#062985] border-[#062985]/20 hover:border-[#062985] hover:bg-white'
                      }`}
                    >
                      <div className="min-w-0">
                        <span className="font-display font-bold text-xs min-[380px]:text-sm sm:text-base leading-snug block mb-1">
                          {option.text}
                        </span>
                        <span className="text-[11px] sm:text-xs text-[#062985]/70 block font-medium">
                          {option.description}
                        </span>
                      </div>

                      <div
                        className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                          isSelected
                            ? 'border-[#062985] bg-[#062985] text-[#C4E538]'
                            : 'border-[#062985]/40'
                        }`}
                      >
                        {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Navigation Controls */}
              <div className="flex items-center justify-between pt-6 border-t border-[#062985]/15">
                <button
                  type="button"
                  onClick={handleBack}
                  disabled={currentStepIndex === 0}
                  className={`text-xs font-display font-bold uppercase px-5 py-2.5 rounded-full border-2 border-[#062985] transition-all ${
                    currentStepIndex === 0
                      ? 'opacity-40 cursor-not-allowed bg-transparent'
                      : 'hover:bg-neutral-100'
                  }`}
                >
                  Назад
                </button>

                <button
                  type="button"
                  onClick={handleNext}
                  disabled={!selectedAnswers[currentStepIndex]}
                  className={`inline-flex items-center gap-2 text-xs font-display font-bold uppercase px-7 py-3 rounded-full border-2 border-[#062985] transition-all ${
                    selectedAnswers[currentStepIndex]
                      ? 'bg-[#062985] text-white shadow-[3px_3px_0px_#C4E538] hover:bg-[#9B49DC]'
                      : 'opacity-40 cursor-not-allowed bg-neutral-200 text-neutral-500 border-neutral-300'
                  }`}
                >
                  <span>
                    {currentStepIndex === totalQuestions - 1 ? 'Получить результат' : 'Далее'}
                  </span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ) : (
            /* Results Screen */
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase bg-[#C4E538] text-[#062985] border border-[#062985]">
                  Результат готов
                </span>
                <span className="font-hand text-sm font-bold text-[#9B49DC]">
                  / твой индивидуальный карьерный профиль
                </span>
              </div>

              <h3 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-[#062985] leading-tight mb-2">
                Рекомендуемая роль: <br />
                <span className="text-[#9B49DC]">{recommendedRole.title}</span>
              </h3>

              <p className="text-sm sm:text-base text-[#062985]/80 leading-relaxed mb-6">
                На основе твоих ответов о предпочитаемом формате работы и текущем опыте,
                наилучшая точка входа для тебя — это направление{' '}
                <strong>«{recommendedRole.categoryLabel}»</strong>.
              </p>

              {/* Recommended Stage Card */}
              <div className="bg-[#F4FCDC] p-6 rounded-2xl border-2 border-[#062985] mb-8">
                <div className="flex items-center gap-2 mb-2">
                  <Target className="w-4 h-4 text-[#062985]" />
                  <span className="text-xs font-bold uppercase text-[#062985]">
                    Рекомендуемая стартовая ступень маршрута:
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-condensed font-black text-3xl text-[#062985]">
                    Этап {startingStage.stepNumber}
                  </span>
                  <span className="font-display font-bold text-base text-[#062985]">
                    — {startingStage.title}
                  </span>
                </div>
                <p className="text-xs text-[#062985]/80 mt-1">
                  {startingStage.subtitle}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-4 border-t border-[#062985]/15">
                <a
                  href="#route"
                  className="inline-flex items-center justify-center gap-2 bg-[#062985] text-white font-display font-bold text-[11px] sm:text-xs uppercase px-5 sm:px-7 py-3 sm:py-3.5 rounded-full hover:bg-[#9B49DC] transition-all shadow-[3px_3px_0px_#C4E538]"
                >
                  <span>Перейти к этапу в маршруте</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href="#professions"
                  className="inline-flex items-center justify-center gap-2 bg-transparent text-[#062985] font-display font-bold text-[11px] sm:text-xs uppercase px-5 sm:px-6 py-3 sm:py-3.5 rounded-full border-2 border-[#062985] hover:bg-neutral-100 transition-all"
                >
                  <span>Смотреть роли каталога</span>
                </a>

                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex items-center justify-center gap-1.5 text-xs font-bold text-[#062985]/70 hover:text-[#062985] py-2 sm:py-0 sm:ml-auto"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Пройти заново</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
