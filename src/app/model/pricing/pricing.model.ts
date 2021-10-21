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
  features: string[][]
  link?: string
}
