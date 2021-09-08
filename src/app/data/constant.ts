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

export const enum EventTypes {
  Recommended,
  Searched,
  Attended,
  RecommendedByFollowingList,
  Other
}

export const PROFILE_IMG = './assets/common/profile-img.png';

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

export const URLS_RAW = {
  // Landing layout
  notFound: 'not-found',
  maintenance: 'maintenance',
  signupSuccess: 'signup-success',
  verifyAccount: 'verify-account',
  cookiePolicy: 'cookie-policy',
  privacyPolicy: 'privacy-policy',
  terms: 'terms',
  pricing: 'pricing',
  product: 'product',
  aboutUs: 'about-us',
  signup: 'signup',
  login: 'login',
  forgetPassword: 'forget-password',
  resetPassword: 'reset-password',
  showroom: 'showroom',
  u: 'u',
  // SplashLayout
  callback: {
    root: 'callback',
    dribbble: 'dribbble',
    facebook: 'facebook',
    github: 'github',
    google: 'google',
    linkedin: 'linkedin',
    reddit: 'reddit',
    stripe: 'stripe',
    twitch: 'twitch',
    twitter: 'twitter',
  },
  external: 'external',
  // Dashboard Layout
  dashboard: {
    root: 'dashboard',
    myProfile: 'my-profile',
    createEvent: 'create-event',
    learn: 'learn',
    event: 'event',
    privacy: 'privacy',
  },
  user: 'user',
  // Settings Layout
  settings: {
    root: 'settings',
    welcome: 'welcome',
    editProfile: 'edit-profile',
    editTheme: 'edit-theme'
  },
};

export const URLS = {
  // Landing layout
  root: '/' + '',
  notFound: '/' + URLS_RAW.notFound,
  maintenance: '/' + URLS_RAW.maintenance,
  signupSuccess: '/' + URLS_RAW.signupSuccess,
  verifyAccount: '/' + URLS_RAW.verifyAccount,
  cookiePolicy: '/' + URLS_RAW.cookiePolicy,
  privacyPolicy: '/' + URLS_RAW.privacyPolicy,
  terms: '/' + URLS_RAW.terms,
  pricing: '/' + URLS_RAW.pricing,
  product: '/' + URLS_RAW.product,
  aboutUs: '/' + URLS_RAW.aboutUs,
  signup: '/' + URLS_RAW.signup,
  login: '/' + URLS_RAW.login,
  forgetPassword: '/' + URLS_RAW.forgetPassword,
  resetPassword: '/' + URLS_RAW.resetPassword,
  showroom: '/' + URLS_RAW.showroom,
  u: '/' + 'u',
  // SplashLayout
  callback: {
    root: '/' + URLS_RAW.callback.root,
    dribbble: '/' + URLS_RAW.callback.root + '/' + URLS_RAW.callback.dribbble,
    facebook: '/' + URLS_RAW.callback.root + '/' + URLS_RAW.callback.facebook,
    github: '/' + URLS_RAW.callback.root + '/' + URLS_RAW.callback.github,
    google: '/' + URLS_RAW.callback.root + '/' + URLS_RAW.callback.google,
    linkedin: '/' + URLS_RAW.callback.root + '/' + URLS_RAW.callback.linkedin,
    reddit: '/' + URLS_RAW.callback.root + '/' + URLS_RAW.callback.reddit,
    stripe: '/' + URLS_RAW.callback.root + '/' + URLS_RAW.callback.stripe,
    twitch: '/' + URLS_RAW.callback.root + '/' + URLS_RAW.callback.twitch,
    twitter: '/' + URLS_RAW.callback.root + '/' + URLS_RAW.callback.twitter,
  },
  external: '/' + 'external',
  // Dashboard Layout
  dashboard: {
    root: '/' + URLS_RAW.dashboard.root,
    myProfile: '/' + URLS_RAW.dashboard.root + '/' + URLS_RAW.dashboard.myProfile,
    contribute: '/' + URLS_RAW.dashboard.root + '/' + URLS_RAW.dashboard.event,
    learn: '/' + URLS_RAW.dashboard.root + '/' + URLS_RAW.dashboard.learn,
    event: '/' + URLS_RAW.dashboard.root + '/' + URLS_RAW.dashboard.createEvent,
    privacy: '/' + URLS_RAW.dashboard.root + '/' + URLS_RAW.dashboard.privacy,
  },
  user: {
    root: '/' + URLS_RAW.user
  },
  // Settings Layout
  settings: {
    welcome: '/' + URLS_RAW.settings.root + '/' + URLS_RAW.settings.welcome,
    editProfile: '/' + URLS_RAW.settings.root + '/' + URLS_RAW.settings.editProfile,
    editTheme: '/' + URLS_RAW.settings.root + '/' + URLS_RAW.settings.editTheme
  },
};

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
