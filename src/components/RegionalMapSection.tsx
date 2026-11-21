import { useState } from 'react';
import type { KeyboardEvent } from 'react';
import { Briefcase, ExternalLink, List, MapPin, Search } from 'lucide-react';
import {
  municipalitiesData,
  regionalYouthContact,
  territorySourceUrl,
  vacancySearchUrl,
} from '../data/municipalitiesData';
import type { MunicipalityItem } from '../data/municipalitiesData';
import { StickerPill } from './decorations/DecorativeSVGs';

const filters = [
  { id: 'all', label: 'Все территории', total: municipalitiesData.length },
  { id: 'city', label: 'Городские округа', total: municipalitiesData.filter((item) => item.type === 'городской округ').length },
  { id: 'district', label: 'Муниципальные районы', total: municipalitiesData.filter((item) => item.type === 'муниципальный район').length },
  { id: 'contact', label: 'С местным контактом', total: municipalitiesData.filter((item) => item.contact).length },
] as const;

function normalizeSearch(value: string) {
  return value.toLocaleLowerCase('ru').replaceAll('ё', 'е');
}

export function RegionalMapSection() {
  const [selectedId, setSelectedId] = useState('rostov-on-don');
  const [query, setQuery] = useState('');
  const [view, setView] = useState<'map' | 'list'>(() =>
    typeof window !== 'undefined' && window.matchMedia('(min-width: 640px)').matches ? 'map' : 'list',
  );
  const [filter, setFilter] = useState<(typeof filters)[number]['id']>('all');

  const search = normalizeSearch(query.trim());
  const results = municipalitiesData.filter((item) => {
    if (filter === 'city' && item.type !== 'городской округ') return false;
    if (filter === 'district' && item.type !== 'муниципальный район') return false;
    if (filter === 'contact' && !item.contact) return false;
    return normalizeSearch(`${item.name} ${item.contact?.name ?? ''}`).includes(search);
  });
  const selected = results.find((item) => item.id === selectedId) ?? results[0];

  function handlePinKeyDown(event: KeyboardEvent<SVGGElement>, item: MunicipalityItem) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      setSelectedId(item.id);
    }
    const direction = event.key === 'ArrowRight' || event.key === 'ArrowDown' ? 1
      : event.key === 'ArrowLeft' || event.key === 'ArrowUp' ? -1 : 0;
    if (direction === 0) return;

    event.preventDefault();
    const index = results.indexOf(item);
    const next = results[(index + direction + results.length) % results.length];
    setSelectedId(next.id);
    document.getElementById(`map-pin-${next.id}`)?.focus();
  }

  return (
    <section id="map" className="relative py-16 sm:py-20 lg:py-32 bg-[#F4FCDC] text-[#062985] border-t-2 border-[#062985]/10">
      <div className="max-w-[1440px] mx-auto px-3 min-[380px]:px-4 sm:px-6 lg:px-12">
        <div className="mb-7 sm:mb-10 max-w-3xl">
          <StickerPill text="Инфраструктура региона" bg="#C4E538" textColor="#062985" rotate="-1deg" />
          <h2 className="font-display font-extrabold text-2xl min-[380px]:text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-tight uppercase mt-4 mb-4">
            Карта <span className="text-[#7B2EBC]">Дона</span>
          </h2>
          <p className="text-sm sm:text-base leading-relaxed">
            Найди свой округ или район. В карточке территории есть контакты для вопросов о молодёжных проектах и ссылка на поиск вакансий.
          </p>
        </div>

        <div className="bg-white border-2 border-[#062985] rounded-2xl p-3.5 sm:p-5 mb-6 shadow-[3px_3px_0px_#062985]">
          <div className="flex flex-wrap gap-3 items-center justify-between">
            <div className="flex flex-wrap gap-2" role="group" aria-label="Вид справочника">
              {([
                { id: 'map', label: 'Схема', Icon: MapPin },
                { id: 'list', label: 'Список', Icon: List },
              ] as const).map(({ id, label, Icon }) => (
                <button key={id} type="button" aria-pressed={view === id} onClick={() => setView(id)}
                  className={`flex items-center gap-1.5 px-3 py-2 border border-[#062985] rounded-full text-xs font-bold cursor-pointer ${view === id ? 'bg-[#062985] text-white' : 'bg-white hover:bg-[#F4F6FB]'}`}>
                  <Icon className="size-3.5" aria-hidden="true" />
                  {label}
                </button>
              ))}
            </div>

            <label className="relative w-full sm:w-72">
              <span className="sr-only">Поиск муниципалитета или организации</span>
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 pointer-events-none" aria-hidden="true" />
              <input type="search" value={query} onChange={(event) => setQuery(event.target.value)}
                placeholder="Найти муниципалитет"
                className="w-full pl-9 pr-3 py-2.5 rounded-full border-2 border-[#062985]/30 text-sm bg-[#F4F6FB]" />
            </label>
          </div>

          <div className="flex flex-wrap gap-2 mt-4" role="group" aria-label="Фильтры территорий">
            {filters.map(({ id, label, total }) => (
              <button key={id} type="button" aria-pressed={filter === id} onClick={() => setFilter(id)}
                className={`px-3 py-1.5 rounded-full border border-[#062985]/40 text-xs font-bold cursor-pointer ${filter === id ? 'bg-[#C4E538] border-[#062985]' : 'bg-white hover:bg-[#F4F6FB]'}`}>
                {label} ({total})
              </button>
            ))}
          </div>
          <p className="mt-3 text-xs text-[#062985]/80" role="status">Найдено территорий: {results.length}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          <div className="lg:col-span-7 bg-white rounded-2xl sm:rounded-3xl border-2 border-[#062985] p-3.5 sm:p-6 shadow-[4px_4px_0px_#062985] min-w-0">
            {!selected ? (
              <p className="p-4 text-sm">Территории не найдены. Измени запрос или фильтр.</p>
            ) : view === 'map' ? (
              <>
                <p className="mb-2 font-display font-bold text-xs sm:text-sm">Условная схема Ростовской области</p>
                <p className="mb-3 text-xs text-[#062985]/80" id="map-keyboard">
                  Выбери метку мышью или перемещайся между территориями клавишами со стрелками.
                </p>
                <div className="bg-[#F4F6FB] rounded-xl border border-[#062985]/15 p-1 sm:p-3">
                  <svg viewBox="48 13 858 755" role="group" aria-label="Метки территорий" aria-describedby="map-keyboard"
                    className="w-full max-h-[31rem] select-none">
                    <path d="M343 42 405 51 465 70 504 115 549 159 600 172 609 217 668 224 668 286 632 341 676 354 719 404 765 419 810 456 796 491 872 505 891 569 864 607 871 646 818 676 776 663 719 691 674 670 630 695 547 712 493 715 460 759 409 747 393 712 337 724 294 696 259 670 213 663 158 660 118 627 111 583 158 550 109 543 75 520 66 477 102 439 112 395 167 373 219 387 218 333 244 301 239 266 279 229 266 181 275 103 308 80Z"
                      fill="#E8F4EC" stroke="#062985" strokeWidth="3" strokeDasharray="6 6" aria-hidden="true" />
                    <path d="M435 65 Q429 132 551 165 Q658 194 616 298 Q597 351 653 374 Q681 397 628 416 Q558 425 518 460 Q464 490 403 492 Q328 515 270 545 Q229 549 181 569"
                      fill="none" stroke="#51C3DD" strokeWidth="9" strokeLinecap="round" opacity=".75" aria-hidden="true" />
                    {results.map((item) => {
                      const active = selected.id === item.id;
                      const [x, y] = item.mapPosition;
                      return (
                        <g id={`map-pin-${item.id}`} key={item.id} role="button" tabIndex={active ? 0 : -1}
                          aria-label={item.name} aria-pressed={active}
                          className="group cursor-pointer focus-visible:outline-none"
                          onClick={() => setSelectedId(item.id)}
                          onKeyDown={(event) => handlePinKeyDown(event, item)}>
                          <title>{item.name}</title>
                          <circle cx={x} cy={y} r="17" fill="transparent" />
                          <circle cx={x} cy={y} r="13" fill="none" stroke="#7B2EBC" strokeWidth="3"
                            className="opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100" />
                          <circle cx={x} cy={y} r={active ? 10 : 7} stroke="#062985" strokeWidth="2"
                            fill={active ? '#9B49DC' : item.contact ? '#C4E538' : '#FFFFFF'} />
                        </g>
                      );
                    })}
                  </svg>
                </div>
                <p className="mt-3 text-sm font-bold" aria-live="polite">Выбрано: {selected.name}</p>
                <p className="flex items-center gap-2 mt-1.5 text-xs">
                  <span className="size-2.5 rounded-full border border-[#062985] bg-[#C4E538]" aria-hidden="true" />
                  Есть местный контакт
                </p>
              </>
            ) : (
              <ul className="grid gap-2 max-h-80 sm:max-h-[28rem] overflow-y-auto p-1">
                {results.map((item) => (
                  <li key={item.id}>
                    <button type="button" aria-pressed={selected.id === item.id} onClick={() => setSelectedId(item.id)}
                      className={`w-full flex items-center gap-2.5 text-left p-3 rounded-xl border-2 cursor-pointer ${selected.id === item.id ? 'bg-[#062985] text-white border-[#062985]' : 'bg-[#F4F6FB] border-[#062985]/15 hover:border-[#062985]'}`}>
                      <MapPin className="size-4 shrink-0" aria-hidden="true" />
                      <span className="min-w-0">
                        <span className="block text-sm font-bold break-words">{item.name}</span>
                        <span className="block text-xs">{item.type}</span>
                      </span>
                      {item.contact && <span className="ml-auto text-xs text-right">Есть контакт</span>}
                    </button>
                  </li>
                ))}
              </ul>
            )}
            <a href={territorySourceUrl} target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-1.5 mt-4 text-xs underline underline-offset-2">
              Состав территорий · Ростовстат, 1 января 2026 года
              <ExternalLink className="size-3 shrink-0" aria-hidden="true" />
            </a>
          </div>

          {selected && <MunicipalityDetails key={selected.id} item={selected} />}
        </div>
      </div>
    </section>
  );
}

