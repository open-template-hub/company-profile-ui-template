import { Ribbon } from '../../model/ribbon/ribbon.model';

export const DEFAULT_RIBBON = { theme: '', text: '' };

export const EVENT_RIBBONS = new Map<string, Ribbon>( [
  [ 'new', { theme: 'blue', text: 'New 🎉' } ],
  [ 'featured', { theme: 'yellow', text: 'Featured 🚀' } ],
  [ 'premium', { theme: 'green', text: 'Premium ⭐' } ],
] );
