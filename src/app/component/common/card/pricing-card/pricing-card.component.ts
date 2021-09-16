import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { URLS } from '../../../../data/constant';
import { DEFAULT_RIBBON } from '../../../../data/ribbon/ribbon.data';
import { PricingOption } from '../../../../model/pricing/pricing.model';

@Component( {
  selector: 'app-pricing-card',
  templateUrl: './pricing-card.component.html',
  styleUrls: [ './pricing-card.component.scss' ]
} )
export class PricingCardComponent {

  DEFAULT_RIBBON = DEFAULT_RIBBON;
  URLS = URLS;

  @Input() option: PricingOption = {
    title: '',
    ribbon: DEFAULT_RIBBON,
    price: {
      currency: '',
      value: '',
      subscriptionTime: ''
    },
    features: [],
    styles: {
      width: '340px',
      height: '440px',
      fontSize: '0.8em',
      featureHeight: '10em'
    },
    link: URLS.maintenance
  };

  constructor( private router: Router ) {
    // Intentionally blank
  }

  routeToEvent( path: string ) {
    this.router.navigate( [ path ] );
  }
}
