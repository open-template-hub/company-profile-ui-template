import { AnalyticsModel } from '../analytics/analytics.model';
import { OauthModel } from '../oauth/oauth.model';
import { PaymentModel } from '../payment/payment.model';

export interface EnvironmentModel {
  identity: 'local' | 'staging' | 'production'
  production: boolean
  serverUrl: string
  clientUrl: string
  mockDataEnabled: boolean

  oauth: {
    twitter: OauthModel
    google: OauthModel
    facebook: OauthModel
    linkedin: OauthModel
    twitch: OauthModel
    github: OauthModel
    dribbble: OauthModel
    reddit: OauthModel
  }

  payment: {
    stripe: PaymentModel
    coinbase: PaymentModel
    paypal: PaymentModel
  }

  analytics: {
    google: AnalyticsModel
  }
}
