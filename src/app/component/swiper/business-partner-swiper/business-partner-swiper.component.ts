import { Component, Input, ViewEncapsulation } from '@angular/core';
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper';
import { Partner } from '../../../model/partner/partner.model';

SwiperCore.use( [ Pagination, Navigation, Autoplay ] );

@Component( {
  selector: 'app-business-partner-swiper',
  templateUrl: './business-partner-swiper.component.html',
  styleUrls: [ './business-partner-swiper.component.scss' ],
  encapsulation: ViewEncapsulation.None
} )
export class BusinessPartnerSwiperComponent {

  @Input() partners: Partner[] = [];
  @Input() isGrayscale = true;

  isNavigationEnabled = true;
  isPaginationEnabled = true;
  height = 100;
  breakpoints = {
    640: {
      slidesPerView: 1,
      spaceBetween: 30
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40
    },
    1000: {
      slidesPerView: 3,
      spaceBetween: 50
    }
  };
}
