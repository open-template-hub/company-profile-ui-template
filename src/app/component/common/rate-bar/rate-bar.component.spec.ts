import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RateBarComponent } from './rate-bar.component';

describe('RateBarComponent', () => {
  let component: RateBarComponent;
  let fixture: ComponentFixture<RateBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RateBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RateBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
