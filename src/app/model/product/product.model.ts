import { CommandType } from 'src/app/data/command-type.enum';
import { ProductLinePresentationType } from 'src/app/data/product-line-presentation-type.enum';
import { PricingOption } from '../pricing/pricing.model';

export interface PricingFeature {
  name: string,
  featureDetails: { name: string, description: string }[]
}

export interface Product {
  key?: string; // no key means no product page available
  name: string;
  description: string;
  color?: string;
  href: string;
  logo: string;
  heroImage?: string;
  counters?: ProductCounter[];
  features?: PricingFeature[];
  pricingOptions?: PricingOption[];
  presentationType: ProductLinePresentationType;
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
}
