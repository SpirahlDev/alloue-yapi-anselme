import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { IOrientation } from '../../../core/interfaces/IArrow.ts';

@Component({
  selector: 'app-slider-button',
  imports: [CommonModule],
  templateUrl: './slider-button.component.html',
  styleUrl: './slider-button.component.css'
})
export class SliderButtonComponent {
  readonly orientation=input<IOrientation>();
}
