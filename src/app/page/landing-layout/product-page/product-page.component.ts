import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TESTIMONIALS } from 'src/app/data/testimonial/testimonial.data';
import { GithubProviderService } from 'src/app/service/provider/github-provider.service';
import { environmentCommon } from '../../../../environments/environment-common';
import { URLS } from '../../../data/navigation/navigation.data';
import { PRODUCT_LINES, SERVICES } from '../../../data/product/product.data';
import { Activity } from '../../../model/activity/activity.model';
import { Product, ProductLine } from '../../../model/product/product.model';
import { Testimonial } from '../../../model/testimonial/testimonial.model';
import { ProductService } from '../../../service/product/product.service';

@Component( {
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: [ './product-page.component.scss' ],
} )
export class ProductPageComponent implements OnInit, OnDestroy {

  URLS = URLS;
  TESTIMONIALS: Testimonial[] = TESTIMONIALS.slice( 0, TESTIMONIALS.length < 3 ? TESTIMONIALS.length : 3 );

  environmentCommon = environmentCommon;
  commitActivities: Activity[] = [];

  PRODUCT_LINES = PRODUCT_LINES;

  product: Product;
  productLineKey: string;
  isOpenSource = false;

  testimonialsTitle = [
    { text: $localize`:@@productPage.testimonialsTitle.1:Customer testimonials`, level: 1 },
    { text: $localize`:@@productPage.testimonialsTitle.2:What our customers are saying...` }
  ];

  relatedProductAppHero = [
    { text: $localize `:@@productPage.relatedProductAppHero:Related Products`, level: 2 }
  ]

  npmPackageInstallationAndUsage = [
    { text: $localize `:@@productPage.npmPackageInstallationAndUsage:Package Installation & Usage`, level: 2 }
  ]

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

      this.productLineKey = params.productLine;

      let productLine: ProductLine = PRODUCT_LINES.find( ( p ) => p.key === params.productLine );

      let isService = false;
      this.isOpenSource = false;

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

      if (product.url === URLS.maintenance) {
        this.productService.setSelectedProduct( undefined );
        this.router.navigate( [ URLS.maintenance ] );
        return;
      }

      if ( !isService ) {
        this.isOpenSource = true;
        this.githubService.getGithubCounters( product.key )
        .then( counters => {
          product.counters = counters;
        } )
        .catch( error => {
          this.isOpenSource = false;
          console.error( 'Error while getting Github Counters for product: ', product.key, error );
        } );
      }

      this.githubService.getCommitHistory( product.key )
      .then( commitActivities => {
        this.commitActivities = commitActivities;
      } )
      .catch( error => {
        console.error( 'Error while getting Github CommitHistory for product: ', product.key, error );
      } );

      this.product = product;
      this.productService.setSelectedProduct( this.product );
    } );
  }

  ngOnDestroy() {
    this.product = undefined;
  }

  redirect( url: string ) {
    window.open( url, '_blank' );
  }

  getContactUsButtonText( productLineKey ) {
    return productLineKey === 'services'
      ? $localize `:@@productPage.contactUs.button:Contact Us`
      : $localize `:@@productPage.requestForDemo.button:Request for Demo`
  }

  getPresentationCardFooter(isOpenSource: boolean): string {
    return isOpenSource ? $localize`:@@productTypeTag.openSource:opensource` : $localize`:@@productTypeTag.premium:premium`
  }
}
