import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealisationSectionComponent } from './third-section.component';

describe('ThirdSectionComponent', () => {
  let component: RealisationSectionComponent;
  let fixture: ComponentFixture<RealisationSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RealisationSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RealisationSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
