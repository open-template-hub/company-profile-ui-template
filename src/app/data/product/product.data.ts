import { CommandType } from 'src/app/data/command-type.enum';
import { environmentCommon } from '../../../environments/environment-common';
import { ProductLine } from '../../model/product/product.model';
import { ThemeColorSettings } from '../constant';
import { PRICING_RIBBONS } from '../ribbon/ribbon.data';

export const PRODUCT_LINES: ProductLine[] = [
  {
    key: 'servers',
    name: 'Servers',
    description: 'Micro server solutions for your needs',
    products: [
      {
        key: 'auth-server-template',
        name: 'Auth Server',
        description:
          'Authentication Server Template supporting both regular signup and login processes and login with social networks that support OAuth and OAuth2.0',
        href:
          environmentCommon.website.github.url +
          '/' +
          environmentCommon.oth.social.github +
          '/' +
          'auth-server-template',
        logo: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/logo/server/auth-server-logo.png',
        openSource: true,
        features: [
          {
            name: 'Core Features',
            details: [
              {
                name: 'Open Source',
                description:
                  'Customers that pay per user can send out as many signature requests as they want per month!',
              },
              {
                name: 'Templates',
                description:
                  'Streamline documents that need to be reused and sent out for eSignature frequently.',
              },
              {
                name: 'Audio Trail',
                description:
                  'Audit trails are associated with transactions to ensure actions are tracked and time-stamped.',
              },
            ],
          },
          {
            name: 'Security and Trust',
            details: [
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
                name: 'Audio Trail',
                description:
                  'Audit trails are associated with transactions to ensure actions are tracked and time-stamped.',
              },
            ],
          },
          {
            name: 'Data Validation',
            details: [
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
                name: 'Audio Trail',
                description:
                  'Audit trails are associated with transactions to ensure actions are tracked and time-stamped.',
              },
            ],
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
            features: ['Up to 5 users', 'Maximum 100 photos/mo.', ''],
            styles: {
              width: '300px',
              height: '400px',
              fontSize: '1em',
              featureHeight: '10em',
            },
          },
          {
            title: 'BASIC',
            ribbon: PRICING_RIBBONS.get('deal'),
            price: {
              currency: '$',
              value: '49',
              subscriptionTime: 'mo.',
            },
            features: ['Up to 10 users', 'Maximum 100 photos/mo.', 'true'],
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
            features: ['Unlimited users', 'Unlimited photos/mo.', 'true'],
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
          'Payment Server Template is an open source payment server that has simple and generic design to be able to integrated with payment solution providers like Stripe or Coinbase',
        href:
          environmentCommon.website.github.url +
          '/' +
          environmentCommon.oth.social.github +
          '/' +
          'payment-server-template',
        logo: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/logo/server/payment-server-logo.png',
        openSource: true,
        features: [
          {
            name: 'Core Features',
            details: [
              {
                name: 'Open Source',
                description:
                  'Customers that pay per user can send out as many signature requests as they want per month!',
              },
              {
                name: 'Templates',
                description:
                  'Streamline documents that need to be reused and sent out for eSignature frequently.',
              },
              {
                name: 'Audio Trail',
                description:
                  'Audit trails are associated with transactions to ensure actions are tracked and time-stamped.',
              },
            ],
          },
          {
            name: 'Security and Trust',
            details: [
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
                name: 'Audio Trail',
                description:
                  'Audit trails are associated with transactions to ensure actions are tracked and time-stamped.',
              },
            ],
          },
          {
            name: 'Data Validation',
            details: [
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
                name: 'Audio Trail',
                description:
                  'Audit trails are associated with transactions to ensure actions are tracked and time-stamped.',
              },
            ],
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
            features: ['Up to 5 users', 'Maximum 100 photos/mo.', '50 queries'],
            styles: {
              width: '300px',
              height: '400px',
              fontSize: '1em',
              featureHeight: '10em',
            },
          },
          {
            title: 'BASIC',
            ribbon: PRICING_RIBBONS.get('deal'),
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
          environmentCommon.website.github.url +
          '/' +
          environmentCommon.oth.social.github +
          '/' +
          'file-storage-server-template',
        logo: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/logo/server/file-storage-server-logo.png',
        openSource: true,
        features: [
          {
            name: 'Core Features',
            details: [
              {
                name: 'Open Source',
                description:
                  'Customers that pay per user can send out as many signature requests as they want per month!',
              },
              {
                name: 'Templates',
                description:
                  'Streamline documents that need to be reused and sent out for eSignature frequently.',
              },
              {
                name: 'Audio Trail',
                description:
                  'Audit trails are associated with transactions to ensure actions are tracked and time-stamped.',
              },
            ],
          },
          {
            name: 'Security and Trust',
            details: [
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
                name: 'Audio Trail',
                description:
                  'Audit trails are associated with transactions to ensure actions are tracked and time-stamped.',
              },
            ],
          },
          {
            name: 'Data Validation',
            details: [
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
                name: 'Audio Trail',
                description:
                  'Audit trails are associated with transactions to ensure actions are tracked and time-stamped.',
              },
            ],
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
            features: ['Up to 5 users', 'Maximum 100 photos/mo.', '50 queries'],
            styles: {
              width: '300px',
              height: '400px',
              fontSize: '1em',
              featureHeight: '10em',
            },
          },
          {
            title: 'BASIC',
            ribbon: PRICING_RIBBONS.get('deal'),
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
        description:
          'Mail Server Template supporting both regular public and private mail send processes in Message Queue Architecture',
        href:
          environmentCommon.website.github.url +
          '/' +
          environmentCommon.oth.social.github +
          '/' +
          'mail-server-template',
        logo: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/logo/server/mail-server-logo.png',
        openSource: true,
        features: [
          {
            name: 'Core Features',
            details: [
              {
                name: 'Open Source',
                description:
                  'Customers that pay per user can send out as many signature requests as they want per month!',
              },
              {
                name: 'Templates',
                description:
                  'Streamline documents that need to be reused and sent out for eSignature frequently.',
              },
              {
                name: 'Audio Trail',
                description:
                  'Audit trails are associated with transactions to ensure actions are tracked and time-stamped.',
              },
            ],
          },
          {
            name: 'Security and Trust',
            details: [
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
                name: 'Audio Trail',
                description:
                  'Audit trails are associated with transactions to ensure actions are tracked and time-stamped.',
              },
            ],
          },
          {
            name: 'Data Validation',
            details: [
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
                name: 'Audio Trail',
                description:
                  'Audit trails are associated with transactions to ensure actions are tracked and time-stamped.',
              },
            ],
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
            features: ['Up to 5 users', 'Maximum 100 photos/mo.', '50 queries'],
            styles: {
              width: '300px',
              height: '400px',
              fontSize: '1em',
              featureHeight: '10em',
            },
          },
          {
            title: 'BASIC',
            ribbon: PRICING_RIBBONS.get('deal'),
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
          environmentCommon.website.github.url +
          '/' +
          environmentCommon.oth.social.github +
          '/' +
          'analytics-server-template',
        logo: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/logo/server/analytics-server-logo.png',
        openSource: true,
        features: [
          {
            name: 'Core Features',
            details: [
              {
                name: 'Open Source',
                description:
                  'Customers that pay per user can send out as many signature requests as they want per month!',
              },
              {
                name: 'Templates',
                description:
                  'Streamline documents that need to be reused and sent out for eSignature frequently.',
              },
              {
                name: 'Audio Trail',
                description:
                  'Audit trails are associated with transactions to ensure actions are tracked and time-stamped.',
              },
            ],
          },
          {
            name: 'Security and Trust',
            details: [
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
                name: 'Audio Trail',
                description:
                  'Audit trails are associated with transactions to ensure actions are tracked and time-stamped.',
              },
            ],
          },
          {
            name: 'Data Validation',
            details: [
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
                name: 'Audio Trail',
                description:
                  'Audit trails are associated with transactions to ensure actions are tracked and time-stamped.',
              },
            ],
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
            features: ['Up to 5 users', 'Maximum 100 photos/mo.', '50 queries'],
            styles: {
              width: '300px',
              height: '400px',
              fontSize: '1em',
              featureHeight: '10em',
            },
          },
          {
            title: 'BASIC',
            ribbon: PRICING_RIBBONS.get('deal'),
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
        key: 'business-logic-server-template',
        name: 'Business Logic Server',
        description: 'Business Logic Server Template for generic usage in Node.js',
        href:
          environmentCommon.website.github.url +
          '/' +
          environmentCommon.oth.social.github +
          '/' +
          'business-logic-server-template',
        logo: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/logo/server/business-logic-server-logo.png',
        openSource: true,
        features: [
          {
            name: 'Core Features',
            details: [
              {
                name: 'Open Source',
                description:
                  'Customers that pay per user can send out as many signature requests as they want per month!',
              },
              {
                name: 'Templates',
                description:
                  'Streamline documents that need to be reused and sent out for eSignature frequently.',
              },
              {
                name: 'Audio Trail',
                description:
                  'Audit trails are associated with transactions to ensure actions are tracked and time-stamped.',
              },
            ],
          },
          {
            name: 'Security and Trust',
            details: [
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
                name: 'Audio Trail',
                description:
                  'Audit trails are associated with transactions to ensure actions are tracked and time-stamped.',
              },
            ],
          },
          {
            name: 'Data Validation',
            details: [
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
                name: 'Audio Trail',
                description:
                  'Audit trails are associated with transactions to ensure actions are tracked and time-stamped.',
              },
            ],
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
            features: ['Up to 5 users', 'Maximum 100 photos/mo.', '50 queries'],
            styles: {
              width: '300px',
              height: '400px',
              fontSize: '1em',
              featureHeight: '10em',
            },
          },
          {
            title: 'BASIC',
            ribbon: PRICING_RIBBONS.get('deal'),
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
          environmentCommon.website.github.url +
          '/' +
          environmentCommon.oth.social.github +
          '/' +
          'company-profile-ui-template',
        logo: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/logo/ui/web-ui-logo.png',
        heroImage:
          'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/products/company-profile-ui/demonstration.png',
        openSource: true,
        features: [
          {
            name: 'Core Features',
            details: [
              {
                name: 'Open Source',
                description:
                  'Customers that pay per user can send out as many signature requests as they want per month!',
              },
              {
                name: 'Templates',
                description:
                  'Streamline documents that need to be reused and sent out for eSignature frequently.',
              },
              {
                name: 'Audio Trail',
                description:
                  'Audit trails are associated with transactions to ensure actions are tracked and time-stamped.',
              },
            ],
          },
          {
            name: 'Security and Trust',
            details: [
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
                name: 'Audio Trail',
                description:
                  'Audit trails are associated with transactions to ensure actions are tracked and time-stamped.',
              },
            ],
          },
          {
            name: 'Data Validation',
            details: [
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
                name: 'Audio Trail',
                description:
                  'Audit trails are associated with transactions to ensure actions are tracked and time-stamped.',
              },
            ],
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
            features: ['Up to 5 users', 'Maximum 100 photos/mo.', ''],
            styles: {
              width: '300px',
              height: '400px',
              fontSize: '1em',
              featureHeight: '10em',
            },
          },
          {
            title: 'BASIC',
            ribbon: PRICING_RIBBONS.get('deal'),
            price: {
              currency: '$',
              value: '49',
              subscriptionTime: 'mo.',
            },
            features: ['Up to 10 users', 'Maximum 100 photos/mo.', 'true'],
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
            features: ['Unlimited users', 'Unlimited photos/mo.', 'true'],
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
        key: 'web-ui-template',
        name: 'Web UI',
        description: 'Web UI Template for generic usage in Angular',
        href:
          environmentCommon.website.github.url +
          '/' +
          environmentCommon.oth.social.github +
          '/' +
          'web-ui-template',
        logo: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/logo/ui/web-ui-logo.png',
        heroImage:
          'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/products/company-profile-ui/demonstration.png',
        openSource: true,
        features: [
          {
            name: 'Core Features',
            details: [
              {
                name: 'Open Source',
                description:
                  'Customers that pay per user can send out as many signature requests as they want per month!',
              },
              {
                name: 'Templates',
                description:
                  'Streamline documents that need to be reused and sent out for eSignature frequently.',
              },
              {
                name: 'Audio Trail',
                description:
                  'Audit trails are associated with transactions to ensure actions are tracked and time-stamped.',
              },
            ],
          },
          {
            name: 'Security and Trust',
            details: [
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
                name: 'Audio Trail',
                description:
                  'Audit trails are associated with transactions to ensure actions are tracked and time-stamped.',
              },
            ],
          },
          {
            name: 'Data Validation',
            details: [
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
                name: 'Audio Trail',
                description:
                  'Audit trails are associated with transactions to ensure actions are tracked and time-stamped.',
              },
            ],
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
            features: ['Up to 5 users', 'Maximum 100 photos/mo.', ''],
            styles: {
              width: '300px',
              height: '400px',
              fontSize: '1em',
              featureHeight: '10em',
            },
          },
          {
            title: 'BASIC',
            ribbon: PRICING_RIBBONS.get('deal'),
            price: {
              currency: '$',
              value: '49',
              subscriptionTime: 'mo.',
            },
            features: ['Up to 10 users', 'Maximum 100 photos/mo.', 'true'],
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
            features: ['Unlimited users', 'Unlimited photos/mo.', 'true'],
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
        key: 'mobile-ui-template',
        name: 'Mobile UI',
        description: 'Mobile UI Template for generic usage in React Native',
        href:
          environmentCommon.website.github.url +
          '/' +
          environmentCommon.oth.social.github +
          '/' +
          'mobile-ui-template',
        logo: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/logo/ui/mobile-ui-logo.png',
        heroImage:
          'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/products/mobile-ui/demo-light.png',
        openSource: true,
        features: [
          {
            name: 'Core Features',
            details: [
              {
                name: 'Open Source',
                description:
                  'Customers that pay per user can send out as many signature requests as they want per month!',
              },
              {
                name: 'Templates',
                description:
                  'Streamline documents that need to be reused and sent out for eSignature frequently.',
              },
              {
                name: 'Audio Trail',
                description:
                  'Audit trails are associated with transactions to ensure actions are tracked and time-stamped.',
              },
            ],
          },
          {
            name: 'Security and Trust',
            details: [
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
                name: 'Audio Trail',
                description:
                  'Audit trails are associated with transactions to ensure actions are tracked and time-stamped.',
              },
            ],
          },
          {
            name: 'Data Validation',
            details: [
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
                name: 'Audio Trail',
                description:
                  'Audit trails are associated with transactions to ensure actions are tracked and time-stamped.',
              },
            ],
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
            features: ['Up to 5 users', 'Maximum 100 photos/mo.', ''],
            styles: {
              width: '300px',
              height: '400px',
              fontSize: '1em',
              featureHeight: '10em',
            },
          },
          {
            title: 'BASIC',
            ribbon: PRICING_RIBBONS.get('deal'),
            price: {
              currency: '$',
              value: '49',
              subscriptionTime: 'mo.',
            },
            features: ['Up to 10 users', 'Maximum 100 photos/mo.', 'true'],
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
            features: ['Unlimited users', 'Unlimited photos/mo.', 'true'],
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
          environmentCommon.website.github.url +
          '/' +
          environmentCommon.oth.social.github +
          '/' +
          'server-generator',
        logo: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/logo/generator/server-generator-logo.png',
        openSource: true,
        features: [
          {
            name: 'Core Features',
            details: [
              {
                name: 'Open Source',
                description:
                  'Customers that pay per user can send out as many signature requests as they want per month!',
              },
              {
                name: 'Templates',
                description:
                  'Streamline documents that need to be reused and sent out for eSignature frequently.',
              },
              {
                name: 'Audio Trail',
                description:
                  'Audit trails are associated with transactions to ensure actions are tracked and time-stamped.',
              },
            ],
          },
          {
            name: 'Security and Trust',
            details: [
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
                name: 'Audio Trail',
                description:
                  'Audit trails are associated with transactions to ensure actions are tracked and time-stamped.',
              },
            ],
          },
          {
            name: 'Data Validation',
            details: [
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
                name: 'Audio Trail',
                description:
                  'Audit trails are associated with transactions to ensure actions are tracked and time-stamped.',
              },
            ],
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
            features: ['Up to 5 users', 'Maximum 100 photos/mo.', ''],
            styles: {
              width: '300px',
              height: '400px',
              fontSize: '1em',
              featureHeight: '10em',
            },
          },
          {
            title: 'BASIC',
            ribbon: PRICING_RIBBONS.get('deal'),
            price: {
              currency: '$',
              value: '49',
              subscriptionTime: 'mo.',
            },
            features: ['Up to 10 users', 'Maximum 100 photos/mo.', 'true'],
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
            features: ['Unlimited users', 'Unlimited photos/mo.', 'true'],
            styles: {
              width: '300px',
              height: '400px',
              fontSize: '1em',
              featureHeight: '10em',
            },
          },
        ],
        commandLines: [
          {
            command: 'open-template-hub-server-generator',
            type: CommandType.Request,
            timeout: 90,
          },
          {
            command:
              '1) Payment Server\n2) Auth Server\n3) Business Logic Server\n4) File Storage Server\n5) Analytics Server\n6) Mail Server\nPlease enter a server type you want to generate:',
            type: CommandType.Response,
            timeout: 20,
          },
          {
            command: '1',
            type: CommandType.Request,
            timeout: 1200,
          },
          {
            command: 'Project name:',
            type: CommandType.Response,
            timeout: 30,
          },
          {
            command: 'my_project',
            type: CommandType.Request,
            timeout: 160,
          },
          {
            command: 'Done.\nGo into the project: cd my_project',
            type: CommandType.Response,
            timeout: 30,
          },
        ],
      },
      {
        key: 'app-generator',
        name: 'UI Generator',
        description:
          'Command line interface generator of the user interfaces at Open Template Hub',
        href:
          environmentCommon.website.github.url +
          '/' +
          environmentCommon.oth.social.github +
          '/' +
          'app-generator',
        logo: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/logo/generator/server-generator-logo.png',
        openSource: true,
        features: [
          {
            name: 'Core Features',
            details: [
              {
                name: 'Open Source',
                description:
                  'Customers that pay per user can send out as many signature requests as they want per month!',
              },
              {
                name: 'Templates',
                description:
                  'Streamline documents that need to be reused and sent out for eSignature frequently.',
              },
              {
                name: 'Audio Trail',
                description:
                  'Audit trails are associated with transactions to ensure actions are tracked and time-stamped.',
              },
            ],
          },
          {
            name: 'Security and Trust',
            details: [
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
                name: 'Audio Trail',
                description:
                  'Audit trails are associated with transactions to ensure actions are tracked and time-stamped.',
              },
            ],
          },
          {
            name: 'Data Validation',
            details: [
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
                name: 'Audio Trail',
                description:
                  'Audit trails are associated with transactions to ensure actions are tracked and time-stamped.',
              },
            ],
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
            features: ['Up to 5 users', 'Maximum 100 photos/mo.', ''],
            styles: {
              width: '300px',
              height: '400px',
              fontSize: '1em',
              featureHeight: '10em',
            },
          },
          {
            title: 'BASIC',
            ribbon: PRICING_RIBBONS.get('deal'),
            price: {
              currency: '$',
              value: '49',
              subscriptionTime: 'mo.',
            },
            features: ['Up to 10 users', 'Maximum 100 photos/mo.', 'true'],
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
            features: ['Unlimited users', 'Unlimited photos/mo.', 'true'],
            styles: {
              width: '300px',
              height: '400px',
              fontSize: '1em',
              featureHeight: '10em',
            },
          },
        ],
        commandLines: [
          {
            command: 'open-template-hub-app-generator',
            type: CommandType.Request,
            timeout: 90,
          },
          {
            command:
              '1) Web UI\n2) Mobile Application\n3) Company Profile UI\nPlease enter the application type you want to generate:',
            type: CommandType.Response,
            timeout: 20,
          },
          {
            command: '2',
            type: CommandType.Request,
            timeout: 1200,
          },
          {
            command: 'Project name:',
            type: CommandType.Response,
            timeout: 30,
          },
          {
            command: 'my_mobile_app',
            type: CommandType.Request,
            timeout: 160,
          },
          {
            command: 'Done.\nGo into the project: cd my_mobile_app',
            type: CommandType.Response,
            timeout: 30,
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
          environmentCommon.website.github.url +
          '/' +
          environmentCommon.oth.social.github,
        logo: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/logo/server/orchestration-server-logo.png',
        color: ThemeColorSettings.yellow,
        heroImage:
          'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/products/company-profile-ui/oth-packages.png',
        features: [
          {
            name: 'Core Features',
            details: [
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
                name: 'Audio Trail',
                description:
                  'Audit trails are associated with transactions to ensure actions are tracked and time-stamped.',
              },
            ],
          },
          {
            name: 'Security and Trust',
            details: [
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
                name: 'Audio Trail',
                description:
                  'Audit trails are associated with transactions to ensure actions are tracked and time-stamped.',
              },
            ],
          },
          {
            name: 'Data Validation',
            details: [
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
                name: 'Audio Trail',
                description:
                  'Audit trails are associated with transactions to ensure actions are tracked and time-stamped.',
              },
            ],
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
            features: ['Up to 5 users', 'Maximum 100 photos/mo.', ''],
            styles: {
              width: '300px',
              height: '400px',
              fontSize: '1em',
              featureHeight: '10em',
            },
          },
          {
            title: 'BASIC',
            ribbon: PRICING_RIBBONS.get('deal'),
            price: {
              currency: '$',
              value: '49',
              subscriptionTime: 'mo.',
            },
            features: ['Up to 10 users', 'Maximum 100 photos/mo.', 'true'],
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
            features: ['Unlimited users', 'Unlimited photos/mo.', 'true'],
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
          environmentCommon.website.github.url +
          '/' +
          environmentCommon.oth.social.github,
        logo: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/logo/brand-logo.png',
        features: [
          {
            name: 'Security and Trust',
            details: [
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
                name: 'Audio Trail',
                description:
                  'Audit trails are associated with transactions to ensure actions are tracked and time-stamped.',
              },
            ],
          },
          {
            name: 'Data Validation',
            details: [
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
                name: 'Audio Trail',
                description:
                  'Audit trails are associated with transactions to ensure actions are tracked and time-stamped.',
              },
            ],
          },
        ],
      },
      {
        key: 'software-integration',
        name: 'Software Integration',
        description:
          'Open Template Hub is an organization that develops open source micro servers as templates including authentication server, payment server and more..',
        href:
          environmentCommon.website.github.url +
          '/' +
          environmentCommon.oth.social.github,
        logo: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/logo/brand-logo-pieces.png',
        features: [
          {
            name: 'Core Features',
            details: [
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
                name: 'Audio Trail',
                description:
                  'Audit trails are associated with transactions to ensure actions are tracked and time-stamped.',
              },
            ],
          },
          {
            name: 'Data Validation',
            details: [
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
                name: 'Audio Trail',
                description:
                  'Audit trails are associated with transactions to ensure actions are tracked and time-stamped.',
              },
            ],
          },
        ],
      },
      {
        key: 'quality-assurance',
        name: 'Quality Assurance',
        description:
          'Open Template Hub is an organization that develops open source micro servers as templates including authentication server, payment server and more..',
        href:
          environmentCommon.website.github.url +
          '/' +
          environmentCommon.oth.social.github,
        logo: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/logo/brand-logo-shine.png',
        features: [
          {
            name: 'Core Features',
            details: [
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
                name: 'Audio Trail',
                description:
                  'Audit trails are associated with transactions to ensure actions are tracked and time-stamped.',
              },
            ],
          },
          {
            name: 'Security and Trust',
            details: [
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
                name: 'Audio Trail',
                description:
                  'Audit trails are associated with transactions to ensure actions are tracked and time-stamped.',
              },
            ],
          },
        ],
      },
    ],
  },
];
