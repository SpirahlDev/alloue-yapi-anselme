import { IPerson } from "../interfaces/IPerson";
import { IProject } from "../interfaces/IProject";
import { ITechnology } from "../interfaces/ITechnology";
import { Project } from "./project";
import { Technology } from "./technology";

export abstract class Person implements IPerson{
    localisation:string = "";
    projects : Project[]=[];
    technologies : Technology[]=[];
    skills:string[]=[];
    birthDate: Date = new Date();
    phone?:string;

    protected technoRawData: ITechnology[]=[];
    protected projectRawData: IProject[]=[];

    constructor(){
        // Les méthodes d'initialisation sont appelées par les classes enfants
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