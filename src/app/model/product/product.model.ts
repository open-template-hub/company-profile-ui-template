import { PricingOption } from '../pricing/pricing.model';

export interface PricingFeature {
    name: string,
    featureDetails: { name: string, description: string }[]
}

export interface Product {
  key?: string, // no key means no product page available
  name: string,
  description: string,
  color?: string,
  href: string,
  logo: string,
  heroImage: string,
  counters?: ProductCounter[],
  features?: PricingFeature[],
  pricingOptions?: PricingOption[]
}

export interface ProductLine {
  key: string,
  name: string,
  description: string,
  color?: string,
  products: Product[]
}

export interface ProductCounter {
  name: string,
  value: string
}
