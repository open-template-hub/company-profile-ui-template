import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocCardComponent } from './doc-card.component';

describe('DocCardComponent', () => {
  let component: DocCardComponent;
  let fixture: ComponentFixture<DocCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
