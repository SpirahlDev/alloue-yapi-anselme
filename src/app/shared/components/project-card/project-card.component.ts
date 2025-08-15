import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../../../core/model/project';

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

  onProjectClick(): void {
    this.projectClick.emit(this.project);
  }

  formatDate(date: Date): string {
    return new Intl.DateTimeFormat('fr-FR', {
      month: 'short',
      year: 'numeric'
    }).format(date);
  }
}