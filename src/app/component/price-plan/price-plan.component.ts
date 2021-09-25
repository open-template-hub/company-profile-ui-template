import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { URLS } from '../../data/constant';
import { Product } from '../../model/product/product.model';
import { ButtonType, ButtonClass } from '../../component/button/button.component';

@Component( {
  selector: 'app-price-plan',
  templateUrl: './price-plan.component.html',
  styleUrls: [ './price-plan.component.scss' ]
} )
export class PricePlanComponent {
  ButtonType = ButtonType
  ButtonClass = ButtonClass
  URLS = URLS;

  @Input() product: Product;
  @Input() productLineName: string;

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
