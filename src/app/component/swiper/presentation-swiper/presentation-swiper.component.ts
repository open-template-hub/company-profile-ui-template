import { Component, Input, ViewEncapsulation } from '@angular/core';
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper';
import { Image } from '../../../model/image/image.model';

SwiperCore.use( [ Pagination, Navigation, Autoplay ] );

@Component( {
  selector: 'app-presentation-swiper',
  templateUrl: './presentation-swiper.component.html',
  styleUrls: [ './presentation-swiper.component.scss' ],
  encapsulation: ViewEncapsulation.None
} )
export class PresentationSwiperComponent {

  @Input() items: Image[] = [];
  @Input() height = 75;

  isNavigationEnabled = false;
  isPaginationEnabled = false;
  isGrayscale = false;

  breakpoints: any = {};
}
