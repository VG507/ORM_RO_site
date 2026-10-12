import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Compass } from 'lucide-react';
import { HashSymbol, SparkStar } from './decorations/DecorativeSVGs';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
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
    { label: 'Карта Дона', href: '#map' },
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
      const topOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#062985]/90 backdrop-blur-md border-b-2 border-[#C4E538]/30 py-3 shadow-lg shadow-black/20'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="group flex items-center gap-3 text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C4E538]"
          aria-label="Карьерный маршрут: молодёжная сфера — Главная"
        >
          <div className="w-10 h-10 rounded-xl bg-[#C4E538] flex items-center justify-center text-[#062985] font-black font-condensed text-2xl shadow-[2px_2px_0px_#FFFFFF] transition-transform group-hover:rotate-6">
            <HashSymbol size={24} color="#062985" />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-extrabold text-sm sm:text-base tracking-tight leading-tight text-white group-hover:text-[#C4E538] transition-colors">
              КАРЬЕРНЫЙ МАРШРУТ
            </span>
            <span className="font-hand text-xs sm:text-sm text-[#C4E538] font-bold tracking-wide">
              молодёжная сфера Дона
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav
          className="hidden xl:flex items-center gap-6"
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
        <div className="flex items-center gap-3">
          <a
            href="#route"
            onClick={(e) => handleLinkClick(e, '#route')}
            className="hidden sm:inline-flex items-center gap-2 bg-[#C4E538] hover:bg-[#D9FB5F] text-[#062985] font-display font-bold text-xs uppercase px-5 py-2.5 rounded-full border-2 border-[#062985] shadow-[3px_3px_0px_#FFFFFF] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_#FFFFFF] transition-all"
          >
            <span>Начать маршрут</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 text-white bg-[#062985] border-2 border-[#C4E538] rounded-xl hover:bg-[#C4E538] hover:text-[#062985] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C4E538]"
            aria-label={mobileMenuOpen ? 'Закрыть меню' : 'Открыть меню навигации'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 top-[70px] z-40 bg-[#062985]/98 backdrop-blur-xl border-t border-[#C4E538]/20 flex flex-col p-6 xl:hidden overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-label="Мобильное меню"
        >
          <div className="flex items-center gap-2 mb-6 pb-4 border-b border-white/10">
            <SparkStar size={20} color="#C4E538" />
            <span className="text-xs uppercase font-display font-bold text-[#C4E538] tracking-widest">
              Навигация по разделам
            </span>
          </div>

          <div className="flex flex-col gap-3 mb-8">
            {navLinks.map((link, idx) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="flex items-center justify-between text-base font-medium text-white/95 hover:text-[#C4E538] hover:bg-white/5 px-4 py-3 rounded-xl transition-colors border border-transparent hover:border-[#C4E538]/30"
              >
                <span>{link.label}</span>
                <span className="font-condensed text-xs text-[#C4E538] font-bold">
                  0{idx + 1}
                </span>
              </a>
            ))}
          </div>

          <div className="mt-auto pt-4 border-t border-white/10 flex flex-col gap-3">
            <a
              href="#route"
              onClick={(e) => handleLinkClick(e, '#route')}
              className="flex items-center justify-center gap-2 bg-[#C4E538] text-[#062985] font-display font-bold text-sm uppercase py-3.5 px-6 rounded-xl border-2 border-[#062985] shadow-[3px_3px_0px_#FFFFFF]"
            >
              <Compass className="w-5 h-5" />
              <span>Открыть карьерный маршрут</span>
            </a>
            <p className="text-center text-xs text-white/50 font-hand pt-2">
              Ростовская область · 55 муниципалитетов
            </p>
          </div>
        </div>
      )}
    </header>
  );
};
