import { Testimonial } from '../../model/testimonial/testimonial.model';
import { ThemeColorSettings } from '../theme/theme.data';

const DEFAULT_REVIEW = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse in elit blandit, tempus risus vitae, elementum eros. Suspendisse nec orci at neque molestie dignissim.';

export const TESTIMONIALS: Testimonial[] = [
  {
    review: $localize`:@@testimonials.review.adamNolan:I can say, without a doubt, that Open Template Hub\'s products scale quickly and provide the best performance in the market. The best part is that we don\'t have to worry about any licensing fees at all... I highly recommend this affordable and reliable products!`,
    reviewer: {
      name: 'Adam Nolan',
      title: 'CTO @ SmartCoderz.ai',
      photoUri: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/common/businessman-1.png',
      social: {
        linkedIn: '',
        twitter: '',
      },
    },
    theme: ThemeColorSettings.yellow,
  },
  {
    review: $localize`:@@testimonials.review.stephanieDoe:Working with the team at Open Template Hub has been a very satisfying experience. The team was communicative and supportive throughout the project, which made for a pleasant working environment. They were able to complete my project in an expert and timely manner.`,
    reviewer: {
      name: 'Stephanie Doe',
      title: 'Co-Founder @ CloudzNet.io',
      photoUri: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/common/businesswoman-1.png',
      social: {
        linkedIn: '',
        twitter: '',
      },
    },
    theme: ThemeColorSettings.red,
  },
  {
    review: $localize`:@@testimonials.review.jackAvery:I\'ve been researching for days about microserver templates and didn\'t really find much. But then I found Open Template Hub... This is an excellent way to save money and time for startups or small companies who don\'t have the means to pay hefty prices for licenses. Thank you so much.`,
    reviewer: {
      name: 'Jack Avery',
      title: 'CEO @ NomadicSoftt.uk',
      photoUri: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/common/businessman-2.png',
      social: {
        linkedIn: '',
        twitter: '',
      },
    },
    theme: ThemeColorSettings.blue,
  },
  {
    review: $localize`:@@testimonials.review.claudiaGoodwin:As a startup, time is of the essence for us. That\'s why Open Template Hub has been so helpful for us. It has saved us hours of time when it comes to creating the perfect website for our company.`,
    reviewer: {
      name: 'Claudia Goodwin',
      title: 'Co-Founder @ BrightKode.nl',
      photoUri: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/common/businesswoman-3.png',
      social: {
        linkedIn: '',
        twitter: '',
      },
    },
    theme: ThemeColorSettings.orange,
  },
  {
    review: $localize`:@@testimonials.review.leeRees:Open Template Hub\'s Orchestration Server was easy to set up and integrate with our existing servers. I liked how the system automatically synced over all of the latest updates, it made managing our company\'s server so much easier. The customer service is also top-notch!`,
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
    review: $localize`:@@testimonials.review.caseyCarlson:I\'m a big fan of Open Template Hub. The process was really easy, the team is efficient, and the payment service is really accurate. I would recommend this to any business owner.`,
    reviewer: {
      name: 'Casey Carlson',
      title: 'Co-Founder @ FinanceHubz.it',
      photoUri: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/common/businessman-3.png',
      social: {
        linkedIn: '',
        twitter: '',
      },
    },
    theme: ThemeColorSettings.purple,
  },
  {
    review: $localize`:@@testimonials.review.???:Would you like to tell us how was your Open Template Hub experience or are you planning to use our products but need some professional help? Please feel free to reach us from info@opentemplatehub.com or from contact us page.`,
    reviewer: {
      name: '???',
      title: $localize`:@@testimonials.title.???:CEO @ Your Company`,
      photoUri: '',
      social: {
        linkedIn: 'https://www.linkedin.com/company/open-template-hub',
        twitter: 'https://twitter.com/opentemplatehub',
      },
    }
  }
];
