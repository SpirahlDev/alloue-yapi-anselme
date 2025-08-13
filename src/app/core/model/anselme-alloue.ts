import { IProject } from "../interfaces/IProject";
import { ITechnology, TechnoCategory } from "../interfaces/ITechnology";
import { Project } from "./project";
import { Technology } from "./technology";
import { Me } from "./me";

export class AnselmeAlloue extends Me {
    constructor() {
        super();
        this.localisation = "Abidjan, Côte d'Ivoire";
        this.birthDate = new Date('2004-05-07');
        
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
        description: "Application web Laravel + Angular permettant aux éditeurs de publier des magazines et aux lecteurs de les consulter en ligne. Gestion des comptes utilisateurs avec rôles et permissions, sécurisation des fichiers PDF et images de couverture, et back-office complet pour l’administration des publications.",
        link: "",
        screenshots: [
            "/assets/projects/lifemag/screenshot1.png"
        ],
        tags: ["Laravel", "Angular", "MySQL", "Web Application", "CMS", "PDF Management"]
    },
    {
        title: "PremierScore",
        placeholder: "Application de gestion de tournois sportifs et e-sport",
        description: "Plateforme web Quarkus + Angular permettant de créer et gérer des tournois, équipes, joueurs et matchs, avec un système de classement automatisé. L’application inclut des rôles distincts pour organisateurs, arbitres, spectateurs et participants, et un module d’API temps réel pour les scores.",
        link: "",
        screenshots: [
            "/assets/projects/premierscore/screenshot1.png"
        ],
        tags: ["Quarkus", "Angular", "PostgreSQL", "Système de gestion", "Real-time", "Sports", "Tournament Management"]
    },
    {
        title: "Plateforme de vente aux enchères",
        placeholder: "Système complet d’enchères en ligne",
        description: "Application web permettant de créer et participer à des ventes aux enchères en ligne, avec gestion des utilisateurs, mise en ligne d’articles, suivi en temps réel des enchères et système de paiement sécurisé.",
        link: "",
        screenshots: [
            "/assets/projects/auction/screenshot1.png"
        ],
        tags: ["Web Application", "Real-time", "Payment System", "Auction", "E-commerce", "Angular"]
    },
    {
        title: "REX Hotel - Gestion de réservation",
        placeholder: "Modélisation et conception d’un système de gestion d’hôtel haut de gamme",
        description: "Modélisation complète du REX HOTEL, un hôtel 4 étoiles à Yamoussoukro avec 82 chambres, 1 penthouse, plusieurs restaurants, bars, terrasses, salles de conférence, piscine, spa et parking. Le système inclut la réservation en ligne, la gestion des disponibilités, la facturation et le suivi des services annexes.",
        link: "",
        screenshots: [
            "/assets/projects/rexhotel/screenshot1.png"
        ],
        tags: ["Système de gestion", "Hotel Management", "Booking System", "Database Design", "UML Modeling"]
    },
    {
        title: "AbidjanActu",
        placeholder: "Site d’actualités locales et de diffusion d’informations",
        description: "Plateforme web moderne pour la diffusion d’actualités en Côte d’Ivoire, avec gestion des articles, des catégories, de la publicité et optimisation pour le référencement SEO. Interface responsive adaptée aux lecteurs mobiles.",
        link: "",
        screenshots: [
            "/assets/projects/abidjanactu/screenshot1.png"
        ],
        tags: ["Web Application", "CMS", "SEO", "News Platform", "Responsive Design"]
    },
    {
        title: "Plateforme de prestation de service de livraison",
        placeholder: "Application web pour la mise en relation entre clients et livreurs",
        description: "Plateforme permettant aux clients de commander un service de livraison et aux livreurs de gérer leurs courses. Inclut la géolocalisation en temps réel, la gestion des paiements et un système de suivi de commande.",
        link: "",
        screenshots: [
            "/assets/projects/livraison/screenshot1.png"
        ],
        tags: ["Web Application", "Geolocation", "Real-time Tracking", "Delivery Service", "Mobile First"]
    },
    {
        title: "Plateforme de transfert sécurisé de fichiers interentreprises",
        placeholder: "Application web de transfert de fichiers sensibles avec chiffrement PGP et envoi SFTP",
        description: "Application web sécurisée permettant le transfert de fichiers sensibles avec chiffrement PGP de bout en bout et envoi automatisé vers un serveur SFTP. Chaque utilisateur dispose d’une clé PGP unique pour garantir la confidentialité et l’intégrité des données. L’interface intuitive permet l’upload, la gestion des clés, le chiffrement côté client et la traçabilité complète des transferts. Architecture basée sur un frontend moderne (Angular/React + OpenPGP.js), un backend Node.js ou Spring Boot, et un stockage sécurisé sur serveur SFTP isolé. Conforme aux exigences RGPD et intégrant des logs détaillés pour l’audit.",
        link: "",
        screenshots: [
            "/assets/projects/filetransfer/screenshot1.png"
        ],
        tags: ["Security", "PGP Encryption", "SFTP", "File Transfer", "Enterprise", "Angular", "Node.js"]
    },
    {
        title: "Application d’authentification et de validation de signatures électroniques",
        placeholder: "Vérification automatisée des signatures électroniques sur documents uploadés",
        description: "Application web développée avec Angular et Quarkus pour le compte de Cryptoneo, autorité de certification. Elle permet aux utilisateurs de vérifier si une signature électronique est valide sur les documents qu'ils uploadent. Le projet inclut un mécanisme temps réel basé sur SSE (Server-Sent Events) pour informer l’utilisateur de l’avancement de l’analyse. L’application assure sécurité, traçabilité et conformité aux standards de signatures électroniques.",
        link: "",
        screenshots: [
            "/assets/projects/signature-validation/screenshot1.png"
        ],
        tags: ["Angular", "Quarkus", "Digital Signature", "Security", "Real-time", "Cryptoneo", "SSE"]
    }
];

}