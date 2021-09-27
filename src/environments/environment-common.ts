import { environment } from './environment';

export const environmentCommon = {
  oth: {
    social: {
      twitter: 'opentemplatehub',
      linkedin: 'open-template-hub',
      github: 'open-template-hub',
      productHunt: '@open_template_hub'
    },
    email: 'info@opentemplatehub.com'
  },

  website: {
    twitter: {
      logo: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/companies/logo/twitter.png',
      cssClass: 'twitter',
      url: 'https://twitter.com',
      shareUrl: 'https://twitter.com/intent/tweet?url=',
      callbackParams: [ 'oauth_token', 'oauth_verifier' ],
      tag: environment.oauth.twitter.tag,
    },
    google: {
      logo: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/companies/logo/google.png',
      cssClass: 'google',
      callbackParams: [ 'code', 'state' ],
      tag: environment.oauth.google.tag,
    },
    facebook: {
      logo: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/companies/logo/facebook.png',
      cssClass: 'facebook-f',
      url: 'https://facebook.com',
      callbackParams: [ 'code' ],
      tag: environment.oauth.facebook.tag,
    },
    linkedin: {
      logo: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/companies/logo/linkedin.png',
      cssClass: 'linkedin-in',
      url: 'https://www.linkedin.com',
      companyUrl: 'https://www.linkedin.com/company',
      shareUrl: 'https://www.linkedin.com/sharing/share-offsite/?url=',
      callbackParams: [ 'code', 'state' ],
      tag: environment.oauth.linkedin.tag,
    },
    twitch: {
      logo: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/companies/logo/twitch.png',
      cssClass: 'twitch',
      callbackParams: [ 'code', 'state' ],
      tag: environment.oauth.twitch.tag,
    },
    github: {
      logo: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/companies/logo/github.png',
      cssClass: 'github',
      url: 'https://github.com',
      callbackParams: [ 'code', 'state' ],
      tag: environment.oauth.github.tag,
      api: {
        repo: 'https://api.github.com/repos'
      }
    },
    dribbble: {
      logo: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/companies/logo/dribbble.png',
      cssClass: 'dribbble',
      callbackParams: [ 'code', 'state' ],
      tag: environment.oauth.dribbble.tag,
    },
    reddit: {
      logo: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/companies/logo/reddit.png',
      cssClass: 'reddit-alien',
      callbackParams: [ 'code', 'state' ],
      tag: environment.oauth.reddit.tag,
    },
    stripe: {
      logo: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/companies/logo/stripe.png',
      cssClass: 'stripe-s',
      tag: environment.payment.stripe.tag,
      publishableKey: environment.payment.stripe.publishableKey
    },
    coinbase: {
      logo: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/companies/logo/coinbase.png',
      cssClass: 'coinbase',
      tag: environment.payment.coinbase.tag,
    },
    paypal: {
      logo: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/companies/logo/paypal.png',
      cssClass: 'paypal',
      version: '5.0.128',
      tag: environment.payment.paypal.tag,
      clientId: environment.payment.paypal.cliendId,
      env: environment.payment.paypal.env
    },
    instagram: {
      cssClass: 'instagram',
      url: 'https://www.instagram.com'
    },
    youtube: {
      cssClass: 'youtube',
      url: 'https://youtube.com'
    },
    productHunt: {
      cssClass: 'product-hunt',
      url: 'https://www.producthunt.com'
    },
    appleCalendar: {
      logo: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/companies/logo/apple-calendar.png',
      cssClass: 'apple-calendar'
    },
    googleCalendar: {
      logo: 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/companies/logo/google-calendar.png',
      cssClass: 'google-calendar'
    },
    npm: {
      api: {
        download: 'https://api.npmjs.org/downloads/point'
      }
    }
  }
};
