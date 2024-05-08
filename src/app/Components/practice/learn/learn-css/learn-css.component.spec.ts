import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnCSSComponent } from './learn-css.component';

describe('LearnCSSComponent', () => {
  let component: LearnCSSComponent;
  let fixture: ComponentFixture<LearnCSSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LearnCSSComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LearnCSSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
