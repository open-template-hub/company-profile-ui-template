import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenshotSwiperComponent } from './screenshot-swiper.component';

describe('ScreenshotSwiperComponent', () => {
  let component: ScreenshotSwiperComponent;
  let fixture: ComponentFixture<ScreenshotSwiperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreenshotSwiperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenshotSwiperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
