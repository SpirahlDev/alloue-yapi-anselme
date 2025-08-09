import { Component, EventEmitter, input, Output } from '@angular/core';
import { SliderButtonComponent } from "../slider-button/slider-button.component";
import { ProjectCardComponent } from "../project-card/project-card.component";
import { CarouselModule } from 'primeng/carousel';
import { RippleModule } from 'primeng/ripple';
import { IProject } from '../../../core/interfaces/IProject';
import { Project } from '../../../core/model/project';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-project-slider',
  imports: [SliderButtonComponent, ProjectCardComponent,CarouselModule,RippleModule,CommonModule],
  templateUrl: './project-slider.component.html',
  styleUrl: './project-slider.component.css'
})
export class ProjectSliderComponent {

  readonly projects=input<Project[]>([]);
  @Output() onProjectSelect:EventEmitter<Project>=new EventEmitter<Project>();

  readonly PROJECTS_BY_SLIDES=4;

  fakeTable:number[]=[];

  products=[
    {
      id: '1000',
      code: 'f230fh0g3',
      name: 'Bamboo Watch',
      description: 'Product Description',
      image: 'bamboo-watch.jpg',
      price: 65,
      category: 'Accessories',
      quantity: 24,
      inventoryStatus: 'INSTOCK',
      rating: 5
    },  {
      id: '1000',
      code: 'f230fh0g3',
      name: 'Bamboo Watch',
      description: 'Product Description',
      image: 'bamboo-watch.jpg',
      price: 65,
      category: 'Accessories',
      quantity: 24,
      inventoryStatus: 'INSTOCK',
      rating: 5
    },{
      id: '1000',
      code: 'f230fh0g3',
      name: 'Bamboo Watch',
      description: 'Product Description',
      image: 'bamboo-watch.jpg',
      price: 65,
      category: 'Accessories',
      quantity: 24,
      inventoryStatus: 'INSTOCK',
      rating: 5
    },  {
      id: '1000',
      code: 'f230fh0g3',
      name: 'Bamboo Watch',
      description: 'Product Description',
      image: 'bamboo-watch.jpg',
      price: 65,
      category: 'Accessories',
      quantity: 24,
      inventoryStatus: 'INSTOCK',
      rating: 5
    },{
      id: '1000',
      code: 'f230fh0g3',
      name: 'Bamboo Watch',
      description: 'Product Description',
      image: 'bamboo-watch.jpg',
      price: 65,
      category: 'Accessories',
      quantity: 24,
      inventoryStatus: 'INSTOCK',
      rating: 5
    },  {
      id: '1000',
      code: 'f230fh0g3',
      name: 'Bamboo Watch',
      description: 'Product Description',
      image: 'bamboo-watch.jpg',
      price: 65,
      category: 'Accessories',
      quantity: 24,
      inventoryStatus: 'INSTOCK',
      rating: 5
    },{
      id: '1000',
      code: 'f230fh0g3',
      name: 'Bamboo Watch',
      description: 'Product Description',
      image: 'bamboo-watch.jpg',
      price: 65,
      category: 'Accessories',
      quantity: 24,
      inventoryStatus: 'INSTOCK',
      rating: 5
    },  {
      id: '1000',
      code: 'f230fh0g3',
      name: 'Bamboo Watch',
      description: 'Product Description',
      image: 'bamboo-watch.jpg',
      price: 65,
      category: 'Accessories',
      quantity: 24,
      inventoryStatus: 'INSTOCK',
      rating: 5
    }
  ];

  responsiveOptions: any[] | undefined;

  ngOnInit(){
    this.createFakeTable();
  }

  createFakeTable(){
    const dummiesTabsSize=Math.round(this.projects().length/4);
    console.log(dummiesTabsSize);
    for (let index = 0; index < dummiesTabsSize; index++) {
      this.fakeTable.push(index)
    }
  }

  /**
   * Le carousel de la librairie PrimeNG est un peu chiant, lui il veut abosulument gérer l'affichage des élements (D'après ce que j'ai compris de la doc et de mes éssaies)
   * Cette méthode me permet d'afficher mes élements 4 par 4, en grid.
   * PS : Ya peut-être un autre moyen mais chuis un peu en mode automatique actuellement ⌛ (ce n'est que la version bêta)
   * @param offset 
   * @returns 
   */
  getProjects(pageIndex:number){
    const startIndex=pageIndex*this.PROJECTS_BY_SLIDES;
    const endIndex=startIndex+this.PROJECTS_BY_SLIDES;

    return this.projects().slice(startIndex,endIndex);
  }
}
