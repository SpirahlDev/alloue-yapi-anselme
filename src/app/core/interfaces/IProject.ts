export interface IProject{
    title:string,
    placeholder:string, // Description courte (92-100 caractères max)
    description:string, // Description complète
    link?:string, // Lien vers le projet (optionnel)
    screenshots?:string[] // Array d'URLs des captures d'écran (optionnel)
}