import { CommandType } from 'src/app/enum/command-type.enum';
import { ProductLinePresentationType } from 'src/app/enum/product-line-presentation-type';
import { environmentCommon } from '../../../environments/environment-common';
import { ProductLine } from '../../model/product/product.model';
import { ThemeColorSettings } from '../constant';

export const PRODUCT_LINES: ProductLine[] = [
  {
    key: 'servers',
    name: 'Servers',
    description: 'Micro server solutions for your needs',
    products: [
      {
        key: 'auth-server-nodejs-template',
        name: 'Auth Server',
        description:
            'Authentication Server Template supporting both regular signup and login processes and login with social networks that support OAuth and OAuth2.0',
        href:
            environmentCommon.website.github.url + '/' + environmentCommon.oth.social.github,
        logo: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/logo/server/auth-server-logo.png',
        presentationType: ProductLinePresentationType.Image,
        features: [
          {
            name: 'Signature requests',
            description:
                'Customers that pay per user can send out as many signature requests as they want per month!',
          },
          {
            name: 'Templates',
            description:
                'Streamline documents that need to be reused and sent out for eSignature frequently.',
          },
          {
            name: 'Templates',
            description:
                'Streamline documents that need to be reused and sent out for eSignature frequently.',
          },
        ],
        pricingOptions: [
          {
            title: 'STARTER',
            price: {
              currency: '$',
              value: '9',
              subscriptionTime: 'mo.',
            },
            features: [ 'Up to 5 users', 'Maximum 100 photos/mo.', '50 queries' ],
            styles: {
              width: '300px',
              height: '400px',
              fontSize: '1em',
              featureHeight: '10em',
            },
          },
          {
            title: 'BASIC',
            ribbon: { theme: 'blue', text: 'DEAL' },
            price: {
              currency: '$',
              value: '49',
              subscriptionTime: 'mo.',
            },
            features: [
              'Up to 10 users',
              'Maximum 100 photos/mo.',
              '500 queries',
            ],
            styles: {
              width: '370px',
              height: '520px',
              fontSize: '1.2em',
              featureHeight: '13em',
            },
          },
          {
            title: 'PRO',
            price: {
              currency: '$',
              value: '99',
              subscriptionTime: 'mo.',
            },
            features: [
              'Unlimited users',
              'Unlimited photos/mo.',
              '5000 queries',
            ],
            styles: {
              width: '300px',
              height: '400px',
              fontSize: '1em',
              featureHeight: '10em',
            },
          },
          {
            title: 'STARTER',
            price: {
              currency: '$',
              value: '9',
              subscriptionTime: 'mo.',
            },
            features: [ 'Up to 5 users', 'Maximum 100 photos/mo.', '50 queries' ],
            styles: {
              width: '300px',
              height: '400px',
              fontSize: '1em',
              featureHeight: '10em',
            },
          },
          {
            title: 'BASIC',
            ribbon: { theme: 'blue', text: 'DEAL' },
            price: {
              currency: '$',
              value: '49',
              subscriptionTime: 'mo.',
            },
            features: [
              'Up to 10 users',
              'Maximum 100 photos/mo.',
              '500 queries',
            ],
            styles: {
              width: '370px',
              height: '520px',
              fontSize: '1.2em',
              featureHeight: '13em',
            },
          },
          {
            title: 'PRO',
            price: {
              currency: '$',
              value: '99',
              subscriptionTime: 'mo.',
            },
            features: [
              'Unlimited users',
              'Unlimited photos/mo.',
              '5000 queries',
            ],
            styles: {
              width: '300px',
              height: '400px',
              fontSize: '1em',
              featureHeight: '10em',
            },
          },
        ],
      },
      {
        key: 'payment-server-template',
        name: 'Payment Server',
        description:
            'Payment Server template integrated with Stripe and Coinbase Commerce payment systems',
        href:
            environmentCommon.website.github.url + '/' + environmentCommon.oth.social.github,
        logo: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/logo/server/payment-server-logo.png',
        presentationType: ProductLinePresentationType.Image,
        features: [
          {
            name: 'Signature requests',
            description:
                'Customers that pay per user can send out as many signature requests as they want per month!',
          },
          {
            name: 'Templates',
            description:
                'Streamline documents that need to be reused and sent out for eSignature frequently.',
          },
          {
            name: 'Templates',
            description:
                'Streamline documents that need to be reused and sent out for eSignature frequently.',
          },
        ],
        pricingOptions: [
          {
            title: 'STARTER',
            price: {
              currency: '$',
              value: '9',
              subscriptionTime: 'mo.',
            },
            features: [ 'Up to 5 users', 'Maximum 100 photos/mo.', '50 queries' ],
            styles: {
              width: '300px',
              height: '400px',
              fontSize: '1em',
              featureHeight: '10em',
            },
          },
          {
            title: 'BASIC',
            ribbon: { theme: 'blue', text: 'DEAL' },
            price: {
              currency: '$',
              value: '49',
              subscriptionTime: 'mo.',
            },
            features: [
              'Up to 10 users',
              'Maximum 100 photos/mo.',
              '500 queries',
            ],
            styles: {
              width: '370px',
              height: '520px',
              fontSize: '1.2em',
              featureHeight: '13em',
            },
          },
          {
            title: 'PRO',
            price: {
              currency: '$',
              value: '99',
              subscriptionTime: 'mo.',
            },
            features: [
              'Unlimited users',
              'Unlimited photos/mo.',
              '5000 queries',
            ],
            styles: {
              width: '300px',
              height: '400px',
              fontSize: '1em',
              featureHeight: '10em',
            },
          },
        ],
      },
      {
        key: 'file-storage-server-template',
        name: 'File Storage Server',
        description:
            'File Storage Server Template that supports uploading and downloading files from AWS S3',
        href:
            environmentCommon.website.github.url + '/' + environmentCommon.oth.social.github,
        logo: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/logo/server/file-storage-server-logo.png',
        presentationType: ProductLinePresentationType.Image,
        features: [
          {
            name: 'Signature requests',
            description:
                'Customers that pay per user can send out as many signature requests as they want per month!',
          },
          {
            name: 'Templates',
            description:
                'Streamline documents that need to be reused and sent out for eSignature frequently.',
          },
          {
            name: 'Templates',
            description:
                'Streamline documents that need to be reused and sent out for eSignature frequently.',
          },
        ],
        pricingOptions: [
          {
            title: 'STARTER',
            price: {
              currency: '$',
              value: '9',
              subscriptionTime: 'mo.',
            },
            features: [ 'Up to 5 users', 'Maximum 100 photos/mo.', '50 queries' ],
            styles: {
              width: '300px',
              height: '400px',
              fontSize: '1em',
              featureHeight: '10em',
            },
          },
          {
            title: 'BASIC',
            ribbon: { theme: 'blue', text: 'DEAL' },
            price: {
              currency: '$',
              value: '49',
              subscriptionTime: 'mo.',
            },
            features: [
              'Up to 10 users',
              'Maximum 100 photos/mo.',
              '500 queries',
            ],
            styles: {
              width: '370px',
              height: '520px',
              fontSize: '1.2em',
              featureHeight: '13em',
            },
          },
          {
            title: 'PRO',
            price: {
              currency: '$',
              value: '99',
              subscriptionTime: 'mo.',
            },
            features: [
              'Unlimited users',
              'Unlimited photos/mo.',
              '5000 queries',
            ],
            styles: {
              width: '300px',
              height: '400px',
              fontSize: '1em',
              featureHeight: '10em',
            },
          },
        ],
      },
      {
        key: 'mail-server-template',
        name: 'Mail Server',
        description: 'Mail Server Template supporting both regular public and private mail send processes in Message Queue Architecture',
        href: environmentCommon.website.github.url + '/' + environmentCommon.oth.social.github,
        logo: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/logo/server/mail-server-logo.png',
        presentationType: ProductLinePresentationType.Image,
        features: [
          {
            name: 'Signature requests',
            description:
                'Customers that pay per user can send out as many signature requests as they want per month!',
          },
          {
            name: 'Templates',
            description:
                'Streamline documents that need to be reused and sent out for eSignature frequently.',
          },
          {
            name: 'Templates',
            description:
                'Streamline documents that need to be reused and sent out for eSignature frequently.',
          },
        ],
        pricingOptions: [
          {
            title: 'STARTER',
            price: {
              currency: '$',
              value: '9',
              subscriptionTime: 'mo.',
            },
            features: [ 'Up to 5 users', 'Maximum 100 photos/mo.', '50 queries' ],
            styles: {
              width: '300px',
              height: '400px',
              fontSize: '1em',
              featureHeight: '10em',
            },
          },
          {
            title: 'BASIC',
            ribbon: { theme: 'blue', text: 'DEAL' },
            price: {
              currency: '$',
              value: '49',
              subscriptionTime: 'mo.',
            },
            features: [
              'Up to 10 users',
              'Maximum 100 photos/mo.',
              '500 queries',
            ],
            styles: {
              width: '370px',
              height: '520px',
              fontSize: '1.2em',
              featureHeight: '13em',
            },
          },
          {
            title: 'PRO',
            price: {
              currency: '$',
              value: '99',
              subscriptionTime: 'mo.',
            },
            features: [
              'Unlimited users',
              'Unlimited photos/mo.',
              '5000 queries',
            ],
            styles: {
              width: '300px',
              height: '400px',
              fontSize: '1em',
              featureHeight: '10em',
            },
          },
        ],
      },
      {
        key: 'analytics-server-template',
        name: 'Analytics Server',
        description: 'Analytics Server Template for generic usage in Node.js',
        href:
            environmentCommon.website.github.url + '/' + environmentCommon.oth.social.github,
        logo: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/logo/server/analytics-server-logo.png',
        presentationType: ProductLinePresentationType.Image,
        features: [
          {
            name: 'Signature requests',
            description:
                'Customers that pay per user can send out as many signature requests as they want per month!',
          },
          {
            name: 'Templates',
            description:
                'Streamline documents that need to be reused and sent out for eSignature frequently.',
          },
          {
            name: 'Templates',
            description:
                'Streamline documents that need to be reused and sent out for eSignature frequently.',
          },
        ],
        pricingOptions: [
          {
            title: 'STARTER',
            price: {
              currency: '$',
              value: '9',
              subscriptionTime: 'mo.',
            },
            features: [ 'Up to 5 users', 'Maximum 100 photos/mo.', '50 queries' ],
            styles: {
              width: '300px',
              height: '400px',
              fontSize: '1em',
              featureHeight: '10em',
            },
          },
          {
            title: 'BASIC',
            ribbon: { theme: 'blue', text: 'DEAL' },
            price: {
              currency: '$',
              value: '49',
              subscriptionTime: 'mo.',
            },
            features: [
              'Up to 10 users',
              'Maximum 100 photos/mo.',
              '500 queries',
            ],
            styles: {
              width: '370px',
              height: '520px',
              fontSize: '1.2em',
              featureHeight: '13em',
            },
          },
          {
            title: 'PRO',
            price: {
              currency: '$',
              value: '99',
              subscriptionTime: 'mo.',
            },
            features: [
              'Unlimited users',
              'Unlimited photos/mo.',
              '5000 queries',
            ],
            styles: {
              width: '300px',
              height: '400px',
              fontSize: '1em',
              featureHeight: '10em',
            },
          },
        ],
      },
      {
        key: 'basic-info-server-template',
        name: 'Basic Info Server',
        description: 'Basic Info Server Template for generic usage in Node.js',
        href:
            environmentCommon.website.github.url + '/' + environmentCommon.oth.social.github,
        logo: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/logo/server/basic-info-server-logo.png',
        presentationType: ProductLinePresentationType.Image,
        features: [
          {
            name: 'Signature requests',
            description:
                'Customers that pay per user can send out as many signature requests as they want per month!',
          },
          {
            name: 'Templates',
            description:
                'Streamline documents that need to be reused and sent out for eSignature frequently.',
          },
          {
            name: 'Templates',
            description:
                'Streamline documents that need to be reused and sent out for eSignature frequently.',
          },
        ],
        pricingOptions: [
          {
            title: 'STARTER',
            price: {
              currency: '$',
              value: '9',
              subscriptionTime: 'mo.',
            },
            features: [ 'Up to 5 users', 'Maximum 100 photos/mo.', '50 queries' ],
            styles: {
              width: '300px',
              height: '400px',
              fontSize: '1em',
              featureHeight: '10em',
            },
          },
          {
            title: 'BASIC',
            ribbon: { theme: 'blue', text: 'DEAL' },
            price: {
              currency: '$',
              value: '49',
              subscriptionTime: 'mo.',
            },
            features: [
              'Up to 10 users',
              'Maximum 100 photos/mo.',
              '500 queries',
            ],
            styles: {
              width: '370px',
              height: '520px',
              fontSize: '1.2em',
              featureHeight: '13em',
            },
          },
          {
            title: 'PRO',
            price: {
              currency: '$',
              value: '99',
              subscriptionTime: 'mo.',
            },
            features: [
              'Unlimited users',
              'Unlimited photos/mo.',
              '5000 queries',
            ],
            styles: {
              width: '300px',
              height: '400px',
              fontSize: '1em',
              featureHeight: '10em',
            },
          },
        ],
      },
    ],
  },
  {
    key: 'user-interfaces',
    name: 'User Interfaces',
    description: 'User interface solutions for your needs',
    products: [
      {
        key: 'company-profile-ui-template',
        name: 'Company Profile UI',
        description: 'Company Profile UI Template for generic usage in Angular',
        href:
            environmentCommon.website.github.url + '/' + environmentCommon.oth.social.github,
        logo: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/logo/ui/web-ui-logo.png',
        presentationType: ProductLinePresentationType.Image,
        heroImage: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/products/company-profile-ui/demonstration.png',
      },
      {
        key: 'web-ui-template',
        name: 'Web UI',
        description: 'Web UI Template for generic usage in Angular',
        href:
            environmentCommon.website.github.url + '/' + environmentCommon.oth.social.github,
        logo: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/logo/ui/web-ui-logo.png',
        presentationType: ProductLinePresentationType.Image,
      },
      {
        key: 'mobile-ui-template',
        name: 'Mobile UI',
        description: 'Mobile UI Template for generic usage in React Native',
        href:
            environmentCommon.website.github.url + '/' + environmentCommon.oth.social.github,
        logo: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/logo/ui/mobile-ui-logo.png',
        presentationType: ProductLinePresentationType.Image,
        heroImage: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/products/mobile-ui/demo-light.png',
      },
    ],
  },
  {
    key: 'cli-generators',
    name: 'CLI Generators',
    description: 'Command line interface generators',
    products: [
      {
        key: 'server-generator',
        name: 'Server Generator',
        description:
            'Command line interface generator of the servers at Open Template Hub',
        href:
            environmentCommon.website.github.url + '/' + environmentCommon.oth.social.github,
        logo: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/logo/generator/server-generator-logo.png',
        presentationType: ProductLinePresentationType.Terminal,
        commandLines: [
          {
            command: 'open-template-hub-server-generator',
            type: CommandType.Request,
          },
          {
            command: '1) Payment Server',
            type: CommandType.Response,
          },
          {
            command: '2) Auth Server',
            type: CommandType.Response,
          },
          {
            command: '3) Basic Info Server',
            type: CommandType.Response,
          },
          {
            command: '4) File Storage Server',
            type: CommandType.Response,
          },
          {
            command: '5) Analytics Server',
            type: CommandType.Response,
          },
          {
            command: '6) Mail Server',
            type: CommandType.Response,
          },
          {
            command: 'Please enter a server type you want to generate:',
            type: CommandType.Response,
          },
          {
            command: '1',
            type: CommandType.Request,
          },
          {
            command: 'Project name:',
            type: CommandType.Response,
          },
          {
            command: 'my_project',
            type: CommandType.Request,
          },
          {
            command: 'Done.',
            type: CommandType.Response,
          },
          {
            command: 'Go into the project: cd my_project',
            type: CommandType.Response,
          },
        ],
      },
      {
        key: 'app-generator',
        name: 'UI Generator',
        description:
            'Command line interface generator of the user interfaces at Open Template Hub',
        href:
            environmentCommon.website.github.url + '/' + environmentCommon.oth.social.github,
        logo: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/logo/generator/server-generator-logo.png',
        presentationType: ProductLinePresentationType.Terminal,
        commandLines: [
          {
            command: 'open-template-hub-app-generator',
            type: CommandType.Request,
          },
          {
            command: '1) Web UI',
            type: CommandType.Response,
          },
          {
            command: '2) Mobile Application',
            type: CommandType.Response,
          },
          {
            command: '3) Company Profile UI',
            type: CommandType.Response,
          },
          {
            command: 'Please enter the application type you want to generate:',
            type: CommandType.Response,
          },
          {
            command: '2',
            type: CommandType.Request,
          },
          {
            command: 'Project name:',
            type: CommandType.Response,
          },
          {
            command: 'my_mobile_app',
            type: CommandType.Request,
          },
          {
            command: 'Done.',
            type: CommandType.Response,
          },
          {
            command: 'Go into the project: cd my_mobile_app',
            type: CommandType.Response,
          },
        ],
      },
    ],
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
        href:
            environmentCommon.website.github.url + '/' + environmentCommon.oth.social.github,
        logo: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/logo/server/orchestration-server-logo.png',
        color: ThemeColorSettings.yellow,
        presentationType: ProductLinePresentationType.Image,
        heroImage: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/products/company-profile-ui/oth-packages.png',
      },
    ],
  },
];

