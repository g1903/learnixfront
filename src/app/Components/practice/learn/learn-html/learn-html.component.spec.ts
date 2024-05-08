import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnHtmlComponent } from './learn-html.component';

describe('LearnHtmlComponent', () => {
  let component: LearnHtmlComponent;
  let fixture: ComponentFixture<LearnHtmlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LearnHtmlComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LearnHtmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
