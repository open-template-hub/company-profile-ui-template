import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { environmentCommon } from '../../../environments/environment-common';
import { BRAND } from '../../data/brand/brand.data';
import { Partner } from '../../model/partner/partner.model';
import { Product } from '../../model/product/product.model';

@Component( {
  selector: 'app-product-presentation',
  templateUrl: './product-presentation.component.html',
  styleUrls: [ './product-presentation.component.scss' ]
} )
export class ProductPresentationComponent {

  @Input() product: Product;
  @Input() productLineKey: string;

  SOCIAL_LOGIN_PARTNERS: Partner[] = [];
  PAYMENT_PARTNERS: Partner[] = [];
  BRAND = BRAND;

  constructor( public router: Router ) {

    for ( const website in environment.oauth ) {
      // filter only oauth configured websites
      if ( environmentCommon.website[ website ].logo ) {
        this.SOCIAL_LOGIN_PARTNERS.push( {
          name: website,
          logo: environmentCommon.website[ website ].logo,
          url: environmentCommon.website[ website ].url
        } );
      }
    }

    for ( const website in environment.payment ) {
      // filter only oauth configured websites
      if ( environmentCommon.website[ website ].logo ) {
        this.PAYMENT_PARTNERS.push( {
          name: website,
          logo: environmentCommon.website[ website ].logo,
          url: environmentCommon.website[ website ].url
        } );
      }
    }
  }

  getPresentationSwiper() {
    switch ( this.product.key ) {
      case 'auth-server-template': {
        return this.SOCIAL_LOGIN_PARTNERS.map( partner => partner.logo );
      }
      case 'payment-server-template': {
        return this.PAYMENT_PARTNERS.map( partner => partner.logo );
      }
      default: {
        return [];
      }
    }
  }
}
