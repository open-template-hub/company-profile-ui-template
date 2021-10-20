import { ContactUsFeatures } from '../../model/contact-us/contact-us.model';

export const SIZE_OPTIONS = [ '1-99', '100-999', '1000-4999', '5000+' ];

export const CONTACT_US_FEATURES: ContactUsFeatures = {
  title: $localize`With Open Template Hub you can:`,
  features: [
    $localize`Minimize your effort while building a new software business`,
    $localize`Focus your resources on your core business`,
    $localize`Grow even more faster with our premium solutions`
  ]
};
