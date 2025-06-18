import { Component } from '@angular/core';
import { SliderButtonComponent } from "../slider-button/slider-button.component";
import { ProjectCardComponent } from "../project-card/project-card.component";

@Component({
  selector: 'app-project-slider',
  imports: [SliderButtonComponent, ProjectCardComponent],
  templateUrl: './project-slider.component.html',
  styleUrl: './project-slider.component.css'
})
export class ProjectSliderComponent {

}
