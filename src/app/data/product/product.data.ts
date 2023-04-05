import { CommandType } from '@open-template-hub/animated-code-editor';
import { environment } from '../../../environments/environment';
import { environmentCommon } from '../../../environments/environment-common';
import { ProductLine } from '../../model/product/product.model';
import { URLS } from '../navigation/navigation.data';
import { PRODUCT_RIBBONS } from '../ribbon/ribbon.data';
import { TECH_STACK } from '../tech-stack/tech-stack.data';
import { ThemeColorSettings } from '../theme/theme.data';

const OPEN_SOURCE_FEATURE = {
  name: $localize`:@@productData.openSource.name:Open Source`,
  description: $localize`:@@productData.openSource.description:No need to pay a price to get started. Get the latest updates from community driven open source project.`,
};

const PROFESSIONAL_HELP_FEATURE = {
  name: $localize`:@@productData.professionalHelp.name:Professional Help`,
  description: $localize`:@@productData.openSource.description:Get an up and running server.`,
};

const CUSTOMISED_SOLUTIONS_FEATURE = {
  name: $localize`:@@productData.customisedSolutions.name:Customised Solutions`,
  description: $localize`:@@productData.customisedSolutions.description:Fully customised functional solutions for your needs.`,
};

const CI_CD_AUTOMATION_FEATURE = {
  name: $localize`:@@productData.ciCdAutomation.name:CI/CD Automation`,
  description: $localize`:@@productData.ciCdAutomation.description:Get a CI/CD integration with automated API tests.`,
};

const CUSTOMISED_AUTOMATIONS_FEATURE = {
  name: $localize`:@@productData.customisedAutomations.name:Customised Automations`,
  description: $localize`:@@productData.customisedAutomations.description:Fully customised automation solutions for your needs.`,
};

const SECURITY_REPORTS_FEATURE = {
  name: $localize`:@@productData.customisedAutomationsSecurity.name:Reports`,
  description: $localize`:@@productData.customisedAutomationsSecurity.description:Get a security report at the end of each month.`,
};

const CUSTOM_SECURITY_COMPLIANCE_FEATURE = {
  name: $localize`:@@productData.customSecurityCompliance.name:Custom Security Compliance`,
  description: $localize`:@@productData.customSecurityCompliance.description:Fully customised security compliance solutions for your needs.`,
};

const DEFAULT_OPEN_SOURCE_SERVER_FEATURES = [
  {
    name: $localize`:@@productData.defaultOpenSourceServerFeatures.1:Core Features`,
    details: [
      OPEN_SOURCE_FEATURE,
      PROFESSIONAL_HELP_FEATURE,
      CUSTOMISED_SOLUTIONS_FEATURE,
    ],
  },
  {
    name: $localize`:@@productData.defaultOpenSourceServerFeatures.2:Quality and DX`,
    details: [
      CI_CD_AUTOMATION_FEATURE,
      CUSTOMISED_AUTOMATIONS_FEATURE,
    ],
  },
  {
    name: $localize`:@@productData.defaultOpenSourceServerFeatures.3:Security`,
    details: [
      SECURITY_REPORTS_FEATURE,
      CUSTOM_SECURITY_COMPLIANCE_FEATURE,
    ],
  },
];

const FREE_PRICING_OPTION = {
  title: $localize`:@@productData.freePricingOption.title:Free`,
  description: $localize`:@@productData.freePricingOption.description:For Individuals`,
  price: {
    currency: '$',
    value: '0',
    subscriptionTime: $localize`:@@productData.freePricingOption.price.subscriptionTime:mo.`,
  },
  features: [ [ 'true', '', '' ], [ '', '' ], [ '', '' ] ]
};

const STANDARD_PRICING_OPTION = {
  title: $localize`:@@productData.standardPricingOption.title:Standard`,
  description: $localize`:@@productData.standardPricingOption.description:For Startups`,
  ribbon: PRODUCT_RIBBONS.get( 'deal' ),
  contactRequired: true,
  features: [ [ 'true', 'true', '' ], [ 'true', '' ], [ $localize`:@@productData.standardPricingOption.features.1:Up to 10 users`, '' ] ]
};

const ENTERPRISE_PRICING_OPTION = {
  title: $localize`:@@productData.enterprisePricingOption.title:Enterprise`,
  description: $localize`:@@productData.enterprisePricingOption.description:For Enterprises`,
  contactRequired: true,
  features: [ [ 'true', 'true', 'true' ], [ 'true', 'true' ], [ $localize`:@@productData.enterprisePricingOption.features.1:Unlimited users`, 'true' ] ]
};

const DEFAULT_OPEN_SOURCE_SERVER_PRICING_OPTIONS = [
  FREE_PRICING_OPTION,
  STANDARD_PRICING_OPTION,
  ENTERPRISE_PRICING_OPTION,
];

