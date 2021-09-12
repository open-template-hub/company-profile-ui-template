import { PricingOption } from '../../model/pricing/pricing.model';

export const DEFAULT_PRICING_LIST: PricingOption[] = [
  {
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
  },
  {
    title: 'BASIC',
    ribbon: { theme: 'blue', text: 'DEAL' },
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
  },
  {
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
  }
];

