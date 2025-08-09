import { Component, Input, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Icon } from '../interfaces/Icon';

@Component({
  selector: 'app-icon',
  imports: [CommonModule],
  templateUrl: './icon.component.html',
  styles: [`
    :host {
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }
  `]
})
export class IconComponent {
  @Input() icon?: Icon;


  get primeNgIcon(): string {
    return this.icon?.value as string;
  }

  get stringIcon(): string {
    return this.icon?.value as string;
  }

  get svgTemplate(): TemplateRef<any> {
    return this.icon?.value as TemplateRef<any>;
  }
}
