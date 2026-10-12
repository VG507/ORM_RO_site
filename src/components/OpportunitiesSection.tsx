import React from 'react';
import { opportunitiesData } from '../data/opportunitiesData';
import type { OpportunityItem } from '../types';
import { ExternalLink, Check, Building2 } from 'lucide-react';
import { StickerPill } from './decorations/DecorativeSVGs';

export const OpportunitiesSection: React.FC = () => {
  const getCardStyle = (scheme: OpportunityItem['colorScheme']) => {
    switch (scheme) {
      case 'lime':
        return 'bg-[#F4FCDC] border-[#062985] text-[#062985] shadow-[6px_6px_0px_#062985] hover:shadow-[3px_3px_0px_#062985]';
      case 'cyan':
        return 'bg-[#E7F8FC] border-[#062985] text-[#062985] shadow-[6px_6px_0px_#062985] hover:shadow-[3px_3px_0px_#062985]';
      case 'purple':
        return 'bg-[#F6ECFC] border-[#062985] text-[#062985] shadow-[6px_6px_0px_#062985] hover:shadow-[3px_3px_0px_#062985]';
      case 'navy':
      default:
        return 'bg-[#062985] border-[#062985] text-white shadow-[6px_6px_0px_#C4E538] hover:shadow-[3px_3px_0px_#C4E538]';
    }
  };

  return (
    <section
      id="opportunities"
      className="relative py-16 sm:py-20 lg:py-32 bg-white text-[#062985] overflow-hidden border-t-2 border-[#062985]/10"
    >
      <div className="max-w-[1440px] mx-auto px-3 min-[380px]:px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-10 sm:mb-16 max-w-3xl">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <StickerPill text="Экосистема" bg="#062985" textColor="#C4E538" rotate="2deg" />
            <span className="font-hand text-base sm:text-lg text-[#062985] font-bold">
              / федеральные и региональные ресурсы
            </span>
          </div>

          <h2 className="font-display font-extrabold text-2xl min-[380px]:text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-tight uppercase mb-4 text-[#062985] break-words">
            Дополнительные <br className="hidden sm:inline" />
            <span className="text-[#062985] underline decoration-[#51C3DD] decoration-3 sm:decoration-4">
              возможности
            </span>
          </h2>

          <p className="font-body text-sm sm:text-base lg:text-lg text-[#062985]/75 leading-relaxed">
            Специалист по работе с молодёжью опирается на мощную систему государственной
            поддержки: всероссийские грантовые конкурсы, федеральные форумы,
            сеть Добро.Центров и образовательные программы Академии Росмолодёжи.
          </p>
        </div>

        {/* Opportunities Grid: 4 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {opportunitiesData.map((item) => {
            const cardClasses = getCardStyle(item.colorScheme);
            const isNavy = item.colorScheme === 'navy';

            return (
              <div
                key={item.id}
                className={`p-5 min-[380px]:p-6 sm:p-7 rounded-2xl sm:rounded-3xl border-2 sm:border-3 transition-all duration-200 flex flex-col justify-between hover:-translate-y-1 ${cardClasses}`}
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-4">
                    <span
                      className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md border ${
                        isNavy
                          ? 'bg-[#C4E538] text-[#062985] border-[#C4E538]'
                          : 'bg-[#062985] text-white border-[#062985]'
                      }`}
                    >
                      {item.badge}
                    </span>
                    <Building2 className={`w-4 h-4 ${isNavy ? 'text-[#51C3DD]' : 'text-[#062985]/60'}`} />
                  </div>

                  <h3 className="font-display font-extrabold text-xl leading-snug mb-1">
                    {item.title}
                  </h3>

                  <p className={`text-xs mb-3 font-medium ${isNavy ? 'text-[#51C3DD]' : 'text-[#9B49DC]'}`}>
                    {item.organization}
                  </p>

                  <p className={`text-xs leading-relaxed mb-6 ${isNavy ? 'text-white/85' : 'text-[#062985]/80'}`}>
                    {item.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    {item.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs">
                        <Check
                          className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${
                            isNavy ? 'text-[#C4E538]' : 'text-[#9B49DC]'
                          }`}
                        />
                        <span className={isNavy ? 'text-white/90' : 'text-[#062985]/90'}>
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-current/15">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center justify-between w-full font-display font-bold text-xs uppercase px-4 py-2.5 rounded-full border-2 transition-all ${
                      isNavy
                        ? 'bg-[#C4E538] text-[#062985] border-[#C4E538] hover:bg-white'
                        : 'bg-[#062985] text-white border-[#062985] hover:bg-[#9B49DC]'
                    }`}
                  >
                    <span>{item.linkText}</span>
                    <ExternalLink className="w-3.5 h-3.5 ml-1 shrink-0" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
