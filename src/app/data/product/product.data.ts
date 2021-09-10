import { environmentCommon } from '../../../environments/environment-common';
import { ProductLine } from '../../model/product/product.model';
import { ThemeColorSettings } from '../constant';
import { DEFAULT_PRICING_LIST } from '../pricing/pricing.data';

export const PRODUCT_LINES: ProductLine[] = [
  {
    key: 'servers',
    name: 'Servers',
    description: 'Micro server solutions for your needs',
    products: [
      {
        key: 'auth-server',
        name: 'Auth Server',
        description: 'Authentication Server Template supporting both regular signup and login processes and login with social networks that support OAuth and OAuth2.0',
        href: environmentCommon.website.github.url + environmentCommon.oth.social.github,
        logo: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/logo/server/auth-server-logo.png',
        heroImage: 'assets/common/server/authentication.png',
        counters: [
          {
            name: 'Npm Downloads',
            value: '10+ million'
          },
          {
            name: 'Server Types',
            value: '3'
          },
          {
            name: 'UI Types',
            value: '5'
          }
        ],
        pricing: DEFAULT_PRICING_LIST
      },
      {
        key: 'payment-server',
        name: 'Payment Server',
        description: 'Payment Server template integrated with Stripe and Coinbase Commerce payment systems',
        href: environmentCommon.website.github.url + environmentCommon.oth.social.github,
        logo: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/logo/server/payment-server-logo.png',
        heroImage: 'assets/common/server/payment.png',
        counters: [
          {
            name: 'Npm Downloads',
            value: '10+ million'
          },
          {
            name: 'Server Types',
            value: '3'
          },
          {
            name: 'UI Types',
            value: '5'
          }
        ],
        pricing: DEFAULT_PRICING_LIST
      },
      {
        key: 'file-storage-server',
        name: 'File Storage Server',
        description: 'File Storage Server Template that supports uploading and downloading files from AWS S3',
        href: environmentCommon.website.github.url + environmentCommon.oth.social.github,
        logo: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/logo/server/file-storage-server-logo.png',
        heroImage: 'assets/common/server/file-storage.png',
        counters: [
          {
            name: 'Npm Downloads',
            value: '10+ million'
          },
          {
            name: 'Server Types',
            value: '3'
          },
          {
            name: 'UI Types',
            value: '5'
          }
        ],
        pricing: DEFAULT_PRICING_LIST
      },
      {
        key: 'analytics-server',
        name: 'Analytics Server',
        description: 'Analytics Server Template for generic usage in Node.js',
        href: environmentCommon.website.github.url + environmentCommon.oth.social.github,
        logo: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/logo/server/analytics-server-logo.png',
        heroImage: 'assets/common/server/analytics.png',
        counters: [
          {
            name: 'Npm Downloads',
            value: '10+ million'
          },
          {
            name: 'Server Types',
            value: '3'
          },
          {
            name: 'UI Types',
            value: '5'
          }
        ],
        pricing: DEFAULT_PRICING_LIST
      },
      {
        key: 'basic-info-server',
        name: 'Basic Info Server',
        description: 'Basic Info Server Template for generic usage in Node.js',
        href: environmentCommon.website.github.url + environmentCommon.oth.social.github,
        logo: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/logo/server/basic-info-server-logo.png',
        heroImage: 'assets/common/server/basic-info.png',
        counters: [
          {
            name: 'Npm Downloads',
            value: '10+ million'
          },
          {
            name: 'Server Types',
            value: '3'
          },
          {
            name: 'UI Types',
            value: '5'
          }
        ],
        pricing: DEFAULT_PRICING_LIST
      }
    ]
  },
  {
    key: 'user-interfaces',
    name: 'User Interfaces',
    description: 'User interface solutions for your needs',
    products: [
      {
        //        key: 'company-profile-ui',
        name: 'Company Profile UI',
        description: 'Company Profile UI Template for generic usage in Angular',
        href: environmentCommon.website.github.url + environmentCommon.oth.social.github,
        logo: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/logo/ui/web-ui-logo.png',
        heroImage: '',
        counters: [],
        pricing: DEFAULT_PRICING_LIST
      },
      {
        //        key: 'web-ui',
        name: 'Web UI',
        description: 'Web UI Template for generic usage in Angular',
        href: environmentCommon.website.github.url + environmentCommon.oth.social.github,
        logo: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/logo/ui/web-ui-logo.png',
        heroImage: '',
        counters: [],
        pricing: DEFAULT_PRICING_LIST
      },
      {
        //        key: 'mobile-ui',
        name: 'Mobile UI',
        description: 'Mobile UI Template for generic usage in React Native',
        href: environmentCommon.website.github.url + environmentCommon.oth.social.github,
        logo: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/logo/ui/mobile-ui-logo.png',
        heroImage: '',
        counters: [],
        pricing: DEFAULT_PRICING_LIST
      }
    ]
  },
  {
    key: 'cli-generators',
    name: 'CLI Generators',
    description: 'Command line interface generators',
    products: [
      {
        //        key: 'server-generator',
        name: 'Server Generator',
        description: 'Command line interface generator of the servers at Open Template Hub',
        href: environmentCommon.website.github.url + environmentCommon.oth.social.github,
        logo: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/logo/generator/server-generator-logo.png',
        heroImage: '',
        counters: [],
        pricing: DEFAULT_PRICING_LIST
      },
      {
        //        key: 'ui-generator',
        name: 'UI Generator',
        description: 'Command line interface generator of the user interfaces at Open Template Hub',
        href: environmentCommon.website.github.url + environmentCommon.oth.social.github,
        logo: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/logo/generator/server-generator-logo.png',
        heroImage: '',
        counters: [],
        pricing: DEFAULT_PRICING_LIST
      }
    ]
  },
  {
    key: 'premium',
    name: 'Premium',
    description: 'Get more things done with our premium solutions',
    color: ThemeColorSettings.yellow,
    products: [
      {
        key: 'orchestration-server',
        name: 'Orchestration Server',
        description: 'One server to orchestrate them all!',
        href: environmentCommon.website.github.url + environmentCommon.oth.social.github,
        logo: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/logo/server/orchestration-server-logo.png',
        heroImage: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/products/company-profile-ui/oth-packages.png',
        color: ThemeColorSettings.yellow,
        counters: [
          {
            name: 'Npm Downloads',
            value: '10+ million'
          },
          {
            name: 'Server Types',
            value: '3'
          },
          {
            name: 'UI Types',
            value: '5'
          }
        ],
        pricing: DEFAULT_PRICING_LIST
      }
    ]
  }
];

