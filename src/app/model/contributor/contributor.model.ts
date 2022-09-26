import { Social } from '../social/social.model';

export interface Contributor {
  profile: {
    name: string;
    photoUri: string;
    level: string;
    social: Social;
  };
}
