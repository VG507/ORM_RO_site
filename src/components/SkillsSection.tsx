import React, { useState } from 'react';
import { skillsData } from '../data/skillsData';
import type { SkillItem } from '../types';
import { Brain, Wrench, ArrowRight } from 'lucide-react';
import { StickerPill } from './decorations/DecorativeSVGs';

export const SkillsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'soft' | 'hard'>('soft');
  const [selectedSkill, setSelectedSkill] = useState<SkillItem>(skillsData[0]);

  const currentSkills = skillsData.filter((s) => s.type === activeTab);

  return (
    <section
      id="skills"
      className="relative py-20 lg:py-32 bg-[#F4FCDC] text-[#062985] overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14 max-w-3xl">
          <div className="flex items-center gap-2 mb-3">
            <StickerPill text="Компетенции" bg="#062985" textColor="#C4E538" rotate="2deg" />
            <span className="font-hand text-lg text-[#062985] font-bold">
              / фундамент карьерного роста
            </span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-tight uppercase mb-4 text-[#062985]">
            Навыки и <br className="hidden sm:inline" />
            <span className="text-[#9B49DC] relative inline-block">
              профессиональное развитие
              <span className="absolute -bottom-2 left-0 right-0 h-1.5 bg-[#062985] rounded-full" />
            </span>
          </h2>

          <p className="font-body text-base sm:text-lg text-[#062985]/80 leading-relaxed">
            Молодёжная сфера объединяет гибкие лидерские качества (Soft Skills) и строгие
            инструментальные навыки (Hard Skills). Выбери категорию и изучи, как прокачать
            каждый навык на практике.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="inline-flex p-1.5 rounded-full bg-white border-3 border-[#062985] shadow-[4px_4px_0px_#062985] mb-10">
          <button
            type="button"
            onClick={() => {
              setActiveTab('soft');
              const firstSoft = skillsData.find((s) => s.type === 'soft');
              if (firstSoft) setSelectedSkill(firstSoft);
            }}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-display font-extrabold uppercase transition-all ${
              activeTab === 'soft'
                ? 'bg-[#062985] text-white shadow-sm'
                : 'text-[#062985] hover:bg-neutral-100'
            }`}
          >
            <Brain className="w-4 h-4" />
            <span>Гибкие навыки (Soft Skills)</span>
          </button>

          <button
            type="button"
            onClick={() => {
              setActiveTab('hard');
              const firstHard = skillsData.find((s) => s.type === 'hard');
              if (firstHard) setSelectedSkill(firstHard);
            }}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-display font-extrabold uppercase transition-all ${
              activeTab === 'hard'
                ? 'bg-[#9B49DC] text-white shadow-sm'
                : 'text-[#062985] hover:bg-neutral-100'
            }`}
          >
            <Wrench className="w-4 h-4" />
            <span>Твёрдые навыки (Hard Skills)</span>
          </button>
        </div>

        {/* Interactive Skills Showcase: Grid + Detail Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Skill Cards List */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {currentSkills.map((skill) => {
              const isSelected = skill.id === selectedSkill.id;
              return (
                <div
                  key={skill.id}
                  onClick={() => setSelectedSkill(skill)}
                  className={`p-5 rounded-2xl border-3 border-[#062985] transition-all cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'bg-white shadow-[6px_6px_0px_#9B49DC] -translate-y-1'
                      : 'bg-white/80 hover:bg-white shadow-[3px_3px_0px_#062985] hover:-translate-y-0.5'
                  }`}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setSelectedSkill(skill);
                    }
                  }}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded-md bg-[#062985]/10 text-[#062985]">
                        {skill.category}
                      </span>
                      <span className="text-[11px] font-condensed font-bold text-[#9B49DC]">
                        {skill.level}
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-base text-[#062985] mb-2 leading-snug">
                      {skill.name}
                    </h3>

                    <p className="text-xs text-[#062985]/75 line-clamp-2 leading-relaxed">
                      {skill.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#062985]/15 mt-3 flex items-center justify-between">
                    <span className="text-[11px] font-bold text-[#9B49DC]">
                      {isSelected ? 'Выбран' : 'Смотреть'}
                    </span>
                    <ArrowRight
                      className={`w-3.5 h-3.5 transition-transform ${
                        isSelected ? 'translate-x-1 text-[#9B49DC]' : 'text-[#062985]/40'
                      }`}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Selected Skill Deep Dive Card */}
          <div className="lg:col-span-5 bg-[#062985] text-white p-6 sm:p-8 rounded-3xl border-3 border-[#062985] shadow-[8px_8px_0px_#C4E538] sticky top-28">
            <div className="flex items-center gap-2 mb-3">
              <span className="px-3 py-0.5 rounded-full text-xs font-bold uppercase bg-[#C4E538] text-[#062985]">
                {selectedSkill.type === 'soft' ? 'Гибкий навык' : 'Твёрдый навык'}
              </span>
              <span className="text-xs font-hand text-[#51C3DD] font-bold text-base">
                / {selectedSkill.category}
              </span>
            </div>

            <h3 className="font-display font-black text-2xl sm:text-3xl text-white mb-4 leading-tight">
              {selectedSkill.name}
            </h3>

            <div className="space-y-4 mb-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#C4E538] block mb-1">
                  Что представляет собой навык:
                </span>
                <p className="text-xs sm:text-sm text-white/90 leading-relaxed">
                  {selectedSkill.description}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/10 border border-white/15">
                <span className="text-xs font-bold uppercase tracking-wider text-[#51C3DD] block mb-1">
                  Почему это важно в молодёжке:
                </span>
                <p className="text-xs text-white/85 leading-relaxed">
                  {selectedSkill.relevance}
                </p>
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#C4E538] block mb-1">
                  Как развить на практике:
                </span>
                <p className="text-xs sm:text-sm text-white/90 leading-relaxed">
                  {selectedSkill.howToDevelop}
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-white/15 flex items-center justify-between">
              <span className="text-xs text-white/70">Уровень: {selectedSkill.level}</span>
              <a
                href="#route"
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase text-[#C4E538] hover:underline"
              >
                <span>Найти в маршруте</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
