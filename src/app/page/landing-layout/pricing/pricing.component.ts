import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { URLS } from '../../../data/constant';
import { PRODUCT_LINES } from '../../../data/product/product.data';
import { Product, ProductLine } from '../../../model/product/product.model';

@Component( {
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: [ './pricing.component.scss' ]
} )
export class PricingComponent {
  product: Product;

  constructor(
      private route: ActivatedRoute,
      public router: Router
  ) {
    this.product = undefined;
    this.route.queryParams.subscribe( params => {
      if ( params.productLineName && params.productName ) {
        const productLine: ProductLine = PRODUCT_LINES.find( p => p.key === params.productLineName );

        if ( productLine ) {
          const product = productLine.products.find( p => p.key === params.productName );

          if ( product ) {
            this.product = product;
            return;
          }
        }
      }
      this.router.navigate( [ URLS.notFound ] );
    } );
  }
}
