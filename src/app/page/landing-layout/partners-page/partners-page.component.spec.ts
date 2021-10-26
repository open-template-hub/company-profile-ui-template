import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnersPageComponent } from './partners-page.component';

describe('PartnersPageComponent', () => {
  let component: PartnersPageComponent;
  let fixture: ComponentFixture<PartnersPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartnersPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
