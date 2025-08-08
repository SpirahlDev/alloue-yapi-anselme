import { Icon } from "../../shared/components/ui-kit/icon/interfaces/Icon";
import { ITechnology, SkillCategory, TechnoCategory } from "../interfaces/ITechnology";
import { generateSlug } from "../utils/utils";

export class Technology implements ITechnology{
    static DEFAULT_ICON_EXTENSION="svg";
    declare icon: Icon;

    declare name: string;
    declare category: TechnoCategory;

    declare cat:TechnoCategory;
    
    constructor(technlogoyData:ITechnology){
        Object.assign(this,technlogoyData);
        
        if(!technlogoyData.icon){
            this.icon.value=generateSlug(this.name)+"."+Technology.DEFAULT_ICON_EXTENSION;
        }
    }

    public setIcon(icon:Icon){
        this.icon=icon;
    }

    static getAllCategories(){
        return Array.from(Object.entries(TechnoCategory)).map(entry => entry[0]);
    }
}