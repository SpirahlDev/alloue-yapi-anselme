import { Component, input } from '@angular/core';
import { Project } from '../../../core/model/project';

@Component({
  selector: 'app-project-card',
  imports: [],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css'
})
export class ProjectCardComponent {
  readonly projectData=input<Project>();

  get project(){
    return this.projectData();
  }
}
