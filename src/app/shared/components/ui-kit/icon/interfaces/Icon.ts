import { TemplateRef } from "@angular/core";

export type IconType = 'fa' | 'svg' | 'ng-zorro' | 'url' | 'template';

export interface Icon{
    value:string | TemplateRef<any>;
    type:IconType;

    color?:string;
    height?:number;
    width?:number;
    class?:string;
    alt?:string;
}