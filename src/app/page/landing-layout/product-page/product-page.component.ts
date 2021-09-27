import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TESTIMONIALS } from 'src/app/data/testimonial/testimonial.data';
import { GithubProviderService } from 'src/app/service/provider/github-provider.service';
import { environmentCommon } from '../../../../environments/environment-common';
import { URLS } from '../../../data/constant';
import { PARTNERS } from '../../../data/partner/partner.data';
import { PRODUCT_LINES, SERVICES } from '../../../data/product/product.data';
import { Product, ProductLine } from '../../../model/product/product.model';
import { ProductService } from '../../../service/product/product.service';

@Component( {
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: [ './product-page.component.scss' ],
} )
export class ProductPageComponent implements OnInit, OnDestroy {
  URLS = URLS;
  TESTIMONIALS = TESTIMONIALS;
  PARTNERS = PARTNERS;

  environmentCommon = environmentCommon;

  product: Product;
  productLineName: string;

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
    } as Product;

    this.route.params.subscribe( params => {
      if ( !params.productLine || !params.product ) {
        this.productService.setSelectedProduct( undefined );
        this.router.navigate( [ URLS.notFound ] );
        return;
      }

      this.productLineName = params.productLine;

      let productLine: ProductLine = PRODUCT_LINES.find( ( p ) => p.key === params.productLine );

      let isService = false;

      if ( !productLine ) {
        productLine = SERVICES.find( ( p ) => p.key === params.productLine );
        isService = true;

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

      if ( !isService ) {
        this.githubService.getGithubCounters( product.key )
        .then( counters => {
          product.counters = counters;
        } )
        .catch( error => {
          console.error( 'Error while getting Github Counters for product: ', product.key, error );
        } );
      }

      this.product = product;
      this.productService.setSelectedProduct( this.product );
    } );
  }

  ngOnDestroy() {
    this.product = undefined;
  }

  redirect() {
    window.open( this.product.href, '_blank' );
  }
}
