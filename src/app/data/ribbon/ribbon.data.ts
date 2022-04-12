import { Ribbon } from '@open-template-hub/card';

export const DEFAULT_RIBBON = { theme: '', text: '' };

export const PRODUCT_RIBBONS = new Map<string, Ribbon>( [
  [ 'deal', { theme: 'blue', text: $localize`:@@ribbonData.deal:Deal` } ],
  [ 'premium', { theme: 'yellow', text: $localize`:@@ribbonData.premium:Premium` } ],
] );

export const INFORMATION_RIBBONS = new Map<string, Ribbon>( [
  [ 'maintenance', { theme: 'yellow', text: 'Under Maintenance' } ],
  [ 'development', { theme: 'red', text: 'Under Development' } ],
] );
