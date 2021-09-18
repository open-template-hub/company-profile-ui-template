import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductLinePresentationType } from 'src/app/enum/product-line-presentation-type';
import { GithubProviderService } from 'src/app/service/provider/github-provider.service';
import { environmentCommon } from '../../../../environments/environment-common';
import { URLS } from '../../../data/constant';
import { PRODUCT_LINES } from '../../../data/product/product.data';
import { Product, ProductLine } from '../../../model/product/product.model';
import { ProductService } from '../../../service/product/product.service';

@Component( {
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: [ './product.component.scss' ],
} )
export class ProductComponent implements OnInit, OnDestroy {
  URLS = URLS;
  environmentCommon = environmentCommon;
  product: Product;
  emailControl = new FormControl( '' );

  constructor(
      private route: ActivatedRoute,
      public router: Router,
      private githubService: GithubProviderService,
      private productService: ProductService,
  ) {
  }

  ngOnInit(): void {
    this.product = {
      name: '',
      description: '',
      presentationType: ProductLinePresentationType.Image,
    } as Product;

    this.route.params.subscribe( params => {
      if ( params.productLine && params.product ) {
        const productLine: ProductLine = PRODUCT_LINES.find(
            ( p ) => p.key === params.productLine
        );

        if ( productLine ) {
          const product = productLine.products.find(
              ( p ) => p.key === params.product
          );

          try {
            this.githubService.getGithubCounters( product.key ).then( counters => {
              product.counters = counters;
            } );
          } catch ( e ) {
            console.error(
                'Error while getting Github Counters for product: ',
                product.key
            );
          }

          if ( product ) {
            this.product = product;
            this.productService.setSelectedProduct(this.product);
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
