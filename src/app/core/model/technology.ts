import { ITechnology } from "../interfaces/ITechnology";
import { generateSlug } from "../utils/utils";

export class Technology implements ITechnology{
    name: string;
    icon: string;
    
    constructor(name:string,iconExtension:string='png'){
        this.name=name;
        this.icon=generateSlug(this.name)+"."+iconExtension;
    }

    public setIconUri(icon:string){
        this.icon=icon;
    }
}