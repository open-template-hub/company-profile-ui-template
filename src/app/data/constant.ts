import { environmentCommon } from '../../environments/environment-common';
import { Partner } from '../component/common/swiper-wrapper/swiper-wrapper.component';


/**
 * @description holds constants
 */

export const ResponseCode = {
  OK: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  METHOD_NOT_ALLOWED: 405,
  CONFLICT: 409,
  INVALID_TOKEN: 498,
  INTERNAL_SERVER_ERROR: 500,
  SERVICE_UNAVAILABLE: 503,
};

export const enum EventTypes { Recommended, Searched, Attended, RecommendedByFollowingList, Other }

export const PROFILE_IMG = './assets/common/profile-img.png';

const dashboard = '/dashboard';
const settings = '/settings';
const user = '/user';
const callback = '/callback';

export const DarkLightSettings = {
  dark: 'dark',
  light: 'light',
  auto: 'auto'
};

export const ThemeColorSettings = {
  default: 'default',
  red: 'red',
  yellow: 'yellow',
  blue: 'blue',
  green: 'green'
};

export const URLS = {
  root: '/',
  u: '/u',
  notFound: '/not-found',
  maintenance: '/maintenance',
  signup: '/signup',
  signupSuccess: '/signup-success',
  verifyAccount: '/verify-account',
  login: '/login',
  forgetPassword: '/forget-password',
  resetPassword: '/reset-password',
  cookiePolicy: '/cookie-policy',
  privacyPolicy: '/privacy-policy',
  terms: '/terms',
  pricing: '/pricing',
  product: '/product',
  showroom: '/showroom',
  dashboard: {
    root: dashboard,
    contribute: dashboard + '/createEvent',
    learn: dashboard + '/learn',
    event: dashboard + '/event',
    privacy: dashboard + '/privacy',
    myProfile: dashboard + '/my-profile'
  },
  settings: {
    welcome: settings + '/welcome',
    editProfile: settings + '/edit-profile',
    editTheme: settings + '/edit-theme'
  },
  user: {
    root: user
  },
  callback: {
    root: callback,
    twitter: callback + '/twitter',
    google: callback + '/google',
    facebook: callback + '/facebook',
    linkedin: callback + '/linkedin',
    github: callback + '/github'
  }
};

export const RIBBONS = {
  default: {
    type: '',
    text: ''
  },
  new: {
    type: 'new',
    text: 'New 🎉'
  },
  featured: {
    type: 'featured',
    text: 'Featured 🚀'
  },
  premium: {
    type: 'premium',
    text: 'Premium ⭐'
  }
};

export interface Product {
  key?: string, // no key means no product page available
  name: string,
  description: string,
  color?: string,
  href: string,
  logo: string,
  heroImage: string,
  counters?: ProductCounter[]
}

export interface ProductLine {
  key: string,
  name: string,
  description: string,
  color?: string,
  products: Product[]
}

export interface ProductCounter {
  name: string,
  value: string
}

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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        counters: []
      },
      {
        //        key: 'web-ui',
        name: 'Web UI',
        description: 'Web UI Template for generic usage in Angular',
        href: environmentCommon.website.github.url + environmentCommon.oth.social.github,
        logo: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/logo/ui/web-ui-logo.png',
        heroImage: '',
        counters: []
      },
      {
        //        key: 'mobile-ui',
        name: 'Mobile UI',
        description: 'Mobile UI Template for generic usage in React Native',
        href: environmentCommon.website.github.url + environmentCommon.oth.social.github,
        logo: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/logo/ui/mobile-ui-logo.png',
        heroImage: '',
        counters: []
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
        counters: []
      },
      {
        //        key: 'ui-generator',
        name: 'UI Generator',
        description: 'Command line interface generator of the user interfaces at Open Template Hub',
        href: environmentCommon.website.github.url + environmentCommon.oth.social.github,
        logo: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/logo/generator/server-generator-logo.png',
        heroImage: '',
        counters: []
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
        ]
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
        counters: []
      },
      {
        key: 'cloud-integration',
        name: 'Cloud Integration',
        description: 'Open Template Hub is an organization that develops open source micro servers as templates including authentication server, payment server and more..',
        href: environmentCommon.website.github.url + environmentCommon.oth.social.github,
        logo: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/logo/brand-logo.png',
        heroImage: '',
        counters: []
      },
      {
        key: 'quality-assurance',
        name: 'Quality Assurance',
        description: 'Open Template Hub is an organization that develops open source micro servers as templates including authentication server, payment server and more..',
        href: environmentCommon.website.github.url + environmentCommon.oth.social.github,
        logo: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/logo/brand-logo.png',
        heroImage: '',
        counters: []
      }
    ]
  },
];

export const PARTNERS: Partner[] = [
  { brandLogo: '../../../../assets/common/partners/github-logo.png' },
  { brandLogo: '../../../../assets/common/partners/aws-logo.png' },
  { brandLogo: '../../../../assets/common/partners/heroku-logo.png' },
  { brandLogo: '../../../../assets/common/partners/google-logo.png' },
  { brandLogo: '../../../../assets/common/partners/stripe-logo.png' },
  { brandLogo: '../../../../assets/common/partners/netlify-logo.png' },
];

