import { Component, EventEmitter, input, Output } from '@angular/core';
import { SliderButtonComponent } from "../slider-button/slider-button.component";
import { ProjectCardComponent } from "../project-card/project-card.component";
import { CarouselModule } from 'primeng/carousel';
import { RippleModule } from 'primeng/ripple';
import { IProject } from '../../../core/interfaces/IProject';
import { Project } from '../../../core/model/project';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-project-slider',
  imports: [SliderButtonComponent, ProjectCardComponent,CarouselModule,RippleModule,CommonModule],
  templateUrl: './project-slider.component.html',
  styleUrl: './project-slider.component.css'
})
export class ProjectSliderComponent {

  readonly projects=input<Project[]>([]);
  readonly selectedProject=input<Project|null>(null);
  @Output() onProjectSelect:EventEmitter<Project>=new EventEmitter<Project>();

  readonly PROJECTS_PER_PAGE = 4;
  
  /**
   * Calcule le nombre de pages nécessaires et retourne les index de pages
   */
  get pageIndexes(): number[] {
    const totalPages = Math.ceil(this.projects().length / this.PROJECTS_PER_PAGE);
    return Array.from({ length: totalPages }, (_, index) => index);
  }

  /**
   * Le carousel de la librairie PrimeNG est un peu chiant, lui il veut abosulument gérer l'affichage des élements (D'après ce que j'ai compris de la doc et de mes éssaies)
   * Cette méthode me permet d'afficher mes élements 4 par 4, en grid.
   * PS : Ya peut-être un autre moyen mais chuis un peu en mode automatique actuellement ⌛ (ce n'est que la version bêta)
   * @param offset 
   * @returns 
   */
  getProjectsForPage(pageIndex: number): Project[] {
    const startIndex = pageIndex * this.PROJECTS_PER_PAGE;
    const endIndex = startIndex + this.PROJECTS_PER_PAGE;
    
    return this.projects().slice(startIndex, endIndex);
  }

  emitSelection(project:Project){
    this.onProjectSelect.emit(project);
  }

  isProjectSelected(project: Project): boolean {
    return this.selectedProject()?.title === project.title;
  }
}
