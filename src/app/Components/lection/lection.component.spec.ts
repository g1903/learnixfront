import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LectionComponent } from './lection.component';

describe('LectionComponent', () => {
  let component: LectionComponent;
  let fixture: ComponentFixture<LectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
