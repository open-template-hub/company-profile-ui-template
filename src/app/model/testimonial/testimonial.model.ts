import { Social } from '../social/social.model';

export interface Testimonial {
  review: string;
  reviewer: {
    name: string;
    title: string;
    photoUri: string;
    social: Social;
  };
  theme?: string;
}
