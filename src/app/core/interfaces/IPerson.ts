import { Project } from "../model/project";
import { Technology } from "../model/technology";

export interface IPerson{
    localisation:string;
    projects : Project[];
    skills:string[];
    technologies : Technology[];
    birthDate:Date;
    phone?:string;
}