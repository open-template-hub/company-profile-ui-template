import { WebsiteModel } from '../website/website.model';

export interface EnvironmentCommonModel {
  company: {
    website: string,
    email: string,
    social: {
      twitter: string,
      linkedin: string,
      github: string,
      productHunt: string,
      npm: string,
      discord: string
    }
  },

  website: {
    // oauth
    twitter: WebsiteModel
    google: WebsiteModel
    facebook: WebsiteModel
    linkedin: WebsiteModel
    twitch: WebsiteModel
    github: WebsiteModel
    dribbble: WebsiteModel
    reddit: WebsiteModel

    // payment
    stripe: WebsiteModel
    coinbase: WebsiteModel
    paypal: WebsiteModel

    // file storage
    aws: WebsiteModel
    googleCloud: WebsiteModel

    // mail
    gmail: WebsiteModel
    yahoo: WebsiteModel
    outlook: WebsiteModel

    // sms
    twillio: WebsiteModel
    awsSns: WebsiteModel

    // analytics
    googleAnalytics: WebsiteModel
    matomo: WebsiteModel
    mixPanel: WebsiteModel

    // other
    instagram: WebsiteModel
    youtube: WebsiteModel
    productHunt: WebsiteModel
    appleCalendar: WebsiteModel
    googleCalendar: WebsiteModel
    discord: WebsiteModel
    npm: WebsiteModel
  },

  languages: { name: string, code: string, emoji: string }[]
}
