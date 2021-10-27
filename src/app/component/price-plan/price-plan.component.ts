import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { URLS } from '../../data/navigation/navigation.data';
import { Product } from '../../model/product/product.model';

@Component( {
  selector: 'app-price-plan',
  templateUrl: './price-plan.component.html',
  styleUrls: [ './price-plan.component.scss' ]
} )
export class PricePlanComponent {

  URLS = URLS;

  @Input() product: Product;
  @Input() productLineKey: string;

  hiddenMainFeatures = new Set();

  constructor( public router: Router ) {
  }

  accordionClicked( coreFeature: string ) {
    if ( this.hiddenMainFeatures.has( coreFeature ) ) {
      this.hiddenMainFeatures.delete( coreFeature );
    } else {
      this.hiddenMainFeatures.add( coreFeature );
    }
  }
}