export const SERVICES: ProductLine[ ] = [
  {
    key: 'services',
    name: 'Services',
    description: 'Services that we provide',
    products: [
      {
        key: 'software-consultancy',
        name: 'Software Consultancy',
        description: 'Open Template Hub is an organization that develops open source micro servers as templates including authentication server, payment server and more..',
        href: environmentCommon.website.github.url + environmentCommon.oth.social.github,
        logo: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/logo/brand-logo.png',
        heroImage: '',
        counters: [],
        pricing: DEFAULT_PRICING_LIST
      },
      {
        key: 'cloud-integration',
        name: 'Cloud Integration',
        description: 'Open Template Hub is an organization that develops open source micro servers as templates including authentication server, payment server and more..',
        href: environmentCommon.website.github.url + environmentCommon.oth.social.github,
        logo: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/logo/brand-logo.png',
        heroImage: '',
        counters: [],
        pricing: DEFAULT_PRICING_LIST
      },
      {
        key: 'quality-assurance',
        name: 'Quality Assurance',
        description: 'Open Template Hub is an organization that develops open source micro servers as templates including authentication server, payment server and more..',
        href: environmentCommon.website.github.url + environmentCommon.oth.social.github,
        logo: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/logo/brand-logo.png',
        heroImage: '',
        counters: [],
        pricing: DEFAULT_PRICING_LIST
      }
    ]
  },
];
