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
  @Input() partners: Partner[] = [
    { brandLogo: '../../../../assets/common/partners/buymeacoffee-logo.png' },
    { brandLogo: '../../../../assets/common/partners/github-logo.png' },
    { brandLogo: '../../../../assets/common/partners/google-logo.png' },
    { brandLogo: '../../../../assets/common/partners/linkedin-logo.png' },
    { brandLogo: '../../../../assets/common/partners/stripe-logo.png' }
  ];
}
