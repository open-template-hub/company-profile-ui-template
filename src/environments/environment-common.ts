import { EnvironmentCommonModel } from '../app/model/environment-common/environment-common.model';
import { environment } from './environment';

export const environmentCommon: EnvironmentCommonModel = {
  oth: {
    social: {
      twitter: 'opentemplatehub',
      linkedin: 'open-template-hub',
      github: 'open-template-hub',
      productHunt: '@open_template_hub',
      npm: '@open-template-hub',
      discord: 'wa9hmmR'
    },
    email: 'info@opentemplatehub.com'
  },

  website: {
    // oauth
    google: {
      name: 'Google',
      logo: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/third-parties/logo/google.png',
      cssClass: 'google',
      url: 'https://google.com',
      callbackParams: [ 'code', 'state' ],
      tag: environment.oauth.google.tag,
      websiteType: 'oauth'
    },
    linkedin: {
      name: 'Linkedin',
      logo: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/third-parties/logo/linkedin.png',
      cssClass: 'linkedin-in',
      url: 'https://www.linkedin.com',
      companyUrl: 'https://www.linkedin.com/company',
      shareUrl: 'https://www.linkedin.com/sharing/share-offsite/?url=',
      callbackParams: [ 'code', 'state' ],
      tag: environment.oauth.linkedin.tag,
      websiteType: 'oauth'
    },
    github: {
      name: 'Github',
      logo: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/third-parties/logo/github.png',
      cssClass: 'github',
      url: 'https://github.com',
      callbackParams: [ 'code', 'state' ],
      tag: environment.oauth.github.tag,
      api: {
        repo: 'https://api.github.com/repos'
      },
      websiteType: 'oauth'
    },
    facebook: {
      name: 'Facebook',
      logo: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/third-parties/logo/facebook.png',
      cssClass: 'facebook-f',
      url: 'https://facebook.com',
      callbackParams: [ 'code' ],
      tag: environment.oauth.facebook.tag,
      websiteType: 'oauth'
    },
    twitter: {
      name: 'Twitter',
      logo: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/third-parties/logo/twitter.png',
      cssClass: 'twitter',
      url: 'https://twitter.com',
      shareUrl: 'https://twitter.com/intent/tweet?url=',
      callbackParams: [ 'oauth_token', 'oauth_verifier' ],
      tag: environment.oauth.twitter.tag,
      websiteType: 'oauth',
    },
    twitch: {
      name: 'Twitch',
      logo: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/third-parties/logo/twitch.png',
      cssClass: 'twitch',
      callbackParams: [ 'code', 'state' ],
      tag: environment.oauth.twitch.tag,
      websiteType: 'oauth'
    },
    dribbble: {
      name: 'Dribbble',
      logo: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/third-parties/logo/dribbble.png',
      cssClass: 'dribbble',
      callbackParams: [ 'code', 'state' ],
      tag: environment.oauth.dribbble.tag,
      websiteType: 'oauth'
    },
    reddit: {
      name: 'Reddit',
      logo: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/third-parties/logo/reddit.png',
      cssClass: 'reddit',
      callbackParams: [ 'code', 'state' ],
      tag: environment.oauth.reddit.tag,
      websiteType: 'oauth'
    },

    // payment
    stripe: {
      name: 'Stripe',
      logo: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/third-parties/logo/stripe.png',
      cssClass: 'stripe-s',
      tag: environment.payment.stripe.tag,
      publishableKey: environment.payment.stripe.publishableKey,
      websiteType: 'payment'
    },
    coinbase: {
      name: 'Coinbase',
      logo: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/third-parties/logo/coinbase.png',
      cssClass: 'coinbase',
      tag: environment.payment.coinbase.tag,
      websiteType: 'payment'
    },
    paypal: {
      name: 'Paypal',
      logo: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/third-parties/logo/paypal.png',
      cssClass: 'paypal',
      version: '5.0.128',
      tag: environment.payment.paypal.tag,
      clientId: environment.payment.paypal.clientId,
      env: environment.payment.paypal.env,
      websiteType: 'payment'
    },

    // file storage
    aws: {
      name: 'Aws',
      logo: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/third-parties/logo/aws.png',
      cssClass: 'aws',
      url: 'https://aws.amazon.com',
      tag: environment.fileStorage.aws.tag,
      websiteType: 'file-storage'
    },
    googleCloud: {
      name: 'Google Cloud',
      logo: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/third-parties/logo/google-cloud.png',
      cssClass: 'google-cloud',
      url: 'https://cloud.google.com/storage',
      tag: environment.fileStorage.googleCloud.tag,
      websiteType: 'file-storage'
    },

    // mail
    gmail: {
      name: 'Gmail',
      logo: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/third-parties/logo/gmail.png',
      cssClass: 'gmail',
      url: 'https://gmail.com',
      tag: environment.mail.gmail.tag,
      websiteType: 'mail'
    },
    yahoo: {
      name: 'Yahoo',
      logo: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/third-parties/logo/yahoo.png',
      cssClass: 'yahoo',
      url: 'https://yahoo.com',
      tag: environment.mail.yahoo.tag,
      websiteType: 'mail'
    },
    outlook: {
      name: 'Outlook',
      logo: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/third-parties/logo/outlook.png',
      cssClass: 'outlook',
      url: 'https://outlook.com',
      tag: environment.mail.outlook.tag,
      websiteType: 'mail'
    },
    yandex: {
      name: 'Yandex',
      logo: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/third-parties/logo/yandex.png',
      cssClass: 'yandex',
      url: 'https://yandex.com',
      tag: environment.mail.yandex.tag,
      websiteType: 'mail'
    },

    // sms
    twillio: {
      name: 'Twillio',
      logo: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/third-parties/logo/twillio.png',
      cssClass: 'twillio',
      url: 'https://www.twilio.com',
      tag: environment.sms.twillio.tag,
      websiteType: 'sms'
    },
    awsSns: {
      name: 'Aws Sns',
      logo: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/third-parties/logo/aws-sns.png',
      cssClass: 'aws',
      url: 'https://aws.amazon.com',
      tag: environment.sms.awsSns.tag,
      websiteType: 'sms'
    },

    // analytics
    googleAnalytics: {
      name: 'Google Analytics',
      logo: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/third-parties/logo/google-analytics.png',
      cssClass: 'google',
      url: 'https://analytics.google.com',
      tag: environment.analytics.googleAnalytics.tag,
      websiteType: 'analytics'
    },
    matomo: {
      name: 'Matomo',
      logo: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/third-parties/logo/matomo.png',
      cssClass: 'matomo',
      url: 'https://matomo.org',
      tag: environment.analytics.matomo.tag,
      websiteType: 'analytics'
    },

    // other
    instagram: {
      name: 'Instagram',
      cssClass: 'instagram',
      url: 'https://www.instagram.com',
      websiteType: 'other'
    },
    youtube: {
      name: 'Youtube',
      cssClass: 'youtube',
      url: 'https://youtube.com',
      websiteType: 'other'
    },
    productHunt: {
      name: 'Product Hunt',
      cssClass: 'product-hunt',
      url: 'https://www.producthunt.com',
      websiteType: 'other'
    },
    appleCalendar: {
      name: 'Apple Calendar',
      logo: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/third-parties/logo/apple-calendar.png',
      cssClass: 'apple-calendar',
      websiteType: 'other'
    },
    googleCalendar: {
      name: 'Google Calendar',
      logo: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/third-parties/logo/google-calendar.png',
      cssClass: 'google-calendar',
      websiteType: 'other'
    },
    discord: {
      name: 'Discord',
      logo: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/third-parties/logo/discord.png',
      cssClass: 'discord',
      websiteType: 'other',
      companyUrl: 'https://discord.gg'
    },
    npm: {
      name: 'Npm',
      cssClass: 'npm',
      url: 'https://www.npmjs.com',
      api: {
        download: 'https://api.npmjs.org/downloads/point'
      },
      websiteType: 'other'
    }
  },

  languages: [
    { name: 'English', code: 'en-US', emoji: '🇺🇸' },
    { name: 'French', code: 'fr', emoji: '🇫🇷' }
  ]
};
