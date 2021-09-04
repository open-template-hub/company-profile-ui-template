export const environment = {
  production: true,
  identity: 'production',

  serverUrl: 'https://oth-orchestration.herokuapp.com',

  clientUrl: 'https://www.opentemplatehub.com',

  mockDataEnabled: true,

  social: {
    twitter: {
      tag: 'TWITTER',
      callbackParams: [ 'oauth_token', 'oauth_verifier' ],
      logo: './assets/common/social/twitter-logo.png',
      cssClass: 'twitter',
      url: 'https://twitter.com',
      shareUrl: 'https://twitter.com/intent/tweet?url='
    },
    google: {
      tag: 'GOOGLE',
      callbackParams: [ 'code', 'state' ],
      logo: './assets/common/social/google-logo.png',
      cssClass: 'google'
    },
    facebook: {
      tag: 'FACEBOOK',
      callbackParams: [ 'code' ],
      logo: './assets/common/social/facebook-logo.png',
      cssClass: 'facebook-f',
      url: 'https://facebook.com'
    },
    instagram: {
      cssClass: 'instagram',
      url: 'https://www.instagram.com'
    },
    youtube: {
      cssClass: 'youtube',
      url: 'https://youtube.com'
    },
    linkedin: {
      tag: 'LINKEDIN',
      callbackParams: [ 'code', 'state' ],
      logo: './assets/common/social/linkedin-logo.png',
      cssClass: 'linkedin-in',
      url: 'https://www.linkedin.com',
      shareUrl: 'https://www.linkedin.com/sharing/share-offsite/?url='
    },
    twitch: {
      tag: 'TWITCH',
      callbackParams: [ 'code', 'state' ],
      logo: './assets/social/twitch-logo.png',
      cssClass: 'twitch'
    },
    github: {
      tag: 'GITHUB',
      callbackParams: [ 'code', 'state' ],
      logo: './assets/common/social/github-logo.png',
      cssClass: 'github'
    },
    dribbble: {
      tag: 'DRIBBBLE',
      callbackParams: [ 'code', 'state' ],
      logo: './assets/social/dribbble-logo.png',
      cssClass: 'dribbble'
    },
    reddit: {
      tag: 'REDDIT',
      callbackParams: [ 'code', 'state' ],
      logo: './assets/social/reddit-logo.png',
      cssClass: 'reddit-alien'
    },
    stripe: {
      cssClass: 'stripe-s'
    },
    coinbase: {
      cssClass: 'coinbase'
    },
    paypal: {
      cssClass: 'paypal'
    },
    productHunt: {
      cssClass: 'product-hunt'
    },
    appleCalendar: {
      logo: './assets/common/social/apple-calendar-logo.png',
      cssClass: 'apple-calendar'
    },
    googleCalendar: {
      logo: './assets/common/social/google-calendar-logo.png',
      cssClass: 'google-calendar'
    }
  },

  payment: {
    stripe: {
      tag: 'STRIPE',
      publishableKey: 'pk_test_51I4pFdJslj2vUcp7AkRtYwCPiZJbSvGK7lNFggSbLp9LQopdnUJU44mBKlREonmvszmASnyv4FMxQztzFedllxJO00wg7mHS85',
      logo: './assets/common/social/stripe-logo.png',
      cssClass: 'stripe-s'
    },
    coinbase: {
      tag: 'COINBASE'
    },
    paypal: {
      tag: 'PAYPAL',
      cliendId: 'AZDxjDScFpQtjWTOUtWKbyN_bDt4OgqaF4eYXlewfBP4-8aqX3PiV8e1GWU6liB2CUXlkA59kJXE7M6R',
      version: '5.0.128',
      env: 'sandbox'
      // env: 'live'
    }
  }
};
