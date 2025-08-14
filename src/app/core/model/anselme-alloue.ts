import { IProject, ProjectCategory } from "../interfaces/IProject";
import { ITechnology, TechnoCategory } from "../interfaces/ITechnology";
import { Project } from "./project";
import { Technology } from "./technology";
import { Me } from "./me";

export class AnselmeAlloue extends Me {
    constructor() {
        super();
        this.localisation = "Abidjan, Côte d'Ivoire";
        this.birthDate = new Date('2004-05-07');
        this.phone = "+225 01 02 80 49 64";
        
        // Initialisation des données après que les propriétés privées soient définies
        this.loadSkills();
        this.loadTechnologies();
        this.loadProject();
    }

    loadSkills(){
        this.skills=[
            "Développement d'application Web",
            "Développement d'application Mobile",
            "UI/UX Design",
            "Intégration et Déploiement continue (CI/CD)",
        ]
    }

    loadTechnologies(){
        const technoModel:Technology[]=[];

        this.technoRawData.forEach((techo)=>{
            technoModel.push(new Technology(techo));
        });
    
        this.technologies.push(...technoModel);
    }

    loadProject(){
        const projectList:Project[]=[];

        this.projectRawData.forEach((proj)=>{
            projectList.push(new Project(proj));
        });
    
        this.projects.push(...projectList);
    }

