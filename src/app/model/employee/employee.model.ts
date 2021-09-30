import { Social } from '../social/social.model';

export interface Employee {
  profile: {
    name: string;
    title: string;
    photoUri: string;
    social: Social;
  };
}
