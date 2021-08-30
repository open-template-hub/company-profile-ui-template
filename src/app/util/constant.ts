import { DropdownColumnOption } from '../component/common/dropdown-menu/dropdown-menu.component';

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
  blue: 'blue'
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

export const PRODUCTS: DropdownColumnOption[] = [
  {
    sectionTitle: 'Servers',
    menus: [
      {
        backgroundColor: 'var(--brand-color-lighter-2)',
        brand: { brandLogo: './assets/production/brand-logo.png' },
        header: 'Auth Server',
        description: 'Authentication Server Template supporting both regular signup and login processes and login with social networks that support OAuth and OAuth2.0',
        link: URLS.maintenance
      },
      {
        backgroundColor: 'var(--brand-color-lighter-2)',
        brand: { brandLogo: 'https://github.com/open-template-hub/open-template-hub.github.io/blob/master/assets/logo/servers/payment-server-logo.png?raw=true' },
        header: 'Payment Server',
        description: 'Payment Server template integrated with Stripe and Coinbase Commerce payment systems',
        link: URLS.maintenance
      },
      {
        backgroundColor: 'var(--brand-color-lighter-2)',
        brand: { brandLogo: './assets/production/brand-logo.png' },
        header: 'File Storage Server',
        description: 'File Storage Server Template that supports uploading and downloading files from AWS S3',
        link: URLS.maintenance
      },
      {
        backgroundColor: 'var(--brand-color-lighter-2)',
        brand: { brandLogo: './assets/production/brand-logo.png' },
        header: 'Analytics Server',
        description: 'Analytics Server Template for generic usage in Node.js',
        link: URLS.maintenance
      },
      {
        backgroundColor: 'var(--brand-color-lighter-2)',
        brand: { brandLogo: './assets/production/brand-logo.png' },
        header: 'Basic Info Server',
        description: 'Basic Info Server Template for generic usage in Node.js',
        link: URLS.maintenance
      }
    ],
  },
  {
    sectionTitle: 'User Interfaces',
    menus: [
      {
        backgroundColor: 'var(--brand-color-lighter-2)',
        brand: { brandLogo: './assets/production/brand-logo.png' },
        header: 'Company Profile UI',
        description: 'Open Template Hub is an organization that develops open source micro servers as templates including authentication server, payment server and more..',
        link: URLS.maintenance
      },
      {
        backgroundColor: 'var(--brand-color-lighter-2)',
        brand: { brandLogo: './assets/production/brand-logo.png' },
        header: 'Web UI',
        description: 'Open Template Hub is an organization that develops open source micro servers as templates including authentication server, payment server and more..',
        link: URLS.maintenance
      },
      {
        backgroundColor: 'var(--brand-color-lighter-2)',
        brand: { brandLogo: './assets/production/brand-logo.png' },
        header: 'Mobile UI',
        description: 'Open Template Hub is an organization that develops open source micro servers as templates including authentication server, payment server and more..',
        link: URLS.maintenance
      }
    ]
  }
];

export const SERVICES: DropdownColumnOption[ ] = [
  {
    menus: [
      {
        backgroundColor: 'var(--brand-color-lighter-2)',
        brand: { brandLogo: './assets/production/brand-logo.png' },
        header: 'Software Consultancy',
        description: 'Open Template Hub is an organization that develops open source micro servers as templates including authentication server, payment server and more..',
        link: URLS.maintenance
      },
      {
        backgroundColor: 'var(--brand-color-lighter-2)',
        brand: { brandLogo: './assets/production/brand-logo.png' },
        header: 'Cloud Integration',
        description: 'Open Template Hub is an organization that develops open source micro servers as templates including authentication server, payment server and more..',
        link: URLS.maintenance
      },
      {
        backgroundColor: 'var(--brand-color-lighter-2)',
        brand: { brandLogo: './assets/production/brand-logo.png' },
        header: 'Quality Insurance',
        description: 'Open Template Hub is an organization that develops open source micro servers as templates including authentication server, payment server and more..',
        link: URLS.maintenance
      }
    ]
  }
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
