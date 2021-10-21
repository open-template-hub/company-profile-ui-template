import { CommandType } from 'src/app/data/command-type/command-type.enum';
import { environmentCommon } from '../../../environments/environment-common';
import { ProductLine } from '../../model/product/product.model';
import { ThemeColorSettings } from '../constant';
import { PRICING_RIBBONS } from '../ribbon/ribbon.data';

const OPEN_SOURCE_FEATURE = {
  name: $localize`Open Source`,
  description: 'No need to pay a price to get started. Get the latest updates from community driven open source project.',
};

const PROFESSIONAL_HELP_FEATURE = {
  name: $localize`Professional Help`,
  description: $localize`Get an up and running server.`,
};

const CUSTOMISED_SOLUTIONS_FEATURE = {
  name: `Customised Solutions`,
  description: `Fully customised functional solutions for your needs.`,
};

const CI_CD_AUTOMATION_FEATURE = {
  name: $localize`CI/CD Automation`,
  description: $localize`Get a CI/CD integration with automated API tests.`,
};

const CUSTOMISED_AUTOMATIONS_FEATURE = {
  name: `Customised Automations`,
  description: `Fully customised automation solutions for your needs.`,
};

const SECURITY_REPORTS_FEATURE = {
  name: `Security Reports`,
  description: `Get a security report at the end of each month.`,
};

const CUSTOM_SECURITY_COMPLIANCE_FEATURE = {
  name: `Custom Security Compliance`,
  description: `Fully customised security compliance solutions for your needs.`,
};

const DEFAULT_OPEN_SOURCE_SERVER_FEATURES = [
  {
    name: $localize`Core Features`,
    details: [
      OPEN_SOURCE_FEATURE,
      PROFESSIONAL_HELP_FEATURE,
      CUSTOMISED_SOLUTIONS_FEATURE,
    ],
  },
  {
    name: `Quality and DX`,
    details: [
      CI_CD_AUTOMATION_FEATURE,
      CUSTOMISED_AUTOMATIONS_FEATURE,
    ],
  },
  {
    name: `Security`,
    details: [
      SECURITY_REPORTS_FEATURE,
      CUSTOM_SECURITY_COMPLIANCE_FEATURE,
    ],
  },
];

const FREE_PRICING_OPTION = {
  title: `Free`,
  description: 'For Individuals',
  price: {
    currency: '$',
    value: '0',
    subscriptionTime: 'mo.',
  },
  features: [ [ 'true', '', '' ], [ '', '' ], [ '', '' ] ]
};

const STANDARD_PRICING_OPTION = {
  title: `Standard`,
  description: 'For Startups',
  ribbon: PRICING_RIBBONS.get( 'deal' ),
  contactRequired: true,
  features: [ [ 'true', 'true', '' ], [ 'true', '' ], [ $localize`Up to 10 users`, '' ] ]
};

const ENTERPRISE_PRICING_OPTION = {
  title: `Enterprise`,
  description: 'For Enterprises',
  contactRequired: true,
  features: [ [ 'true', 'true', 'true' ], [ 'true', 'true' ], [ $localize`Unlimited users`, 'true' ] ]
};

const DEFAULT_OPEN_SOURCE_SERVER_PRICING_OPTIONS = [
  FREE_PRICING_OPTION,
  STANDARD_PRICING_OPTION,
  ENTERPRISE_PRICING_OPTION,
];