export const CATEGORIES = [
  {
    name: 'Development',
    id: 1,
    payload: {
      subCategories: [
        {
          name: 'Web Development',
          id: 1,
          leafCategories: [ { name: 'JavaScript', id: 1 }, { name: 'React', id: 2 }, {
            name: 'Angular',
            id: 3
          }, { name: 'CSS', id: 4 }, { name: 'PHP', id: 5 }, { name: 'Node.Js', id: 6 }, { name: 'Vue JS', id: 7 } ]
        },
        {
          name: 'Data Science',
          id: 2,
          leafCategories: [ { name: 'Python', id: 1 }, { name: 'Machine Learning', id: 2 }, {
            name: 'Deep Learning',
            id: 3
          }, { name: 'Data Analysis', id: 4 }, { name: 'Artificial Intelligence', id: 5 }, {
            name: 'R',
            id: 6
          }, { name: 'TensorFlow', id: 7 }, { name: 'Neural Networks', id: 8 } ]
        },
        {
          name: 'Mobile Development',
          id: 3,
          leafCategories: [ { name: 'Google Flutter', id: 1 }, {
            name: 'Android Development',
            id: 2
          }, { name: 'iOS Development', id: 3 }, { name: 'Swift', id: 4 }, {
            name: 'React Native',
            id: 5
          }, { name: 'Dart Programming Language', id: 6 }, { name: 'Kotlin', id: 7 }, {
            name: 'Redux Framework',
            id: 8
          } ]
        },
        {
          name: 'Programming Languages',
          id: 4,
          leafCategories: [ { name: 'Python', id: 1 }, { name: 'Java', id: 2 }, { name: 'C#', id: 3 }, {
            name: 'C++',
            id: 4
          }, { name: 'React', id: 5 }, { name: 'JavaScript', id: 6 }, { name: 'C', id: 7 }, {
            name: 'Spring Framework',
            id: 8
          }, { name: 'Go', id: 9 }, { name: 'Programming Language', id: 10 } ]
        },
        {
          name: 'Game Development',
          id: 5,
          leafCategories: [ { name: 'Unity', id: 1 }, {
            name: 'Game Development Fundamentals',
            id: 2
          }, { name: 'Unreal Engine', id: 3 }, { name: 'C#', id: 4 }, {
            name: '3D Game Development',
            id: 5
          }, { name: 'C++', id: 6 }, { name: '2D Game Development', id: 7 }, {
            name: 'Unreal Engine',
            id: 8
          }, { name: 'Blueprints', id: 9 }, { name: 'Blender', id: 10 } ]
        },
        {
          name: 'Database Design & Development',
          id: 6,
          leafCategories: [ { name: 'SQL', id: 1 }, { name: 'MySQL', id: 2 }, {
            name: 'Oracle SQL',
            id: 3
          }, { name: 'Oracle Certification', id: 4 }, { name: 'MongoDB', id: 5 }, {
            name: 'Apache Kafka',
            id: 6
          }, { name: 'SQL Server', id: 7 }, { name: 'PostgreSQL', id: 8 }, { name: 'Database Management', id: 9 } ]
        },
        {
          name: 'Software Testing',
          id: 7,
          leafCategories: [ { name: 'Selenium WebDriver', id: 1 }, {
            name: 'Java',
            id: 2
          }, { name: 'Automation Testing', id: 3 }, {
            name: 'Selenium Testing Framework',
            id: 4
          }, { name: 'API Testing', id: 5 }, { name: 'REST Assured', id: 6 }, {
            name: 'Appium',
            id: 7
          }, { name: 'Cypress.io', id: 8 } ]
        },
        {
          name: 'Software Engineering',
          id: 8,
          leafCategories: [ { name: 'AWS Certification', id: 1 }, {
            name: 'AWS Certified Developer - Associate',
            id: 2
          }, { name: 'Coding Interview', id: 3 }, {
            name: 'Kubernetes',
            id: 4
          }, { name: 'Certified Kubernetes Application Developer (CKAD)', id: 5 }, {
            name: 'Microservices',
            id: 6
          }, { name: 'Python', id: 7 }, { name: 'Agile', id: 8 }, { name: 'Elasticsearch', id: 9 } ]
        },
        {
          name: 'Development Tools',
          id: 9,
          leafCategories: [ { name: 'Docker', id: 1 }, { name: 'Kubernetes', id: 2 }, {
            name: 'Git',
            id: 3
          }, { name: 'DevOps', id: 4 }, { name: 'Jenkins', id: 5 }, {
            name: 'AWS Certification',
            id: 6
          }, { name: 'AWS Certified Developer - Associate', id: 7 }, {
            name: 'JIRA',
            id: 8
          }, { name: 'AWS Certified Solutions Architect - Associate', id: 9 } ]
        },
        {
          name: 'No-Code Development',
          id: 10,
          leafCategories: [ { name: 'Elementor', id: 1 }, { name: 'Wix', id: 2 }, {
            name: 'Software Development',
            id: 3
          }, { name: 'Bubble Visual Programming', id: 4 }, { name: 'WordPress', id: 5 }, {
            name: 'Microsoft PowerApps',
            id: 6
          }, { name: 'Microsoft Power Automate', id: 7 }, { name: 'Web Design', id: 8 }, { name: 'Startup', id: 9 } ]
        }
      ]
    }
  }
];

const CATEGORIES_MAP_INIT = new Map<number, any>();

for ( const category of CATEGORIES ) {
  CATEGORIES_MAP_INIT.set( category.id, { name: category.name, subCategories: new Map<number, any>() } );
  for ( const subCategory of category.payload.subCategories ) {
    CATEGORIES_MAP_INIT.get( category.id ).subCategories.set( subCategory.id, {
      name: subCategory.name,
      leafCategories: new Map<number, any>()
    } );
    for ( const leafCategory of subCategory.leafCategories ) {
      CATEGORIES_MAP_INIT.get( category.id ).subCategories.get( subCategory.id )
      .leafCategories.set( leafCategory.id, { name: leafCategory.name } );
    }
  }
}

export const CATEGORIES_MAP = CATEGORIES_MAP_INIT;
