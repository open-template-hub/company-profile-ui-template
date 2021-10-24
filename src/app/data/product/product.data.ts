import { CommandType } from 'src/app/data/command-type/command-type.enum';
import { environmentCommon } from '../../../environments/environment-common';
import { ProductLine } from '../../model/product/product.model';
import { ThemeColorSettings } from '../constant';
import { PRICING_RIBBONS } from '../ribbon/ribbon.data';

const DEFAULT_FEATURES = [
  {
    name: $localize `Core Features`,
    details: [
      {
        name: $localize `:@@productData.openSource.name:Open Source`,
        description:
            $localize `:@@productData.openSource.description:Customers that pay per user can send out as many signature requests as they want per month!`,
      },
      {
        name: $localize `:@@productData.templates.name:Templates`,
        description:
            $localize `:@@productData.templates.description:Streamline documents that need to be reused and sent out for eSignature frequently.`,
      },
      {
        name: $localize `:@@productData.audioTrail.name:Audio Trail`,
        description:
            $localize `:@@productData.audioTrail.description:Audit trails are associated with transactions to ensure actions are tracked and time-stamped.`,
      },
    ],
  },
  {
    name: $localize `:@@productData.securityAndTrust.name:Security and Trust`,
    details: [
      {
        name: $localize `:@@productData.signatureRequests.name:Signature requests`,
        description:
            $localize `:@@productData.signatureRequests.description:Customers that pay per user can send out as many signature requests as they want per month!`,
      },
      {
        name: $localize `:@@productData.templates.name:Templates`,
        description:
            $localize `:@@productData.templates.description:Streamline documents that need to be reused and sent out for eSignature frequently.`,
      },
      {
        name: $localize `:@@productData.audioTrail.name:Audio Trail`,
        description:
            $localize `:@@productData.audioTrail.description:Audit trails are associated with transactions to ensure actions are tracked and time-stamped.`,
      },
    ],
  },
  {
    name: $localize `:@@productData.dataValidation.name:Data Validation`,
    details: [
      {
        name: $localize `:@@productData.signatureRequests.name:Signature requests`,
        description:
            $localize `:@@productData.signatureRequests.description:Customers that pay per user can send out as many signature requests as they want per month!`,
      },
      {
        name: $localize `:@@productData.templates.name:Templates`,
        description:
            $localize `:@@productData.templates.description:Streamline documents that need to be reused and sent out for eSignature frequently.`,
      },
      {
        name: $localize `:@@productData.audioTrail.name:Audio Trail`,
        description:
            $localize `:@@productData.audioTrail.description:Audit trails are associated with transactions to ensure actions are tracked and time-stamped.`,
      },
    ],
  },
];

const DEFAULT_PRICING_OPTIONS = [
  {
    title: $localize `:@@defaultPricingOptions.starter.title:STARTER`,
    price: {
      currency: '$',
      value: '9',
      subscriptionTime: $localize `:@@defaultPricingOptions.subscriptionTime.month:mo.`,
    },
    features: [ $localize `:@@defaultPricingOptions.starter.features.1:Up to 5 users`, $localize `:@@defaultPricingOptions.starter.features.2:Maximum 100 photos/mo.`, '' ],
    styles: {
      width: '300px',
      height: '400px',
      fontSize: '1em',
      featureHeight: '10em',
    },
  },
  {
    title: $localize `:@@defaultPricingOptions.basic.title:BASIC`,
    ribbon: PRICING_RIBBONS.get( 'deal' ),
    price: {
      currency: '$',
      value: '49',
      subscriptionTime: $localize `:@@defaultPricingOptions.subscriptionTime.month:mo.`,
    },
    features: [ $localize `:@@defaultPricingOptions.basic.features.1:Up to 10 users`, $localize `:@@defaultPricingOptions.basic.features.2:Maximum 100 photos/mo.`, 'true' ],
    styles: {
      width: '370px',
      height: '520px',
      fontSize: '1.2em',
      featureHeight: '13em',
    },
  },
  {
    title: $localize `:@@defaultPricingOptions.pro.title:PRO`,
    price: {
      currency: '$',
      value: '99',
      subscriptionTime: $localize `:@@defaultPricingOptions.subscriptionTime.month:mo.`,
    },
    features: [ $localize `:@@defaultPricingOptions.pro.features.1:Unlimited users`, $localize `:@@defaultPricingOptions.pro.features.2:Unlimited photos/mo.`, 'true' ],
    styles: {
      width: '300px',
      height: '400px',
      fontSize: '1em',
      featureHeight: '10em',
    },
  },
];

