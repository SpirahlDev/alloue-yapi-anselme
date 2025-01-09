import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavLinkItemComponent } from "../nav-link-item/nav-link-item.component";
import { INavLink } from '../../../core/interfaces/INavLink';

@Component({
  selector: 'app-nav-bar',
  imports: [RouterLink, CommonModule, NavLinkItemComponent],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  navLinks:INavLink[] = [
    {
      title: 'Accueil'
    },
    {
      title:'À propos'
    },    
    {
      title:'Mes compétences'
    },    
    {
      title:'Contacts',
      customSymbol: '@'
    },
  ]
}
