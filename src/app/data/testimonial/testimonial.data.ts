import { Testimonial } from '../../model/testimonial/testimonial.model';
import { ThemeColorSettings } from '../constant';

const DEFAULT_REVIEW = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse in elit blandit, tempus risus vitae, elementum eros. Suspendisse nec orci at neque molestie dignissim.';

export const TESTIMONIALS: Testimonial[] = [
  {
    review: DEFAULT_REVIEW,
    reviewer: {
      name: 'Adam Nolan',
      title: 'CEO @ Dare LLC',
      photoUri: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/common/businessman-1.png',
      social: {
        linkedIn: '',
        twitter: '',
      },
    },
    theme: ThemeColorSettings.yellow,
  },
  {
    review: DEFAULT_REVIEW,
    reviewer: {
      name: 'Stephanie Doe',
      title: 'CEO @ Mitchell Ltd',
      photoUri: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/common/businesswoman-1.png',
      social: {
        linkedIn: '',
        twitter: '',
      },
    },
    theme: ThemeColorSettings.red,
  },
  {
    review: DEFAULT_REVIEW,
    reviewer: {
      name: 'Jack Avery',
      title: 'CTO @ Krause GbR',
      photoUri: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/common/businessman-2.png',
      social: {
        linkedIn: '',
        twitter: '',
      },
    },
    theme: ThemeColorSettings.blue,
  }
];
