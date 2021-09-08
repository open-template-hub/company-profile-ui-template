import { Component } from '@angular/core';
import { DEFAULT_PRICING_LIST } from '../../../data/pricing/pricing.data';

@Component( {
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: [ './pricing.component.scss' ]
} )
export class PricingComponent {

  DEFAULT_PRICING_LIST = DEFAULT_PRICING_LIST;

  constructor() {
    // Intentionally blank
  }
}
