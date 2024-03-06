import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LectionContentComponent } from './lection-content.component';

describe('LectionContentComponent', () => {
  let component: LectionContentComponent;
  let fixture: ComponentFixture<LectionContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LectionContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LectionContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
