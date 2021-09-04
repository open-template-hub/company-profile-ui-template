export const environment = {
  identity: 'production',

  production: true,

  // FIXME: After creating live env change this url
  serverUrl: 'https://oth-server-orchestra-dev.herokuapp.com',

  clientUrl: 'https://opentemplatehub.com',

  // FIXME: After switching to live, change this to false
  mockDataEnabled: true,

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
      cliendId: 'AZDxjDScFpQtjWTOUtWKbyN_bDt4OgqaF4eYXlewfBP4-8aqX3PiV8e1GWU6liB2CUXlkA59kJXE7M6R',
      env: 'live'
    }
  }
};
