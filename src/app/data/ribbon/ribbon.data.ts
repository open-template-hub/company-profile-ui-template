import { Ribbon } from '../../model/ribbon/ribbon.model';

export const DEFAULT_RIBBON = { type: '', text: '' };

export const EVENT_RIBBONS = new Map<string, Ribbon>( [
  [ 'new', { type: 'new', text: 'New 🎉' } ],
  [ 'featured', { type: 'featured', text: 'Featured 🚀' } ],
  [ 'premium', { type: 'premium', text: 'Premium ⭐' } ],
] );
