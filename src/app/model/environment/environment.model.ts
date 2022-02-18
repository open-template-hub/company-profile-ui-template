import { AnalyticsModel } from '../analytics/analytics.model';
import { FileStorageModel } from '../file-storage/file-storage.model';
import { MailModel } from '../mail/mail.model';
import { OauthModel } from '../oauth/oauth.model';
import { PaymentModel } from '../payment/payment.model';
import { SmsModel } from '../sms/sms.model';

export interface EnvironmentModel {
  identity: 'local' | 'staging' | 'production';
  production: boolean;
  serverUrl: string;
  clientUrl: string;
  mockDataEnabled: boolean;

  oauth: {
    twitter: OauthModel
    google: OauthModel
    facebook: OauthModel
    linkedin: OauthModel
    twitch: OauthModel
    github: OauthModel
    dribbble: OauthModel
    reddit: OauthModel
  };

  payment: {
    stripe: PaymentModel
    coinbase: PaymentModel
    paypal: PaymentModel
  };

  fileStorage: {
    aws: FileStorageModel
    googleCloud: FileStorageModel
  };

  mail: {
    gmail: MailModel
    yahoo: MailModel
    outlook: MailModel
    yandex: MailModel
  };

  sms: {
    twillio: SmsModel
    awsSns: SmsModel
  };

  analytics: {
    googleAnalytics: AnalyticsModel,
    matomo: AnalyticsModel
  };
}
