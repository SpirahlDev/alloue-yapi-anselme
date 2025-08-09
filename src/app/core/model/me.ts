import { IProject } from "../interfaces/IProject";
import { ITechnology, TechnoCategory } from "../interfaces/ITechnology";
import { Project } from "./project";
import { Technology } from "./technology";

export class Me{
    localisation:string="Abidjan, Côte d'Ivoire";
    projects : Project[]=[];
    technologies : Technology[]=[];
    skills:string[]=[];
    birthDate = new Date('2004-05-07');


    constructor(){
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

    get age(){
        // Date actuelle
        const currentDate = new Date();
        // Date de naissance
        
        // Calcul initial des années, mois et jours
        let ageYears = currentDate.getFullYear() - this.birthDate.getFullYear();
        let ageMonths = currentDate.getMonth() - this.birthDate.getMonth();
        let ageDays = currentDate.getDate() - this.birthDate.getDate();

        // Ajustement si le jour du mois n'est pas encore atteint
        if (ageDays < 0) {
            ageMonths--;
            // Ajoute le nombre de jours du mois précédent
            ageDays += new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
        }
        
        // Ajustement si le mois d'anniversaire n'est pas encore atteint
        if (ageMonths < 0) {
            ageYears--;
            ageMonths += 12;
        }
        
        // Retourne uniquement l'âge en années
        return ageYears;
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
            description: "MonBarra est une plateforme complète de recrutement qui permet aux chercheurs d'emploi de créer des profils détaillés et aux employeurs de publier des offres d'emploi. L'application inclut un système de matching intelligent basé sur les compétences, l'expérience et les préférences géographiques. Elle propose également des fonctionnalités avancées comme la gestion des candidatures, un système de messagerie intégré, et des tableaux de bord analytics pour les recruteurs.",
            link: "https://github.com/anselme-alloue/monbarra",
            screenshots: [
                "/assets/projects/monbarra/screenshot1.png",
                "/assets/projects/monbarra/screenshot2.png",
                "/assets/projects/monbarra/screenshot3.png"
            ]
        },
        {
            title: "Portfolio Personnel",
            placeholder: "Site web moderne présentant mes compétences et projets de développement",
            description: "Portfolio professionnel développé avec Angular 18 et Tailwind CSS, mettant en avant mes compétences techniques et mes réalisations. Le site inclut une présentation interactive de mes technologies maîtrisées, une section projets avec des descriptions détaillées, et un formulaire de contact fonctionnel. L'interface est entièrement responsive et optimisée pour les performances.",
            link: "https://anselme-alloue.dev",
            screenshots: [
                "/assets/projects/portfolio/screenshot1.png",
                "/assets/projects/portfolio/screenshot2.png"
            ]
        },
        {
            title: "API REST E-commerce",
            placeholder: "API backend robuste pour plateforme e-commerce avec gestion complète des produits et commandes",
            description: "API REST développée avec Java et Quarkus pour une plateforme e-commerce. Elle gère l'authentification JWT, la gestion des utilisateurs, le catalogue produits, le panier d'achat, et le processus de commande complet. L'API inclut également un système de paiement intégré, la gestion des stocks en temps réel, et des endpoints d'administration pour la gestion des commandes et des statistiques de vente.",
            link: "https://github.com/anselme-alloue/ecommerce-api",
            screenshots: [
                "/assets/projects/ecommerce-api/api-docs.png",
                "/assets/projects/ecommerce-api/architecture.png"
            ]
        }
           , {
            title: "API REST E-commerce",
            placeholder: "API backend robuste pour plateforme e-commerce avec gestion complète des produits et commandes",
            description: "API REST développée avec Java et Quarkus pour une plateforme e-commerce. Elle gère l'authentification JWT, la gestion des utilisateurs, le catalogue produits, le panier d'achat, et le processus de commande complet. L'API inclut également un système de paiement intégré, la gestion des stocks en temps réel, et des endpoints d'administration pour la gestion des commandes et des statistiques de vente.",
            link: "https://github.com/anselme-alloue/ecommerce-api",
            screenshots: [
                "/assets/projects/ecommerce-api/api-docs.png",
                "/assets/projects/ecommerce-api/architecture.png"
            ]
        }
         , {
            title: "API REST E-commerce",
            placeholder: "API backend robuste pour plateforme e-commerce avec gestion complète des produits et commandes",
            description: "API REST développée avec Java et Quarkus pour une plateforme e-commerce. Elle gère l'authentification JWT, la gestion des utilisateurs, le catalogue produits, le panier d'achat, et le processus de commande complet. L'API inclut également un système de paiement intégré, la gestion des stocks en temps réel, et des endpoints d'administration pour la gestion des commandes et des statistiques de vente.",
            link: "https://github.com/anselme-alloue/ecommerce-api",
            screenshots: [
                "/assets/projects/ecommerce-api/api-docs.png",
                "/assets/projects/ecommerce-api/architecture.png"
            ]
        }   , {
            title: "API REST E-commerce",
            placeholder: "API backend robuste pour plateforme e-commerce avec gestion complète des produits et commandes",
            description: "API REST développée avec Java et Quarkus pour une plateforme e-commerce. Elle gère l'authentification JWT, la gestion des utilisateurs, le catalogue produits, le panier d'achat, et le processus de commande complet. L'API inclut également un système de paiement intégré, la gestion des stocks en temps réel, et des endpoints d'administration pour la gestion des commandes et des statistiques de vente.",
            link: "https://github.com/anselme-alloue/ecommerce-api",
            screenshots: [
                "/assets/projects/ecommerce-api/api-docs.png",
                "/assets/projects/ecommerce-api/architecture.png"
            ]
        }
         , {
            title: "API REST E-commerce",
            placeholder: "API backend robuste pour plateforme e-commerce avec gestion complète des produits et commandes",
            description: "API REST développée avec Java et Quarkus pour une plateforme e-commerce. Elle gère l'authentification JWT, la gestion des utilisateurs, le catalogue produits, le panier d'achat, et le processus de commande complet. L'API inclut également un système de paiement intégré, la gestion des stocks en temps réel, et des endpoints d'administration pour la gestion des commandes et des statistiques de vente.",
            link: "https://github.com/anselme-alloue/ecommerce-api",
            screenshots: [
                "/assets/projects/ecommerce-api/api-docs.png",
                "/assets/projects/ecommerce-api/architecture.png"
            ]
        }
    ];

}