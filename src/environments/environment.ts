export const environment = {
  production: false,
  identity: 'local',

  serverUrl: 'http://localhost:4000',

  clientUrl: 'http://localhost:4200',

  eventImageUrl: 'https://oth-web-app.herokuapp.com/assets/brand-logo-blue.png',

  mockDataEnabled: true,

  oth: {
    social: {
      twitter: 'opentemplatehub',
      linkedin: 'open-template-hub',
      github: 'open-template-hub',
      productHunt: '@open_template_hub'
    }
  },

  social: {
    twitter: {
      tag: 'TWITTER_LOCAL',
      callbackParams: [ 'oauth_token', 'oauth_verifier' ],
      logo: './assets/common/social/twitter-logo.png',
      cssClass: 'twitter',
      url: 'https://twitter.com',
      shareUrl: 'https://twitter.com/intent/tweet?url='
    },
    google: {
      tag: 'GOOGLE_LOCAL',
      callbackParams: [ 'code', 'state' ],
      logo: './assets/common/social/google-logo.png',
      cssClass: 'google'
    },
    facebook: {
      // Facebook does not allow testing social login at localhost. This configuration will redirect you to development env.
      tag: 'FACEBOOK_DEVELOPMENT',
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
      tag: 'LINKEDIN_LOCAL',
      callbackParams: [ 'code', 'state' ],
      logo: './assets/common/social/linkedin-logo.png',
      cssClass: 'linkedin-in',
      url: 'https://www.linkedin.com',
      shareUrl: 'https://www.linkedin.com/sharing/share-offsite/?url='
    },
    twitch: {
      tag: 'TWITCH_LOCAL',
      callbackParams: [ 'code', 'state' ],
      logo: './assets/social/twitch-logo.png',
      cssClass: 'twitch'
    },
    github: {
      tag: 'GITHUB_LOCAL',
      callbackParams: [ 'code', 'state' ],
      logo: './assets/common/social/github-logo.png',
      cssClass: 'github'
    },
    dribbble: {
      tag: 'DRIBBBLE_LOCAL',
      callbackParams: [ 'code', 'state' ],
      logo: './assets/social/dribbble-logo.png',
      cssClass: 'dribbble'
    },
    reddit: {
      tag: 'REDDIT_LOCAL',
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

  donation: {
    buymeacoffee: {
      cssClass: 'buymeacoffee',
      logo: './assets/common/social/buymeacoffee-logo.png'
    },
    patreon: {
      cssClass: 'patreon'
    }
  },

  payment: {
    stripe: {
      tag: 'STRIPE_LOCAL',
      publishableKey: 'pk_test_51I4pFdJslj2vUcp7AkRtYwCPiZJbSvGK7lNFggSbLp9LQopdnUJU44mBKlREonmvszmASnyv4FMxQztzFedllxJO00wg7mHS85',
      logo: './assets/common/social/stripe-logo.png',
      cssClass: 'stripe-s'
    },
    coinbase: {
      tag: 'COINBASE_LOCAL'
    },
    paypal: {
      tag: 'PAYPAL_LOCAL',
      cliendId: 'AZDxjDScFpQtjWTOUtWKbyN_bDt4OgqaF4eYXlewfBP4-8aqX3PiV8e1GWU6liB2CUXlkA59kJXE7M6R',
      version: '5.0.128',
      env: 'sandbox'
      // env: 'live'
    }
  }
};
