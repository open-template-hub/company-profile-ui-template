import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { environmentCommon } from '../../../../environments/environment-common';
import { Product, PRODUCT_LINES, ProductLine, URLS } from '../../../data/constant';

@Component( {
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: [ './product.component.scss' ]
} )
export class ProductComponent implements OnInit, OnDestroy {
  URLS = URLS;
  environmentCommon = environmentCommon;
  product: Product;
  emailControl = new FormControl( '' );

  constructor(
      private route: ActivatedRoute,
      public router: Router
  ) {
  }

  ngOnInit(): void {
    this.product = undefined;
    this.route.queryParams.subscribe( params => {
      console.log( params );

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
      this.router.navigate( [ URLS.maintenance ] );
    } );
  }

  ngOnDestroy() {
    this.product = undefined;
  }
}
