import { Component, Input, ViewEncapsulation } from '@angular/core';
import SwiperCore, { Navigation, Pagination } from 'swiper';

SwiperCore.use( [ Pagination, Navigation ] );

export interface Partner {
  brandLogo: string;
}

@Component( {
  selector: 'app-swiper-wrapper',
  templateUrl: './swiper-wrapper.component.html',
  styleUrls: [ './swiper-wrapper.component.scss' ],
  encapsulation: ViewEncapsulation.None,
} )

export class SwiperWrapperComponent {
  @Input() partners: Partner[] = [];
}
