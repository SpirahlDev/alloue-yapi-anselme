import { Component, input } from '@angular/core';
import { ProjectSliderComponent } from "../../project-slider/project-slider.component";
import { TechnologyCardComponent } from "../../technology-card/technology-card.component";
import { CommonModule } from '@angular/common';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { PanelModule } from 'primeng/panel';
import { Technology } from '../../../../core/model/technology';
import { ITechnology, SkillCategory } from '../../../../core/interfaces/ITechnology';
import { TabsModule } from 'primeng/tabs';
import { Me } from '../../../../core/model/me';

@Component({
  selector: 'app-third-section',
  imports: [ProjectSliderComponent,TabsModule, TechnologyCardComponent,CommonModule,PanelModule],
  templateUrl: './third-section.component.html',
  styleUrl: './third-section.component.css'
})
export class ThirdSectionComponent {

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
}
