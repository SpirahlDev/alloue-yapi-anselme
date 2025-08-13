import { IProject, ProjectCategory } from "../interfaces/IProject";

export class Project implements IProject{
    declare title: string;
    declare placeholder: string;
    declare description: string;
    declare category: ProjectCategory;
    declare link?: string | undefined;
    declare screenshots?: string[] | undefined;
    declare tags?: string[] | undefined;
    
    constructor(projectRawData:IProject){
        Object.assign(this,projectRawData);
    }
    
    
}