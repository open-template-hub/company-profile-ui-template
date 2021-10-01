import { Testimonial } from '../../model/testimonial/testimonial.model';
import { ThemeColorSettings } from '../constant';

export const TESTIMONIALS: Testimonial[] = [
  {
    review:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse in elit blandit, tempus risus vitae, elementum eros. Suspendisse nec orci at neque molestie dignissim. ',
    reviewer: {
      name: 'Adam Nolan',
      title: 'CEO @ Dare LLC',
      photoUri:
          'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/common/businessman-1.png',
      social: {
        linkedIn: '',
        twitter: '',
      },
    },
    theme: ThemeColorSettings.yellow,
  },
  {
    review:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse in elit blandit, tempus risus vitae, elementum eros. Suspendisse nec orci at neque molestie dignissim. ',
    reviewer: {
      name: 'Stephanie Doe',
      title: 'CEO & Mitchell Ltd',
      photoUri:
          'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/common/businesswoman-1.png',
      social: {
        linkedIn: '',
        twitter: '',
      },
    },
    theme: ThemeColorSettings.red,
  },
  {
    review:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse in elit blandit, tempus risus vitae, elementum eros. Suspendisse nec orci at neque molestie dignissim. ',
    reviewer: {
      name: 'Jack Avery',
      title: 'CTO @ Krause GbR',
      photoUri:
          'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/common/businessman-2.png',
      social: {
        linkedIn: '',
        twitter: '',
      },
    },
    theme: ThemeColorSettings.blue,
  }
];
