import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogHolderCardComponent } from './blog-holder-card.component';

describe('BlogHolderCardComponent', () => {
  let component: BlogHolderCardComponent;
  let fixture: ComponentFixture<BlogHolderCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogHolderCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogHolderCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
