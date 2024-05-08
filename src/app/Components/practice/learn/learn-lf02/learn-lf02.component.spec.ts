import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnLF02Component } from './learn-lf02.component';

describe('LearnLF02Component', () => {
  let component: LearnLF02Component;
  let fixture: ComponentFixture<LearnLF02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LearnLF02Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LearnLF02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
