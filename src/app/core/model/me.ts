import { IMe } from "../interfaces/IMe";
import { Project } from "./project";
import { Technology } from "./technology";

export abstract class Me implements IMe{
    localisation:string = "";
    projects : Project[]=[];
    technologies : Technology[]=[];
    skills:string[]=[];
    birthDate: Date = new Date();
    phone?:string;

    constructor(){
        // Les méthodes d'initialisation sont appelées par les classes enfants
    }

    abstract loadSkills(): void;
    abstract loadTechnologies(): void;
    abstract loadProject(): void;

    get age(){
        const currentDate = new Date();
        let ageYears = currentDate.getFullYear() - this.birthDate.getFullYear();
        let ageMonths = currentDate.getMonth() - this.birthDate.getMonth();
        let ageDays = currentDate.getDate() - this.birthDate.getDate();

        if (ageDays < 0) {
            ageMonths--;
            ageDays += new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
        }
        
        if (ageMonths < 0) {
            ageYears--;
            ageMonths += 12;
        }
        
        return ageYears;
    }


}