import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../../../core/model/project';
import { BaseService } from '../../../core/services/base.service';

@Component({
  selector: 'app-project-card',
  imports: [CommonModule],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css'
})
export class ProjectCardComponent {
  @Input() project!: Project;
  @Input() technologies: string[] = [];
  @Input() category: string = '';
  @Input() animationDelay: number = 0;
  
  @Output() projectClick = new EventEmitter<Project>();

  constructor(private baseService:BaseService){}
  
  onProjectClick(): void {
    this.projectClick.emit(this.project);
  }

  formatDate(date: Date): string {
    return new Intl.DateTimeFormat('fr-FR', {
      month: 'short',
      year: 'numeric'
    }).format(date);
  }

  getUri(url:string){
    return this.baseService.getLink(url);
  }

  isStackDetailsAllowed(): boolean {
    // Vérifier si les tags techniques contiennent des éléments spécifiques
    return !this.technologies.includes('⛔');
  }
}