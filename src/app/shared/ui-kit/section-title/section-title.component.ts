import { Component, input } from '@angular/core';
import { generateSlug } from '../../../core/utils/utils';

@Component({
  selector: 'app-section-title',
  imports: [],
  templateUrl: './section-title.component.html',
  styleUrl: './section-title.component.css'
})
export class SectionTitleComponent {
  readonly sectionId=input<string>('');
  readonly title=input<string>('');

  get id(){
    return this.sectionId();
  }

  get name(){
    return this.title();
  }

  getAnchorName(){
    return generateSlug(this.name);
  }
}
