import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RobotsAndAiComponent } from './robots-and-ai.component';

describe('RobotsAndAiComponent', () => {
  let component: RobotsAndAiComponent;
  let fixture: ComponentFixture<RobotsAndAiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RobotsAndAiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RobotsAndAiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
