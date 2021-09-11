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
  contactUs: 'contact-us',
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
  contactUs: '/' + URLS_RAW.contactUs,
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
    editProfile: '/' + URLS_RAW.settings.root + '/' + URLS_RAW.settings.editProfile,
    editTheme: '/' + URLS_RAW.settings.root + '/' + URLS_RAW.settings.editTheme
  },
};
