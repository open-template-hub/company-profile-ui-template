import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventHamburgerMenuComponent } from './event-hamburger-menu.component';

describe('EventHamburgerMenuComponent', () => {
  let component: EventHamburgerMenuComponent;
  let fixture: ComponentFixture<EventHamburgerMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventHamburgerMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventHamburgerMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
