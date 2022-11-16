import { EnvironmentModel } from '../app/model/environment/environment.model';
import { defaultEnvironmentConfigurations } from './environment-init';

export const environment: EnvironmentModel = {
  identity: 'local',

  production: false,

  serverUrl: 'http://localhost:4000',

  clientUrl: 'http://localhost:4200',

  oauth: defaultEnvironmentConfigurations.oauth,

  payment: defaultEnvironmentConfigurations.payment,

  fileStorage: defaultEnvironmentConfigurations.fileStorage,

  mail: defaultEnvironmentConfigurations.mail,

  sms: defaultEnvironmentConfigurations.sms,

  analytics: defaultEnvironmentConfigurations.analytics
};
