import { Component, Input, ViewEncapsulation } from '@angular/core';
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper';
import { Partner } from '../../../model/partner/partner.model';

SwiperCore.use( [ Pagination, Navigation, Autoplay ] );

@Component( {
  selector: 'app-swiper-wrapper',
  templateUrl: './swiper-wrapper.component.html',
  styleUrls: [ './swiper-wrapper.component.scss' ],
  encapsulation: ViewEncapsulation.None,
} )

export class SwiperWrapperComponent {
  @Input() partners: Partner[] = [];
}
