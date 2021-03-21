import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionOfferTeacherComponent } from './section-offer-teacher.component';

describe('SectionOfferTeacherComponent', () => {
  let component: SectionOfferTeacherComponent;
  let fixture: ComponentFixture<SectionOfferTeacherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionOfferTeacherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionOfferTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
