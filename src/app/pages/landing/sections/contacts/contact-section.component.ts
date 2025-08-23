import { Component } from '@angular/core';
import { SectionTitleComponent } from "../../../../shared/ui-kit/section-title/section-title.component";

@Component({
  selector: 'app-contact-section',
  imports: [SectionTitleComponent],
  templateUrl: './contact-section.component.html',
  styleUrl: './contact-section.component.css'
})
export class ContactSectionComponent {
  phoneNumber:string='0102804964';
  email:string='anselmealloue@gmail.com';

  downloadCV(): void {
    // Vous pouvez mettre le lien vers votre CV ici
    const cvUrl = 'https://spirahldev.github.io/alloue-yapi-anselme/assets/cv/CV-ALLOUE_YAPI-DEVELOPPEUR-15_08_25.pdf';
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'CV-Anselme-Alloue-Developer.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
