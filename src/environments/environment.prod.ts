import { EnvironmentModel } from '../app/model/environment/environment.model';

export const environment: EnvironmentModel = {
  identity: 'production',

  production: true,

  serverUrl: 'https://oth-server-orchestra-live.herokuapp.com',

  clientUrl: 'https://opentemplatehub.com',

  mockDataEnabled: false,

  oauth: {
    twitter: {
      tag: 'TWITTER'
    },
    google: {
      tag: 'GOOGLE'
    },
    facebook: {
      // Facebook does not allow testing social login at localhost. This configuration will redirect you to development env.
      tag: 'FACEBOOK'
    },
    linkedin: {
      tag: 'LINKEDIN'
    },
    twitch: {
      tag: 'TWITCH'
    },
    github: {
      tag: 'GITHUB'
    },
    dribbble: {
      tag: 'DRIBBBLE'
    },
    reddit: {
      tag: 'REDDIT'
    }
  },

  payment: {
    stripe: {
      tag: 'STRIPE',
      publishableKey: 'pk_test_51I4pFdJslj2vUcp7AkRtYwCPiZJbSvGK7lNFggSbLp9LQopdnUJU44mBKlREonmvszmASnyv4FMxQztzFedllxJO00wg7mHS85',
    },
    coinbase: {
      tag: 'COINBASE'
    },
    paypal: {
      tag: 'PAYPAL',
      clientId: 'AZDxjDScFpQtjWTOUtWKbyN_bDt4OgqaF4eYXlewfBP4-8aqX3PiV8e1GWU6liB2CUXlkA59kJXE7M6R',
      env: 'live'
    }
  },

  fileStorage: {
    aws: {
      tag: 'AWS'
    },
    googleCloud: {
      tag: 'GOOGLE_CLOUD'
    }
  },

  mail: {
    gmail: {
      tag: 'GMAIL'
    },
    yahoo: {
      tag: 'YAHOO'
    },
    outlook: {
      tag: 'OUTLOOK'
    },
    yandex: {
      tag: 'YANDEX'
    }
  },

  sms: {
    twillio: {
      tag: 'TWILLIO'
    },
    awsSns: {
      tag: 'AWS_SNS'
    }
  },

  analytics: {
    googleAnalytics: {
      tag: 'GTM-NNRF845'
    },
    matomo: {
      tag: ''
    }
  }
};
