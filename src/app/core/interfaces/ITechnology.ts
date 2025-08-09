import { Icon } from "../../shared/ui-kit/icon/interfaces/Icon";

export type SkillCategory = "FRONTEND" | "BACKEND" | "MOBILE" | "TOOLS" |  "DEVOPS";

export enum TechnoCategory{
    FRONTEND="FRONTEND",
    BACKEND="BACKEND",
    MOBILE="MOBILE",
    TOOLS="TOOLS",
    DEVOPS="DEVOPS"
}
export interface ITechnology{
    name:string,
    category: TechnoCategory;
    icon?:Icon;
}