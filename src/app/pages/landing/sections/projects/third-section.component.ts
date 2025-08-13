import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnselmeAlloue } from '../../../../core/model/anselme-alloue';
import { SectionTitleComponent } from "../../../../shared/ui-kit/section-title/section-title.component";
import { Project } from '../../../../core/model/project';
import { trigger, transition, style, animate } from '@angular/animations';
import { TabsModule } from 'primeng/tabs';

@Component({
  selector: 'app-realisation-section',
  imports: [CommonModule, SectionTitleComponent, TabsModule],
  templateUrl: './third-section.component.html',
  styleUrl: './third-section.component.css',
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('200ms ease-in', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('200ms ease-out', style({ opacity: 0 }))
      ])
    ]),
    trigger('slideInOut', [
      transition(':enter', [
        style({ transform: 'scale(0.95)', opacity: 0 }),
        animate('300ms cubic-bezier(0.34, 1.56, 0.64, 1)', style({ transform: 'scale(1)', opacity: 1 }))
      ]),
      transition(':leave', [
        animate('200ms ease-out', style({ transform: 'scale(0.95)', opacity: 0 }))
      ])
    ])
  ]
})
export class RealisationSectionComponent {
  readonly cv = input<AnselmeAlloue>();
  
  selectedProjectForModal: Project | null = null;
  tabIndex: number = 0;
  
  // Catégories de projets définies manuellement (avec "Tous" en premier)
  projectCategories: string[] = [
    'Tous',
    'Web Application',
    'API Backend',
    'Mobile App',
    'E-commerce',
    'Système de gestion'
  ];

  ngOnInit() {
    // Pas besoin d'initialisation particulière
  }

  get projectList(): Project[] {
    return this.cv()?.projects || [];
  }

  getProjectsForCategory(categoryIndex: number): Project[] {
    if (categoryIndex === 0) { // "Tous"
      return this.projectList;
    }
    const category = this.projectCategories[categoryIndex];
    return this.projectList.filter(project => 
      this.getProjectCategory(project) === category
    );
  }

  openProjectModal(project: Project): void {
    this.selectedProjectForModal = project;
    // Empêcher le scroll du body quand le modal est ouvert
    document.body.style.overflow = 'hidden';
  }

  closeProjectModal(): void {
    this.selectedProjectForModal = null;
    // Restaurer le scroll du body
    document.body.style.overflow = 'auto';
  }

  getProjectCategory(project: Project): string {
    // Utiliser les tags pour déterminer la catégorie si disponible
    if (project.tags && project.tags.length > 0) {
      const categoryTags = project.tags.filter(tag => 
        ['API Backend', 'Mobile App', 'E-commerce', 'Système de gestion', 'Web Application'].includes(tag)
      );
      if (categoryTags.length > 0) {
        return categoryTags[0]; // Prendre la première catégorie trouvée
      }
    }
    
    // Fallback: logique basée sur le titre et description
    const title = project.title.toLowerCase();
    const description = project.description.toLowerCase();
    
    if (title.includes('api') || description.includes('api rest')) {
      return 'API Backend';
    }
    if (title.includes('e-commerce') || description.includes('e-commerce')) {
      return 'E-commerce';
    }
    if (title.includes('mobile') || title.includes('flutter')) {
      return 'Mobile App';
    }
    if (title.includes('gestion') || title.includes('hotel') || description.includes('gestion')) {
      return 'Système de gestion';
    }
    
    return 'Web Application';
  }

  getProjectTechnologies(project: Project): string[] {
    // Utiliser les tags s'ils existent, sinon logique de fallback
    if (project.tags && project.tags.length > 0) {
      // Filtrer les tags pour ne garder que les technologies (pas les catégories)
      const techTags = project.tags.filter(tag => 
        !['Web Application', 'API Backend', 'Mobile App', 'E-commerce', 'Système de gestion'].includes(tag)
      );
      return techTags.length > 0 ? techTags : project.tags;
    }
    
    // Fallback: logique d'extraction automatique si pas de tags
    const description = project.description.toLowerCase();
    const technologies: string[] = [];
    
    const techMap: { [key: string]: string } = {
      'angular': 'Angular',
      'laravel': 'Laravel',
      'quarkus': 'Quarkus',
      'java': 'Java',
      'nodejs': 'Node.js',
      'node.js': 'Node.js',
      'flutter': 'Flutter',
      'javascript': 'JavaScript',
      'typescript': 'TypeScript',
      'tailwind': 'Tailwind CSS',
      'mysql': 'MySQL',
      'postgresql': 'PostgreSQL',
      'jwt': 'JWT',
      'pgp': 'PGP',
      'sftp': 'SFTP'
    };
    
    Object.keys(techMap).forEach(tech => {
      if (description.includes(tech)) {
        technologies.push(techMap[tech]);
      }
    });
    
    return technologies.length > 0 ? [...new Set(technologies)] : ['Web', 'Application'];
  }
}