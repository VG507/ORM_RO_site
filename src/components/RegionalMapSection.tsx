import React, { useState, useMemo } from 'react';
import { municipalitiesData } from '../data/municipalitiesData';
import {
  MapPin,
  Search,
  Building,
  Briefcase,
  Phone,
  Mail,
  ExternalLink,
  RotateCcw,
  Layers,
} from 'lucide-react';
import { StickerPill } from './decorations/DecorativeSVGs';

export const RegionalMapSection: React.FC = () => {
  const [selectedMunicipalityId, setSelectedMunicipalityId] = useState<string>('rostov-on-don');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'map' | 'list'>('map');

  const filteredMunicipalities = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return municipalitiesData;
    return municipalitiesData.filter(
      (m) =>
        m.name.toLowerCase().includes(q) ||
        m.organizations.some((o) => o.name.toLowerCase().includes(q))
    );
  }, [searchQuery]);

  const selectedMunicipality = useMemo(() => {
    return (
      municipalitiesData.find((m) => m.id === selectedMunicipalityId) ||
      municipalitiesData[0]
    );
  }, [selectedMunicipalityId]);

  return (
    <section
      id="map"
      className="relative py-20 lg:py-32 bg-[#F4FCDC] text-[#062985] overflow-hidden border-t-2 border-[#062985]/10"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12 max-w-3xl">
          <div className="flex items-center gap-2 mb-3">
            <StickerPill text="География возможностей" bg="#062985" textColor="#C4E538" rotate="-1deg" />
            <span className="font-hand text-lg text-[#062985] font-bold">
              / 55 муниципалитетов Дона
            </span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-tight uppercase mb-4 text-[#062985]">
            Карта молодёжной <br className="hidden sm:inline" />
            <span className="text-[#9B49DC] relative inline-block">
              инфраструктуры
              <span className="absolute -bottom-2 left-0 right-0 h-1.5 bg-[#062985] rounded-full" />
            </span>
          </h2>

          <p className="font-body text-base sm:text-lg text-[#062985]/80 leading-relaxed">
            Исследуй молодёжные центры, профильные отделы администраций и открытые вакансии
            в различных уголках Ростовской области. Выбери территорию на интерактивной карте
            или найди свой район в поиске.
          </p>
        </div>

        {/* View Switcher and Search */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-8">
          {/* Switcher */}
          <div className="inline-flex p-1 rounded-full bg-white border-2 border-[#062985] shadow-[2px_2px_0px_#062985]">
            <button
              type="button"
              onClick={() => setViewMode('map')}
              className={`flex items-center gap-1.5 px-5 py-2 rounded-full text-xs font-display font-bold uppercase transition-all ${
                viewMode === 'map'
                  ? 'bg-[#062985] text-white shadow-sm'
                  : 'text-[#062985] hover:bg-neutral-100'
              }`}
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>Интерактивная карта</span>
            </button>

            <button
              type="button"
              onClick={() => setViewMode('list')}
              className={`flex items-center gap-1.5 px-5 py-2 rounded-full text-xs font-display font-bold uppercase transition-all ${
                viewMode === 'list'
                  ? 'bg-[#062985] text-white shadow-sm'
                  : 'text-[#062985] hover:bg-neutral-100'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Список районов ({municipalitiesData.length})</span>
            </button>
          </div>

          {/* Quick Search Input */}
          <div className="relative min-w-[260px] sm:min-w-[320px]">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#062985]/50" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Найти муниципалитет..."
              className="w-full pl-10 pr-4 py-2.5 rounded-full bg-white border-2 border-[#062985]/20 focus:border-[#062985] text-xs sm:text-sm text-[#062985] placeholder-[#062985]/50 outline-none transition-all shadow-sm"
            />
          </div>
        </div>

        {/* Interactive Layout: Map Area + Municipality Dossier Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Main View (Interactive SVG Regional Map or List) */}
          <div className="lg:col-span-7 bg-white rounded-3xl border-3 border-[#062985] p-6 shadow-[8px_8px_0px_#062985] relative overflow-hidden">
            {viewMode === 'map' ? (
              <div className="relative">
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#062985]/10">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#C4E538] ring-4 ring-[#C4E538]/30 inline-block" />
                    <span className="font-display font-bold text-xs uppercase text-[#062985]">
                      Схема Ростовской области
                    </span>
                  </div>
                  <span className="text-[11px] font-hand font-bold text-[#9B49DC]">
                    *Кликните по узлу или метке района
                  </span>
                </div>

                {/* SVG Visual Map */}
                <div className="relative w-full aspect-[4/3] bg-[#F4F6FB] rounded-2xl border-2 border-[#062985]/20 overflow-hidden flex items-center justify-center p-4">
                  {/* Stylized Regional SVG Contour Representation */}
                  <svg
                    viewBox="0 0 1000 800"
                    className="w-full h-full select-none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Simplified Rostov Oblast Boundary Contour */}
                    <path
                      d="M 450 60 C 650 90, 720 180, 700 280 C 850 350, 920 450, 850 580 C 780 720, 650 780, 520 750 C 380 770, 240 680, 220 560 C 180 500, 280 400, 320 280 C 350 150, 380 80, 450 60 Z"
                      fill="#E8F4EC"
                      stroke="#062985"
                      strokeWidth="4"
                      strokeDasharray="6 6"
                      className="opacity-80"
                    />

                    {/* Don River Stylized Curve */}
                    <path
                      d="M 520 120 Q 560 320, 580 430 T 420 550 T 260 570"
                      fill="none"
                      stroke="#51C3DD"
                      strokeWidth="12"
                      strokeLinecap="round"
                      className="opacity-70"
                    />

                    {/* Municipality Interactive Nodes */}
                    {municipalitiesData.map((m) => {
                      const isSelected = m.id === selectedMunicipalityId;
                      const hasVacancies = m.vacancies.length > 0;

                      return (
                        <g
                          key={m.id}
                          className="cursor-pointer transition-transform duration-200 hover:scale-110"
                          onClick={() => setSelectedMunicipalityId(m.id)}
                        >
                          {/* Outer pulse circle for selected */}
                          {isSelected && (
                            <circle
                              cx={m.svgCoords.x}
                              cy={m.svgCoords.y}
                              r="26"
                              fill="#9B49DC"
                              opacity="0.25"
                              className="animate-ping"
                            />
                          )}

                          {/* Pin circle */}
                          <circle
                            cx={m.svgCoords.x}
                            cy={m.svgCoords.y}
                            r={isSelected ? '18' : '13'}
                            fill={isSelected ? '#9B49DC' : hasVacancies ? '#C4E538' : '#FFFFFF'}
                            stroke="#062985"
                            strokeWidth="3"
                          />

                          {/* Inner dot */}
                          <circle
                            cx={m.svgCoords.x}
                            cy={m.svgCoords.y}
                            r="5"
                            fill={isSelected ? '#FFFFFF' : '#062985'}
                          />

                          {/* Municipality Label */}
                          <text
                            x={m.svgCoords.x}
                            y={m.svgCoords.y + (isSelected ? 32 : 26)}
                            textAnchor="middle"
                            fill="#062985"
                            fontSize={isSelected ? '15' : '12'}
                            fontWeight={isSelected ? '900' : '700'}
                            fontFamily="Onest, sans-serif"
                            className="select-none pointer-events-none drop-shadow-sm"
                          >
                            {m.name}
                          </text>

                          {/* Vacancy indicator pill badge */}
                          {hasVacancies && (
                            <g transform={`translate(${m.svgCoords.x + 8}, ${m.svgCoords.y - 18})`}>
                              <rect
                                width="18"
                                height="14"
                                rx="5"
                                fill="#062985"
                                stroke="#C4E538"
                                strokeWidth="1.5"
                              />
                              <text
                                x="9"
                                y="10"
                                textAnchor="middle"
                                fill="#C4E538"
                                fontSize="9"
                                fontWeight="bold"
                                fontFamily="Onest, sans-serif"
                              >
                                {m.vacancies.length}
                              </text>
                            </g>
                          )}
                        </g>
                      );
                    })}
                  </svg>
                </div>

                {/* Map Legend */}
                <div className="flex flex-wrap items-center justify-between gap-3 mt-4 pt-3 border-t border-[#062985]/10 text-xs text-[#062985]/80">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1.5">
                      <span className="w-3 h-3 rounded-full bg-[#C4E538] border border-[#062985]" />
                      Есть вакансии
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="w-3 h-3 rounded-full bg-[#9B49DC] border border-[#062985]" />
                      Выбранный район
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="w-6 h-1.5 rounded-full bg-[#51C3DD]" />
                      Река Дон
                    </span>
                  </div>
                  <span className="font-hand font-bold text-xs">
                    55 территорий области
                  </span>
                </div>
              </div>
            ) : (
              /* List Mode for fast search or mobile */
              <div className="space-y-2.5 max-h-[520px] overflow-y-auto pr-1">
                {filteredMunicipalities.map((m) => {
                  const isSelected = m.id === selectedMunicipalityId;
                  return (
                    <button
                      key={m.id}
                      type="button"
                      onClick={() => setSelectedMunicipalityId(m.id)}
                      className={`w-full text-left p-3.5 rounded-2xl border-2 transition-all flex items-center justify-between gap-3 ${
                        isSelected
                          ? 'bg-[#062985] text-white border-[#062985] shadow-[3px_3px_0px_#C4E538]'
                          : 'bg-[#F4F6FB] text-[#062985] border-[#062985]/20 hover:border-[#062985]'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <MapPin className={`w-4 h-4 ${isSelected ? 'text-[#C4E538]' : 'text-[#062985]/60'}`} />
                        <div>
                          <span className="font-display font-bold text-xs sm:text-sm block">
                            {m.name}
                          </span>
                          <span className="text-[11px] opacity-70">
                            {m.type}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        {m.vacancies.length > 0 && (
                          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${
                            isSelected ? 'bg-[#C4E538] text-[#062985]' : 'bg-[#C4E538]/30 text-[#062985]'
                          }`}>
                            {m.vacancies.length} вак.
                          </span>
                        )}
                        <span className={`text-[11px] font-bold ${isSelected ? 'text-[#51C3DD]' : 'text-[#062985]/60'}`}>
                          {m.organizations.length} МЦ
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* Right Column: Selected Territory Dossier */}
          <div className="lg:col-span-5 bg-[#062985] text-white p-6 sm:p-8 rounded-3xl border-3 border-[#062985] shadow-[8px_8px_0px_#C4E538]">
            <div className="flex items-start justify-between gap-4 mb-4 pb-4 border-b border-white/15">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase bg-[#C4E538] text-[#062985]">
                    {selectedMunicipality.type}
                  </span>
                  <span className="font-hand text-xs font-bold text-[#51C3DD]">
                    / карточка территории
                  </span>
                </div>
                <h3 className="font-display font-black text-2xl sm:text-3xl text-white">
                  {selectedMunicipality.name}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setSelectedMunicipalityId('rostov-on-don')}
                className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white/80 hover:text-white transition-colors"
                title="Сбросить к Ростову-на-Дону"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>

            {/* Organizations in Territory */}
            <div className="mb-6">
              <h4 className="font-display font-bold text-xs uppercase text-[#C4E538] tracking-wider mb-3 flex items-center gap-1.5">
                <Building className="w-3.5 h-3.5" />
                Молодёжные центры и органы управления ({selectedMunicipality.organizations.length})
              </h4>

              <div className="space-y-3">
                {selectedMunicipality.organizations.map((org) => (
                  <div
                    key={org.id}
                    className="p-3.5 rounded-2xl bg-white/10 border border-white/15 text-xs space-y-1.5"
                  >
                    <span className="font-display font-bold text-xs text-white block">
                      {org.name}
                    </span>
                    <span className="text-[11px] text-[#51C3DD] font-medium block">
                      {org.type} · {org.address}
                    </span>

                    <div className="flex flex-wrap items-center gap-3 pt-1 text-[11px] text-white/70">
                      <span className="flex items-center gap-1">
                        <Phone className="w-3 h-3 text-[#C4E538]" />
                        {org.phone}
                      </span>
                      <span className="flex items-center gap-1">
                        <Mail className="w-3 h-3 text-[#C4E538]" />
                        {org.email}
                      </span>
                      {org.vkUrl && (
                        <a
                          href={org.vkUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-[#C4E538] hover:underline ml-auto"
                        >
                          <span>Сообщество VK</span>
                          <ExternalLink className="w-2.5 h-2.5" />
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Vacancies in Territory */}
            <div className="mb-6">
              <h4 className="font-display font-bold text-xs uppercase text-[#51C3DD] tracking-wider mb-3 flex items-center gap-1.5">
                <Briefcase className="w-3.5 h-3.5" />
                Открытые вакансии на территории ({selectedMunicipality.vacancies.length})
              </h4>

              {selectedMunicipality.vacancies.length > 0 ? (
                <div className="space-y-2">
                  {selectedMunicipality.vacancies.map((vac) => (
                    <div
                      key={vac.id}
                      className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between gap-3 text-xs"
                    >
                      <div>
                        <span className="font-bold text-white block">{vac.title}</span>
                        <span className="text-[11px] text-white/70">{vac.organizationName}</span>
                      </div>
                      <div className="text-right shrink-0">
                        <span className="font-bold text-[#C4E538] block text-[11px]">{vac.salaryText}</span>
                        <span className="text-[10px] text-white/50">{vac.employmentType}</span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-3 rounded-xl bg-white/5 border border-dashed border-white/20 text-center text-xs text-white/60">
                  Прямо сейчас открытых вакансий нет. Направьте резюме в районный молодёжный центр!
                </div>
              )}
            </div>

            {/* Highlighted Project on Territory */}
            <div className="p-4 rounded-2xl bg-[#9B49DC]/25 border border-[#9B49DC]">
              <span className="font-display font-bold text-[10px] uppercase text-[#C4E538] tracking-widest block mb-1">
                Ключевой проект района:
              </span>
              <p className="text-xs font-semibold text-white">
                «{selectedMunicipality.highlightedProject}»
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
