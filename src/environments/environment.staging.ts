import { EnvironmentModel } from '../app/model/environment/environment.model';
import { defaultEnvironmentConfigurations } from './environment-init';

export const environment: EnvironmentModel = {
  identity: 'staging',

  production: false,

  serverUrl: 'https://oth-server-orchestra-dev.herokuapp.com',

  clientUrl: 'https://oth-ui-company-dev.herokuapp.com',

  oauth: defaultEnvironmentConfigurations.oauth,

  payment: defaultEnvironmentConfigurations.payment,

  fileStorage: defaultEnvironmentConfigurations.fileStorage,

  mail: defaultEnvironmentConfigurations.mail,

  sms: defaultEnvironmentConfigurations.sms,

  analytics: defaultEnvironmentConfigurations.analytics
};
