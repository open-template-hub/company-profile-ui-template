import { EnvironmentModel } from '../app/model/environment/environment.model';

export const environment: EnvironmentModel = {
  identity: 'local',

  production: false,

  serverUrl: 'https://oth-server-orchestra-dev.herokuapp.com',

  clientUrl: 'http://localhost:4200',

  mockDataEnabled: true,

  oauth: {
    twitter: {
      tag: 'TWITTER_LOCAL'
    },
    google: {
      tag: 'GOOGLE_LOCAL'
    },
    facebook: {
      // Facebook does not allow testing social login at localhost. This configuration will redirect you to development env.
      tag: 'FACEBOOK_DEVELOPMENT'
    },
    linkedin: {
      tag: 'LINKEDIN_LOCAL'
    },
    twitch: {
      tag: 'TWITCH_LOCAL'
    },
    github: {
      tag: 'GITHUB_LOCAL'
    },
    dribbble: {
      tag: 'DRIBBBLE_LOCAL'
    },
    reddit: {
      tag: 'REDDIT_LOCAL'
    }
  },

  payment: {
    stripe: {
      tag: 'STRIPE_LOCAL',
      publishableKey: 'pk_test_51I4pFdJslj2vUcp7AkRtYwCPiZJbSvGK7lNFggSbLp9LQopdnUJU44mBKlREonmvszmASnyv4FMxQztzFedllxJO00wg7mHS85',
    },
    coinbase: {
      tag: 'COINBASE_LOCAL'
    },
    paypal: {
      tag: 'PAYPAL_LOCAL',
      clientId: 'AZDxjDScFpQtjWTOUtWKbyN_bDt4OgqaF4eYXlewfBP4-8aqX3PiV8e1GWU6liB2CUXlkA59kJXE7M6R',
      env: 'sandbox'
    }
  },

  fileStorage: {
    aws: {
      tag: 'AWS_LOCAL'
    },
    googleCloud: {
      tag: 'GOOGLE_CLOUD_LOCAL'
    }
  },

  mail: {
    gmail: {
      tag: 'GMAIL_LOCAL'
    },
    yahoo: {
      tag: 'YAHOO_LOCAL'
    },
    outlook: {
      tag: 'OUTLOOK_LOCAL'
    },
    yandex: {
      tag: 'YANDEX_LOCAL'
    }
  },

  sms: {
    twillio: {
      tag: 'TWILLIO_LOCAL'
    },
    awsSns: {
      tag: 'AWS_SNS_LOCAL'
    }
  },

  analytics: {
    googleAnalytics: {
      tag: 'GTM-P4FHG76'
    },
    matomo: {
      tag: ''
    }
  }
};
