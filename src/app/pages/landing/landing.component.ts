import { NavBarComponent } from "../../shared/components/nav-bar/nav-bar.component";
import { Component } from '@angular/core';
import { Popover } from 'primeng/popover';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { PopoverModule } from 'primeng/popover';
import { RippleModule } from 'primeng/ripple';
import { RealisationSectionComponent } from "./sections/projects/third-section.component";
import { ContactSectionComponent } from "./sections/contacts/contact-section.component";
import { FooterComponent } from "../../shared/components/footer/footer.component";
import { Me } from "../../core/model/me";
import { TagPillComponent } from "../../shared/ui-kit/tag-pill/tag-pill.component";
import { TechnicalStackComponent } from "./sections/technical-stack/technical-stack.component";
import { SectionTitleComponent } from "../../shared/ui-kit/section-title/section-title.component";


@Component({
  selector: 'app-landing',
  imports: [NavBarComponent,
    ButtonModule,
    PopoverModule,
    InputGroupAddonModule,
    InputGroupAddonModule,
    CommonModule,
    InputTextModule, FooterComponent,
    RippleModule, RealisationSectionComponent, ContactSectionComponent, FooterComponent, TagPillComponent, TechnicalStackComponent, SectionTitleComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {
  isPopoverContentHovered:boolean = false;

  myData:Me=new Me();

  /**
   * That method is called when the mouse leaves the popover content, on the popover triger
   * @param popover 
   */

  onMouseLeave(popover: Popover) {
    setTimeout(() => {
      if(!this.isPopoverContentHovered){
        popover.hide();
      }
      this.isPopoverContentHovered = false;

    }, 300);
  }

  /**
   * That methode is called when the popover content is hovered. It set the @param isPopoverContentHovered to true
   * so that, the popover will not be hidden when the mouse leaves
   * @param popover 
   * @param event 
   */
  onPopoverContenthovered(popover: Popover,event:any) {
    popover.show(event);
    this.isPopoverContentHovered=true;
  }


  getAge(){
    const currentDate = new Date();
    const birthDate = new Date('2004-05-07');
    
    let ageYears = currentDate.getFullYear() - birthDate.getFullYear();
    let ageMonths = currentDate.getMonth() - birthDate.getMonth();
    let ageDays = currentDate.getDate() - birthDate.getDate();

    if (ageDays < 0) {
        ageMonths--;
        ageDays += new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
    }
    
    if (ageMonths < 0) {
        ageYears--;
        ageMonths += 12;
    }
    
    return ageYears;
  }

 


}
