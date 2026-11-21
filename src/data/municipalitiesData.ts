interface MunicipalityContact {
  name: string;
  address?: string;
  phone?: string;
  email?: string;
  sourceUrl: string;
  sourceLabel: string;
}

export interface MunicipalityItem {
  id: string;
  name: string;
  type: 'городской округ' | 'муниципальный район';
  mapPosition: readonly [number, number];
  contact?: MunicipalityContact;
}

export const territorySourceUrl =
  'https://61.rosstat.gov.ru/storage/mediabank/краткий_2025_Ростовская_область.pdf#page=3';

export const regionalYouthContact: MunicipalityContact = {
  name: 'Комитет по молодёжной политике Ростовской области',
  email: 'donmolodoy@donland.ru',
  sourceUrl: 'https://fadm.gov.ru/contacts/?SECTION_ID=268',
  sourceLabel: 'Справочник Росмолодёжи',
};

export const vacancySearchUrl = 'https://trudvsem.ru/vacancy/search';

const localContacts: Partial<Record<string, MunicipalityContact>> = {
  'rostov-on-don': {
    name: 'Управление по молодёжной политике города Ростова-на-Дону',
    address: 'г. Ростов-на-Дону, ул. Лермонтовская, 11',
    phone: '+7 (863) 268-78-60',
    email: 'mpol@rostov-gorod.ru',
    sourceUrl: 'https://rostov-gorod.ru/administration/structure/office/upmp/',
    sourceLabel: 'Администрация Ростова-на-Дону',
  },
  taganrog: {
    name: 'Отдел по делам молодёжи Администрации города Таганрога',
    address: 'г. Таганрог, ул. Петровская, 73, каб. 502',
    phone: '+7 (8634) 31-28-11',
    sourceUrl: 'https://tagancity.ru/vlast/administratsiya-goroda-taganroga/priem-grazhdan/',
    sourceLabel: 'Администрация Таганрога',
  },
  shakhty: {
    name: 'Отдел по молодёжной политике Администрации города Шахты',
    sourceUrl: 'https://dobro.ru/organizations/123288/about',
    sourceLabel: 'Страница отдела на Добро.рф',
  },
  volgodonsk: {
    name: 'Отдел по молодёжной политике Администрации города Волгодонска',
    sourceUrl: 'https://dobro.ru/organizations/122709/about',
    sourceLabel: 'Страница отдела на Добро.рф',
  },
};

// Положение меток схематическое. Состав территорий сверён со сборником Ростовстата на 01.01.2026.
const cities = [
  ['azov', 'Азов', 185, 580],
  ['bataysk', 'Батайск', 266, 562],
  ['volgodonsk', 'Волгодонск', 674, 440],
  ['gukovo', 'Гуково', 244, 363],
  ['donetsk', 'Донецк', 270, 286],
  ['zverevo', 'Зверево', 292, 348],
  ['kamensk-shakhtinsky', 'Каменск-Шахтинский', 313, 309],
  ['novocherkassk', 'Новочеркасск', 337, 495],
  ['novoshakhtinsk', 'Новошахтинск', 263, 419],
  ['rostov-on-don', 'Ростов-на-Дону', 244, 533],
  ['taganrog', 'Таганрог', 139, 517],
  ['shakhty', 'Шахты', 334, 435],
] as const;

const districts = [
  ['azovsky-district', 'Азовский район', 166, 628],
  ['aksaysky-district', 'Аксайский район', 296, 508],
  ['bagaevsky-district', 'Багаевский район', 383, 532],
  ['belokalitvinsky-district', 'Белокалитвинский район', 391, 338],
  ['bokovsky-district', 'Боковский район', 478, 145],
  ['verkhnedonskoy-district', 'Верхнедонской район', 351, 74],
  ['veselovsky-district', 'Весёловский район', 431, 574],
  ['volgodonskoy-district', 'Волгодонской район', 625, 475],
  ['dubovsky-district', 'Дубовский район', 751, 485],
  ['egorlyksky-district', 'Егорлыкский район', 350, 694],
  ['zavetinsky-district', 'Заветинский район', 857, 540],
  ['zernogradsky-district', 'Зерноградский район', 393, 634],
  ['zimovnikovsky-district', 'Зимовниковский район', 730, 559],
  ['kagalnitsky-district', 'Кагальницкий район', 307, 604],
  ['kamensky-district', 'Каменский район', 307, 264],
  ['kasharsky-district', 'Кашарский район', 417, 189],
  ['konstantinovsky-district', 'Константиновский район', 524, 398],
  ['krasnosulinsky-district', 'Красносулинский район', 299, 391],
  ['kuybyshevsky-district', 'Куйбышевский район', 153, 405],
  ['martynovsky-district', 'Мартыновский район', 587, 527],
  ['matveevo-kurgansky-district', 'Матвеево-Курганский район', 127, 457],
  ['millerovsky-district', 'Миллеровский район', 314, 190],
  ['milyutinsky-district', 'Милютинский район', 525, 263],
  ['morozovsky-district', 'Морозовский район', 585, 324],
  ['myasnikovsky-district', 'Мясниковский район', 216, 501],
  ['neklinovsky-district', 'Неклиновский район', 96, 492],
  ['oblivsky-district', 'Обливский район', 637, 254],
  ['oktyabrsky-district', 'Октябрьский район', 373, 453],
  ['orlovsky-district', 'Орловский район', 637, 606],
  ['peschanokopsky-district', 'Песчанокопский район', 444, 734],
  ['proletarsky-district', 'Пролетарский район', 575, 628],
  ['remontnensky-district', 'Ремонтненский район', 828, 639],
  ['rodionovo-nesvetaysky-district', 'Родионово-Несветайский район', 222, 457],
  ['salsky-district', 'Сальский район', 523, 689],
  ['semikarakorsky-district', 'Семикаракорский район', 489, 502],
  ['sovetsky-district', 'Советский район', 568, 200],
  ['tarasovsky-district', 'Тарасовский район', 355, 230],
  ['tatsinsky-district', 'Тацинский район', 480, 325],
  ['ust-donetsky-district', 'Усть-Донецкий район', 444, 414],
  ['tselinsky-district', 'Целинский район', 442, 678],
  ['tsimlyansky-district', 'Цимлянский район', 640, 380],
  ['chertkovsky-district', 'Чертковский район', 292, 127],
  ['sholokhovsky-district', 'Шолоховский район', 432, 99],
] as const;

type Territory = readonly [id: string, name: string, x: number, y: number];

function makeTerritory([id, name, x, y]: Territory, type: MunicipalityItem['type']): MunicipalityItem {
  return { id, name, type, mapPosition: [x, y], contact: localContacts[id] };
}

export const municipalitiesData = [
  ...cities.map((territory) => makeTerritory(territory, 'городской округ')),
  ...districts.map((territory) => makeTerritory(territory, 'муниципальный район')),
];
