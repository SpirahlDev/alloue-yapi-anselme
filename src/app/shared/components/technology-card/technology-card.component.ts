import { Component, input } from '@angular/core';
import { ITechnology } from '../../../core/interfaces/ITechnology';
import { CommonModule } from '@angular/common';
import { Technology } from '../../../core/model/technology';

@Component({
  selector: 'app-technology-card',
  imports: [CommonModule],
  templateUrl: './technology-card.component.html',
  styleUrl: './technology-card.component.css'
})
export class TechnologyCardComponent {
  readonly technology=input<Technology>();
  readonly styleClass=input<string>('');
  readonly customStyle=input<string>('');

  getIconUrl(){
    return `${this.technology()?.icon.value}`
  }

  get name(){
    return this.technology()?.name;
  }
} 
