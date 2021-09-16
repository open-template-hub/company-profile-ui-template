import { ContactUsFeatures } from '../../page/landing-layout/contact-us/contact-us.component';

export const SIZE_OPTIONS = [ '1-99', '100-999', '1000-4999', '5000+' ];

export const PAYMENTS_VALUE_OPTIONS = [ 'None, just getting started', 'Less than $50,000',
  '$50,000 to $100,000', '$100,000 to $1,000,000', '$1,000,000 to $10,000,000', 'More than $10,000,000' ];

export const CONTACT_US_FEATURES: ContactUsFeatures = {
  title: 'With Open Template Hub you can:',
  features: [
    'Focus critical developer resources on your core business',
    'Launch new products faster with less payments code',
    'Improve conversion from international customers'
  ]
};
