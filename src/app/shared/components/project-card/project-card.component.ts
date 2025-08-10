import { Component, EventEmitter, input, Output } from '@angular/core';
import { Project } from '../../../core/model/project';

@Component({
  selector: 'app-project-card',
  imports: [],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css'
})
export class ProjectCardComponent {
  readonly projectData=input<Project>();
  readonly isSelected=input<boolean>(false);
  @Output() onSelection:EventEmitter<Project>=new EventEmitter<Project>();
  
  get project(){
    return this.projectData();
  }

  get cardClasses(){
    const baseClasses = "max-w-md w-60 bg-white duration-300 hover:scale-[1.02] cursor-pointer rounded-lg p-4 transition-all";
    
    if (this.isSelected()) {
      return `${baseClasses} border-2 border-[#0174C1] shadow-lg bg-gradient-to-br from-[#0174C1]/5 to-transparent`;
    }
    
    return `${baseClasses} border border-[var(--default-border-color)] hover:border-[#0174C1]/30 hover:shadow-md`;
  }

  emitClickEvent(){
    this.onSelection.emit(this.projectData());
  }
}
