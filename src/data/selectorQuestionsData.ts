import type { SelectorQuestion } from '../types';

export const selectorQuestionsData: SelectorQuestion[] = [
  {
    id: 1,
    title: 'Что тебя больше всего вдохновляет в работе?',
    subtitle: 'Выбери ключевой источник твоей внутренней энергии',
    options: [
      {
        id: 'opt-1-projects',
        text: 'Придумывать новые проекты, писать концепции и привлекать ресурсы на их воплощение',
        directionTag: 'projects-grants',
        recommendedRoleId: 'grant-writer',
        description: 'Твой фокус — проектное мышление и социальный импакт.'
      },
      {
        id: 'opt-1-community',
        text: 'Общаться с людьми, объединять волонтёров и помогать решать социальные задачи',
        directionTag: 'volunteering',
        recommendedRoleId: 'volunteer-coordinator',
        description: 'Твой фокус — поддержка людей, эмпатия и командное взаимодействие.'
      },
      {
        id: 'opt-1-spaces',
        text: 'Создавать уютные пространства, атмосферу драйва, организовывать события и клубы',
        directionTag: 'spaces-infrastructure',
        recommendedRoleId: 'space-manager',
        description: 'Твой фокус — гостеприимство, комьюнити и креативная инфраструктура.'
      },
      {
        id: 'opt-1-media',
        text: 'Рассказывать истории через видео, фото, тексты и делать так, чтобы о нас узнали все',
        directionTag: 'media-communications',
        recommendedRoleId: 'media-manager',
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
        directionTag: 'community',
        recommendedRoleId: 'specialist-orm',
        description: 'Тебе подходит живая динамика и постоянный контакт с аудиторией.'
      },
      {
        id: 'opt-2-analytics',
        text: '«За экраном»: структурирование смет, аналитика, чёткие дедлайны и документы',
        directionTag: 'projects-grants',
        recommendedRoleId: 'grant-writer',
        description: 'Системность и методичность — твоё главное конкурентное преимущество.'
      },
      {
        id: 'opt-2-creative',
        text: '«В творческом потоке»: дизайн, камера, монтаж, креативные штурмы и тренды',
        directionTag: 'media-communications',
        recommendedRoleId: 'media-manager',
        description: 'Ты умеешь упаковывать смыслы в трендовые форматы.'
      },
      {
        id: 'opt-2-leader',
        text: '«Во главе процесса»: координация людей, распределение задач и контроль результата',
        directionTag: 'management',
        recommendedRoleId: 'director-youth-center',
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
        directionTag: 'stage-1',
        recommendedRoleId: 'volunteer-coordinator',
        description: 'Рекомендуемая ступень: Этап 01 «Старт и инициатива».'
      },
      {
        id: 'opt-3-volunteer',
        text: 'Был волонтёром, участвовал в студенческих советах или форумах',
        directionTag: 'stage-2',
        recommendedRoleId: 'specialist-orm',
        description: 'Рекомендуемая ступень: Этап 02 «Профессиональный вход».'
      },
      {
        id: 'opt-3-experienced',
        text: 'Уже реализую свои проекты, выигрывал гранты или организовывал события',
        directionTag: 'stage-3',
        recommendedRoleId: 'grant-writer',
        description: 'Рекомендуемая ступень: Этап 03 «Проектное мастерство».'
      },
      {
        id: 'opt-3-manager',
        text: 'Руковожу коллективом, пространством или направлением в организации',
        directionTag: 'stage-4',
        recommendedRoleId: 'director-youth-center',
        description: 'Рекомендуемая ступень: Этап 04 «Руководство центром».'
      }
    ]
  }
];
