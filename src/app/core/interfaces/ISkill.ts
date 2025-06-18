import { IProject } from "./IProject";
import { ITechnology } from "./ITechnology";

export type SkillCategory="FRONTEND" | "BACKEND" | "TOOLS";

export interface ISkill{
    category:SkillCategory,
    technologies:ITechnology[],
    project:IProject[]
}