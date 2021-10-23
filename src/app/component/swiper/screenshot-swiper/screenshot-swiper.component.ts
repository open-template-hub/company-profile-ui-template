import { Component, Input, ViewEncapsulation } from '@angular/core';
import { Image } from '../../../model/image/image.model';

@Component( {
  selector: 'app-screenshot-swiper',
  templateUrl: './screenshot-swiper.component.html',
  styleUrls: [ './screenshot-swiper.component.scss' ],
  encapsulation: ViewEncapsulation.None
} )
export class ScreenshotSwiperComponent {

  @Input() screenshots: Image[] = [];

  isNavigationEnabled = true;
  isPaginationEnabled = true;

  height = 200;
  breakpoints = {
    768: {
      slidesPerView: 1,
      spaceBetween: 40
    },
    1000: {
      slidesPerView: 3,
      spaceBetween: 50
    }
  };

  openScreenshot( url: string ) {
    window.open( url.replace( 'min/', '' ).replace( '.min', '' ), '_blank' );
  }
}
