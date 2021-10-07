import { CommandType } from 'src/app/data/command-type/command-type.enum';
import { PricingOption } from '../pricing/pricing.model';

export interface PricingFeature {
  name: string,
  details: { name: string, description: string }[]
}

export interface Product {
  key?: string;
  name: string;
  description: string;
  color?: string;
  href: string;
  logo: string;
  heroImage?: string;
  openSource?: boolean;
  counters?: ProductCounter[];
  features?: PricingFeature[];
  pricingOptions?: PricingOption[];
  commandLines?: CommandLine[];
}

export interface ProductLine {
  key: string;
  name: string;
  description: string;
  color?: string;
  products: Product[];
}

export interface ProductCounter {
  name: string;
  value: string;
}

export interface CommandLine {
  command: string;
  type: CommandType;
  timeout: number;
}
