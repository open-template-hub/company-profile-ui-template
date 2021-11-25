import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactInformationCardComponent } from './contact-information-card.component';

describe('ContactInformationCardComponent', () => {
  let component: ContactInformationCardComponent;
  let fixture: ComponentFixture<ContactInformationCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactInformationCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactInformationCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
