import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TESTIMONIALS } from 'src/app/data/testimonial/testimonial.data';
import { GithubProviderService } from 'src/app/service/provider/github-provider.service';
import { environmentCommon } from '../../../../environments/environment-common';
import { URLS } from '../../../data/constant';
import { PRODUCT_LINES, SERVICES } from '../../../data/product/product.data';
import { Activity } from '../../../model/activity/activity.model';
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

  environmentCommon = environmentCommon;
  commitActivities: Activity[] = [];

  PRODUCT_LINES = PRODUCT_LINES;

  product: Product;
  productLineKey: string;

  emailControl = new FormControl( '' );

  constructor(
      private route: ActivatedRoute,
      public router: Router,
      private githubService: GithubProviderService,
      private productService: ProductService,
  ) {

    // Todo: fill this dynamically from github for open source projects
    const date = new Date();
    this.commitActivities.push( {
      type: 'commit',
      payload: 'e82c868c324a76216ca84f0e407ae4f2e2b62d22',
      date: new Date( 2021, 6, 15, 12, 10, 0 )
    } );
    this.commitActivities.push( {
      type: 'commit',
      payload: 'e82c868c324a76216ca84f0e407ae4f2e2b62d22',
      date: new Date( 2021, 6, 15, 12, 10, 0 )
    } );
    this.commitActivities.push( {
      type: 'commit',
      payload: 'e82c868c324a76216ca84f0e407ae4f2e2b62d22',
      date: new Date( 2021, 6, 15, 12, 10, 0 )
    } );
    this.commitActivities.push( {
      type: 'commit',
      payload: 'e82c868c324a76216ca84f0e407ae4f2e2b62d22',
      date: new Date( 2021, 6, 15, 12, 10, 0 )
    } );
    this.commitActivities.push( {
      type: 'commit',
      payload: 'e82c868c324a76216ca84f0e407ae4f2e2b62d22',
      date: new Date( 2020, 11, 15, 12, 10, 0 )
    } );
    this.commitActivities.push( {
      type: 'commit',
      payload: 'e82c868c324a76216ca84f0e407ae4f2e2b62d22',
      date: new Date( 2020, 11, 14, 12, 10, 0 )
    } );
    this.commitActivities.push( {
      type: 'commit',
      payload: 'e82c868c324a76216ca84f0e407ae4f2e2b62d22',
      date: new Date( 2020, 11, 14, 12, 10, 0 )
    } );
    this.commitActivities.push( {
      type: 'commit',
      payload: 'e82c868c324a76216ca84f0e407ae4f2e2b62d22',
      date: new Date( 2020, 11, 14, 12, 10, 0 )
    } );
    this.commitActivities.push( {
      type: 'commit',
      payload: 'e82c868c324a76216ca84f0e407ae4f2e2b62d22',
      date: new Date( 2020, 11, 14, 12, 10, 0 )
    } );
    this.commitActivities.push( {
      type: 'commit',
      payload: 'e82c868c324a76216ca84f0e407ae4f2e2b62d22',
      date: new Date( 2020, 11, 14, 12, 10, 0 )
    } );
    this.commitActivities.push( {
      type: 'commit',
      payload: 'e82c868c324a76216ca84f0e407ae4f2e2b62d22',
      date: new Date( 2020, 11, 14, 12, 10, 0 )
    } );
    this.commitActivities.push( {
      type: 'commit',
      payload: 'e82c868c324a76216ca84f0e407ae4f2e2b62d22',
      date: new Date( 2020, 11, 14, 12, 10, 0 )
    } );
    this.commitActivities.push( {
      type: 'commit',
      payload: 'e82c868c324a76216ca84f0e407ae4f2e2b62d22',
      date: new Date( 2020, 11, 14, 12, 10, 0 )
    } );
    this.commitActivities.push( {
      type: 'commit',
      payload: 'e82c868c324a76216ca84f0e407ae4f2e2b62d22',
      date: new Date( 2020, 11, 13, 12, 10, 0 )
    } );
    this.commitActivities.push( {
      type: 'commit',
      payload: 'e82c868c324a76216ca84f0e407ae4f2e2b62d22',
      date: new Date( 2020, 11, 12, 12, 10, 0 )
    } );
    this.commitActivities.push( {
      type: 'commit',
      payload: 'e82c868c324a76216ca84f0e407ae4f2e2b62d22',
      date: new Date( 2021, 6, 15, 12, 10, 0 )
    } );
    this.commitActivities.push( {
      type: 'commit',
      payload: 'e82c868c324a76216ca84f0e407ae4f2e2b62d22',
      date: new Date( 2021, 6, 15, 12, 10, 0 )
    } );
    this.commitActivities.push( {
      type: 'commit',
      payload: 'e82c868c324a76216ca84f0e407ae4f2e2b62d22',
      date: new Date( 2021, 5, 15, 12, 10, 0 )
    } );
    this.commitActivities.push( {
      type: 'commit',
      payload: 'e82c868c324a76216ca84f0e407ae4f2e2b62d22',
      date: new Date( 2021, 1, 14, 12, 10, 0 )
    } );
    this.commitActivities.push( {
      type: 'commit',
      payload: 'e82c868c324a76216ca84f0e407ae4f2e2b62d22',
      date: new Date( 2021, 2, 15, 12, 10, 0 )
    } );
    this.commitActivities.push( {
      type: 'commit',
      payload: 'e82c868c324a76216ca84f0e407ae4f2e2b62d22',
      date: new Date( 2021, 2, 15, 12, 10, 0 )
    } );
    this.commitActivities.push( {
      type: 'commit',
      payload: 'e82c868c324a76216ca84f0e407ae4f2e2b62d22',
      date: new Date( 2021, 2, 15, 12, 10, 0 )
    } );
    this.commitActivities.push( {
      type: 'commit',
      payload: 'e82c868c324a76216ca84f0e407ae4f2e2b62d22',
      date: new Date( 2021, 2, 15, 12, 10, 0 )
    } );
    this.commitActivities.push( {
      type: 'commit',
      payload: 'e82c868c324a76216ca84f0e407ae4f2e2b62d22',
      date: new Date( 2021, 2, 15, 12, 10, 0 )
    } );
    this.commitActivities.push( {
      type: 'commit',
      payload: 'e82c868c324a76216ca84f0e407ae4f2e2b62d22',
      date: new Date( 2021, 6, 15, 12, 10, 0 )
    } );
    this.commitActivities.push( { type: 'commit', payload: 'e82c868c324a76216ca84f0e407ae4f2e2b62d22', date } );
    this.commitActivities.push( { type: 'commit', payload: 'e82c868c324a76216ca84f0e407ae4f2e2b62d22', date } );
    this.commitActivities.push( { type: 'commit', payload: 'e82c868c324a76216ca84f0e407ae4f2e2b62d22', date } );
    this.commitActivities.push( { type: 'commit', payload: 'e82c868c324a76216ca84f0e407ae4f2e2b62d22', date } );
    this.commitActivities.push( { type: 'commit', payload: 'e82c868c324a76216ca84f0e407ae4f2e2b62d22', date } );
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

      this.productLineKey = params.productLine;

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
