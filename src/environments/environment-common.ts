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
      logo: './assets/common/social/twitter-logo.png',
      cssClass: 'twitter',
      url: 'https://twitter.com',
      shareUrl: 'https://twitter.com/intent/tweet?url=',
      callbackParams: [ 'oauth_token', 'oauth_verifier' ],
      tag: environment.oauth.twitter.tag,
    },
    google: {
      logo: './assets/common/social/google-logo.png',
      cssClass: 'google',
      callbackParams: [ 'code', 'state' ],
      tag: environment.oauth.google.tag,
    },
    facebook: {
      logo: './assets/common/social/facebook-logo.png',
      cssClass: 'facebook-f',
      url: 'https://facebook.com',
      callbackParams: [ 'code' ],
      tag: environment.oauth.facebook.tag,
    },
    linkedin: {
      logo: './assets/common/social/linkedin-logo.png',
      cssClass: 'linkedin-in',
      url: 'https://www.linkedin.com',
      shareUrl: 'https://www.linkedin.com/sharing/share-offsite/?url=',
      callbackParams: [ 'code', 'state' ],
      tag: environment.oauth.linkedin.tag,
    },
    twitch: {
      logo: './assets/common/social/twitch-logo.png',
      cssClass: 'twitch',
      callbackParams: [ 'code', 'state' ],
      tag: environment.oauth.twitch.tag,
    },
    github: {
      logo: './assets/common/social/github-logo.png',
      cssClass: 'github',
      url: 'https://github.com',
      callbackParams: [ 'code', 'state' ],
      tag: environment.oauth.github.tag,
    },
    dribbble: {
      logo: './assets/common/social/dribbble-logo.png',
      cssClass: 'dribbble',
      callbackParams: [ 'code', 'state' ],
      tag: environment.oauth.dribbble.tag,
    },
    reddit: {
      logo: './assets/common/social/reddit-logo.png',
      cssClass: 'reddit-alien',
      callbackParams: [ 'code', 'state' ],
      tag: environment.oauth.reddit.tag,
    },
    stripe: {
      logo: './assets/common/social/stripe-logo.png',
      cssClass: 'stripe-s',
      tag: environment.payment.stripe.tag,
      publishableKey: environment.payment.stripe.publishableKey
    },
    coinbase: {
      cssClass: 'coinbase',
      tag: environment.payment.coinbase.tag,
    },
    paypal: {
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
      url: 'https://www.producthunt.com/'
    },
    appleCalendar: {
      logo: './assets/common/social/apple-calendar-logo.png',
      cssClass: 'apple-calendar'
    },
    googleCalendar: {
      logo: './assets/common/social/google-calendar-logo.png',
      cssClass: 'google-calendar'
    }
  }
};
