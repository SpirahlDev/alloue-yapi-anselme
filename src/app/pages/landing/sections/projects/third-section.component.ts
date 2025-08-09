import { Component, input } from '@angular/core';
import { ProjectSliderComponent } from "../../../../shared/components/project-slider/project-slider.component";
import { TechnologyCardComponent } from "../../../../shared/components/technology-card/technology-card.component";
import { CommonModule } from '@angular/common';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { PanelModule } from 'primeng/panel';
import { Technology } from '../../../../core/model/technology';
import { ITechnology, SkillCategory } from '../../../../core/interfaces/ITechnology';
import { TabsModule } from 'primeng/tabs';
import { Me } from '../../../../core/model/me';
import { SectionTitleComponent } from "../../../../shared/ui-kit/section-title/section-title.component";

@Component({
  selector: 'app-realisation-section',
  imports: [ProjectSliderComponent, TabsModule, TechnologyCardComponent, CommonModule, PanelModule, SectionTitleComponent],
  templateUrl: './third-section.component.html',
  styleUrl: './third-section.component.css'
})
export class RealisationSectionComponent {

  readonly cv=input<Me>();

  categoryList:string[]=[];
  technologies:Technology[]=[];

  tabIndex=0;

  constructor(){
    this.categoryList=Technology.getAllCategories();
  }


  ngOnInit(){
    this.loadTechnologies();
  }


  loadTechnologies(){
    this.technologies=this.cv()?.technologies || [];
  }

  getCurrentTechno(index:number){
    const currentTech=this.technologies
      .filter(techno=>techno.category==this.categoryList[index]);
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

  get projectList(){
    return this.cv()?.projects || [];
  }
}
