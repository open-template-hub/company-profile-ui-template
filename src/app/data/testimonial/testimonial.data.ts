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
  },
  {
    review: DEFAULT_REVIEW,
    reviewer: {
      name: 'Claudia Goodwin',
      title: 'CFO @ BrightCode.nl',
      photoUri: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/common/businesswoman-3.png',
      social: {
        linkedIn: '',
        twitter: '',
      },
    },
    theme: ThemeColorSettings.orange,
  },
  {
    review: DEFAULT_REVIEW,
    reviewer: {
      name: 'Lee Rees',
      title: 'CEO @ LeeSoft.au',
      photoUri: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/common/businessman-4.png',
      social: {
        linkedIn: '',
        twitter: '',
      },
    },
    theme: ThemeColorSettings.pink,
  },
  {
    review: DEFAULT_REVIEW,
    reviewer: {
      name: 'Casey Carlson',
      title: 'Co-Founder @ Carlson&Carlson',
      photoUri: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/common/businessman-3.png',
      social: {
        linkedIn: '',
        twitter: '',
      },
    },
    theme: ThemeColorSettings.purple,
  },
  {
    review: 'Would you like to tell us how was your Open Template Hub experience?',
    reviewer: {
      name: '???',
      title: 'CEO @ Your Company',
      photoUri: '',
      social: {
        linkedIn: 'https://www.linkedin.com/company/open-template-hub',
        twitter: 'https://twitter.com/opentemplatehub',
      },
    }
  }
];
