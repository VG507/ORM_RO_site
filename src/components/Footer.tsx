import React from 'react';
import { ArrowUp, MapPin, ExternalLink, Heart } from 'lucide-react';
import { HashSymbol, StickerPill } from './decorations/DecorativeSVGs';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navCols = {
    route: [
      { label: 'О проекте', href: '#about' },
      { label: 'Карьерный маршрут', href: '#route' },
      { label: 'Направления деятельности', href: '#directions' },
      { label: 'Каталог профессий', href: '#professions' },
    ],
    growth: [
      { label: 'Компетенции и навыки', href: '#skills' },
      { label: 'Истории успеха', href: '#stories' },
      { label: 'Тест выбора траектории', href: '#selector' },
      { label: 'Частые вопросы (FAQ)', href: '#faq' },
    ],
    official: [
      { label: 'Росмолодёжь (fadm.gov.ru)', href: 'https://fadm.gov.ru' },
      { label: 'Добро.рф — Платформа волонтёров', href: 'https://dobro.ru' },
      { label: 'АИС «Молодёжь России»', href: 'https://myrosmol.ru' },
      { label: 'Мастерская управления «Сенеж»', href: 'https://senezh-rsv.ru' },
    ],
  };

  return (
    <footer className="relative bg-[#03164D] text-white pt-12 sm:pt-16 pb-10 sm:pb-12 border-t-3 border-[#062985] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-3 min-[380px]:px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Top Footer Banner */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 sm:gap-8 pb-8 sm:pb-12 border-b border-white/15">
          {/* Brand Info */}
          <div className="flex items-start gap-3.5 sm:gap-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[#C4E538] flex items-center justify-center text-[#062985] font-black font-condensed text-2xl sm:text-3xl shadow-[3px_3px_0px_#FFFFFF] shrink-0">
              <HashSymbol size={24} color="#062985" />
            </div>
            <div>
              <span className="font-display font-black text-lg sm:text-xl tracking-tight leading-tight block text-white">
                КАРЬЕРНЫЙ МАРШРУТ
              </span>
              <span className="font-hand text-sm sm:text-base text-[#C4E538] font-bold block">
                молодёжная сфера Ростовской области
              </span>
              <p className="text-[11px] sm:text-xs text-white/60 mt-1 max-w-md">
                Региональная цифровая платформа профессиональной навигации и развития специалистов по работе с молодёжью.
              </p>
            </div>
          </div>

          {/* Slogan Pill and Scroll-To-Top */}
          <div className="flex flex-wrap items-center justify-between w-full lg:w-auto gap-3 sm:gap-4 pt-2 lg:pt-0">
            <StickerPill text="Молодость. Карьера. Успех." bg="#51C3DD" textColor="#062985" rotate="1deg" />
            <button
              type="button"
              onClick={scrollToTop}
              className="p-2.5 sm:p-3 rounded-full bg-[#C4E538] text-[#062985] hover:bg-white transition-all shadow-[2px_2px_0px_#FFFFFF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C4E538]"
              aria-label="Наверх страницы"
            >
              <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>

        {/* Navigation Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 py-8 sm:py-12 border-b border-white/15">
          {/* Col 1 */}
          <div>
            <h4 className="font-display font-bold text-xs uppercase text-[#C4E538] tracking-widest mb-4">
              Навигация
            </h4>
            <ul className="space-y-2.5">
              {navCols.route.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="text-xs text-white/75 hover:text-[#C4E538] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 2 */}
          <div>
            <h4 className="font-display font-bold text-xs uppercase text-[#51C3DD] tracking-widest mb-4">
              Развитие и тесты
            </h4>
            <ul className="space-y-2.5">
              {navCols.growth.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="text-xs text-white/75 hover:text-[#51C3DD] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h4 className="font-display font-bold text-xs uppercase text-[#9B49DC] tracking-widest mb-4">
              Федеральные ресурсы
            </h4>
            <ul className="space-y-2.5">
              {navCols.official.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-white/75 hover:text-white transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>{link.label}</span>
                    <ExternalLink className="w-3 h-3 opacity-60" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 */}
          <div>
            <h4 className="font-display font-bold text-xs uppercase text-white tracking-widest mb-4">
              География проекта
            </h4>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
              <div className="flex items-center gap-2 text-xs text-[#C4E538] font-bold">
                <MapPin className="w-4 h-4 shrink-0" />
                <span>Ростовская область</span>
              </div>
              <p className="text-xs text-white/70 leading-relaxed">
                55 муниципальных образований: 12 городских округов и 43 муниципальных района Дона.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Sub-footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>© {new Date().getFullYear()} «Карьерный маршрут: молодёжная сфера». Все права защищены.</p>
          <div className="flex items-center gap-2 font-hand text-sm text-[#C4E538]">
            <span>Сделано для молодёжи Дона</span>
            <Heart className="w-3.5 h-3.5 fill-[#C4E538] text-[#C4E538]" />
          </div>
        </div>
      </div>
    </footer>
  );
};
