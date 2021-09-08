import { TimeLine } from '../../model/timeline/timeline.model';
import { ThemeColorSettings } from '../constant';

export const TIME_LINE: TimeLine[] = [
  {
    title: 'Initial commit',
    date: '27 Feb 2020',
    paragraph: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis deserunt doloribus consequatur, laudantium odio dolorum laboriosam.',
    img: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/logo/server/auth-server-logo.png'
  },
  {
    title: 'Web UI template',
    date: '7 Mar 2020',
    paragraph: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis deserunt doloribus consequatur, laudantium odio dolorum laboriosam.',
    img:
        'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/logo/ui/web-ui-logo.png',
    theme: ThemeColorSettings.blue
  },
  {
    title: 'Payment server',
    date: '28 May 2020',
    paragraph: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis deserunt doloribus consequatur, laudantium odio dolorum laboriosam.',
    img:
        'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/logo/server/payment-server-logo.png',
    theme: ThemeColorSettings.red
  },
  {
    title: 'Hello npm',
    date: '14 Jun 2020',
    paragraph: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis deserunt doloribus consequatur, laudantium odio dolorum laboriosam.',
    img:
        'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/logo/generator/server-generator-logo.png',
  },
  {
    title: 'One server to rule them all',
    date: '28 Jun 2020',
    paragraph: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis deserunt doloribus consequatur, laudantium odio dolorum laboriosam.',
    img:
        'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/logo/server/orchestration-server-logo.png',
    theme: ThemeColorSettings.yellow
  },
  {
    title: '???',
    date: 'Today',
    theme: ThemeColorSettings.blue
  }
];
