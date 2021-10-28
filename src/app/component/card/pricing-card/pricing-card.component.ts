import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { URLS } from '../../../data/navigation/navigation.data';
import { PricingOption } from '../../../model/pricing/pricing.model';
import { PricingFeature } from '../../../model/product/product.model';

@Component( {
  selector: 'app-pricing-card',
  templateUrl: './pricing-card.component.html',
  styleUrls: [ './pricing-card.component.scss' ]
} )
export class PricingCardComponent {

  URLS = URLS;

  @Input() demoLink: string;

  @Input() pricingFeatures: PricingFeature[];

  @Input() pricingOption: PricingOption;

  constructor( private router: Router ) {
    // Intentionally blank
  }

  callToAction( link?: string ) {
    if ( link ) {
      this.redirect( link );
    } else if ( this.pricingOption.link ) {
      this.redirect( this.pricingOption.link );
    } else {
      this.redirect( URLS.maintenance );
    }
  }

  redirect( href: string ) {
    if ( href.startsWith( '/' ) ) {
      this.router.navigate( [ href ] );
    } else {
      window.location.href = href;
    }
  }
}