function MunicipalityDetails({ item }: { item: MunicipalityItem }) {
  const [copyStatus, setCopyStatus] = useState<'ready' | 'copied' | 'error'>('ready');
  const contact = item.contact ?? regionalYouthContact;
  const contactText = [item.name, contact.name, contact.address, contact.phone, contact.email, contact.sourceUrl].filter(Boolean).join('\n');

  async function copyContact() {
    try {
      await navigator.clipboard.writeText(contactText);
      setCopyStatus('copied');
    } catch {
      setCopyStatus('error');
    }
  }

  return (
    <article className="lg:col-span-5 bg-[#062985] text-white rounded-2xl sm:rounded-3xl p-4 sm:p-7 border-2 border-[#062985] shadow-[4px_4px_0px_#C4E538] min-w-0"
      aria-labelledby="map-territory-name">
      <p className="text-xs text-[#C4E538] font-bold uppercase mb-2">{item.type}</p>
      <h3 className="font-display font-extrabold text-lg sm:text-2xl break-words mb-4" id="map-territory-name">{item.name}</h3>
      <div className="bg-white/10 border border-white/20 rounded-xl p-3.5 space-y-2 mb-5 text-sm">
        <h4 className="font-bold text-[#C4E538]">{item.contact ? 'Местный контакт' : 'Областной контакт'}</h4>
        {!item.contact && <p className="text-white/85">Местный контакт пока не подтверждён. Уточнить, к кому обратиться, можно в областном комитете.</p>}
        <p className="font-semibold">{contact.name}</p>
        {contact.address && <p>{contact.address}</p>}
        {contact.phone && <a className="block underline" href={`tel:${contact.phone.replace(/[^+\d]/g, '')}`}>{contact.phone}</a>}
        {contact.email && <a className="block underline break-all" href={`mailto:${contact.email}`}>{contact.email}</a>}
        <a href={contact.sourceUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-[#C4E538] underline">
          {contact.sourceLabel}
          <ExternalLink className="size-3 shrink-0" aria-hidden="true" />
        </a>
        <div>
          <button type="button" onClick={copyContact} className="text-xs rounded-lg px-3 py-2 border border-[#C4E538] hover:bg-[#C4E538] hover:text-[#062985] cursor-pointer">
            Скопировать контакт
          </button>
          <p role="status" className="mt-1 text-xs">
            {copyStatus === 'copied' && 'Контакт скопирован.'}
            {copyStatus === 'error' && 'Браузер не смог скопировать контакт.'}
          </p>
        </div>
      </div>
      <h4 className="flex items-center gap-2 font-bold text-sm mb-2">
        <Briefcase className="size-4" aria-hidden="true" /> Поиск вакансий
      </h4>
      <p className="text-sm text-white/85 mb-2">На портале выбери Ростовскую область и укажи нужный населённый пункт.</p>
      <a href={vacancySearchUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-sm text-[#C4E538] underline">
        Вакансии на портале «Работа России» <ExternalLink className="size-3 shrink-0" aria-hidden="true" />
      </a>
    </article>
  );
}
