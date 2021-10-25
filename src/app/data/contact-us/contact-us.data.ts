import { ContactUsFeatures } from '../../model/contact-us/contact-us.model';

export const SIZE_OPTIONS = [ '1-99', '100-999', '1000-4999', '5000+' ];

export const CONTACT_US_FEATURES: ContactUsFeatures = {
  title: $localize `:@@contactUsData.title:With Open Template Hub you can:`,
  features: [
    $localize `:@@contactUsData.features.1:Minimize your effort while building a new software business`,
    $localize `:@@contactUsData.features.2:Focus your resources on your core business`,
    $localize `:@@contactUsData.features.3:Grow even more faster with our premium solutions`
  ]
};
