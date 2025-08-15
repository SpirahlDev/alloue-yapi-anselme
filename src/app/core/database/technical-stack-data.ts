import { ITechnology, TechnoCategory } from "../interfaces/ITechnology";

export const TECHNICAL_STACKS: ITechnology[] = [
    {
      name: 'Angular',
      category: TechnoCategory.FRONTEND,
      icon: {
        value:
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg',
        type: 'url',
      },
      description:
        'Framework web pour créer des applications dynamiques et interactives',
    },
    {
      name: 'TypeScript',
      category: TechnoCategory.FRONTEND,
      icon: {
        value:
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
        type: 'url',
      },
      description:
        'JavaScript typé pour un développement plus sûr et maintenable',
    },
    {
      name: 'JavaScript',
      category: TechnoCategory.FRONTEND,
      icon: {
        value:
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
        type: 'url',
      },
      description: 'Langage de programmation pour interfaces web interactives',
    },
    {
      name: 'Java',
      category: TechnoCategory.BACKEND,
      icon: {
        value:
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
        type: 'url',
      },
      description:
        'Langage orienté objet pour applications robustes et scalables',
    },
    {
      name: 'Quarkus',
      category: TechnoCategory.BACKEND,
      icon: {
        value:
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/quarkus/quarkus-original.svg',
        type: 'url',
      },
      description: 'Framework Java natif pour microservices cloud-native',
    },
    {
      name: 'Laravel',
      category: TechnoCategory.BACKEND,
      icon: { value: '/icons/technologies/laravel.svg', type: 'url' },
      description: 'Framework PHP élégant pour développement web rapide',
    },
    {
      name: 'Node.js',
      category: TechnoCategory.BACKEND,
      icon: {
        value:
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
        type: 'url',
      },
      description: "Environnement d'exécution JavaScript côté serveur",
    },
    {
      name: 'Flutter',
      category: TechnoCategory.MOBILE,
      icon: {
        value:
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg',
        type: 'url',
      },
      description: 'SDK Google pour apps mobiles multiplateformes natives',
    },
    {
      name: 'Tailwind CSS',
      category: TechnoCategory.FRONTEND,
      icon: {
        value:
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
        type: 'url',
      },
      description: 'Framework CSS utilitaire pour design rapide et moderne',
    },
    {
      name: 'Git',
      category: TechnoCategory.TOOLS,
      icon: {
        value:
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
        type: 'url',
      },
      description: 'Système de contrôle de version distribué pour projets',
    },
    {
      name: 'Figma',
      category: TechnoCategory.TOOLS,
      icon: {
        value:
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
        type: 'url',
      },
      description: 'Outil de design collaboratif pour UI/UX et prototypage',
    },
    {
      name: 'GitLab CI/CD',
      category: TechnoCategory.DEVOPS,
      icon: {
        value:
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg',
        type: 'url',
      },
      description: "Pipeline d'intégration et déploiement continus",
    },
    {
      name: 'GitHub',
      category: TechnoCategory.TOOLS,
      icon: {
        value:
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
        type: 'url',
      },
      description:
        'Plateforme de développement collaboratif et hébergement Git',
    },
    {
      name: 'GitHub Actions',
      category: TechnoCategory.DEVOPS,
      icon: {
        value:
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
        type: 'url',
      },
      description: 'Automatisation CI/CD intégrée à GitHub',
    },
    {
      name: 'Docker',
      category: TechnoCategory.DEVOPS,
      icon: {
        value:
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
        type: 'url',
      },
      description:
        "Conteneurisation d'applications pour déploiements portables",
    },
    {
      name: 'Postman',
      category: TechnoCategory.TOOLS,
      icon: {
        value:
          'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg',
        type: 'url',
      },
      description: "Outil de test et documentation d'APIs REST",
    },
    {
      name: 'MySQL',
      category: TechnoCategory.BACKEND,
      icon: {
        value:
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
        type: 'url',
      },
      description: 'Base de données relationnelle open-source performante',
    },
    {
      name: 'PostgreSQL',
      category: TechnoCategory.BACKEND,
      icon: {
        value:
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
        type: 'url',
      },
      description: 'SGBD avancé avec fonctionnalités NoSQL intégrées',
    },
    {
      name: 'Android Studio',
      category: TechnoCategory.TOOLS,
      icon: {
        value:
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg',
        type: 'url',
      },
      description: "IDE officiel pour développement d'applications Android",
    },
  ];