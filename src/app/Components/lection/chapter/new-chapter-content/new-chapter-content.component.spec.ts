import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewChapterContentComponent } from './new-chapter-content.component';

describe('NewChapterContentComponent', () => {
  let component: NewChapterContentComponent;
  let fixture: ComponentFixture<NewChapterContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewChapterContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewChapterContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
