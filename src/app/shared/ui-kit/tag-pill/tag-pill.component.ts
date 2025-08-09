import { Component, input } from '@angular/core';

@Component({
  selector: 'app-tag-pill',
  imports: [],
  templateUrl: './tag-pill.component.html',
  styleUrl: './tag-pill.component.css'
})
export class TagPillComponent {
  readonly value=input<string>('');

  get label(){
    return this.value();
  }
}
