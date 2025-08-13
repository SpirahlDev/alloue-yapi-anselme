export enum ProjectCategory {
    WEB_APPLICATION = "Web Application",
    API_BACKEND = "API Backend", 
    MOBILE_APP = "Mobile App",
    ECOMMERCE = "E-commerce",
    MANAGEMENT_SYSTEM = "Système de gestion"
}

export interface IProject{
    title:string,
    placeholder:string, // Description courte (92-100 caractères max)
    description:string, // Description complète
    category:ProjectCategory, // Catégorie du projet
    link?:string, // Lien vers le projet (optionnel)
    screenshots?:string[], // Array d'URLs des captures d'écran (optionnel)
    tags?:string[] // Tags pour technologies, catégories, etc. (optionnel)
}