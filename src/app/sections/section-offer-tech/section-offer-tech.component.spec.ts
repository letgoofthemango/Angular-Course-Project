import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionOfferTechComponent } from './section-offer-tech.component';

describe('SectionOfferTechComponent', () => {
  let component: SectionOfferTechComponent;
  let fixture: ComponentFixture<SectionOfferTechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionOfferTechComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionOfferTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
