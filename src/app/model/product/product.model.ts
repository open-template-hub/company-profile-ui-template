import { CommandType } from 'src/app/data/command-type/command-type.enum';
import { Image } from '../image/image.model';
import { PricingOption } from '../pricing/pricing.model';
import { StepTimeLineItem } from '../timeline/step-timeline.model';
import { Video } from '../video/image.model';

export interface PricingFeature {
  name: string,
  details: { name: string, description: string }[]
}

export interface Product {
  key?: string;
  name: string;
  description: string;
  color?: string;
  url: string;
  urlAlter?: string;
  urlDemo?: string;
  logo: string;
  video?: Video;
  demonstrationImg?: Image;
  demonstrationAlter?: Image;
  screenshots?: Image[];
  heroImage?: string;
  openSource?: boolean;
  counters?: ProductCounter[];
  features?: PricingFeature[];
  pricingOptions?: PricingOption[];
  commandLines?: CommandLine[];
  steps?: StepTimeLineItem[];
  imageLoaded?: boolean;
  techStack?: Image[];
  integrations?: any;
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
