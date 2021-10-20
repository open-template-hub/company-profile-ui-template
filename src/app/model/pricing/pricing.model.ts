import { Ribbon } from '../ribbon/ribbon.model';

export interface PricingOption {
  title: string,
  description: string,
  ribbon?: Ribbon,
  contactRequired?: boolean,
  price?: {
    currency: string,
    value: string,
    subscriptionTime: string
  },
  features: string[][],
  styles: {
    height: string,
    width: string,
    fontSize: string,
    featureHeight: string
  },
  link?: string
}
