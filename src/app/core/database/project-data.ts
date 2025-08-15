import { IProject, ProjectCategory } from "../interfaces/IProject";

export const PROJECTS_DATA: IProject[] = [
  {
    title: 'MonBarra',
    placeholder: "Application web facilitant la mise en relation entre chercheurs d'emploi et employeurs",
    description: 
      `MonBarra est une plateforme de recrutement que j’ai développée en tant que responsable du frontend, pour le compte d’un client. 
       L’application permet aux chercheurs d’emploi de créer des profils détaillés et aux employeurs de publier leurs offres. 
       Un moteur de recherche intelligent filtre les résultats selon les compétences, l’expérience et la localisation. 
       Les utilisateurs bénéficient d’un système de messagerie intégré et les recruteurs disposent de tableaux de bord analytics. 
       Développée avec Angular pour le frontend et Laravel/MySQL côté serveur, la solution offre une expérience fluide et performante.`,
    category: ProjectCategory.WEB_APPLICATION,
    start_date: new Date('2023-09-01'),
    end_date: new Date('2024-01-15'),
    link: 'https://github.com/anselme-alloue/monbarra',
    screenshots: [
      '/assets/projects/monbarra/screen-1.png',
      '/assets/projects/monbarra/screen-2.png',
      '/assets/projects/monbarra/screen-3.png',
    ],
    tags: ['Angular', 'Laravel', 'MySQL', 'Full Stack', 'Matching Algorithm'],
  },
  {
    title: 'Lalexandra',
    placeholder: 'Boutique en ligne de cosmétiques avec gestion complète des ventes et produits',
    description: 
      `Dans le cadre d’un projet d’étude, j’ai conçu et développé Lalexandra, une boutique e-commerce spécialisée dans la vente de cosmétiques. 
       Les clientes peuvent parcourir le catalogue, créer un compte, remplir leur panier et régler leurs achats via CinetPay. 
       Un back-office complet permet la gestion des produits, des stocks et des commandes. 
       Réalisé avec Java Servlet, JSP et MySQL, ce projet m’a permis de travailler sur l’intégration d’un paiement en ligne et la structuration d’un site marchand.`,
    category: ProjectCategory.ECOMMERCE,
    start_date: new Date('2024-02-01'),
    end_date: new Date('2024-06-30'),
    link: 'https://github.com/anselme-alloue/lalexandra',
    screenshots: [
      '/assets/projects/lalexandra/screen-1.png',
      '/assets/projects/lalexandra/screen-2.png',
    ],
    tags: ['Java Servlet', 'Tomcat', 'JSP', 'MySQL', 'E-commerce', 'JWT'],
  },
  {
    title: 'Lifemag',
    placeholder: 'Plateforme de distribution de magazines et d’actualités',
    description: 
      `Développée pour le groupe Meduim X - Voodoo Group, Lifemag est une plateforme web permettant aux éditeurs de publier des magazines et aux lecteurs de les consulter en ligne. 
       L’outil intègre un système de gestion des rôles, la sécurisation des PDF et images de couverture, ainsi qu’un back-office complet pour la gestion des publications. 
       Réalisé avec Laravel et Angular, ce projet a renforcé mon expertise en gestion de contenus numériques et en sécurité de documents.`,
    category: ProjectCategory.WEB_APPLICATION,
    start_date: new Date('2023-06-01'),
    end_date: new Date('2023-08-31'),
    link: 'https://lifemag.ci',
    screenshots: [
      '/assets/projects/lifemag/lifemag-screen-1.png',
      '/assets/projects/lifemag/lifemag-screen-2.png',
    ],
    tags: ['Laravel', 'Angular', 'MySQL', 'CMS', 'PDF Management'],
  },
  {
    title: 'KelenFila - Plateforme de vente aux enchères',
    placeholder: 'Système complet d’enchères en ligne',
    description:
      `KelenFila est une plateforme d’enchères en ligne permettant aux utilisateurs de mettre en vente ou d’acheter des articles via un système de mises en temps réel. 
       Développée avec Angular et Laravel, elle intègre la gestion des utilisateurs, la mise en ligne d’articles avec photos multiples, 
       le suivi en direct des enchères via WebSockets, et un système de paiement intégré. 
       Ce projet m’a permis de combiner développement frontend, backend et gestion en temps réel pour offrir une expérience interactive fluide.`,
    category: ProjectCategory.ECOMMERCE,
    start_date: new Date('2023-03-01'),
    end_date: new Date('2023-05-31'),
    link: '',
    screenshots: [
      '/assets/projects/kelen-fila/screen-1.png',
      '/assets/projects/kelen-fila/screen-2.png'
    ],
    tags: ['HTML/CSS', 'PHP', 'WebSockets', 'Real-time', 'Payment System', 'Auction', 'E-commerce', 'JavaScript'],
  },
  {
    title: 'REX Hotel - Gestion de réservation',
    placeholder: 'Modélisation et conception d’un système de gestion hôtelière haut de gamme',
    description:
      `Développé pour le REX HOTEL, établissement 4 étoiles à Yamoussoukro, ce système permet la réservation en ligne avec calendrier de disponibilités, tarification dynamique et paiement sécurisé. 
       Côté personnel, un tableau de bord centralise les opérations : check-in/check-out, facturation automatique, gestion des services (spa, restauration, parking). 
       Conçu avec Laravel et MySQL, il optimise la gestion et l’expérience client dans un contexte haut de gamme.`,
    category: ProjectCategory.WEB_APPLICATION,
    start_date: new Date('2022-10-01'),
    end_date: new Date('2023-02-28'),
    link: '',
    screenshots: ['/assets/projects/rexhotel/screen-1.png'],
    tags: ['Laravel', 'MySQL', 'Backend API', 'Booking System', 'Hotel Management', 'Payment Integration'],
  },
  {
    title: 'AbidjanActu',
    placeholder: 'Site d’actualités locales et de diffusion d’informations',
    description:
      `AbidjanActu est un site d’actualités développé pour la diffusion d’informations en Côte d’Ivoire. 
       Construit avec Laravel et Tailwind CSS, il intègre un CMS complet pour la gestion des articles, catégories et commentaires, avec modération et optimisation SEO. 
       Un espace administrateur permet également de gérer les publicités et d’analyser les performances grâce à un tableau de bord analytique.`,
    category: ProjectCategory.WEB_APPLICATION,
    start_date: new Date('2022-06-01'),
    end_date: new Date('2022-09-30'),
    link: 'https://www.abidjanactu.ci',
    screenshots: [
      '/assets/projects/abidjan-actu/screen-1.png',
      '/assets/projects/abidjan-actu/screen-2.png'
    ],
    tags: ['Laravel', 'Tailwind CSS', 'MySQL', 'CMS', 'SEO', 'News Platform', 'Analytics'],
  },
  {
    title: 'Plateforme de prestation de service de livraison',
    placeholder: 'Application web pour la mise en relation entre clients et livreurs',
    description:
      `Projet client que j’ai conçu et développé de bout en bout. 
       Cette plateforme connecte des particuliers ou commerçants souhaitant envoyer des colis avec des livreurs disponibles. 
       Côté client, l’interface permet de créer une demande, calculer le coût, suivre la livraison en temps réel et effectuer le paiement. 
       Côté livreur, une application mobile web gère les courses, propose un suivi GPS et conserve l’historique des livraisons. 
       Développée avec Angular et Laravel, cette solution inclut des notifications push et un système de gestion automatisée des courses.`,
    category: ProjectCategory.WEB_APPLICATION,
    start_date: new Date('2023-01-15'),
    end_date: new Date('2023-04-30'),
    link: '',
    screenshots: ['/assets/projects/lavirgul/screen-2.png'],
    tags: ['Angular', 'Laravel', 'Geolocation', 'GPS', 'Real-time Tracking', 'Delivery Service', 'Push Notifications'],
  },
  {
    title: 'Plateforme de transfert sécurisé de fichiers interentreprises',
    placeholder: 'Transfert de fichiers sensibles avec chiffrement PGP et envoi SFTP',
    description:
      `Cette application web sécurisée permet à des entreprises d’échanger des fichiers sensibles avec chiffrement PGP de bout en bout et transfert automatisé vers un serveur SFTP. 
       Chaque utilisateur possède sa clé PGP unique, gérée directement dans l’interface Angular, et le chiffrement est réalisé côté client via OpenPGP.js. 
       Le backend, en Node.js avec Express, gère l’authentification, l’administration des clés et les transferts SFTP, tout en respectant le RGPD. 
       J’ai travaillé sur la conception de l’interface et la mise en place des mécanismes de sécurité et de traçabilité.`,
    category: ProjectCategory.WEB_APPLICATION,
    start_date: new Date('2025-04-01'),
    end_date: new Date('2025-06-31'),
    link: '',
    screenshots: [
      '/assets/projects/file-transfer/screen-1.png',
      '/assets/projects/file-transfer/screen-2.png'
    ],
    tags: ['OpenPGP.js', 'Node.js', 'Express', 'Angular', 'SFTP', 'Web Worker', 'SSH'],
  },
  {
    title: 'Plateforme d’authentification de signatures électroniques',
    placeholder: 'Vérification automatisée des signatures électroniques sur documents uploadés',
    description:
      `Développée pour Cryptoneo, autorité de certification, cette plateforme permet aux utilisateurs de vérifier la validité de signatures électroniques présentes dans des documents téléchargés. 
       Basée sur Angular pour le frontend et Quarkus pour le backend, elle utilise un mécanisme en temps réel (SSE) pour informer l’utilisateur de l’état de l’analyse. 
       Le projet assure conformité avec les standards de signatures électroniques, tout en garantissant sécurité et traçabilité des opérations.`,
    category: ProjectCategory.WEB_APPLICATION,
    start_date: new Date('2021-09-01'),
    end_date: new Date('2021-12-31'),
    link: 'https://digidoc-auth.cryptoneoplatforms.com',
    screenshots: [
      '/assets/projects/digidoc/screen-2.png',
      '/assets/projects/digidoc/screen-1.png'
    ],
    tags: ['Angular', 'Quarkus', 'Digital Signature', 'Security', 'Real-time', 'Cryptoneo', 'SSE'],
  },
  {
    title: 'Solution web de gestion de contrats signés électroniquement',
    placeholder: 'Consultation et gestion en ligne des contrats d’abonnés',
    description:
      `Conçue pour Cryptoneo, cette solution permet aux abonnés d’un opérateur télécom d’accéder à leurs contrats signés électroniquement. 
       L’interface, développée en Angular, offre une navigation simple et sécurisée, tandis que le backend Quarkus gère l’authentification, la récupération et la validation des documents. 
       Ce projet a permis d’améliorer la transparence et l’accessibilité des informations contractuelles pour des milliers d’abonnés.`,
    category: ProjectCategory.WEB_APPLICATION,
    start_date: new Date('2021-01-01'), // À ajuster selon ton CV
    end_date: new Date('2021-04-30'),
    link: '',
    screenshots: [],
    tags: ['Angular', 'Quarkus', 'Electronic Contract', 'Security', 'Cryptoneo'],
  },
  {
  title: '1erscore',
  placeholder: 'Plateforme en cours de développement',
  description:
    `Premierscore est un projet personnel d’envergure sur lequel je travaille activement. 
     C’est une initiative qui me tient particulièrement à cœur, car elle reflète à la fois mes valeurs, ma vision et mon approche technique. 
     Bien qu’encore en cours de développement, ce projet bénéficie d’une architecture soignée et d’un design pensé pour durer, 
     avec pour objectif de proposer une expérience à forte valeur ajoutée dès son lancement.`,
  category: ProjectCategory.WEB_APPLICATION,
  start_date: new Date('2025-01-01'), // à ajuster selon le vrai début
  link: '',
  screenshots: [
    '/assets/projects/1erscore/1erscore.png',
  ],
  tags: ['Quarkus', 'Node.Js','Flutter','Angular','Webscoket','Microservice'],
},

];