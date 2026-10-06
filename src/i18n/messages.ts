export const locales = ['ru', 'en'] as const;

export type Locale = (typeof locales)[number];

export const messages = {
  ru: {
    meta: {
      title: 'Юрий Шустов — веб-разработчик',
      description: 'Портфолио frontend и fullstack-разработчика Юрия Шустова',
    },
    brand: {
      mark: 'ЮШ',
      name: 'ЮРИЙ ШУСТОВ',
      role: 'WEB DEVELOPER',
    },
    nav: { work: 'ПРОЕКТЫ', about: 'ОБО МНЕ', contact: 'КОНТАКТЫ' },
    hero: {
      eyebrow: '// ПРИВЕТ, Я',
      title: 'ЮРИЙ\nШУСТОВ',
      role: 'FRONTEND  /  FULLSTACK DEVELOPER',
      description: 'Создаю современные веб-приложения\nс вниманием к деталям, производительности\nи реальному пользовательскому опыту.',
      workAction: 'СМОТРЕТЬ ПРОЕКТЫ',
      aboutAction: 'БОЛЬШЕ ОБО МНЕ',
      experience: '5+', experienceLabel: 'ЛЕТ ОПЫТА',
      cases: '6', casesLabel: 'КЕЙСОВ',
      skills: ['WEB APPS', 'UI/UX', 'AUTOMATION'],
      availability: 'ДОСТУПЕН ДЛЯ ПРОЕКТОВ',
      location: 'Базируюсь в Красноярске',
      scroll: 'SCROLL',
    },
    projects: {
      eyebrow: '/  01   ИЗБРАННЫЕ ПРОЕКТЫ', all: 'СМОТРЕТЬ ВСЕ',
      items: [
        { title: 'СтройРемонт24', description: 'Интернет-магазин\nстроительных материалов', variant: 'store' },
        { title: 'Внутренние\nинструменты', description: 'Автоматизация,\nинтеграции, учёт', variant: 'dashboard' },
        { title: 'Веб-приложения', description: 'Сервисы и продукты', variant: 'app' },
      ],
    },
    theme: 'Переключить тему', language: 'Переключить язык',
  },
  en: {
    meta: {
      title: 'Yuriy Shustov — web developer',
      description: 'Portfolio of frontend and fullstack developer Yuriy Shustov',
    },
    brand: { mark: 'YS', name: 'YURIY SHUSTOV', role: 'WEB DEVELOPER' },
    nav: { work: 'WORK', about: 'ABOUT', contact: 'CONTACT' },
    hero: {
      eyebrow: '// HELLO, I AM',
      title: 'YURIY\nSHUSTOV',
      role: 'FRONTEND  /  FULLSTACK DEVELOPER',
      description: 'I build modern web applications with care\nfor details, performance, and real user experience.',
      workAction: 'VIEW PROJECTS', aboutAction: 'MORE ABOUT ME',
      experience: '5+', experienceLabel: 'YEARS OF EXPERIENCE',
      cases: '6', casesLabel: 'CASES',
      skills: ['WEB APPS', 'UI/UX', 'AUTOMATION'],
      availability: 'AVAILABLE FOR PROJECTS', location: 'Based in Krasnoyarsk', scroll: 'SCROLL',
    },
    projects: {
      eyebrow: '/  01   SELECTED PROJECTS', all: 'VIEW ALL',
      items: [
        { title: 'StroyRemont24', description: 'Online store for\nbuilding materials', variant: 'store' },
        { title: 'Internal\ntools', description: 'Automation,\nintegrations, reporting', variant: 'dashboard' },
        { title: 'Web applications', description: 'Services and products', variant: 'app' },
      ],
    },
    theme: 'Switch theme', language: 'Switch language',
  },
} as const;
