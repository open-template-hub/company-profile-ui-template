import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductLinePresentationType } from 'src/app/enum/product-line-presentation-type';
import { GithubProviderService } from 'src/app/service/provider/github-provider.service';
import { environmentCommon } from '../../../../environments/environment-common';
import { URLS } from '../../../data/constant';
import { PRODUCT_LINES } from '../../../data/product/product.data';
import { Product, ProductLine } from '../../../model/product/product.model';

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
      public githubService: GithubProviderService
  ) {
  }

  ngOnInit(): void {
    this.product = {
      name: '',
      description: '',
      presentationType: ProductLinePresentationType.Image,
    } as Product;
    this.route.queryParams.subscribe( async ( params ) => {
      if ( params.productLineName && params.productName ) {
        const productLine: ProductLine = PRODUCT_LINES.find(
            ( p ) => p.key === params.productLineName
        );

        if ( productLine ) {
          var product = productLine.products.find(
              ( p ) => p.key === params.productName
          );

          try {
            product.counters = await this.githubService.getGithubCounters(
                product.key
            );
          } catch ( e ) {
            console.error(
                'Error while getting Github Counters for product: ',
                product.key
            );
          }

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