export const PRODUCT_LINES: ProductLine[] = [
  {
    key: 'servers',
    name: 'Servers',
    description: $localize `:@@productLinesData.servers.description:Micro server solutions for your needs`,
    products: [
      {
        key: 'auth-server-template',
        name: 'Auth Server',
        description: $localize `:@@productLinesData.authServerTemplate.description:Auth Server Template is an open source authentication server that has simple and generic design to connect your authentication system with every OAuth 2.0 and OAuth supporting third party companies like Google, Facebook, Twitter or LinkedIn. We are also supporting regular username password authentication system`,
        href: environmentCommon.website.github.url + '/' + environmentCommon.oth.social.github + '/' + 'auth-server-template',
        logo: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/min/logo/server/auth-server-logo.min.png',
        openSource: true,
        features: DEFAULT_FEATURES,
        pricingOptions: DEFAULT_PRICING_OPTIONS,
      },
      {
        key: 'payment-server-template',
        name: 'Payment Server',
        description:
            $localize `:@@productLinesData.paymentServerTemplate.description:Payment Server Template is an open source payment server that has simple and generic design to be able to integrated with payment solution providers like Stripe or Coinbase`,
        href:
            environmentCommon.website.github.url +
            '/' +
            environmentCommon.oth.social.github +
            '/' +
            'payment-server-template',
        logo: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/min/logo/server/payment-server-logo.min.png',
        openSource: true,
        features: DEFAULT_FEATURES,
        pricingOptions: DEFAULT_PRICING_OPTIONS,
      },
      {
        key: 'file-storage-server-template',
        name: 'File Storage Server',
        description:
            $localize `:@@productLinesData.fileStorageServerTemplate.description:File Storage Server Template that supports uploading and downloading files from AWS S3`,
        href:
            environmentCommon.website.github.url +
            '/' +
            environmentCommon.oth.social.github +
            '/' +
            'file-storage-server-template',
        logo: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/min/logo/server/file-storage-server-logo.min.png',
        openSource: true,
        features: DEFAULT_FEATURES,
        pricingOptions: DEFAULT_PRICING_OPTIONS,
      },
      {
        key: 'mail-server-template',
        name: 'Mail Server',
        description:
            $localize `:@@productLinesData.mailServerTemplate.description:Mail Server Template supporting both regular public and private mail send processes in Message Queue Architecture`,
        href:
            environmentCommon.website.github.url +
            '/' +
            environmentCommon.oth.social.github +
            '/' +
            'mail-server-template',
        logo: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/min/logo/server/mail-server-logo.min.png',
        openSource: true,
        features: DEFAULT_FEATURES,
        pricingOptions: DEFAULT_PRICING_OPTIONS,
      },
      {
        key: 'analytics-server-template',
        name: 'Analytics Server',
        description: $localize `:@@productLinesData.analyticsServerTemplate.description:Analytics Server Template for generic usage in Node.js`,
        href:
            environmentCommon.website.github.url +
            '/' +
            environmentCommon.oth.social.github +
            '/' +
            'analytics-server-template',
        logo: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/min/logo/server/analytics-server-logo.min.png',
        openSource: true,
        features: DEFAULT_FEATURES,
        pricingOptions: DEFAULT_PRICING_OPTIONS,
      },
      {
        key: 'business-logic-server-template',
        name: 'Business Logic Server',
        description: $localize `:@@productLinesData.businessLogicServer.description:Business Logic Server Template for generic usage in Node.js`,
        href:
            environmentCommon.website.github.url +
            '/' +
            environmentCommon.oth.social.github +
            '/' +
            'business-logic-server-template',
        logo: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/min/logo/server/business-logic-server-logo.min.png',
        openSource: true,
        features: DEFAULT_FEATURES,
        pricingOptions: DEFAULT_PRICING_OPTIONS,
      },
    ],
  },
  {
    key: 'user-interfaces',
    name: 'User Interfaces',
    description: $localize `:@@productLinesData.userInterfaces.description:User interface solutions for your needs`,
    products: [
      {
        key: 'company-profile-ui-template',
        name: 'Company Profile UI',
        description: $localize `:@@productLinesData.companyProfileUITemplate.description:Company Profile UI Template for generic usage in Angular`,
        href:
            environmentCommon.website.github.url +
            '/' +
            environmentCommon.oth.social.github +
            '/' +
            'company-profile-ui-template',
        logo: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/min/logo/ui/web-ui-logo.min.png',
        openSource: true,
        features: DEFAULT_FEATURES,
        pricingOptions: DEFAULT_PRICING_OPTIONS,
      },
      {
        key: 'web-ui-template',
        name: 'Web UI',
        description: $localize `:@@productLinesData.webUITemplate.description:Web UI Template for generic usage in Angular`,
        href:
            environmentCommon.website.github.url +
            '/' +
            environmentCommon.oth.social.github +
            '/' +
            'web-ui-template',
        logo: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/min/logo/ui/web-ui-logo.min.png',
        openSource: true,
        features: DEFAULT_FEATURES,
        pricingOptions: DEFAULT_PRICING_OPTIONS,
      },
      {
        key: 'mobile-ui-template',
        name: 'Mobile UI',
        description: $localize `:@@productLinesData.mobileUITemplate.description:Mobile UI Template for generic usage in React Native`,
        href:
            environmentCommon.website.github.url +
            '/' +
            environmentCommon.oth.social.github +
            '/' +
            'mobile-ui-template',
        logo: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/min/logo/ui/mobile-ui-logo.min.png',
        openSource: true,
        features: DEFAULT_FEATURES,
        pricingOptions: DEFAULT_PRICING_OPTIONS,
      },
    ],
  },
  {
    key: 'cli-generators',
    name: 'CLI Generators',
    description: $localize `:@@productLinesData.cliGenerators.description:Command line interface generators`,
    products: [
      {
        key: 'server-generator',
        name: 'Server Generator',
        description:
            $localize `:@@productLinesData.serverGenerator.description:Command line interface generator of the servers at Open Template Hub`,
        href:
            environmentCommon.website.github.url +
            '/' +
            environmentCommon.oth.social.github +
            '/' +
            'server-generator',
        logo: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/min/logo/generator/server-generator-logo.min.png',
        openSource: true,
        features: DEFAULT_FEATURES,
        pricingOptions: DEFAULT_PRICING_OPTIONS,
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
            $localize `:@@productLinesData.appGenerator.description:Command line interface generator of the user interfaces at Open Template Hub`,
        href:
            environmentCommon.website.github.url +
            '/' +
            environmentCommon.oth.social.github +
            '/' +
            'app-generator',
        logo: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/min/logo/generator/server-generator-logo.min.png',
        openSource: true,
        features: DEFAULT_FEATURES,
        pricingOptions: DEFAULT_PRICING_OPTIONS,
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
    description: $localize `:@@productLinesData.premium.description:Get more things done with our premium solutions`,
    color: ThemeColorSettings.yellow,
    products: [
      {
        key: 'orchestration-server',
        name: 'Orchestration Server',
        description: $localize `:@@productLinesData.orchestrationServer.description:One server to orchestrate them all!`,
        href:
            environmentCommon.website.github.url +
            '/' +
            environmentCommon.oth.social.github,
        logo: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/min/logo/server/orchestration-server-logo.min.png',
        color: ThemeColorSettings.yellow,
        features: DEFAULT_FEATURES,
        pricingOptions: DEFAULT_PRICING_OPTIONS,
      },
    ],
  },
];

export const SERVICES: ProductLine[] = [
  {
    key: 'services',
    name: 'Services',
    description: $localize `:@@services.services.description:Services that we provide`,
    products: [
      {
        key: 'software-consultancy',
        name: 'Software Consultancy',
        description:
            $localize `:@@services.softwareConsultancy.description:Open Template Hub is an organization that develops open source micro servers as templates including authentication server, payment server and more..`,
        href:
            environmentCommon.website.github.url +
            '/' +
            environmentCommon.oth.social.github,
        logo: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/min/logo/brand-logo.min.png',
        features: DEFAULT_FEATURES,
      },
      {
        key: 'software-integration',
        name: 'Software Integration',
        description:
            $localize `:@@services.softwareIntegration.description:Open Template Hub is an organization that develops open source micro servers as templates including authentication server, payment server and more..`,
        href:
            environmentCommon.website.github.url +
            '/' +
            environmentCommon.oth.social.github,
        logo: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/min/logo/brand-logo-pieces.min.png',
        features: DEFAULT_FEATURES,
      },
      {
        key: 'quality-assurance',
        name: 'Quality Assurance',
        description:
            $localize `:@@services.qualityAssurance.description:Open Template Hub is an organization that develops open source micro servers as templates including authentication server, payment server and more..`,
        href:
            environmentCommon.website.github.url +
            '/' +
            environmentCommon.oth.social.github,
        logo: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/min/logo/brand-logo-shine.min.png',
        features: DEFAULT_FEATURES,
      },
    ],
  },
];
