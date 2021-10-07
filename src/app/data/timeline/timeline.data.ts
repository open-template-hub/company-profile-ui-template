import { TimeLineItem } from '../../model/timeline/timeline.model';
import { ThemeColorSettings } from '../constant';

const DEFAULT_PARAGRAPH = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis deserunt doloribus consequatur, laudantium odio dolorum laboriosam.';

export const OTH_TIME_LINE: TimeLineItem[] = [
  {
    title: 'Initial Commit',
    date: '27 Feb 2020',
    paragraph: DEFAULT_PARAGRAPH,
    img: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/min/logo/server/auth-server-logo.min.png',
    footerText: '#initialcommit',
  },
  {
    title: 'Web UI Template',
    date: '7 Mar 2020',
    paragraph: DEFAULT_PARAGRAPH,
    img: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/min/logo/ui/web-ui-logo.min.png',
  },
  {
    title: 'Business Logic Server Template',
    date: '23 May 2020',
    paragraph: DEFAULT_PARAGRAPH,
    img: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/min/logo/server/business-logic-server-logo.min.png',
  },
  {
    title: 'Orchestration Server',
    date: '22 May 2020',
    paragraph: DEFAULT_PARAGRAPH,
    img: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/min/logo/server/orchestration-server-logo.min.png',
    theme: ThemeColorSettings.yellow
  },
  {
    title: 'Payment Server Template',
    date: '28 May 2020',
    paragraph: DEFAULT_PARAGRAPH,
    img: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/min/logo/server/payment-server-logo.min.png',
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
  },
  {
    title: 'Analytics Server Template',
    date: '27 Dec 2020',
    paragraph: DEFAULT_PARAGRAPH,
    img: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/min/logo/server/analytics-server-logo.min.png',
  },
  {
    title: 'Mobile Ui Template',
    date: '24 Jan 2021',
    paragraph: DEFAULT_PARAGRAPH,
    img: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/min/logo/ui/mobile-ui-logo.min.png',
  },
  {
    title: 'Ui Generator',
    date: '06 Feb 2021',
    paragraph: DEFAULT_PARAGRAPH,
    img: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/min/logo/generator/server-generator-logo.min.png',
  },
  {
    title: 'Company Profile Ui Template',
    date: '15 Aug 2021',
    paragraph: DEFAULT_PARAGRAPH,
    img: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/min/logo/ui/web-ui-logo.min.png',
  },
  {
    title: 'Mail Server Template',
    date: '16 Sep 2021',
    paragraph: DEFAULT_PARAGRAPH,
    img: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/min/logo/server/mail-server-logo.min.png',
  }
];
