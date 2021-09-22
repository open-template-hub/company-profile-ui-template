import { TimeLine } from '../../model/timeline/timeline.model';
import { ThemeColorSettings } from '../constant';

export const TIME_LINE: TimeLine[] = [
  {
    title: 'Initial commit',
    date: '27 Feb 2020',
    paragraph: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis deserunt doloribus consequatur, laudantium odio dolorum laboriosam.',
    img: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/logo/server/auth-server.png'
  },
  {
    title: 'Web UI template',
    date: '7 Mar 2020',
    paragraph: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis deserunt doloribus consequatur, laudantium odio dolorum laboriosam.',
    img:
        'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/products/company-profile-ui/demonstration.png',
  },
  {
    title: 'Payment server',
    date: '28 May 2020',
    paragraph: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis deserunt doloribus consequatur, laudantium odio dolorum laboriosam.',
    img:
        'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/logo/server/payment-server.png',
  },
  {
    title: 'Hello npm',
    date: '14 Jun 2020',
    paragraph: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis deserunt doloribus consequatur, laudantium odio dolorum laboriosam.',
    img:
        'https://avatars.githubusercontent.com/u/6078720?s=200&v=4',
    theme: ThemeColorSettings.red
  },
  {
    title: 'One server to rule them all',
    date: '28 Jun 2020',
    paragraph: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis deserunt doloribus consequatur, laudantium odio dolorum laboriosam.',
    img:
        'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/products/company-profile-ui/oth-packages.png',
    theme: ThemeColorSettings.yellow
  },
  {
    title: '???',
    date: 'Today',
    theme: ThemeColorSettings.blue
  }
];
