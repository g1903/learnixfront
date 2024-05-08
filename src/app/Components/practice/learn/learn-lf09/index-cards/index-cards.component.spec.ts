import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexCardsComponent } from './index-cards.component';

describe('IndexCardsComponent', () => {
  let component: IndexCardsComponent;
  let fixture: ComponentFixture<IndexCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndexCardsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IndexCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
