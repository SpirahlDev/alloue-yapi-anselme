import { IProject } from "../interfaces/IProject";
import { ITechnology, TechnoCategory } from "../interfaces/ITechnology";
import { Technology } from "./technology";

export class Me{
    localisation:string="Abidjan, Côte d'Ivoire";
    projects : IProject[]=[];
    technologies : Technology[]=[];
    hobbies:string[]=[];
    birthDate = new Date('2004-05-07');

    constructor(){
        this.loadHobbies();
        this.loadSkills();
    }

    loadHobbies(){
        this.hobbies=[
            "Animation Japonaise",
            "Électroniques",
            "Jeux vidéo"
        ]
    }

    loadSkills(){
        const technoModel:Technology[]=[];

        this.technoRawData.forEach((techo)=>{
            technoModel.push(new Technology(techo));
        });
    
        this.technologies.push(...technoModel);
    }

    loadProject(){

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
        icon: {value:"/icons/technologies/angular.svg",type:"url"}
    },
    {
        name: "Java",
        category: TechnoCategory.BACKEND,
        icon: {value:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",type:"url"}
    },
    {
        name: "Quarkus",
        category: TechnoCategory.BACKEND,
        icon: {value:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/quarkus/quarkus-original.svg",type:"url"}
    },
    {
        name: "Laravel",
        category: TechnoCategory.BACKEND,
        icon: {value:"/icons/technologies/laravel.svg",type:"url"}
    },
    {
        name: "Node.js",
        category: TechnoCategory.BACKEND,
        icon: {value:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",type:"url"}
    },
    {
        name: "Flutter",
        category: TechnoCategory.MOBILE,
        icon: {value:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",type:"url"}
    },
    {
        name: "Tailwind CSS",
        category: TechnoCategory.FRONTEND,
        icon: {value:"/icons/technologies/tailwind-css.svg",type:"url"}
    },
    {
        name: "Git",
        category: TechnoCategory.TOOLS,
        icon: {value:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",type:"url"}
    },
    {
        name: "Figma",
        category: TechnoCategory.TOOLS,
        icon: {value:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",type:"url"}
    },
    {
        name: "GitLab CI/CD",
        category: TechnoCategory.DEVOPS,
        icon: {value:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg",type:"url"}
    },
    {
        name: "GitHub",
        category: TechnoCategory.TOOLS,
        icon: {value:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",type:"url"}
    },
    {
        name: "GitHub Actions",
        category: TechnoCategory.DEVOPS,
        icon: {value:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",type:"url"}
    },
    {
        name: "Docker",
        category: TechnoCategory.DEVOPS,
        icon: {value:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",type:"url"}
    },
    {
        name: "Postman",
        category: TechnoCategory.TOOLS,
        icon: {value:"https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",type:"url"}
    },
    {
        name: "MySQL",
        category: TechnoCategory.BACKEND,
        icon: {value:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",type:"url"}
    },
    {
        name: "PostgreSQL",
        category: TechnoCategory.BACKEND,
        icon: {value:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",type:"url"}
    },
    {
        name: "Android Studio",
        category: TechnoCategory.TOOLS,
        icon: {value:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg",type:"url"}
    }
]

}