import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogContentPageComponent } from './blog-content-page.component';

describe('BlogContentPageComponent', () => {
  let component: BlogContentPageComponent;
  let fixture: ComponentFixture<BlogContentPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogContentPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogContentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
