export const defaultEnvironmentConfigurations = {
  oauth: {
    twitter: {
      tag: ''
    },
    google: {
      tag: ''
    },
    facebook: {
      tag: ''
    },
    linkedin: {
      tag: ''
    },
    twitch: {
      tag: ''
    },
    github: {
      tag: ''
    },
    dribbble: {
      tag: ''
    },
    reddit: {
      tag: ''
    }
  },

  payment: {
    stripe: {
      tag: '',
      publishableKey: '',
    },
    coinbase: {
      tag: ''
    },
    paypal: {
      tag: '',
      clientId: '',
      env: ''
    }
  },

  fileStorage: {
    aws: {
      tag: ''
    },
    googleCloud: {
      tag: ''
    }
  },

  mail: {
    gmail: {
      tag: ''
    },
    yahoo: {
      tag: ''
    },
    outlook: {
      tag: ''
    }
  },

  sms: {
    twillio: {
      tag: ''
    },
    awsSns: {
      tag: ''
    }
  },

  analytics: {
    googleAnalytics: {
      tag: '',
      id: ''
    },
    matomo: {
      tag: '',
      id: ''
    },
    mixPanel: {
      tag: '',
      id: ''
    }
  }
};
