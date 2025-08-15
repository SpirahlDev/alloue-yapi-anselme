import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavLinkItemComponent } from "./nav-link-item/nav-link-item.component";
import { INavLink } from '../../../core/interfaces/INavLink';
import { generateSlug } from '../../../core/utils/utils';

@Component({
  selector: 'app-nav-bar',
  imports: [RouterLink, CommonModule, NavLinkItemComponent],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  navLinks:INavLink[] = [
    {
      title:'À propos'
    },    
    {
      title:'Projets'
    },    
    {
      title:'Stack technique'
    },    
    {
      title:'Télécharger mon CV',
      customAnchor: 'download-cv'
    },
  ];

  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  getAnchorName(nav:INavLink){
    return nav.customAnchor ?? `${generateSlug(nav.title)}`;
  }
}
