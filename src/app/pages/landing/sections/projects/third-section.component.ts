import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnselmeAlloue } from '../../../../core/model/anselme-alloue';
import { SectionTitleComponent } from "../../../../shared/ui-kit/section-title/section-title.component";
import { Project } from '../../../../core/model/project';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-realisation-section',
  imports: [CommonModule, SectionTitleComponent],
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
  
  selectedCategory: string = 'all';
  selectedProjectForModal: Project | null = null;
  
  // Catégories de projets définies manuellement
  projectCategories: string[] = [
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

  get filteredProjects(): Project[] {
    if (this.selectedCategory === 'all') {
      return this.projectList;
    }
    return this.projectList.filter(project => 
      this.getProjectCategory(project) === this.selectedCategory
    );
  }

  selectCategory(category: string): void {
    this.selectedCategory = category;
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
    // Logique pour déterminer la catégorie basée sur le titre ou la description
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
    // Logique pour extraire les technologies d'un projet basée sur sa description
    const description = project.description.toLowerCase();
    const technologies: string[] = [];
    
    // Mapping des technologies courantes
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
    
    // Chercher les technologies dans la description
    Object.keys(techMap).forEach(tech => {
      if (description.includes(tech)) {
        technologies.push(techMap[tech]);
      }
    });
    
    // Si aucune technologie trouvée, ajouter des technologies par défaut selon la catégorie
    if (technologies.length === 0) {
      const category = this.getProjectCategory(project);
      switch (category) {
        case 'Web Application':
          technologies.push('Angular', 'TypeScript', 'Tailwind CSS');
          break;
        case 'API Backend':
          technologies.push('Java', 'Quarkus', 'PostgreSQL');
          break;
        case 'Mobile App':
          technologies.push('Flutter', 'Dart');
          break;
        default:
          technologies.push('Web', 'Frontend', 'Backend');
      }
    }
    
    return [...new Set(technologies)]; // Retirer les doublons
  }
}