import { Ribbon } from '../../model/ribbon/ribbon.model';

export const DEFAULT_RIBBON = { theme: '', text: '' };

export const GITHUB_RIBBON = {
  theme: 'default', text: 'Github'
}

export const EVENT_RIBBONS = new Map<string, Ribbon>( [
  [ 'new', { theme: 'blue', text: 'New 🎉' } ],
  [ 'featured', { theme: 'yellow', text: 'Featured 🚀' } ],
  [ 'premium', { theme: 'green', text: 'Premium ⭐' } ],
] );

export const PRICING_RIBBONS = new Map<string, Ribbon>( [
  [ 'deal', { theme: 'blue', text: 'Deal' } ]
] );
