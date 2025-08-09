import { IProject } from "../interfaces/IProject";

export class Project implements IProject{
    declare title: string;
    declare placeholder: string;
    declare description: string;
    declare link?: string | undefined;
    declare screenshots?: string[] | undefined;
    
    constructor(projectRawData:IProject){
        Object.assign(this,projectRawData);
    }
    
    
}