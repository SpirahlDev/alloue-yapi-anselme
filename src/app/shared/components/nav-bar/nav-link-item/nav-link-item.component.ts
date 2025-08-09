import { Component, input } from '@angular/core';
import { INavLink } from '../../../../core/interfaces/INavLink';

@Component({
  selector: 'app-nav-link-item',
  imports: [],
  templateUrl: './nav-link-item.component.html',
  styleUrl: './nav-link-item.component.css'
})
export class NavLinkItemComponent {
  readonly linkTitle = input<INavLink>(); 
  readonly linkNumber=input<number>(0);

  hasCustomSymbol(): boolean {
    return Boolean(this.linkTitle()?.customSymbol);
  }
}
