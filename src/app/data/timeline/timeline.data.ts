import { TimeLineItem } from '../../model/timeline/timeline.model';
import { ThemeColorSettings } from '../constant';

const DEFAULT_PARAGRAPH = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis deserunt doloribus consequatur, laudantium odio dolorum laboriosam.';

export const OTH_TIME_LINE: TimeLineItem[] = [
  {
    title: 'Initial Commit',
    date: '27 Feb 2020',
    paragraph: DEFAULT_PARAGRAPH,
    img: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/min/logo/server/auth-server-logo.min.png',
    footerText: '#initial-commit',
  },
  {
    title: 'Web UI Template',
    date: '7 Mar 2020',
    paragraph: DEFAULT_PARAGRAPH,
    img: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/min/logo/ui/web-ui-logo.min.png',
    footerText: '#initial-ui',
  },
  {
    title: 'Business Logic Server Template',
    date: '23 May 2020',
    paragraph: DEFAULT_PARAGRAPH,
    img: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/min/logo/server/business-logic-server-logo.min.png',
    footerText: '#business-logic',
  },
  {
    title: 'Orchestration Server',
    date: '22 May 2020',
    paragraph: DEFAULT_PARAGRAPH,
    img: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/min/logo/server/orchestration-server-logo.min.png',
    theme: ThemeColorSettings.yellow,
    footerText: '#premium',
  },
  {
    title: 'Payment Server Template',
    date: '28 May 2020',
    paragraph: DEFAULT_PARAGRAPH,
    img: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/min/logo/server/payment-server-logo.min.png',
    footerText: '#payment',
  },
  {
    title: 'Hello Npm',
    date: '14 Jun 2020',
    paragraph: DEFAULT_PARAGRAPH,
    img: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/min/logo/generator/server-generator-logo.min.png',
    footerText: '#hellonpm'
  },
  {
    title: 'File Storage Server Template',
    date: '28 Jun 2020',
    paragraph: DEFAULT_PARAGRAPH,
    img: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/min/logo/server/file-storage-server-logo.min.png',
    footerText: '#file-storage',
  },
  {
    title: 'Analytics Server Template',
    date: '27 Dec 2020',
    paragraph: DEFAULT_PARAGRAPH,
    img: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/min/logo/server/analytics-server-logo.min.png',
    footerText: '#analytics',
  },
  {
    title: 'Mobile Ui Template',
    date: '24 Jan 2021',
    paragraph: DEFAULT_PARAGRAPH,
    img: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/min/logo/ui/mobile-ui-logo.min.png',
    footerText: '#mobile-ui',
  },
  {
    title: 'Ui Generator',
    date: '06 Feb 2021',
    paragraph: DEFAULT_PARAGRAPH,
    img: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/min/logo/generator/server-generator-logo.min.png',
    footerText: '#generator',
  },
  {
    title: 'Company Profile Ui Template',
    date: '15 Aug 2021',
    paragraph: DEFAULT_PARAGRAPH,
    img: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/min/logo/ui/web-ui-logo.min.png',
    footerText: '#company',
  },
  {
    title: 'Mail Server Template',
    date: '16 Sep 2021',
    paragraph: DEFAULT_PARAGRAPH,
    img: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/min/logo/server/mail-server-logo.min.png',
    footerText: '#mail',
  }
];
