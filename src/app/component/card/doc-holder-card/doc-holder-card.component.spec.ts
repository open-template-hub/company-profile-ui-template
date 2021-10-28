import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocHolderCardComponent } from './doc-holder-cardcomponent';

describe('DocCardHolderComponent', () => {
  let component: DocHolderCardComponent;
  let fixture: ComponentFixture<DocHolderCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocHolderCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocHolderCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
