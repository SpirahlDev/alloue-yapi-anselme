import { Component, input } from '@angular/core';
import { Me } from '../../../../core/model/me';
import { CommonModule } from '@angular/common';
import { PanelModule } from 'primeng/panel';
import { TabsModule } from 'primeng/tabs';
import { ProjectSliderComponent } from '../../../../shared/components/project-slider/project-slider.component';
import { TechnologyCardComponent } from '../../../../shared/components/technology-card/technology-card.component';
import { Technology } from '../../../../core/model/technology';
import { SectionTitleComponent } from "../../../../shared/ui-kit/section-title/section-title.component";

@Component({
  selector: 'app-technical-stack',
  imports: [ProjectSliderComponent, TabsModule, TechnologyCardComponent, CommonModule, PanelModule, SectionTitleComponent],
  templateUrl: './technical-stack.component.html',
  styleUrl: './technical-stack.component.css'
})
export class TechnicalStackComponent {
  readonly cv=input<Me>();

  categoryList:string[]=[];
    technologies:Technology[]=[];
  
    tabIndex=0;
  
    constructor(){
      this.categoryList=Technology.getAllCategories();
      console.log(this.categoryList);
    }
  
  
    ngOnInit(){
      this.loadTechnologies();
    }
  
  
    loadTechnologies(){
      this.technologies=this.cv()?.technologies || [];
      console.log(this.cv()?.technologies)
    }
  
    getCurrentTechno(index:number){
      const currentTech=this.technologies
        .filter(techno=>techno.category==this.categoryList[index]);
      console.log(currentTech,index);
      return currentTech;
    }
  
  
    getTechCatIcon(cat:string){
      return cat ?`/icons/tech-categories/${cat}.svg` :'';
    }
  
    getCustomStyle(techno:Technology){
      switch (techno.name) {
        // case "Angular":
        //     return "width:150px;"
        // case "Tailwind CSS":
        //     return "width:150px;"
        default:
          return "width:70px;"
      }
    }
}
