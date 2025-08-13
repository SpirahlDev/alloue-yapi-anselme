import { Component } from '@angular/core';
import { PersonalDataService } from '../../../core/services/personal-data.service';
import { AnselmeAlloue } from '../../../core/model/anselme-alloue';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  currentDate = new Date();
  me: AnselmeAlloue;

  constructor(private personalDataService: PersonalDataService) {
    this.me = this.personalDataService.me as AnselmeAlloue;
  }
}