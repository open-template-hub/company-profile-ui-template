import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { URLS } from '../../../data/constant';
import { PRODUCT_LINES, SERVICES } from '../../../data/product/product.data';
import { PRICING_RIBBONS } from '../../../data/ribbon/ribbon.data';
import { Product, ProductLine } from '../../../model/product/product.model';
import { ProductService } from '../../../service/product/product.service';

@Component( {
  selector: 'app-pricing-page',
  templateUrl: './pricing-page.component.html',
  styleUrls: [ './pricing-page.component.scss' ]
} )
export class PricingPageComponent {
  product: Product;

  PRICING_RIBBONS = PRICING_RIBBONS;

  appHeroContents;

  constructor(
      private route: ActivatedRoute,
      public router: Router,
      private productService: ProductService
  ) {
    this.route.params.subscribe( params => {
      if ( !params.productLine || !params.product ) {
        this.productService.setSelectedProduct( undefined );
        this.router.navigate( [ URLS.notFound ] );
        return;
      }

      let productLine: ProductLine = PRODUCT_LINES.find( ( p ) => p.key === params.productLine );

      if ( !productLine ) {
        productLine = SERVICES.find( ( p ) => p.key === params.productLine );

        if ( !productLine ) {
          this.productService.setSelectedProduct( undefined );
          this.router.navigate( [ URLS.notFound ] );
          return;
        }
      }

      const product = productLine.products.find(
          ( p ) => p.key === params.product
      );

      if ( !product ) {
        this.productService.setSelectedProduct( undefined );
        this.router.navigate( [ URLS.notFound ] );
        return;
      }

      this.product = product;
      this.appHeroContents = [ {
        text: product.name + $localize` Pricing Plan`,
        level: 1
      }, { text: $localize`No hidden fees. Cancel at any time.` } ];
      this.productService.setSelectedProduct( this.product );
    } );
  }
}
