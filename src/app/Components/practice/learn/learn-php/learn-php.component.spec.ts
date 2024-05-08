import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnPHPComponent } from './learn-php.component';

describe('LearnPHPComponent', () => {
  let component: LearnPHPComponent;
  let fixture: ComponentFixture<LearnPHPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LearnPHPComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LearnPHPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
