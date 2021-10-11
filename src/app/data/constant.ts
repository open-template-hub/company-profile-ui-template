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

export const INFORMATION_TYPES = {
  error: {
    cssClass: 'error',
    icon: 'times'
  },
  warning: {
    cssClass: 'warning',
    icon: 'exclamation-triangle'
  },
  success: {
    cssClass: 'success', icon: 'check'
  },
  info: {
    cssClass: 'info',
    icon: 'info-circle'
  }
};

export const NpmPackages = [
  '@open-template-hub/server-generator',
  '@open-template-hub/common',
  '@open-template-hub/app-generator',
];

export const OthStartDate = '2020-01-01';

export const OthGithubName = 'open-template-hub';

export const Authors = 'Fatih Turker, Furkan Yavuz, Mert Sarac';

export const GithubCounters = {
  Stars: 'Stars',
  Forks: 'Forks',
  Subscribers: 'Subscribers',
  ReleaseVersion: 'Release Version',
};

export const PROFILE_IMG = './assets/common/profile-img.png';

export const DarkLightSettings = {
  dark: 'dark',
  light: 'light',
  auto: 'auto',
};

export const DEFAULT_THEME = 'default-theme';

export const ThemeColorSettings = {
  red: 'red-theme',
  yellow: 'yellow-theme',
  blue: 'blue-theme',
  green: 'green-theme',
  orange: 'orange-theme',
  purple: 'purple-theme',
  pink: 'pink-theme'
};

export const ThemeDesignSettings = {
  round: 'round-theme',
  sharp: 'sharp-theme'
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
  about: 'about',
  signup: 'signup',
  login: 'login',
  branding: 'branding',
  forgetPassword: 'forget-password',
  resetPassword: 'reset-password',
  contactUs: 'contact-us',
  status: 'status',
  sitemap: 'sitemap',
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
    editTheme: 'edit-theme',
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
  about: '/' + URLS_RAW.about,
  signup: '/' + URLS_RAW.signup,
  login: '/' + URLS_RAW.login,
  branding: '/' + URLS_RAW.branding,
  forgetPassword: '/' + URLS_RAW.forgetPassword,
  resetPassword: '/' + URLS_RAW.resetPassword,
  contactUs: '/' + URLS_RAW.contactUs,
  status: '/' + URLS_RAW.status,
  sitemap: '/' + URLS_RAW.sitemap,
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
    myProfile:
        '/' + URLS_RAW.dashboard.root + '/' + URLS_RAW.dashboard.myProfile,
    contribute: '/' + URLS_RAW.dashboard.root + '/' + URLS_RAW.dashboard.event,
    learn: '/' + URLS_RAW.dashboard.root + '/' + URLS_RAW.dashboard.learn,
    event: '/' + URLS_RAW.dashboard.root + '/' + URLS_RAW.dashboard.createEvent,
    privacy: '/' + URLS_RAW.dashboard.root + '/' + URLS_RAW.dashboard.privacy,
  },
  user: {
    root: '/' + URLS_RAW.user,
  },
  // Settings Layout
  settings: {
    editTheme: '/' + URLS_RAW.settings.root + '/' + URLS_RAW.settings.editTheme,
  },
};
