export const environment = {
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
      cliendId: 'AZDxjDScFpQtjWTOUtWKbyN_bDt4OgqaF4eYXlewfBP4-8aqX3PiV8e1GWU6liB2CUXlkA59kJXE7M6R',
      env: 'sandbox'
    }
  },

  analytics: {
    google: {
      tag: 'GTM-P8BM922'
    }
  },

  provider: {
    npm: {
      download: 'https://api.npmjs.org/downloads/point'
    },
    github: {
      repo: 'https://api.github.com/repos'
    }
  }
};
