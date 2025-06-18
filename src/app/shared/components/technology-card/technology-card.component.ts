import { Component, input } from '@angular/core';
import { ITechnology } from '../../../core/interfaces/ITechnology';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-technology-card',
  imports: [CommonModule],
  templateUrl: './technology-card.component.html',
  styleUrl: './technology-card.component.css'
})
export class TechnologyCardComponent {
  readonly technology=input<ITechnology>();
  readonly styleClass=input<string>('');
  readonly customStyle=input<string>('');

  getIconUrl(){
    return `images/${this.technology()?.icon}`
  }
} 
