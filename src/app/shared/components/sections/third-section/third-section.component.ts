import { Component } from '@angular/core';
import { ProjectSliderComponent } from "../../project-slider/project-slider.component";
import { TechnologyCardComponent } from "../../technology-card/technology-card.component";
import { CommonModule } from '@angular/common';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { PanelModule } from 'primeng/panel';
import { SkillCategory, ISkill } from '../../../../core/interfaces/ISkill';
import { Technology } from '../../../../core/model/technology';
import { ITechnology } from '../../../../core/interfaces/ITechnology';
import { TabsModule } from 'primeng/tabs';

@Component({
  selector: 'app-third-section',
  imports: [ProjectSliderComponent,TabsModule, TechnologyCardComponent,CommonModule,PanelModule],
  templateUrl: './third-section.component.html',
  styleUrl: './third-section.component.css'
})
export class ThirdSectionComponent {
   skillCategory:SkillCategory="FRONTEND";

  private skills:ISkill[]=[];
  
  public technoMap:Map<SkillCategory,ITechnology[]>=new Map<SkillCategory,ITechnology[]>;
   onCategoryChange(category:SkillCategory){
    this.skillCategory=category;
  }

  ngOnInit(){
    this.loadSkills();
  }


  loadSkills(){
    const frontend:ISkill={
      category: "FRONTEND",
      technologies: [
        new Technology('Angular'),
        new Technology('Tailwindcss','svg'),
        new Technology('Flutter'),
        new Technology('Typescript/Javascript')
      ],
      project: []
    }


    this.skills.push(frontend);
    this.technoMap.set(frontend.category,frontend.technologies);
  }
}
