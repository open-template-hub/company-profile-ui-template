import { Component } from '@angular/core';
import { PricingOption } from '../../../component/common/card/pricing-card/pricing-card.component';

@Component( {
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: [ './pricing.component.scss' ]
} )
export class PricingComponent {

  starterOption: PricingOption = {
    title: 'STARTER',
    price: {
      currency: '$',
      value: '9',
      subscriptionTime: 'mo.'
    },
    features: [ 'Up to 5 users', 'Maximum 100 photos/mo.', '50 queries' ],
    styles: {
      width: '300px',
      height: '400px',
      fontSize: '1em',
      featureHeight: '10em'
    }
  };

  basicOption: PricingOption = {
    title: 'BASIC',
    ribbon: { type: 'error', text: 'DEAL' },
    price: {
      currency: '$',
      value: '49',
      subscriptionTime: 'mo.'
    },
    features: [ 'Up to 10 users', 'Maximum 100 photos/mo.', '500 queries' ],
    styles: {
      width: '370px',
      height: '520px',
      fontSize: '1.2em',
      featureHeight: '13em'
    }
  };

  proOption: PricingOption = {
    title: 'PRO',
    price: {
      currency: '$',
      value: '99',
      subscriptionTime: 'mo.'
    },
    features: [ 'Unlimited users', 'Unlimited photos/mo.', '5000 queries' ],
    styles: {
      width: '300px',
      height: '400px',
      fontSize: '1em',
      featureHeight: '10em'
    }
  };

  constructor() {
    // Intentionally blank
  }
}
