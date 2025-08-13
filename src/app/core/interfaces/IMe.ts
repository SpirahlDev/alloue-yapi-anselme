import { Project } from "../model/project";
import { Technology } from "../model/technology";

export interface IMe{
    localisation:string;
    projects : Project[];
    skills:string[];
    technologies : Technology[];
    birthDate:Date;
}