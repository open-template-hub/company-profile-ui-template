import { Pricing } from '../pricing/pricing.model';

export interface Product {
  key?: string, // no key means no product page available
  name: string,
  description: string,
  color?: string,
  href: string,
  logo: string,
  heroImage: string,
  counters?: ProductCounter[],
  pricing: Pricing[]
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
