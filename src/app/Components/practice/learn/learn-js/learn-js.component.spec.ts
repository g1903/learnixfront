import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnJSComponent } from './learn-js.component';

describe('LearnJSComponent', () => {
  let component: LearnJSComponent;
  let fixture: ComponentFixture<LearnJSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LearnJSComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LearnJSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
