import { EnvironmentModel } from '../app/model/environment/environment.model';

export const environment: EnvironmentModel = {
  identity: 'staging',

  production: false,

  serverUrl: 'https://oth-server-orchestra-dev.herokuapp.com',

  clientUrl: 'https://dev.opentemplatehub.com',

  // FIXME: After switching to live, change this to false
  mockDataEnabled: true,

  oauth: {
    twitter: {
      tag: 'TWITTER_DEVELOPMENT'
    },
    google: {
      tag: 'GOOGLE_DEVELOPMENT'
    },
    facebook: {
      tag: 'FACEBOOK_DEVELOPMENT'
    },
    linkedin: {
      tag: 'LINKEDIN_DEVELOPMENT'
    },
    twitch: {
      tag: 'TWITCH_DEVELOPMENT'
    },
    github: {
      tag: 'GITHUB_DEVELOPMENT'
    },
    dribbble: {
      tag: 'DRIBBBLE_DEVELOPMENT'
    },
    reddit: {
      tag: 'REDDIT_DEVELOPMENT'
    }
  },

  payment: {
    stripe: {
      tag: 'STRIPE_DEVELOPMENT',
      publishableKey: 'pk_test_51I4pFdJslj2vUcp7AkRtYwCPiZJbSvGK7lNFggSbLp9LQopdnUJU44mBKlREonmvszmASnyv4FMxQztzFedllxJO00wg7mHS85',
    },
    coinbase: {
      tag: 'COINBASE_DEVELOPMENT'
    },
    paypal: {
      tag: 'PAYPAL_DEVELOPMENT',
      clientId: 'AZDxjDScFpQtjWTOUtWKbyN_bDt4OgqaF4eYXlewfBP4-8aqX3PiV8e1GWU6liB2CUXlkA59kJXE7M6R',
      env: 'sandbox'
    }
  },

  fileStorage: {
    aws: {
      tag: 'AWS_DEVELOPMENT'
    },
    googleCloud: {
      tag: 'GOOGLE_CLOUD_DEVELOPMENT'
    }
  },

  mail: {
    gmail: {
      tag: 'GMAIL_DEVELOPMENT'
    },
    yahoo: {
      tag: 'YAHOO_DEVELOPMENT'
    },
    outlook: {
      tag: 'OUTLOOK_DEVELOPMENT'
    },
    yandex: {
      tag: 'YANDEX_DEVELOPMENT'
    }
  },

  sms: {
    twillio: {
      tag: 'TWILLIO_DEVELOPMENT'
    },
    awsSns: {
      tag: 'AWS_SNS_DEVELOPMENT'
    }
  },

  analytics: {
    googleAnalytics: {
      tag: 'GTM-P8BM922'
    },
    matomo: {
      tag: ''
    }
  }
};
