export interface OrganizationInfo {
  id: string;
  name: string;
  type: string;
  address: string;
  phone: string;
  email: string;
  vkUrl?: string;
  website?: string;
}

export interface VacancyInfo {
  id: string;
  title: string;
  employmentType: string;
  salaryText: string;
  organizationName: string;
}

export interface MunicipalityItem {
  id: string;
  name: string;
  type: 'городской округ' | 'муниципальный район';
  center: [number, number]; // [lat, lng]
  svgCoords: { x: number; y: number }; // Relative coordinates for interactive SVG map
  organizations: OrganizationInfo[];
  vacancies: VacancyInfo[];
  storiesCount: number;
  highlightedProject: string;
}

export const municipalitiesData: MunicipalityItem[] = [
  {
    id: 'rostov-on-don',
    name: 'Ростов-на-Дону',
    type: 'городской округ',
    center: [47.22, 39.71],
    svgCoords: { x: 420, y: 550 },
    organizations: [
      {
        id: 'org-rnd-1',
        name: 'Отдел по делам молодёжи Администрации г. Ростова-на-Дону',
        type: 'Орган местного самоуправления',
        address: 'г. Ростов-на-Дону, ул. Большая Садовая, 47',
        phone: '+7 (863) 240-49-74',
        email: 'odm-rostov@yandex.ru',
        vkUrl: 'https://vk.com/odm_rostov'
      },
      {
        id: 'org-rnd-2',
        name: 'Городской молодёжный центр Ростова-на-Дону',
        type: 'Муниципальное учреждение',
        address: 'г. Ростов-на-Дону, пер. Газетный, 47б',
        phone: '+7 (863) 285-05-15',
        email: 'gmc-rostov@mail.ru',
        vkUrl: 'https://vk.com/gmc_rostov'
      }
    ],
    vacancies: [
      {
        id: 'vac-rnd-1',
        title: 'Ведущий специалист проектного офиса',
        employmentType: 'Полная занятость',
        salaryText: '55 000 — 70 000 ₽',
        organizationName: 'Городской молодёжный центр'
      },
      {
        id: 'vac-rnd-2',
        title: 'Координатор волонтёрского штаба #МЫВМЕСТЕ',
        employmentType: 'Полная занятость',
        salaryText: '45 000 — 58 000 ₽',
        organizationName: 'Отдел по делам молодёжи'
      }
    ],
    storiesCount: 4,
    highlightedProject: 'Проектный акселератор «Донской импульс»'
  },
  {
    id: 'taganrog',
    name: 'Таганрог',
    type: 'городской округ',
    center: [47.23, 38.90],
    svgCoords: { x: 260, y: 560 },
    organizations: [
      {
        id: 'org-tag-1',
        name: 'Отдел по делам молодёжи Администрации г. Таганрога',
        type: 'Орган управления',
        address: 'г. Таганрог, ул. Петровская, 73',
        phone: '+7 (8634) 31-28-25',
        email: 'taganrog-odm@mail.ru',
        vkUrl: 'https://vk.com/molod_taganrog'
      },
      {
        id: 'org-tag-2',
        name: 'Молодёжное открытое пространство «Точка Дона»',
        type: 'Молодёжный коворкинг',
        address: 'г. Таганрог, пер. Тургеневский, 12',
        phone: '+7 (8634) 61-45-12',
        email: 'tochka.taganrog@yandex.ru'
      }
    ],
    vacancies: [
      {
        id: 'vac-tag-1',
        title: 'Менеджер открытого молодёжного пространства',
        employmentType: 'Полная занятость',
        salaryText: '45 000 — 60 000 ₽',
        organizationName: 'Пространство «Точка Дона»'
      }
    ],
    storiesCount: 2,
    highlightedProject: 'IT-лаборатория для подростков «Код Юга»'
  },
  {
    id: 'shakhty',
    name: 'Шахты',
    type: 'городской округ',
    center: [47.70, 40.21],
    svgCoords: { x: 520, y: 440 },
    organizations: [
      {
        id: 'org-shk-1',
        name: 'Муниципальный центр развития молодёжи г. Шахты',
        type: 'Молодёжный центр',
        address: 'г. Шахты, ул. Советская, 187/2',
        phone: '+7 (8636) 22-03-35',
        email: 'shakhty_molod@mail.ru',
        vkUrl: 'https://vk.com/molodshakhty'
      }
    ],
    vacancies: [
      {
        id: 'vac-shk-1',
        title: 'Специалист по работе с молодёжью',
        employmentType: 'Полная занятость',
        salaryText: '40 000 — 52 000 ₽',
        organizationName: 'Центр развития молодёжи'
      }
    ],
    storiesCount: 2,
    highlightedProject: 'Реновация муниципального молодёжного коворкинга'
  },
  {
    id: 'novocherkassk',
    name: 'Новочеркасск',
    type: 'городской округ',
    center: [47.42, 40.09],
    svgCoords: { x: 490, y: 510 },
    organizations: [
      {
        id: 'org-nvch-1',
        name: 'Отдел по работе с молодёжью г. Новочеркасска',
        type: 'Орган управления',
        address: 'г. Новочеркасск, ул. Дворцовая, 8',
        phone: '+7 (8635) 25-99-42',
        email: 'novoch_odm@yandex.ru'
      }
    ],
    vacancies: [
      {
        id: 'vac-nvch-1',
        title: 'Координатор студенческих медиацентров',
        employmentType: 'Полная занятость',
        salaryText: '42 000 — 55 000 ₽',
        organizationName: 'Отдел по работе с молодёжью'
      }
    ],
    storiesCount: 1,
    highlightedProject: 'Казачий молодёжный слёт «Ермак»'
  },
  {
    id: 'volgodonsk',
    name: 'Волгодонск',
    type: 'городской округ',
    center: [47.51, 42.15],
    svgCoords: { x: 780, y: 470 },
    organizations: [
      {
        id: 'org-vgd-1',
        name: 'Отдел по молодёжной политике Администрации г. Волгодонска',
        type: 'Орган управления',
        address: 'г. Волгодонск, ул. Ленина, 1/2',
        phone: '+7 (8639) 22-25-30',
        email: 'volgodonsk_omp@mail.ru'
      }
    ],
    vacancies: [
      {
        id: 'vac-vgd-1',
        title: 'Специалист по молодёжному предпринимательству',
        employmentType: 'Полная занятость',
        salaryText: '45 000 — 58 000 ₽',
        organizationName: 'Отдел по молодёжной политике'
      }
    ],
    storiesCount: 1,
    highlightedProject: 'Фестиваль атомной молодёжи «Энергия будущего»'
  },
  {
    id: 'azov',
    name: 'Азов',
    type: 'городской округ',
    center: [47.11, 39.42],
    svgCoords: { x: 380, y: 580 },
    organizations: [
      {
        id: 'org-azv-1',
        name: 'Центр молодёжных программ г. Азова',
        type: 'Молодёжный центр',
        address: 'г. Азов, ул. Мира, 24',
        phone: '+7 (86342) 4-12-65',
        email: 'azov_molod@mail.ru'
      }
    ],
    vacancies: [
      {
        id: 'vac-azv-1',
        title: 'Куратор волонтёрского штаба',
        employmentType: 'Полная занятость',
        salaryText: '38 000 — 50 000 ₽',
        organizationName: 'Центр молодёжных программ'
      }
    ],
    storiesCount: 1,
    highlightedProject: 'Историко-патриотический квест «Осада Азова»'
  },
  {
    id: 'bataysk',
    name: 'Батайск',
    type: 'городской округ',
    center: [47.13, 39.75],
    svgCoords: { x: 440, y: 575 },
    organizations: [
      {
        id: 'org-bat-1',
        name: 'Центр молодёжных инициатив г. Батайска',
        type: 'Молодёжный центр',
        address: 'г. Батайск, пл. Ленина, 3',
        phone: '+7 (86354) 5-60-14',
        email: 'bataysk_cmi@mail.ru'
      }
    ],
    vacancies: [
      {
        id: 'vac-bat-1',
        title: 'Специалист по работе с молодёжью',
        employmentType: 'Полная занятость',
        salaryText: '40 000 — 52 000 ₽',
        organizationName: 'Центр молодёжных инициатив'
      }
    ],
    storiesCount: 1,
    highlightedProject: 'Клуб молодых семей «Вместе»'
  },
  {
    id: 'kamensk-shakhtinsky',
    name: 'Каменск-Шахтинский',
    type: 'городской округ',
    center: [48.32, 40.26],
    svgCoords: { x: 530, y: 310 },
    organizations: [
      {
        id: 'org-kms-1',
        name: 'Отдел по делам молодёжи г. Каменска-Шахтинского',
        type: 'Орган управления',
        address: 'г. Каменск-Шахтинский, ул. Ленина, 74',
        phone: '+7 (86365) 7-15-40',
        email: 'kamensk_odm@mail.ru'
      }
    ],
    vacancies: [
      {
        id: 'vac-kms-1',
        title: 'Специалист по патриотическому воспитанию',
        employmentType: 'Полная занятость',
        salaryText: '38 000 — 48 000 ₽',
        organizationName: 'Отдел по делам молодёжи'
      }
    ],
    storiesCount: 1,
    highlightedProject: 'Экспедиция «Северский Донец: Память поколений»'
  },
  {
    id: 'aksaysky-district',
    name: 'Аксайский район',
    type: 'муниципальный район',
    center: [47.26, 39.87],
    svgCoords: { x: 450, y: 540 },
    organizations: [
      {
        id: 'org-aks-1',
        name: 'Центр молодёжного движения Аксайского района',
        type: 'Районный центр',
        address: 'г. Аксай, ул. Гулаева, 105',
        phone: '+7 (86350) 5-32-17',
        email: 'aksay_molodezh@mail.ru'
      }
    ],
    vacancies: [
      {
        id: 'vac-aks-1',
        title: 'Координатор районных добровольческих клубов',
        employmentType: 'Полная занятость',
        salaryText: '40 000 — 54 000 ₽',
        organizationName: 'Центр молодёжного движения'
      }
    ],
    storiesCount: 1,
    highlightedProject: 'Сельский проектный интенсив «Инициатива на селе»'
  },
  {
    id: 'salsky-district',
    name: 'Сальский район',
    type: 'муниципальный район',
    center: [46.48, 41.53],
    svgCoords: { x: 710, y: 690 },
    organizations: [
      {
        id: 'org-sal-1',
        name: 'Отдел по делам молодёжи Сальского района',
        type: 'Районный отдел',
        address: 'г. Сальск, ул. Ленина, 22',
        phone: '+7 (86372) 5-12-88',
        email: 'salsk_odm@mail.ru'
      }
    ],
    vacancies: [],
    storiesCount: 1,
    highlightedProject: 'Степной экологический десант'
  },
  {
    id: 'millerovsky-district',
    name: 'Миллеровский район',
    type: 'муниципальный район',
    center: [48.92, 40.40],
    svgCoords: { x: 550, y: 190 },
    organizations: [
      {
        id: 'org-mil-1',
        name: 'Молодёжный совет Миллеровского района',
        type: 'Общественный совет при главе',
        address: 'г. Миллерово, ул. Ленина, 6',
        phone: '+7 (86385) 2-14-30',
        email: 'millerovo_ms@yandex.ru'
      }
    ],
    vacancies: [
      {
        id: 'vac-mil-1',
        title: 'Специалист по работе с молодёжью',
        employmentType: 'Полная занятость',
        salaryText: '37 000 — 48 000 ₽',
        organizationName: 'Районный молодёжный центр'
      }
    ],
    storiesCount: 1,
    highlightedProject: 'Школа юного агропредпринимателя'
  }
];
