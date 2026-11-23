import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Compass, Bookmark } from 'lucide-react';
import { HashSymbol, SparkStar } from './decorations/DecorativeSVGs';
import { getFavoriteRoleIds, subscribeToFavorites } from '../utils/favorites';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [favoritesCount, setFavoritesCount] = useState(() => getFavoriteRoleIds().length);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const unsubscribe = subscribeToFavorites((ids) => {
      setFavoritesCount(ids.length);
    });
    return unsubscribe;
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0) {
        setScrollProgress(Math.min(100, Math.max(0, (window.scrollY / docHeight) * 100)));
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
    } else {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    };
  }, [mobileMenuOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'О проекте', href: '#about' },
    { label: 'Маршрут', href: '#route' },
    { label: 'Направления', href: '#directions' },
    { label: 'Роли и профессии', href: '#professions' },
    { label: 'Навыки', href: '#skills' },
    { label: 'Истории', href: '#stories' },
    { label: 'Тест выбора', href: '#selector' },
    { label: 'Возможности', href: '#opportunities' },
    { label: 'Вопросы', href: '#faq' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const topOffset = 70;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      {/* Accessibility Skip Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[#C4E538] focus:text-[#062985] focus:font-display focus:font-bold focus:text-xs focus:uppercase focus:rounded-full focus:shadow-xl focus:border-2 focus:border-[#062985]"
      >
        Перейти к основному содержимому
      </a>

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#062985]/95 backdrop-blur-md border-b-2 border-[#C4E538]/30 py-2.5 sm:py-3 shadow-lg shadow-black/20'
            : 'bg-[#062985]/80 backdrop-blur-sm lg:bg-transparent py-3 sm:py-5'
        }`}
      >
        {/* Subtle Reading Progress Indicator Line */}
        <div
          className="absolute top-0 left-0 h-[3px] bg-gradient-to-r from-[#51C3DD] via-[#C4E538] to-[#9B49DC] transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
          role="progressbar"
          aria-valuenow={Math.round(scrollProgress)}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label="Прогресс чтения страницы"
        />

        <div className="max-w-[1440px] mx-auto px-3 sm:px-6 lg:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="group flex items-center gap-2 sm:gap-3 text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C4E538]"
          aria-label="Карьерный маршрут: молодёжная сфера — Главная"
        >
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#C4E538] flex items-center justify-center text-[#062985] font-black font-condensed text-xl sm:text-2xl shadow-[2px_2px_0px_#FFFFFF] transition-transform group-hover:rotate-6 shrink-0">
            <HashSymbol size={22} color="#062985" />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-extrabold text-xs sm:text-sm lg:text-base tracking-tight leading-tight text-white group-hover:text-[#C4E538] transition-colors">
              КАРЬЕРНЫЙ МАРШРУТ
            </span>
            <span className="font-hand text-[11px] sm:text-xs lg:text-sm text-[#C4E538] font-bold tracking-wide">
              молодёжная сфера Дона
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav
          className="hidden xl:flex items-center gap-5 2xl:gap-6"
          aria-label="Основная навигация"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-xs font-semibold text-white/90 hover:text-[#C4E538] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#C4E538] hover:after:w-full after:transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Button & Mobile Menu Toggle */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Saved Roles Bookmark Button */}
          <a
            href="#professions"
            onClick={(e) => handleLinkClick(e, '#professions')}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-full border-2 transition-all text-xs font-bold ${
              favoritesCount > 0
                ? 'bg-[#9B49DC] text-white border-[#C4E538] shadow-[2px_2px_0px_#C4E538]'
                : 'bg-white/10 text-white/80 border-white/20 hover:bg-white/20 hover:text-white'
            }`}
            title="Сохранённые роли"
            aria-label={`Сохранённые роли: ${favoritesCount}`}
          >
            <Bookmark className={`w-3.5 h-3.5 ${favoritesCount > 0 ? 'fill-current text-[#C4E538]' : ''}`} />
            <span className="hidden sm:inline">Избранное</span>
            {favoritesCount > 0 && (
              <span className="w-5 h-5 rounded-full bg-[#C4E538] text-[#062985] text-[10px] font-black font-condensed flex items-center justify-center">
                {favoritesCount}
              </span>
            )}
          </a>

          <a
            href="#route"
            onClick={(e) => handleLinkClick(e, '#route')}
            className="hidden md:inline-flex items-center gap-2 bg-[#C4E538] hover:bg-[#D9FB5F] text-[#062985] font-display font-bold text-[11px] sm:text-xs uppercase px-4 sm:px-5 py-2.5 rounded-full border-2 border-[#062985] shadow-[2px_2px_0px_#FFFFFF] transition-all btn-tactile"
          >
            <span>Начать маршрут</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Accessible Touch-Friendly Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden w-11 h-11 flex items-center justify-center text-white bg-[#062985] border-2 border-[#C4E538] rounded-xl hover:bg-[#C4E538] hover:text-[#062985] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C4E538] shrink-0"
            aria-label={mobileMenuOpen ? 'Закрыть меню' : 'Открыть меню навигации'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer (Responsive overlay with safe-area support) */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 top-[58px] sm:top-[68px] z-40 bg-[#062985] backdrop-blur-xl border-t border-[#C4E538]/20 flex flex-col p-4 sm:p-6 xl:hidden overflow-y-auto h-[calc(100svh-58px)] sm:h-[calc(100svh-68px)]"
          role="dialog"
          aria-modal="true"
          aria-label="Мобильное меню"
        >
          <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/10 shrink-0">
            <SparkStar size={18} color="#C4E538" />
            <span className="text-[11px] uppercase font-display font-bold text-[#C4E538] tracking-widest">
              Навигация по разделам
            </span>
          </div>

          <div className="flex flex-col gap-1.5 sm:gap-2 mb-6">
            {navLinks.map((link, idx) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="flex items-center justify-between text-sm sm:text-base font-semibold text-white/95 hover:text-[#C4E538] hover:bg-white/10 px-3.5 py-3 rounded-xl transition-colors border border-transparent hover:border-[#C4E538]/30 min-h-[44px]"
              >
                <span>{link.label}</span>
                <span className="font-condensed text-xs text-[#C4E538] font-bold">
                  0{idx + 1}
                </span>
              </a>
            ))}
          </div>

          <div className="mt-auto pt-4 border-t border-white/10 flex flex-col gap-3 pb-6 shrink-0">
            <a
              href="#route"
              onClick={(e) => handleLinkClick(e, '#route')}
              className="flex items-center justify-center gap-2 bg-[#C4E538] text-[#062985] font-display font-bold text-xs uppercase py-3.5 px-6 rounded-xl border-2 border-[#062985] shadow-[2px_2px_0px_#FFFFFF] min-h-[46px]"
            >
              <Compass className="w-4 h-4" />
              <span>Открыть карьерный маршрут</span>
            </a>
            <p className="text-center text-[11px] text-white/60 font-hand">
              Ростовская область · 55 муниципалитетов
            </p>
          </div>
        </div>
      )}
    </header>
  </>
);
};
