import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnLF09Component } from './learn-lf09.component';

describe('LearnLF09Component', () => {
  let component: LearnLF09Component;
  let fixture: ComponentFixture<LearnLF09Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LearnLF09Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LearnLF09Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
