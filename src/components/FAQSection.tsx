import React, { useState } from 'react';
import { faqData } from '../data/faqData';
import { Plus, Minus } from 'lucide-react';
import { StickerPill } from './decorations/DecorativeSVGs';

export const FAQSection: React.FC = () => {
  const [openIds, setOpenIds] = useState<string[]>([faqData[0].id]);

  const toggleFAQ = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section
      id="faq"
      className="relative py-16 sm:py-20 lg:py-32 bg-[#F4F6FB] text-[#062985] overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-3 min-[380px]:px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-10 sm:mb-14 max-w-2xl mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-2 mb-3">
            <StickerPill text="Ответы на вопросы" bg="#C4E538" textColor="#062985" rotate="-1deg" />
            <span className="font-hand text-base sm:text-lg text-[#062985] font-bold">
              / всё о карьере в ОРМ
            </span>
          </div>

          <h2 className="font-display font-extrabold text-2xl min-[380px]:text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-tight uppercase mb-4 text-[#062985] break-words">
            Часто задаваемые <br />
            <span className="text-[#9B49DC]">вопросы</span>
          </h2>

          <p className="font-body text-sm sm:text-base lg:text-lg text-[#062985]/75 leading-relaxed">
            Разбираем главные вопросы о требованиях к образованию, зарплатах,
            получении грантов и возможностях работы в муниципалитетах Ростовской области.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="max-w-3xl mx-auto space-y-3 sm:space-y-4">
          {faqData.map((item) => {
            const isOpen = openIds.includes(item.id);

            return (
              <div
                key={item.id}
                className={`rounded-xl sm:rounded-2xl border-2 sm:border-3 border-[#062985] transition-all overflow-hidden ${
                  isOpen
                    ? 'bg-white shadow-[3px_3px_0px_#062985] sm:shadow-[4px_4px_0px_#062985]'
                    : 'bg-white/80 hover:bg-white shadow-[2px_2px_0px_#062985]'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(item.id)}
                  aria-expanded={isOpen}
                  className="w-full text-left p-4 sm:p-6 flex items-start justify-between gap-3 sm:gap-4 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9B49DC]"
                >
                  <div className="min-w-0">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-[#062985]/10 text-[#062985] inline-block mb-1.5 sm:mb-2">
                      {item.category}
                    </span>
                    <h3 className="font-display font-bold text-sm min-[380px]:text-base sm:text-lg text-[#062985] leading-snug break-words">
                      {item.question}
                    </h3>
                  </div>

                  <div
                    className={`w-8 h-8 rounded-full border-2 border-[#062985] flex items-center justify-center shrink-0 mt-1 transition-transform ${
                      isOpen ? 'bg-[#C4E538] rotate-180' : 'bg-[#F4F6FB]'
                    }`}
                  >
                    {isOpen ? (
                      <Minus className="w-4 h-4 text-[#062985]" />
                    ) : (
                      <Plus className="w-4 h-4 text-[#062985]" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 text-xs sm:text-sm text-[#062985]/85 leading-relaxed border-t border-[#062985]/10 pt-4">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