export const PRODUCT_LINES: ProductLine[] = [
  {
    key: 'premium',
    name: 'Premium',
    description: $localize`:@@servicesData.premium.description:Get more things done with our premium solutions`,
    color: ThemeColorSettings.yellow,
    products: [
      {
        key: 'startup-portal',
        name: 'Startup Portal',
        description: `Transform your data into insights`,
        url: 'https://portal.opentemplatehub.com',
        redirectToUrl: true,
        logo: './assets/slide/image-1.png',
        triable: true
      },
      {
        key: 'orchestration-server-template',
        name: 'Orchestration Server',
        description: $localize`:@@premium.orchestrationServerTemplate.description:Orchestration Server Template is a middleware server that has simple yet powerful design to connect your business with all Open Template Hub servers (like Auth Server, Payment Server, File Storage Server or Mail Server). It also has generic design to integrate any other servers.`,
        url: environmentCommon.website.github.url + '/' + environmentCommon.company.social.github,
        logo: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/min/logo/server/orchestration-server-logo.min.png',
        color: ThemeColorSettings.yellow,
        demonstrationImg: {
          src: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/min/demo/server/orchestration-server-demo.min.png',
          description: 'Orchestration Server Architectural Design'
        },
        features: [
          {
            name: $localize`:@@premium.orchestrationServerTemplate.feature.1:Core Features`,
            details: [
              {
                name: $localize`:@@premium.orchestrationServerTemplate.feature.1.detail.1:Integrated with OTH Servers`,
                description: $localize`:@@premium.orchestrationServerTemplate.feature.1.detail.2:Works seamlessly with Open Template Hub Servers.`,
              },
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
            title: $localize`:@@premium.orchestrationServerTemplate.basic.title:Basic`,
            description: $localize`:@@premium.orchestrationServerTemplate.basic.description:For Individuals`,
            features: [ [ 'true', '', '' ], [ '', '' ], [ '', '' ] ],
            price: {
              currency: '$',
              value: '99',
              subscriptionTime: '',
            },
          },
          {
            title: $localize`:@@premium.orchestrationServerTemplate.standard.title:Standard`,
            description: $localize`:@@premium.orchestrationServerTemplate.standard.description:For Startups`,
            ribbon: PRODUCT_RIBBONS.get( 'deal' ),
            contactRequired: true,
            features: [ [ 'true', 'true', '' ], [ 'true', '' ], [ $localize`:@@premium.orchestrationServerTemplate.standard.feature.1:Up to 10 users`, '' ] ]
          },
          {
            title: $localize`:@@premium.orchestrationServerTemplate.enterprise.title:Enterprise`,
            description: $localize`:@@premium.orchestrationServerTemplate.enterprise.description:For Enterprises`,
            contactRequired: true,
            features: [ [ 'true', 'true', 'true' ], [ 'true', 'true' ], [ $localize`:@@premium.orchestrationServerTemplate.enterprise.feature.1:Unlimited users`, 'true' ] ]
          },
        ],
        techStack: [
          TECH_STACK.typeScript,
          TECH_STACK.node,
          TECH_STACK.express,
          TECH_STACK.heroku,
          TECH_STACK.npm
        ]
      },
      {
        key: 'saas-ui-template',
        name: 'Saas UI',
        color: ThemeColorSettings.yellow,
        description: `SaaS UI Template is modern, responsive and customisable software as a service ui template for your business. It contains reusable components, theme color and design support along with dark theme support.`,
        url: 'https://saas.opentemplatehub.com',
        urlDemo: 'https://saas.opentemplatehub.com',
        logo: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/min/logo/ui/saas-ui-logo.min.png',
        video: {
          url: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/demo/ui/videos/saas-ui-video-1.mp4',
          description: $localize`:@@userInterfaces.companyProfileUITemplate.video.description:Modern, responsive and customisable saas ui template written with Angular`,
        },
        screenshots: [
          {
            src: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/min/demo/ui/saas-ui-demo-light.min.png',
            description: $localize`:@@userInterfaces.companyProfileUITemplate.screenshot.1:Responsive Design`
          },
          {
            src: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/min/demo/ui/saas-ui-demo-dark.min.png',
            description: $localize`:@@userInterfaces.companyProfileUITemplate.screenshot.2:Dark Mode Support`
          },
          {
            src: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/min/demo/ui/screenshots/saas-ui-screenshot-1.min.png',
            description: $localize`:@@userInterfaces.companyProfileUITemplate.screenshot.3:Reusable Components`
          },
          {
            src: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/min/demo/ui/screenshots/saas-ui-screenshot-2.min.png',
            description: $localize`:@@userInterfaces.companyProfileUITemplate.screenshot.4:Customisable Theme Colors`
          },
          {
            src: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/min/demo/ui/screenshots/saas-ui-screenshot-3.min.png',
            description: $localize`:@@userInterfaces.companyProfileUITemplate.screenshot.5:Customisable Theme Design`
          }
        ],
        features: [
          {
            name: $localize`:@@premium.orchestrationServerTemplate.feature.1:Core Features`,
            details: [
              {
                name: $localize`:@@premium.orchestrationServerTemplate.feature.1.detail.1:Integrated with OTH Servers`,
                description: $localize`:@@premium.orchestrationServerTemplate.feature.1.detail.2:Works seamlessly with Open Template Hub Servers.`,
              },
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
            title: $localize`:@@premium.orchestrationServerTemplate.basic.title:Basic`,
            description: $localize`:@@premium.orchestrationServerTemplate.basic.description:For Individuals`,
            features: [ [ 'true', '', '' ], [ '', '' ], [ '', '' ] ],
            price: {
              currency: '$',
              value: '99',
              subscriptionTime: '',
            },
          },
          {
            title: $localize`:@@premium.orchestrationServerTemplate.standard.title:Standard`,
            description: $localize`:@@premium.orchestrationServerTemplate.standard.description:For Startups`,
            ribbon: PRODUCT_RIBBONS.get( 'deal' ),
            contactRequired: true,
            features: [ [ 'true', 'true', '' ], [ 'true', '' ], [ $localize`:@@premium.orchestrationServerTemplate.standard.feature.1:Up to 10 users`, '' ] ]
          },
          {
            title: $localize`:@@premium.orchestrationServerTemplate.enterprise.title:Enterprise`,
            description: $localize`:@@premium.orchestrationServerTemplate.enterprise.description:For Enterprises`,
            contactRequired: true,
            features: [ [ 'true', 'true', 'true' ], [ 'true', 'true' ], [ $localize`:@@premium.orchestrationServerTemplate.enterprise.feature.1:Unlimited users`, 'true' ] ]
          },
        ],
        techStack: [
          TECH_STACK.typeScript,
          TECH_STACK.angular,
          TECH_STACK.fontAwesome,
          TECH_STACK.heroku,
          TECH_STACK.sass,
          TECH_STACK.markdown,
          TECH_STACK.npm
        ],
      },
      {
        key: 'cloud-integration-server-template',
        name: 'Cloud Integration Server',
        color: ThemeColorSettings.gray,
        description: $localize`:@@productLinesData.cloudIntegrationServerTemplate.description:Coming soon..`,
        url: URLS.maintenance,
        logo: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/min/logo/server/cloud-integration-server-logo.min.png'
      },
    ],
  },
  {
    key: 'server',
    name: 'Servers',
    description: $localize`:@@productLinesData.servers.description:Micro server solutions for your needs`,
    products: [
      {
        key: 'auth-server-template',
        name: 'Auth Server',
        description: $localize`:@@productLinesData.authServerTemplate.description:Auth Server Template is a generic open source authentication server that has simple yet powerful design to connect your business with all OAuth 2.0 and OAuth supporting third party companies (like Google, Facebook, Twitter or LinkedIn). It also supports basic username password authentication system.`,
        url: environmentCommon.website.github.url + '/' + environmentCommon.company.social.github + '/' + 'auth-server-template',
        logo: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/min/logo/server/auth-server-logo.min.png',
        openSource: true,
        features: DEFAULT_OPEN_SOURCE_SERVER_FEATURES,
        pricingOptions: DEFAULT_OPEN_SOURCE_SERVER_PRICING_OPTIONS,
        integrations: environment.oauth,
        techStack: [
          TECH_STACK.typeScript,
          TECH_STACK.node,
          TECH_STACK.express,
          TECH_STACK.postgreSql,
          TECH_STACK.heroku,
          TECH_STACK.npm
        ]
      },
      {
        key: 'payment-server-template',
        name: 'Payment Server',
        description: $localize`:@@productLinesData.paymentServerTemplate.description:Payment Server Template is a generic open source payment server that has simple yet powerful design to connect your business with third party payment solution provider companies (like Stripe or Coinbase).`,
        url: environmentCommon.website.github.url + '/' + environmentCommon.company.social.github + '/' + 'payment-server-template',
        logo: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/min/logo/server/payment-server-logo.min.png',
        openSource: true,
        features: DEFAULT_OPEN_SOURCE_SERVER_FEATURES,
        pricingOptions: DEFAULT_OPEN_SOURCE_SERVER_PRICING_OPTIONS,
        integrations: environment.payment,
        techStack: [
          TECH_STACK.typeScript,
          TECH_STACK.node,
          TECH_STACK.express,
          TECH_STACK.postgreSql,
          TECH_STACK.mongoDb,
          TECH_STACK.heroku,
          TECH_STACK.npm
        ]
      },
      {
        key: 'file-storage-server-template',
        name: 'File Storage Server',
        description: $localize`:@@productLinesData.fileStorageTemplate.description:File Storage Server Template is a generic open source file storage server that has simple yet powerful design to connect your business with third party file storage provider companies (like AWS S3).`,
        url: environmentCommon.website.github.url + '/' + environmentCommon.company.social.github + '/' + 'file-storage-server-template',
        logo: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/min/logo/server/file-storage-server-logo.min.png',
        openSource: true,
        features: DEFAULT_OPEN_SOURCE_SERVER_FEATURES,
        pricingOptions: DEFAULT_OPEN_SOURCE_SERVER_PRICING_OPTIONS,
        integrations: environment.fileStorage,
        techStack: [
          TECH_STACK.typeScript,
          TECH_STACK.node,
          TECH_STACK.express,
          TECH_STACK.postgreSql,
          TECH_STACK.mongoDb,
          TECH_STACK.heroku,
          TECH_STACK.npm
        ]
      },
      {
        key: 'mail-server-template',
        name: 'Mail Server',
        description: $localize`:@@productLinesData.mailServerTemplate.description:Mail Server Template is a generic open source mail server that has simple yet powerful design to connect your business with third party email service providers (like Gmail, Yahoo or Outlook).`,
        url: environmentCommon.website.github.url + '/' + environmentCommon.company.social.github + '/' + 'mail-server-template',
        logo: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/min/logo/server/mail-server-logo.min.png',
        openSource: true,
        features: DEFAULT_OPEN_SOURCE_SERVER_FEATURES,
        pricingOptions: DEFAULT_OPEN_SOURCE_SERVER_PRICING_OPTIONS,
        integrations: environment.mail,
        techStack: [
          TECH_STACK.typeScript,
          TECH_STACK.node,
          TECH_STACK.express,
          TECH_STACK.heroku,
          TECH_STACK.npm
        ]
      },
      {
        key: 'analytics-server-template',
        name: 'Analytics Server',
        description: $localize`:@@productLinesData.analyticsServerTemplate.description:Analytics Server Template is a generic open source analytics server that has simple yet powerful design to connect your business with third party analytics service providers (like Google Analytics or Matomo).`,
        url: environmentCommon.website.github.url + '/' + environmentCommon.company.social.github + '/' + 'analytics-server-template',
        logo: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/min/logo/server/analytics-server-logo.min.png',
        openSource: true,
        features: DEFAULT_OPEN_SOURCE_SERVER_FEATURES,
        pricingOptions: DEFAULT_OPEN_SOURCE_SERVER_PRICING_OPTIONS,
        integrations: environment.analytics,
        techStack: [
          TECH_STACK.typeScript,
          TECH_STACK.node,
          TECH_STACK.express,
          TECH_STACK.mongoDb,
          TECH_STACK.heroku,
          TECH_STACK.npm
        ]
      },
      {
        key: 'sms-server-template',
        name: 'Sms Server',
        description: $localize`:@@productLinesData.smsServerTemplate.description:SMS Server Template is a generic open source sms server that has simple yet powerful design to connect your business with third party sms service providers (like Twillio or AWS SNS).`,
        url: environmentCommon.website.github.url + '/' + environmentCommon.company.social.github + '/' + 'sms-server-template',
        logo: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/min/logo/server/sms-server-logo.min.png',
        openSource: true,
        features: DEFAULT_OPEN_SOURCE_SERVER_FEATURES,
        pricingOptions: DEFAULT_OPEN_SOURCE_SERVER_PRICING_OPTIONS,
        integrations: environment.sms,
        techStack: [
          TECH_STACK.typeScript,
          TECH_STACK.node,
          TECH_STACK.express,
          TECH_STACK.heroku,
          TECH_STACK.npm
        ]
      },
      {
        key: 'business-logic-server-template',
        name: 'Business Logic Server',
        description: $localize`:@@productLinesData.businessLogicServerTemplate.description:Business Logic Server Template is a generic open source server that encodes the real-world business rules that determine how data can be created, stored, and changed. It saves you from rewriting boilerplate code. It works best with other Open Template Hub products.`,
        url: environmentCommon.website.github.url + '/' + environmentCommon.company.social.github + '/' + 'business-logic-server-template',
        logo: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/min/logo/server/business-logic-server-logo.min.png',
        demonstrationImg: {
          src: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/min/demo/server/business-logic-server-demo.min.png',
          description: 'Server That Manages Your Core Business Functionalities'
        },
        openSource: true,
        features: DEFAULT_OPEN_SOURCE_SERVER_FEATURES,
        pricingOptions: DEFAULT_OPEN_SOURCE_SERVER_PRICING_OPTIONS,
        techStack: [
          TECH_STACK.typeScript,
          TECH_STACK.node,
          TECH_STACK.express,
          TECH_STACK.mongoDb,
          TECH_STACK.heroku,
          TECH_STACK.npm
        ]
      }
    ],
  },
  {
    key: 'user-interface',
    name: 'User Interfaces',
    description: $localize`:@@productLinesData.userInterface.description:User interface solutions for your needs`,
    products: [
      {
        key: 'company-profile-ui-template',
        name: 'Company Profile UI',
        description: $localize`:@@userInterfaces.companyProfileUITemplate.description:Company Profile UI Template is modern, responsive and customisable company profile ui template for your business. It contains reusable components, theme color and design support along with dark theme support.`,
        url: environmentCommon.website.github.url + '/' + environmentCommon.company.social.github + '/' + 'company-profile-ui-template',
        logo: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/min/logo/ui/web-ui-logo.min.png',
        video: {
          url: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/demo/ui/videos/company-profile-ui-video-1.mp4',
          description: $localize`:@@userInterfaces.companyProfileUITemplate.video.description:Modern, responsive and customisable company profile ui template written with Angular`,
        },
        screenshots: [
          {
            src: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/min/demo/ui/company-profile-ui-demo-light.min.png',
            description: $localize`:@@userInterfaces.companyProfileUITemplate.screenshot.1:Responsive Design`
          },
          {
            src: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/min/demo/ui/company-profile-ui-demo-dark.min.png',
            description: $localize`:@@userInterfaces.companyProfileUITemplate.screenshot.2:Dark Mode Support`
          },
          {
            src: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/min/demo/ui/screenshots/company-profile-ui-screenshot-1.min.png',
            description: $localize`:@@userInterfaces.companyProfileUITemplate.screenshot.3:Reusable Components`
          },
          {
            src: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/min/demo/ui/screenshots/company-profile-ui-screenshot-2.min.png',
            description: $localize`:@@userInterfaces.companyProfileUITemplate.screenshot.4:Customisable Theme Colors`
          },
          {
            src: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/min/demo/ui/screenshots/company-profile-ui-screenshot-3.min.png',
            description: $localize`:@@userInterfaces.companyProfileUITemplate.screenshot.5:Customisable Theme Design`
          }
        ],
        openSource: true,
        features: DEFAULT_OPEN_SOURCE_SERVER_FEATURES,
        pricingOptions: DEFAULT_OPEN_SOURCE_SERVER_PRICING_OPTIONS,
        techStack: [
          TECH_STACK.typeScript,
          TECH_STACK.angular,
          TECH_STACK.fontAwesome,
          TECH_STACK.heroku,
          TECH_STACK.sass,
          TECH_STACK.markdown,
          TECH_STACK.npm
        ],
      },
      {
        key: 'web-ui-template',
        name: 'Web UI',
        description: $localize`:@@userInterfaces.webUITemplate.description:Web UI Template is modern, responsive and customisable web ui template for your business. It contains reusable components, theme color and design support along with dark theme support.`,
        url: environmentCommon.website.github.url + '/' + environmentCommon.company.social.github + '/' + 'web-ui-template',
        urlDemo: 'https://web.opentemplatehub.com',
        logo: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/min/logo/ui/web-ui-logo.min.png',
        video: {
          url: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/demo/ui/videos/web-ui-video-1.mp4',
          description: $localize`:@@userInterfaces.webUITemplate.video.description:Modern, responsive and customisable web ui template written with Angular`,
        },
        screenshots: [
          {
            src: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/min/demo/ui/web-ui-demo-light.min.png',
            description: $localize`:@@userInterfaces.webUITemplate.screenshot.1:Responsive Design`
          },
          {
            src: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/min/demo/ui/web-ui-demo-dark.min.png',
            description: $localize`:@@userInterfaces.webUITemplate.screenshot.2:Dark Mode Support`
          },
          {
            src: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/min/demo/ui/screenshots/web-ui-screenshot-1.min.png',
            description: $localize`:@@userInterfaces.webUITemplate.screenshot.3:Integrated With OTH Servers`
          },
          {
            src: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/min/demo/ui/screenshots/web-ui-screenshot-2.min.png',
            description: $localize`:@@userInterfaces.webUITemplate.screenshot.4:Customisable Theme Colors`
          },
          {
            src: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/min/demo/ui/screenshots/web-ui-screenshot-3.min.png',
            description: $localize`:@@userInterfaces.webUITemplate.screenshot.5:Customisable Theme Design`
          }
        ],
        openSource: true,
        features: DEFAULT_OPEN_SOURCE_SERVER_FEATURES,
        pricingOptions: DEFAULT_OPEN_SOURCE_SERVER_PRICING_OPTIONS,
        techStack: [
          TECH_STACK.typeScript,
          TECH_STACK.angular,
          TECH_STACK.fontAwesome,
          TECH_STACK.heroku,
          TECH_STACK.sass,
          TECH_STACK.markdown,
          TECH_STACK.npm
        ]
      },
      {
        key: 'mobile-ui-template',
        name: 'Mobile UI',
        description: $localize`:@@userInterfaces.mobileUITemplate.description:Mobile UI Template is modern, responsive and customisable mobile ui template for your business. It contains reusable components, theme color and design support along with dark theme support.`,
        url: environmentCommon.website.github.url + '/' + environmentCommon.company.social.github + '/' + 'mobile-ui-template',
        logo: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/min/logo/ui/mobile-ui-logo.min.png',
        video: {
          url: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/demo/ui/videos/mobile-ui-video-1.mp4',
          description: $localize`:@@userInterfaces.mobileUITemplate.video.description:Modern, responsive and customisable mobile ui template written with React Native`,
        },
        screenshots: [
          {
            src: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/min/demo/ui/mobile-ui-ios-demo-light.min.png',
            description: $localize`:@@userInterfaces.mobileUITemplate.screenshot.1:iOS Support`
          },
          {
            src: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/min/demo/ui/mobile-ui-ios-demo-dark.min.png',
            description: $localize`:@@userInterfaces.mobileUITemplate.screenshot.2:Dark Mode Support`
          },
          {
            src: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/min/demo/ui/mobile-ui-android-demo-light.min.png',
            description: $localize`:@@userInterfaces.mobileUITemplate.screenshot.3:Android Support`
          }
        ],
        openSource: true,
        features: DEFAULT_OPEN_SOURCE_SERVER_FEATURES,
        pricingOptions: DEFAULT_OPEN_SOURCE_SERVER_PRICING_OPTIONS,
        techStack: [
          TECH_STACK.typeScript,
          TECH_STACK.reactNative,
          TECH_STACK.fontAwesome,
          TECH_STACK.npm
        ]
      },
      {
        key: 'admin-ui-template',
        name: 'Admin UI',
        description: $localize`:@@userInterfaces.webUITemplate.description:Admin UI Template is modern, responsive and customisable admin ui template for your business. It contains reusable components, theme color and design support along with dark theme support.`,
        url: environmentCommon.website.github.url + '/' + environmentCommon.company.social.github + '/' + 'admin-ui-template',
        urlDemo: 'https://admin.opentemplatehub.com',
        logo: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/min/logo/ui/admin-ui-logo.min.png',
        video: {
          url: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/demo/ui/videos/admin-ui-video-1.mp4',
          description: $localize`:@@userInterfaces.adminUITemplate.video.description:Modern, responsive and customisable admin ui template written with Angular`,
        },
        screenshots: [
          {
            src: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/min/demo/ui/admin-ui-demo-light.min.png',
            description: $localize`:@@userInterfaces.adminUITemplate.screenshot.1:Responsive Design`
          },
          {
            src: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/min/demo/ui/admin-ui-demo-dark.min.png',
            description: $localize`:@@userInterfaces.adminUITemplate.screenshot.2:Dark Mode Support`
          },
          {
            src: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/min/demo/ui/screenshots/admin-ui-screenshot-1.min.png',
            description: $localize`:@@userInterfaces.adminUITemplate.screenshot.3:Integrated With OTH Servers`
          },
          {
            src: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/min/demo/ui/screenshots/admin-ui-screenshot-2.min.png',
            description: $localize`:@@userInterfaces.adminUITemplate.screenshot.4:Customisable Theme Colors`
          },
          {
            src: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/min/demo/ui/screenshots/admin-ui-screenshot-3.min.png',
            description: $localize`:@@userInterfaces.adminUITemplate.screenshot.5:Customisable Theme Design`
          }
        ],
        openSource: true,
        features: DEFAULT_OPEN_SOURCE_SERVER_FEATURES,
        pricingOptions: DEFAULT_OPEN_SOURCE_SERVER_PRICING_OPTIONS,
        techStack: [
          TECH_STACK.typeScript,
          TECH_STACK.angular,
          TECH_STACK.fontAwesome,
          TECH_STACK.heroku,
          TECH_STACK.sass,
          TECH_STACK.markdown,
          TECH_STACK.npm
        ]
      },
    ],
  },
  {
    key: 'generator',
    name: 'CLI Generators',
    description: $localize`:@@productLinesData.generator.description:Command line interface generators`,
    products: [
      {
        key: 'server-generator',
        name: 'Server Generator',
        description: $localize`:@@generators.serverGenerator.description:Command line interface generator of the servers at Open Template Hub`,
        url: environmentCommon.website.github.url + '/' + environmentCommon.company.social.github + '/' + 'server-generator',
        urlAlter: environmentCommon.website.npm.url + '/package/' + environmentCommon.company.social.npm + '/' + 'server-generator',
        logo: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/min/logo/generator/server-generator-logo.min.png',
        openSource: true,
        hasNpmPackage: true,
        features: DEFAULT_OPEN_SOURCE_SERVER_FEATURES,
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
        steps: [
          { text: 'Package Installation', level: 1 },
          { text: 'Open the terminal and type:\nnpm install -g @open-template-hub/server-generator', level: 2 },
          { text: 'Package Usage', level: 1 },
          {
            text: 'Go to the directory on terminal where you want to generate the project and type:\n$ cd PATH', level: 2
          },
          {
            text: 'Run the generator command:\nopen-template-hub-server-generator', level: 2
          },
        ],
      },
      {
        key: 'app-generator',
        name: 'UI Generator',
        description:
            $localize`:@@generators.appGenerator.description:Command line interface generator of the user interfaces at Open Template Hub`,
        url: environmentCommon.website.github.url + '/' + environmentCommon.company.social.github + '/' + 'app-generator',
        urlAlter: environmentCommon.website.npm.url + '/package/' + environmentCommon.company.social.npm + '/' + 'app-generator',
        logo: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/min/logo/generator/server-generator-logo.min.png',
        openSource: true,
        hasNpmPackage: true,
        features: DEFAULT_OPEN_SOURCE_SERVER_FEATURES,
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
        steps: [
          { text: 'Package Installation', level: 1 },
          { text: 'Open the terminal and type:\nnpm install -g @open-template-hub/app-generator', level: 2 },
          { text: 'Package Usage', level: 1 },
          {
            text: 'Go to the directory on terminal where you want to generate the project and type:\n$ cd PATH', level: 2
          },
          {
            text: 'Run the generator command:\nopen-template-hub-app-generator', level: 2
          },
        ],
      },
    ],
  },
];

export const LIBRARIES: ProductLine[] = [
  {
    key: 'user-interface',
    name: 'User Interface Libraries',
    description: `Libraries for UI Templates on Open Template Hub`,
    products: [
      {
        key: 'animated-code-editor',
        name: 'Animated Code Editor',
        description: `This library contains animated code editor ui component for UI Templates on Open Template Hub`,
        url: environmentCommon.website.github.url + '/' + environmentCommon.company.social.github + '/' + 'animated-code-editor',
        urlAlter: environmentCommon.website.npm.url + '/package/' + environmentCommon.company.social.npm + '/' + 'animated-code-editor',
        logo: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/min/logo/generator/server-generator-logo.min.png',
        video: {
          url: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/demo/library/videos/animated-code-editor-video-1.mov',
          description: `Animated Code Editor demo`,
        },
        openSource: true,
        hasNpmPackage: true,
        redirectToUrl: true
      },
      {
        key: 'led',
        name: 'Led',
        description: `This library contains led ui component for UI Templates on Open Template Hub`,
        url: environmentCommon.website.github.url + '/' + environmentCommon.company.social.github + '/' + 'led',
        urlAlter: environmentCommon.website.npm.url + '/package/' + environmentCommon.company.social.npm + '/' + 'led',
        logo: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/min/logo/brand-logo.min.png',
        openSource: true,
        hasNpmPackage: true,
        redirectToUrl: true
      },
      {
        key: 'card',
        name: 'Card',
        description: `This library contains card ui component for UI Templates on Open Template Hub`,
        url: environmentCommon.website.github.url + '/' + environmentCommon.company.social.github + '/' + 'card',
        urlAlter: environmentCommon.website.npm.url + '/package/' + environmentCommon.company.social.npm + '/' + 'card',
        logo: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/min/logo/brand-logo.min.png',
        openSource: true,
        hasNpmPackage: true,
        redirectToUrl: true
      },
      {
        key: 'button',
        name: 'Button',
        description: `This library contains button ui component for UI Templates on Open Template Hub`,
        url: environmentCommon.website.github.url + '/' + environmentCommon.company.social.github + '/' + 'button',
        urlAlter: environmentCommon.website.npm.url + '/package/' + environmentCommon.company.social.npm + '/' + 'button',
        logo: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/min/logo/brand-logo.min.png',
        openSource: true,
        hasNpmPackage: true,
        redirectToUrl: true
      },
      {
        key: 'hero',
        name: 'Hero',
        description: `This library contains hero ui component for UI Templates on Open Template Hub`,
        url: environmentCommon.website.github.url + '/' + environmentCommon.company.social.github + '/' + 'hero',
        urlAlter: environmentCommon.website.npm.url + '/package/' + environmentCommon.company.social.npm + '/' + 'hero',
        logo: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/min/logo/brand-logo.min.png',
        openSource: true,
        hasNpmPackage: true,
        redirectToUrl: true
      },
      {
        key: 'ui-library-template',
        name: 'UI Library Template',
        description: `This library is a template to generate new angular component libraries.`,
        url: environmentCommon.website.github.url + '/' + environmentCommon.company.social.github + '/' + 'ui-library-template',
        urlAlter: environmentCommon.website.npm.url + '/package/' + environmentCommon.company.social.npm + '/' + 'ui-library-template',
        logo: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/min/logo/brand-logo.min.png',
        openSource: true,
        hasNpmPackage: true,
        redirectToUrl: true
      },
    ],
  },
  {
    key: 'server',
    name: 'Other Libraries',
    description: `Libraries for Server Templates on Open Template Hub`,
    products: [
      {
        key: 'swagger-decorators',
        name: 'Swagger Decorators',
        description: `OTH library that contains methods and decorators to ease and automate Swagger documentation.`,
        url: environmentCommon.website.github.url + '/' + environmentCommon.company.social.github + '/' + 'swagger-decorators',
        urlAlter: environmentCommon.website.npm.url + '/package/' + environmentCommon.company.social.npm + '/' + 'swagger-decorators',
        logo: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/min/logo/library/swagger-decorators-logo.min.png',
        openSource: true,
        hasNpmPackage: true,
        redirectToUrl: true
      },
      {
        key: 'common',
        name: 'Common',
        description: `This library contains common functionalities for Server Templates on Open Template Hub`,
        url: environmentCommon.website.github.url + '/' + environmentCommon.company.social.github + '/' + 'common',
        urlAlter: environmentCommon.website.npm.url + '/package/' + environmentCommon.company.social.npm + '/' + 'common',
        logo: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/min/logo/brand-logo.min.png',
        openSource: true,
        hasNpmPackage: true,
        redirectToUrl: true
      },
    ],
  },
];

export const PLUGINS: ProductLine[] = [
  {
    key: 'plugins',
    name: 'Plugins',
    description: `Plugins made by Open Template Hub`,
    products: [
      {
        key: 'oth-intellij-theme-plugin',
        name: 'IntelliJ Theme',
        description: `OTH themes for JetBrains. Dark and light themes using Open Template Hub's color palette.`,
        url: environmentCommon.website.github.url + '/' + environmentCommon.company.social.github + '/' + 'oth-intellij-theme-plugin',
        urlAlter: 'https://plugins.jetbrains.com/plugin/18932-oth-theme',
        logo: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/third-parties/logo/intellij.png',
        openSource: true,
        redirectToUrlAlter: true
      },
      {
        key: 'oth-vscode-theme-plugin',
        name: 'VSCode Theme',
        description: `OTH themes for VSCode. Dark and light themes using Open Template Hub's color palette.`,
        url: environmentCommon.website.github.url + '/' + environmentCommon.company.social.github + '/' + 'oth-vscode-theme-plugin',
        urlAlter: 'https://marketplace.visualstudio.com/items?itemName=OpenTemplateHub.oth-theme',
        logo: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/third-parties/logo/vscode.png',
        openSource: true,
        redirectToUrlAlter: true
      }
    ],
  }
];

export const SERVICES: ProductLine[] = [
  {
    key: 'services',
    name: 'Services',
    description: $localize`:@@servicesData.description:Services that we provide`,
    products: [
      {
        key: 'software-consultancy',
        name: 'Software Consultancy',
        description: $localize`:@@servicesData.softwareConsultancy.description:We perform world-class custom software development services from startups to enterprise businesses. Our highly experienced software developers have a deep understanding of how to leverage top programming languages, frameworks, and other software development tools to create the ideal solution for your business.`,
        url: environmentCommon.website.github.url + '/' + environmentCommon.company.social.github,
        logo: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/min/logo/brand-logo.min.png',
        features: [ {
          name: $localize`:@@servicesData.softwareConsultancy.features.name:Features`,
          details: [
            {
              name: $localize`:@@servicesData.softwareConsultancy.features.details.1.name:Custom Application Development`,
              description: $localize`:@@servicesData.softwareConsultancy.features.details.1.description:We rely on our industry-specific technology experience to deliver highly scalable, flexible, and interoperable web, mobile, desktop, and hybrid applications.`
            },
            {
              name: $localize`:@@servicesData.softwareConsultancy.features.details.2.name:Application Maintenance`,
              description: $localize`:@@servicesData.softwareConsultancy.features.details.2.description:Our app maintenance & modernization services are designed to ensure the scalability, performance, and sustainability of your entire software infrastructure.`
            },
            {
              name: $localize`:@@servicesData.softwareConsultancy.features.details.3.name:Implementation & Deployment`,
              description: $localize`:@@servicesData.softwareConsultancy.features.details.3.description:We devise an in-depth, comprehensive software implementation & deployment plan, assessing your needs to deliver enhanced technologies to end-users.`
            },
          ],
        }
        ],
      },
      {
        key: 'software-integration',
        name: 'Software Integration',
        description: $localize`:@@servicesData.softwareIntegration.description:When a company adopts a new technology or business process, they face many challenges between their current applications and systems and the complicated software implementation process. Our industry-specific software engineers handle all of your challenging integration & implementation obstacles, including architectural design, testing, debugging, and execution.`,
        url: environmentCommon.website.github.url + '/' + environmentCommon.company.social.github,
        logo: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/min/logo/brand-logo-pieces.min.png',
        features: [ {
          name: $localize`:@@servicesData.softwareIntegration.features.name:Features`,
          details: [
            {
              name: $localize`:@@servicesData.softwareIntegration.features.details.1.name:Data Integration Services`,
              description: $localize`:@@servicesData.softwareIntegration.features.details.1.description:We perform data integration services, including merging data, consolidating business processes, and creating Database Management Systems to ensure complete data integrity during the transfer process.`
            },
            {
              name: $localize`:@@servicesData.softwareIntegration.features.details.2.name:API Integration Services`,
              description: $localize`:@@servicesData.softwareIntegration.features.details.2.description:We provide integrating custom-built and third-party APIs service. We, integrate, and customize add web service functionality to mobile and web applications, and seamlessly synchronize data formats across these applications.`
            },
            {
              name: $localize`:@@servicesData.softwareIntegration.features.details.3.name:Enterprise Application Integrations`,
              description: $localize`:@@servicesData.softwareIntegration.features.details.3.description:We provide Enterprise Application Integration solutions, facilitating seamless communications between business platforms. We are providing integrations for content management, accounting, customer relationship management, analytics, and marketing.`
            },
          ],
        }
        ],
      },
      {
        key: 'quality-assurance',
        name: 'Quality Assurance',
        description: $localize`:@@servicesData.qualityAssurance.description:We deliver full-cycle QA automated software testing for web, mobile, and desktop applications to enable improved test coverage, enhance product quality, optimize testing activities, boost productivity, and decrease overall testing times.`,
        url: environmentCommon.website.github.url + '/' + environmentCommon.company.social.github,
        logo: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/min/logo/brand-logo-shine.min.png',
        features: [ {
          name: $localize`:@@servicesData.qualityAssurance.features.name:Features`,
          details: [
            {
              name: $localize`:@@servicesData.qualityAssurance.features.details.1.name:Software QA Automation Testing`,
              description: $localize`:@@servicesData.qualityAssurance.features.details.1.description:We deliver full-cycle QA automated software testing for web, mobile, and desktop applications to enable improved test coverage, enhance product quality, optimize testing activities, boost productivity, and decrease overall testing times.`
            },
            {
              name: $localize`:@@servicesData.qualityAssurance.features.details.2.name:Software QA Manual Testing`,
              description: $localize`:@@servicesData.qualityAssurance.features.details.2.description:Our dedicated QA team will test your mobile, web, or desktop application manually to identify & fix bugs, detect & eradicate errors, and confirm its compliance with regulatory standards, providing you with the highest quality result possible.`
            },
            {
              name: $localize`:@@servicesData.qualityAssurance.features.details.3.name:Software QA Usability Testing`,
              description: $localize`:@@servicesData.qualityAssurance.features.details.3.description:We design QA usability testing platforms that incorporate specific usability testing tools and UX research methods selected based on the client, focused on measuring how user-friendly and flexible your application or website is.`
            },
          ],
        }
        ]
      },
    ],
  },
];
