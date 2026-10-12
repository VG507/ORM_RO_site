import React, { useState, useMemo } from 'react';
import { professionRolesData } from '../data/professionsData';
import type { ProfessionRole } from '../types';
import { Search, Briefcase, Check, X, ArrowRight, TrendingUp } from 'lucide-react';
import { StickerPill } from './decorations/DecorativeSVGs';

export const ProfessionCatalog: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedRole, setSelectedRole] = useState<ProfessionRole | null>(null);

  const categories = [
    { id: 'all', label: 'Все роли' },
    { id: 'community', label: 'Работа с сообществами' },
    { id: 'projects', label: 'Проектный офис' },
    { id: 'infrastructure', label: 'Инфраструктура' },
    { id: 'media', label: 'Медиа и PR' },
    { id: 'management', label: 'Управление' },
  ];

  const filteredRoles = useMemo(() => {
    return professionRolesData.filter((role) => {
      const matchesCategory =
        selectedCategory === 'all' || role.category === selectedCategory;
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        role.title.toLowerCase().includes(query) ||
        role.description.toLowerCase().includes(query) ||
        role.skills.some((s) => s.toLowerCase().includes(query));
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <section
      id="professions"
      className="relative py-20 lg:py-32 bg-white text-[#062985] overflow-hidden border-t-2 border-[#062985]/10"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12 max-w-3xl">
          <div className="flex items-center gap-2 mb-3">
            <StickerPill text="Каталог ролей" bg="#C4E538" textColor="#062985" rotate="-1deg" />
            <span className="font-hand text-lg text-[#062985] font-bold">
              / кем работать в молодёжке Дона
            </span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-tight uppercase mb-4 text-[#062985]">
            Профессии и <br className="hidden sm:inline" />
            <span className="text-[#062985] underline decoration-[#C4E538] decoration-4">
              карьерные роли
            </span>
          </h2>

          <p className="font-body text-base sm:text-lg text-[#062985]/75 leading-relaxed">
            Исследуй ключевые должности в сфере молодёжной политики Ростовской области.
            Воспользуйся фильтрами или поисковой строкой, чтобы найти подходящую позицию
            и узнать требования, задачи и горизонты развития.
          </p>
        </div>

        {/* Controls: Search and Filter Tabs */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-10">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all border-2 ${
                  selectedCategory === cat.id
                    ? 'bg-[#062985] text-white border-[#062985] shadow-[2px_2px_0px_#C4E538]'
                    : 'bg-[#F4F6FB] text-[#062985] border-transparent hover:border-[#062985]/30'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative min-w-[280px] sm:min-w-[340px]">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#062985]/50" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Поиск по названию или навыкам..."
              className="w-full pl-10 pr-4 py-2.5 rounded-full bg-[#F4F6FB] border-2 border-[#062985]/20 focus:border-[#062985] text-xs sm:text-sm text-[#062985] placeholder-[#062985]/50 outline-none transition-all"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-[#062985]/50 hover:text-[#062985]"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Roles Grid */}
        {filteredRoles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredRoles.map((role) => (
              <div
                key={role.id}
                onClick={() => setSelectedRole(role)}
                className="group bg-[#F4F6FB] p-6 rounded-3xl border-2 border-[#062985] shadow-[4px_4px_0px_#062985] hover:shadow-[2px_2px_0px_#062985] hover:translate-x-[2px] hover:translate-y-[2px] transition-all cursor-pointer flex flex-col justify-between"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedRole(role);
                  }
                }}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-[#062985] text-white">
                      {role.categoryLabel}
                    </span>
                    <span className="text-[11px] font-condensed font-bold text-[#9B49DC]">
                      {role.level}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-base sm:text-lg text-[#062985] leading-snug mb-2 group-hover:text-[#9B49DC] transition-colors">
                    {role.title}
                  </h3>

                  <p className="text-xs text-[#062985]/75 leading-relaxed line-clamp-3 mb-4">
                    {role.description}
                  </p>
                </div>

                <div>
                  {role.salaryRange && (
                    <div className="mb-3 pt-3 border-t border-[#062985]/15">
                      <span className="text-[10px] uppercase font-bold text-[#062985]/60 block">
                        Ориентир дохода:
                      </span>
                      <span className="text-xs font-bold text-[#062985]">
                        {role.salaryRange}
                      </span>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {role.skills.slice(0, 3).map((skill, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] px-2 py-0.5 rounded-md bg-white border border-[#062985]/20 text-[#062985]"
                      >
                        {skill}
                      </span>
                    ))}
                    {role.skills.length > 3 && (
                      <span className="text-[10px] px-1.5 py-0.5 text-[#062985]/60">
                        +{role.skills.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between text-xs font-bold text-[#062985] pt-2 border-t border-[#062985]/15">
                    <span>Карточка роли</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-[#F4F6FB] rounded-3xl border-2 border-dashed border-[#062985]/30 p-12 text-center max-w-lg mx-auto">
            <Briefcase className="w-12 h-12 text-[#062985]/40 mx-auto mb-4" />
            <h3 className="font-display font-bold text-lg text-[#062985] mb-2">
              Роли не найдены
            </h3>
            <p className="text-xs text-[#062985]/70 mb-6">
              Попробуйте изменить поисковый запрос или сбросить выбранную категорию.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="bg-[#062985] text-white font-display font-bold text-xs uppercase px-6 py-2.5 rounded-full hover:bg-[#C4E538] hover:text-[#062985] transition-colors"
            >
              Сбросить фильтры
            </button>
          </div>
        )}
      </div>

      {/* Role Detailed Modal */}
      {selectedRole && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-2xl bg-white rounded-3xl border-3 border-[#062985] shadow-[8px_8px_0px_#062985] p-6 sm:p-10 max-h-[90vh] overflow-y-auto">
            <button
              type="button"
              onClick={() => setSelectedRole(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-[#062985] text-white hover:bg-[#C4E538] hover:text-[#062985] transition-colors"
              aria-label="Закрыть"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-3">
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase bg-[#062985] text-white">
                {selectedRole.categoryLabel}
              </span>
              <span className="text-xs font-hand text-[#9B49DC] font-bold text-base">
                / уровень: {selectedRole.level}
              </span>
            </div>

            <h3 className="font-display font-black text-2xl sm:text-3xl text-[#062985] mb-2 leading-tight">
              {selectedRole.title}
            </h3>

            {selectedRole.salaryRange && (
              <p className="text-xs font-bold text-[#9B49DC] mb-4">
                Уровень компенсации: {selectedRole.salaryRange}
              </p>
            )}

            <p className="text-sm text-[#062985]/80 leading-relaxed mb-6">
              {selectedRole.description}
            </p>

            <div className="space-y-4 mb-6">
              <div>
                <h4 className="font-display font-bold text-xs uppercase text-[#062985] tracking-wider mb-2">
                  Ежедневные рабочие задачи:
                </h4>
                <ul className="space-y-1.5">
                  {selectedRole.dailyTasks.map((task, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-[#062985]/90">
                      <Check className="w-3.5 h-3.5 text-[#C4E538] shrink-0 mt-0.5" />
                      <span>{task}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-display font-bold text-xs uppercase text-[#062985] tracking-wider mb-2">
                  Необходимые компетенции:
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedRole.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-lg bg-[#F4FCDC] border border-[#062985]/20 text-xs font-medium text-[#062985]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#E7F8FC] border border-[#51C3DD]">
                <div className="flex items-center gap-2 text-xs font-bold uppercase text-[#062985] mb-1">
                  <TrendingUp className="w-4 h-4 text-[#062985]" />
                  <span>Перспективы карьерного движения:</span>
                </div>
                <p className="text-xs text-[#062985]/90">
                  {selectedRole.prospects}
                </p>
              </div>
            </div>

            <div className="flex justify-end pt-4 border-t border-[#062985]/15">
              <button
                type="button"
                onClick={() => setSelectedRole(null)}
                className="bg-[#062985] text-white hover:bg-[#9B49DC] font-display font-bold text-xs uppercase px-6 py-3 rounded-full transition-colors"
              >
                Закрыть карточку
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
