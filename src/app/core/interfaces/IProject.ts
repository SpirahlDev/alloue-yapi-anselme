export enum ProjectCategory {
    WEB_APPLICATION = "Web Application",
    API_BACKEND = "API Backend", 
    MOBILE_APP = "Mobile App",
    ECOMMERCE = "E-commerce",
}

export interface IProject{
    title:string,
    placeholder:string, // Description courte (92-100 caractères max)
    description:string, // Description complète
    category:ProjectCategory, // Catégorie du projet
    start_date?: Date, // Date de début du projet (optionnel)
    end_date?: Date, // Date de fin du projet (optionnel)
    link?:string, // Lien vers le projet (optionnel)
    screenshots?:string[], // Array d'URLs des captures d'écran (optionnel)
    tags?:string[] // Tags pour technologies, catégories, etc. (optionnel)
}