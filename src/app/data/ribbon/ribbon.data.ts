import { Ribbon } from '../../model/ribbon/ribbon.model';

export const DEFAULT_RIBBON = { theme: '', text: '' };

// TODO: DEPRECATED
export const EVENT_RIBBONS = new Map<string, Ribbon>( [
  [ 'new', { theme: 'blue', text: $localize`:@@ribbonData.new:New 🎉` } ],
  [ 'featured', { theme: 'yellow', text: $localize`:@@ribbonData.featured:Featured 🚀` } ],
  [ 'premium', { theme: 'green', text: $localize`:@@ribbonData.premium:Premium ⭐` } ],
] );

export const PRODUCT_RIBBONS = new Map<string, Ribbon>( [
  [ 'deal', { theme: 'blue', text: $localize`:@@ribbonData.deal:Deal` } ]
] );