export const PRODUCT_LINES: ProductLine[] = [
  {
    key: 'servers',
    name: 'Servers',
    description: $localize`Micro server solutions for your needs`,
    products: [
      {
        key: 'auth-server-template',
        name: 'Auth Server',
        description: $localize`Auth Server Template is a generic open source authentication server that has simple yet powerful design to connect your business with all OAuth 2.0 and OAuth supporting third party companies (like Google, Facebook, Twitter or LinkedIn). It also supports basic username password authentication system.`,
        url: environmentCommon.website.github.url + '/' + environmentCommon.oth.social.github + '/' + 'auth-server-template',
        logo: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/min/logo/server/auth-server-logo.min.png',
        openSource: true,
        features: DEFAULT_OPEN_SOURCE_SERVER_FEATURES,
        pricingOptions: DEFAULT_OPEN_SOURCE_SERVER_PRICING_OPTIONS,
      },
      {
        key: 'payment-server-template',
        name: 'Payment Server',
        description: $localize`Payment Server Template is a generic open source payment server that has simple yet powerful design to connect your business with third party payment solution provider companies (like Stripe or Coinbase).`,
        url: environmentCommon.website.github.url + '/' + environmentCommon.oth.social.github + '/' + 'payment-server-template',
        logo: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/min/logo/server/payment-server-logo.min.png',
        openSource: true,
        features: DEFAULT_OPEN_SOURCE_SERVER_FEATURES,
        pricingOptions: DEFAULT_OPEN_SOURCE_SERVER_PRICING_OPTIONS,
      },
      {
        key: 'file-storage-server-template',
        name: 'File Storage Server',
        description: $localize`File Storage Server Template is a generic open source file storage server that has simple yet powerful design to connect your business with third party file storage provider companies (like AWS S3).`,
        url:
            environmentCommon.website.github.url +
            '/' +
            environmentCommon.oth.social.github +
            '/' +
            'file-storage-server-template',
        logo: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/min/logo/server/file-storage-server-logo.min.png',
        openSource: true,
        features: DEFAULT_OPEN_SOURCE_SERVER_FEATURES,
        pricingOptions: DEFAULT_OPEN_SOURCE_SERVER_PRICING_OPTIONS,
      },
      {
        key: 'mail-server-template',
        name: 'Mail Server',
        description: $localize`Mail Server Template is a generic open source mail server that has simple yet powerful design to connect your business with third party email service providers (like Gmail, Yahoo or Outlook).`,
        url:
            environmentCommon.website.github.url +
            '/' +
            environmentCommon.oth.social.github +
            '/' +
            'mail-server-template',
        logo: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/min/logo/server/mail-server-logo.min.png',
        openSource: true,
        features: DEFAULT_OPEN_SOURCE_SERVER_FEATURES,
        pricingOptions: DEFAULT_OPEN_SOURCE_SERVER_PRICING_OPTIONS,
      },
      {
        key: 'analytics-server-template',
        name: 'Analytics Server',
        description: $localize`Analytics Server Template for generic usage in Node.js`,
        url:
            environmentCommon.website.github.url +
            '/' +
            environmentCommon.oth.social.github +
            '/' +
            'analytics-server-template',
        logo: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/min/logo/server/analytics-server-logo.min.png',
        openSource: true,
        features: DEFAULT_OPEN_SOURCE_SERVER_FEATURES,
        pricingOptions: DEFAULT_OPEN_SOURCE_SERVER_PRICING_OPTIONS,
      },
      {
        key: 'business-logic-server-template',
        name: 'Business Logic Server',
        description: $localize`Business Logic Server Template for generic usage in Node.js`,
        url:
            environmentCommon.website.github.url +
            '/' +
            environmentCommon.oth.social.github +
            '/' +
            'business-logic-server-template',
        logo: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/min/logo/server/business-logic-server-logo.min.png',
        openSource: true,
        features: DEFAULT_OPEN_SOURCE_SERVER_FEATURES,
        pricingOptions: DEFAULT_OPEN_SOURCE_SERVER_PRICING_OPTIONS,
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
        description: $localize`Company Profile UI Template for generic usage in Angular`,
        url:
            environmentCommon.website.github.url +
            '/' +
            environmentCommon.oth.social.github +
            '/' +
            'company-profile-ui-template',
        logo: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/min/logo/ui/web-ui-logo.min.png',
        openSource: true,
        features: DEFAULT_OPEN_SOURCE_SERVER_FEATURES,
        pricingOptions: DEFAULT_OPEN_SOURCE_SERVER_PRICING_OPTIONS,
      },
      {
        key: 'web-ui-template',
        name: 'Web UI',
        description: $localize`Web UI Template for generic usage in Angular`,
        url:
            environmentCommon.website.github.url +
            '/' +
            environmentCommon.oth.social.github +
            '/' +
            'web-ui-template',
        logo: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/min/logo/ui/web-ui-logo.min.png',
        openSource: true,
        features: DEFAULT_OPEN_SOURCE_SERVER_FEATURES,
        pricingOptions: DEFAULT_OPEN_SOURCE_SERVER_PRICING_OPTIONS,
      },
      {
        key: 'mobile-ui-template',
        name: 'Mobile UI',
        description: $localize`Mobile UI Template for generic usage in React Native`,
        url:
            environmentCommon.website.github.url +
            '/' +
            environmentCommon.oth.social.github +
            '/' +
            'mobile-ui-template',
        logo: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/min/logo/ui/mobile-ui-logo.min.png',
        openSource: true,
        features: DEFAULT_OPEN_SOURCE_SERVER_FEATURES,
        pricingOptions: DEFAULT_OPEN_SOURCE_SERVER_PRICING_OPTIONS,
      },
    ],
  },
  {
    key: 'cli-generators',
    name: 'CLI Generators',
    description: $localize`Command line interface generators`,
    products: [
      {
        key: 'server-generator',
        name: 'Server Generator',
        description: $localize`Command line interface generator of the servers at Open Template Hub`,
        url:
            environmentCommon.website.github.url +
            '/' +
            environmentCommon.oth.social.github +
            '/' +
            'server-generator',
        logo: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/min/logo/generator/server-generator-logo.min.png',
        openSource: true,
        features: DEFAULT_OPEN_SOURCE_SERVER_FEATURES,
        pricingOptions: DEFAULT_OPEN_SOURCE_SERVER_PRICING_OPTIONS,
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
            $localize`Command line interface generator of the user interfaces at Open Template Hub`,
        url:
            environmentCommon.website.github.url +
            '/' +
            environmentCommon.oth.social.github +
            '/' +
            'app-generator',
        logo: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/min/logo/generator/server-generator-logo.min.png',
        openSource: true,
        features: DEFAULT_OPEN_SOURCE_SERVER_FEATURES,
        pricingOptions: DEFAULT_OPEN_SOURCE_SERVER_PRICING_OPTIONS,
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
        key: 'orchestration-server-template',
        name: 'Orchestration Server',
        description: $localize`Orchestrate all of your servers from one place.`,
        url:
            environmentCommon.website.github.url +
            '/' +
            environmentCommon.oth.social.github,
        logo: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/min/logo/server/orchestration-server-logo.min.png',
        color: ThemeColorSettings.yellow,
        features: [
          {
            name: $localize`Core Features`,
            details: [
              PROFESSIONAL_HELP_FEATURE,
              CUSTOMISED_SOLUTIONS_FEATURE,
            ],
          },
          {
            name: `Quality and DX`,
            details: [
              CI_CD_AUTOMATION_FEATURE,
              CUSTOMISED_AUTOMATIONS_FEATURE,
            ],
          },
          {
            name: `Security`,
            details: [
              SECURITY_REPORTS_FEATURE,
              CUSTOM_SECURITY_COMPLIANCE_FEATURE,
            ],
          },
        ],
        pricingOptions: [
          {
            title: `Basic`,
            description: 'For Individuals',
            features: [ [ 'true', '' ], [ '', '' ], [ '', '' ] ],
            price: {
              currency: '$',
              value: '99',
              subscriptionTime: '',
            },
          },
          {
            title: `Standard`,
            description: 'For Startups',
            ribbon: PRICING_RIBBONS.get( 'deal' ),
            contactRequired: true,
            features: [ [ 'true', '' ], [ 'true', '' ], [ $localize`Up to 10 users`, '' ] ]
          },
          {
            title: `Enterprise`,
            description: 'For Enterprises',
            contactRequired: true,
            features: [ [ 'true', 'true' ], [ 'true', 'true' ], [ $localize`Unlimited users`, 'true' ] ]
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
    description: $localize`Services that we provide`,
    products: [
      {
        key: 'software-consultancy',
        name: 'Software Consultancy',
        description: $localize`Open Template Hub is an organization that develops open source micro servers as templates including authentication server, payment server and more..`,
        url:
            environmentCommon.website.github.url +
            '/' +
            environmentCommon.oth.social.github,
        logo: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/min/logo/brand-logo.min.png',
        features: DEFAULT_OPEN_SOURCE_SERVER_FEATURES,
      },
      {
        key: 'software-integration',
        name: 'Software Integration',
        description: $localize`Open Template Hub is an organization that develops open source micro servers as templates including authentication server, payment server and more..`,
        url:
            environmentCommon.website.github.url +
            '/' +
            environmentCommon.oth.social.github,
        logo: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/min/logo/brand-logo-pieces.min.png',
        features: DEFAULT_OPEN_SOURCE_SERVER_FEATURES,
      },
      {
        key: 'quality-assurance',
        name: 'Quality Assurance',
        description: $localize`Open Template Hub is an organization that develops open source micro servers as templates including authentication server, payment server and more..`,
        url:
            environmentCommon.website.github.url +
            '/' +
            environmentCommon.oth.social.github,
        logo: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/min/logo/brand-logo-shine.min.png',
        features: DEFAULT_OPEN_SOURCE_SERVER_FEATURES,
      },
    ],
  },
];
