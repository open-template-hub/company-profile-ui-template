import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocsContentPageComponent } from './docs-content-page.component';

describe('DocsContentPageComponent', () => {
  let component: DocsContentPageComponent;
  let fixture: ComponentFixture<DocsContentPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocsContentPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocsContentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
