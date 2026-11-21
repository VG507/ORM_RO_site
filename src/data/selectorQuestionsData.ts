import type { SelectorQuestion } from '../types';

export const selectorQuestionsData = [
  {
    id: 1,
    title: 'Что тебя больше всего вдохновляет в работе?',
    subtitle: 'Выбери ключевой источник твоей внутренней энергии',
    options: [
      {
        id: 'opt-1-projects',
        text: 'Придумывать новые проекты, писать концепции и привлекать ресурсы на их воплощение',
        label: 'проекты и гранты',
        rolesByFormat: {
          'opt-2-action': 'specialist-orm',
          'opt-2-analytics': 'grant-writer',
          'opt-2-creative': 'media-manager',
          'opt-2-leader': 'director-youth-center',
        },
        description: 'Твой фокус — проектное мышление и социальный импакт.'
      },
      {
        id: 'opt-1-community',
        text: 'Общаться с людьми, объединять волонтёров и помогать решать социальные задачи',
        label: 'работа с сообществами',
        rolesByFormat: {
          'opt-2-action': 'volunteer-coordinator',
          'opt-2-analytics': 'career-navigator',
          'opt-2-creative': 'media-manager',
          'opt-2-leader': 'volunteer-coordinator',
        },
        description: 'Твой фокус — поддержка людей, эмпатия и командное взаимодействие.'
      },
      {
        id: 'opt-1-spaces',
        text: 'Создавать уютные пространства, атмосферу драйва, организовывать события и клубы',
        label: 'молодёжные пространства',
        rolesByFormat: {
          'opt-2-action': 'space-manager',
          'opt-2-analytics': 'grant-writer',
          'opt-2-creative': 'space-manager',
          'opt-2-leader': 'director-youth-center',
        },
        description: 'Твой фокус — гостеприимство, комьюнити и креативная инфраструктура.'
      },
      {
        id: 'opt-1-media',
        text: 'Рассказывать истории через видео, фото, тексты и делать так, чтобы о нас узнали все',
        label: 'медиа и коммуникации',
        rolesByFormat: {
          'opt-2-action': 'specialist-orm',
          'opt-2-analytics': 'media-manager',
          'opt-2-creative': 'media-manager',
          'opt-2-leader': 'director-youth-center',
        },
        description: 'Твой фокус — медиа, сторителлинг и визуальный брендинг.'
      }
    ]
  },
  {
    id: 2,
    title: 'В каком рабочем формате ты чувствуешь себя увереннее всего?',
    subtitle: 'Определи свой предпочтительный стиль взаимодействия',
    options: [
      {
        id: 'opt-2-action',
        text: '«В поле»: прямое общение с ребятами, сцены, форумы, живые интерактивы',
        label: 'живое общение и события',
        description: 'Тебе подходит живая динамика и постоянный контакт с аудиторией.'
      },
      {
        id: 'opt-2-analytics',
        text: '«За экраном»: структурирование смет, аналитика, чёткие дедлайны и документы',
        label: 'аналитика и планирование',
        description: 'Системность и методичность — твоё главное конкурентное преимущество.'
      },
      {
        id: 'opt-2-creative',
        text: '«В творческом потоке»: дизайн, камера, монтаж, креативные штурмы и тренды',
        label: 'творческая работа',
        description: 'Ты умеешь упаковывать смыслы в трендовые форматы.'
      },
      {
        id: 'opt-2-leader',
        text: '«Во главе процесса»: координация людей, распределение задач и контроль результата',
        label: 'координация команды',
        description: 'В тебе заложен управленческий потенциал и готовность брать ответственность.'
      }
    ]
  },
  {
    id: 3,
    title: 'Какой у тебя текущий опыт в молодёжной сфере?',
    subtitle: 'Это поможет определить идеальную ступень карьерного маршрута',
    options: [
      {
        id: 'opt-3-beginner',
        text: 'Я только присматриваюсь: есть желание попробовать себя, но нет профильного опыта',
        stageId: 'stage-1',
        description: 'Рекомендуемая ступень: Этап 01 «Старт и инициатива».'
      },
      {
        id: 'opt-3-volunteer',
        text: 'Был волонтёром, участвовал в студенческих советах или форумах',
        stageId: 'stage-2',
        description: 'Рекомендуемая ступень: Этап 02 «Профессиональный вход».'
      },
      {
        id: 'opt-3-experienced',
        text: 'Уже реализую свои проекты, выигрывал гранты или организовывал события',
        stageId: 'stage-3',
        description: 'Рекомендуемая ступень: Этап 03 «Проектное мастерство».'
      },
      {
        id: 'opt-3-manager',
        text: 'Руковожу коллективом, пространством или направлением в организации',
        stageId: 'stage-4',
        description: 'Рекомендуемая ступень: Этап 04 «Руководство центром».'
      }
    ]
  }
] as const satisfies readonly SelectorQuestion[];