export const SERVICES: ProductLine[] = [
  {
    key: 'services',
    name: 'Services',
    description: 'Services that we provide',
    products: [
      {
        key: 'software-consultancy',
        name: 'Software Consultancy',
        description:
            'Open Template Hub is an organization that develops open source micro servers as templates including authentication server, payment server and more..',
        href:
            environmentCommon.website.github.url + '/' + environmentCommon.oth.social.github,
        logo: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/logo/brand-logo.png',
        presentationType: ProductLinePresentationType.Image,
      },
      {
        key: 'cloud-integration',
        name: 'Cloud Integration',
        description:
            'Open Template Hub is an organization that develops open source micro servers as templates including authentication server, payment server and more..',
        href:
            environmentCommon.website.github.url + '/' + environmentCommon.oth.social.github,
        logo: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/logo/brand-logo.png',
        presentationType: ProductLinePresentationType.Image,
      },
      {
        key: 'quality-assurance',
        name: 'Quality Assurance',
        description:
            'Open Template Hub is an organization that develops open source micro servers as templates including authentication server, payment server and more..',
        href:
            environmentCommon.website.github.url + '/' + environmentCommon.oth.social.github,
        logo: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/logo/brand-logo.png',
        presentationType: ProductLinePresentationType.Image,
      },
    ],
  },
];
