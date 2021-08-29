import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwiperWrapperComponent } from './swiper-wrapper.component';

describe('SwiperWrapperComponent', () => {
  let component: SwiperWrapperComponent;
  let fixture: ComponentFixture<SwiperWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwiperWrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwiperWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