    private technoRawData: ITechnology[] = [
    {
        name: "Angular",
        category: TechnoCategory.FRONTEND,
        icon: {value:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg",type:"url"},
        description: "Framework web pour créer des applications dynamiques et interactives"
    },
    {
        name: "TypeScript",
        category: TechnoCategory.FRONTEND,
        icon: {value:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",type:"url"},
        description: "JavaScript typé pour un développement plus sûr et maintenable"
    },
    {
        name: "JavaScript",
        category: TechnoCategory.FRONTEND,
        icon: {value:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",type:"url"},
        description: "Langage de programmation pour interfaces web interactives"
    },
    {
        name: "Java",
        category: TechnoCategory.BACKEND,
        icon: {value:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",type:"url"},
        description: "Langage orienté objet pour applications robustes et scalables"
    },
    {
        name: "Quarkus",
        category: TechnoCategory.BACKEND,
        icon: {value:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/quarkus/quarkus-original.svg",type:"url"},
        description: "Framework Java natif pour microservices cloud-native"
    },
    {
        name: "Laravel",
        category: TechnoCategory.BACKEND,
        icon: {value:"/icons/technologies/laravel.svg",type:"url"},
        description: "Framework PHP élégant pour développement web rapide"
    },
    {
        name: "Node.js",
        category: TechnoCategory.BACKEND,
        icon: {value:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",type:"url"},
        description: "Environnement d'exécution JavaScript côté serveur"
    },
    {
        name: "Flutter",
        category: TechnoCategory.MOBILE,
        icon: {value:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",type:"url"},
        description: "SDK Google pour apps mobiles multiplateformes natives"
    },
    {
        name: "Tailwind CSS",
        category: TechnoCategory.FRONTEND,
        icon: {value:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",type:"url"},
        description: "Framework CSS utilitaire pour design rapide et moderne"
    },
    {
        name: "Git",
        category: TechnoCategory.TOOLS,
        icon: {value:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",type:"url"},
        description: "Système de contrôle de version distribué pour projets"
    },
    {
        name: "Figma",
        category: TechnoCategory.TOOLS,
        icon: {value:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",type:"url"},
        description: "Outil de design collaboratif pour UI/UX et prototypage"
    },
    {
        name: "GitLab CI/CD",
        category: TechnoCategory.DEVOPS,
        icon: {value:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg",type:"url"},
        description: "Pipeline d'intégration et déploiement continus"
    },
    {
        name: "GitHub",
        category: TechnoCategory.TOOLS,
        icon: {value:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",type:"url"},
        description: "Plateforme de développement collaboratif et hébergement Git"
    },
    {
        name: "GitHub Actions",
        category: TechnoCategory.DEVOPS,
        icon: {value:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",type:"url"},
        description: "Automatisation CI/CD intégrée à GitHub"
    },
    {
        name: "Docker",
        category: TechnoCategory.DEVOPS,
        icon: {value:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",type:"url"},
        description: "Conteneurisation d'applications pour déploiements portables"
    },
    {
        name: "Postman",
        category: TechnoCategory.TOOLS,
        icon: {value:"https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",type:"url"},
        description: "Outil de test et documentation d'APIs REST"
    },
    {
        name: "MySQL",
        category: TechnoCategory.BACKEND,
        icon: {value:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",type:"url"},
        description: "Base de données relationnelle open-source performante"
    },
    {
        name: "PostgreSQL",
        category: TechnoCategory.BACKEND,
        icon: {value:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",type:"url"},
        description: "SGBD avancé avec fonctionnalités NoSQL intégrées"
    },
    {
        name: "Android Studio",
        category: TechnoCategory.TOOLS,
        icon: {value:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg",type:"url"},
        description: "IDE officiel pour développement d'applications Android"
    }
]

private projectRawData: IProject[] = [
    {
        title: "MonBarra",
        placeholder: "Application web facilitant la mise en relation entre chercheurs d'emploi et employeurs",
        description: "MonBarra est une plateforme complète de recrutement qui permet aux chercheurs d'emploi de créer des profils détaillés et aux employeurs de publier des offres d'emploi. L'application inclut un système de matching intelligent basé sur les compétences, l'expérience et les préférences géographiques. Elle propose également la gestion des candidatures, un système de messagerie intégré et des tableaux de bord analytics pour les recruteurs.",
        category: ProjectCategory.WEB_APPLICATION,
        link: "https://github.com/anselme-alloue/monbarra",
        screenshots: [
            "/assets/projects/monbarra/screenshot1.png",
            "/assets/projects/monbarra/screenshot2.png",
            "/assets/projects/monbarra/screenshot3.png"
        ],
        tags: ["Angular", "Laravel", "MySQL", "Web Application", "Full Stack", "Matching Algorithm"]
    },
    {
        title: "API REST E-commerce",
        placeholder: "API backend robuste pour plateforme e-commerce avec gestion complète des produits et commandes",
        description: "API REST développée avec Java et Quarkus pour une plateforme e-commerce. Elle gère l'authentification JWT, la gestion des utilisateurs, le catalogue produits, le panier d'achat, et le processus de commande complet. L'API inclut également un système de paiement intégré, la gestion des stocks en temps réel, et des endpoints d'administration pour la gestion des commandes et des statistiques de vente.",
        category: ProjectCategory.API_BACKEND,
        link: "https://github.com/anselme-alloue/ecommerce-api",
        screenshots: [
            "/assets/projects/ecommerce-api/api-docs.png",
            "/assets/projects/ecommerce-api/architecture.png"
        ],
        tags: ["Java", "Quarkus", "PostgreSQL", "API Backend", "JWT", "E-commerce", "Microservices"]
    },
    {
        title: "LifeMag",
        placeholder: "Plateforme de distribution de magazines et d’actualités",
        description: "Application web Laravel + Angular permettant aux éditeurs de publier des magazines et aux lecteurs de les consulter en ligne. Gestion des comptes utilisateurs avec rôles et permissions, sécurisation des fichiers PDF et images de couverture, et back-office complet pour l'administration des publications.",
        category: ProjectCategory.WEB_APPLICATION,
        link: "",
        screenshots: [
            "/assets/projects/lifemag/screenshot1.png"
        ],
        tags: ["Laravel", "Angular", "MySQL", "Web Application", "CMS", "PDF Management"]
    },
    {
        title: "PremierScore",
        placeholder: "Application de gestion de tournois sportifs et e-sport",
        description: "Plateforme web Quarkus + Angular permettant de créer et gérer des tournois, équipes, joueurs et matchs, avec un système de classement automatisé. L'application inclut des rôles distincts pour organisateurs, arbitres, spectateurs et participants, et un module d'API temps réel pour les scores.",
        category: ProjectCategory.MANAGEMENT_SYSTEM,
        link: "",
        screenshots: [
            "/assets/projects/premierscore/screenshot1.png"
        ],
        tags: ["Quarkus", "Angular", "PostgreSQL", "Système de gestion", "Real-time", "Sports", "Tournament Management"]
    },
    {
        title: "Plateforme de vente aux enchères",
        placeholder: "Système complet d’enchères en ligne",
        description: "Plateforme d'enchères en ligne développée avec Angular et Laravel, permettant aux utilisateurs de créer et participer à des ventes aux enchères. Gestion complète des utilisateurs avec système d'authentification, mise en ligne d'articles avec photos multiples, suivi en temps réel des enchères via WebSockets et système de paiement intégré. Interface responsive avec notifications push pour les enchères en cours et historique détaillé des transactions.",
        category: ProjectCategory.ECOMMERCE,
        link: "",
        screenshots: [
            "/assets/projects/auction/screenshot1.png"
        ],
        tags: ["Angular", "Laravel", "WebSockets", "Real-time", "Payment System", "Auction", "E-commerce"]
    },
    {
        title: "REX Hotel - Gestion de réservation",
        placeholder: "Modélisation et conception d’un système de gestion d’hôtel haut de gamme",
        description: "Système de gestion hôtelière développé avec Laravel pour le REX HOTEL, établissement 4 étoiles à Yamoussoukro (82 chambres, 1 penthouse, restaurants, spa, salles de conférence). Plateforme de réservation en ligne avec calendrier de disponibilités, tarification dynamique et paiement sécurisé. Interface de gestion pour le personnel : check-in/check-out, facturation automatique, gestion des services (restauration, spa, parking) et tableau de bord avec statistiques d'occupation et revenus.",
        category: ProjectCategory.MANAGEMENT_SYSTEM,
        link: "",
        screenshots: [
            "/assets/projects/rexhotel/screenshot1.png"
        ],
        tags: ["Laravel", "MySQL", "Système de gestion", "Hotel Management", "Booking System", "Payment Integration"]
    },
    {
        title: "AbidjanActu",
        placeholder: "Site d’actualités locales et de diffusion d’informations",
        description: "Site d'actualités développé avec Laravel pour la diffusion d'informations en Côte d'Ivoire. CMS complet avec gestion des articles, catégories, commentaires et système de modération. Interface frontend responsive utilisant Bootstrap, optimisée SEO avec meta-tags dynamiques et sitemap automatique. Espace administrateur pour la gestion des contenus, publicités et statistiques de lecture avec tableau de bord analytique.",
        category: ProjectCategory.WEB_APPLICATION,
        link: "",
        screenshots: [
            "/assets/projects/abidjanactu/screenshot1.png"
        ],
        tags: ["Laravel", "Bootstrap", "MySQL", "CMS", "SEO", "News Platform", "Analytics"]
    },
    {
        title: "Plateforme de prestation de service de livraison",
        placeholder: "Application web pour la mise en relation entre clients et livreurs",
        description: "Application de livraison développée avec Angular et Laravel, mettant en relation clients et livreurs. Interface client pour passer commande avec géolocalisation, estimation des coûts et suivi en temps réel. Application livreur avec gestion des courses, navigation GPS intégrée et historique des livraisons. Backend Laravel gérant l'attribution automatique des courses, calcul des tarifs, paiements en ligne et notifications push pour les mises à jour de statut.",
        category: ProjectCategory.WEB_APPLICATION,
        link: "",
        screenshots: [
            "/assets/projects/livraison/screenshot1.png"
        ],
        tags: ["Angular", "Laravel", "Geolocation", "GPS", "Real-time Tracking", "Delivery Service", "Push Notifications"]
    },
    {
        title: "Plateforme de transfert sécurisé de fichiers interentreprises",
        placeholder: "Application web de transfert de fichiers sensibles avec chiffrement PGP et envoi SFTP",
        description: "Application web sécurisée permettant le transfert de fichiers sensibles avec chiffrement PGP de bout en bout et envoi automatisé vers un serveur SFTP. Chaque utilisateur dispose d'une clé PGP unique pour garantir la confidentialité et l'intégrité des données. L'interface intuitive développée en Angular permet l'upload, la gestion des clés, le chiffrement côté client avec OpenPGP.js et la traçabilité complète des transferts. Backend Node.js avec Express gérant l'authentification, la gestion des clés et l'interfaçage SFTP. Conforme aux exigences RGPD avec logs détaillés pour l'audit et surveillance des transferts.",
        category: ProjectCategory.WEB_APPLICATION,
        link: "",
        screenshots: [
            "/assets/projects/filetransfer/screenshot1.png"
        ],
        tags: ["Angular", "Node.js", "Express", "OpenPGP.js", "SFTP", "Security", "RGPD", "Enterprise"]
    },
    {
        title: "Application d’authentification et de validation de signatures électroniques",
        placeholder: "Vérification automatisée des signatures électroniques sur documents uploadés",
        description: "Application web développée avec Angular et Quarkus pour le compte de Cryptoneo, autorité de certification. Elle permet aux utilisateurs de vérifier si une signature électronique est valide sur les documents qu'ils uploadent. Le projet inclut un mécanisme temps réel basé sur SSE (Server-Sent Events) pour informer l’utilisateur de l’avancement de l’analyse. L’application assure sécurité, traçabilité et conformité aux standards de signatures électroniques.",
        category: ProjectCategory.WEB_APPLICATION,
        link: "",
        screenshots: [
            "/assets/projects/signature-validation/screenshot1.png"
        ],
        tags: ["Angular", "Quarkus", "Digital Signature", "Security", "Real-time", "Cryptoneo", "SSE"]
    }
];

}