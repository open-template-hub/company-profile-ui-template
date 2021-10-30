import { AfterViewInit, Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { CountUp } from 'countup.js';
import { FEATURES } from 'src/app/data/feature/feature.data';
import { PARTNERS } from 'src/app/data/partner/partner.data';
import { TESTIMONIALS } from 'src/app/data/testimonial/testimonial.data';
import { Feature } from 'src/app/model/feature/feature.model';
import { Testimonial } from 'src/app/model/testimonial/testimonial.model';
import { NpmProviderService } from 'src/app/service/provider/npm-provider.service';
import { environment } from '../../../../environments/environment';
import { environmentCommon } from '../../../../environments/environment-common';
import { BRAND } from '../../../data/brand/brand.data';
import { URLS } from '../../../data/navigation/navigation.data';
import { PRODUCT_LINES } from '../../../data/product/product.data';
import { Partner } from '../../../model/partner/partner.model';

@Component( {
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: [ './home-page.component.scss' ],
} )
export class HomePageComponent implements AfterViewInit {
  npmDownloadCounter = { count: 0, id: 'npmDownloadCounterElement' };
  productTypesCounter = { count: 0, id: 'productTypesCounterElement' };
  openSourceRatioCounter = { count: 0, id: 'openSourceRatioCounterElement' };
  npmCounterLoading = true;
  brandLogoLoaded = false;

  BRAND = BRAND;
  URLS = URLS;
  PRODUCT_LINES = PRODUCT_LINES;

  // Todo: Change this with customers
  PARTNERS: Partner[] = PARTNERS;

  TESTIMONIALS: Testimonial[] = TESTIMONIALS.slice( 0, TESTIMONIALS.length < 3 ? TESTIMONIALS.length : 3 );
  FEATURES: Feature[] = FEATURES;

  KILO = 1000;
  MILLION = this.KILO * this.KILO;

  environment = environment;
  environmentCommon = environmentCommon;

  testimonialsTitle = [
    { text: $localize`:@@homePage.testimonialsTitle.1:Customer testimonials`, level: 1 },
    { text: $localize`:@@homePage.testimonialsTitle.2:What our customers are saying...` }
  ];

  customersTitle = [
    { text: $localize`:@@homePage.customersTitle.1:From startups to the enterprise companies`, level: 1 },
    { text: $localize`:@@homePage.customersTitle.2:Thousands of companies in over 50 countries use Open Template Hub to start, run, and scale their businesses.` }
  ];

  whyUsTitle = [
    { text: $localize`:@@homePage.whyUsTitle.1:Why Open Template Hub?`, level: 1 },
    { text: $localize`:@@homePage.whyUsTitle.2:Just focus on your business and leave us all others` }
  ];

  exploreTitle = [
    { text: $localize`:@@homePage.exploreTitle.1:Explore our Products`, level: 2 },
    { text: $localize`:@@homePage.exploreTitle.2:Explore our open source and premium products to get started today.` }
  ];

  constructor(
      private formBuilder: FormBuilder,
      public router: Router,
      private npmProviderService: NpmProviderService
  ) {
  }

  ngAfterViewInit() {
    this.initCountUps();
  }

  countUpFormatter( n: number ) {
    if ( n < this.KILO ) {
      return n + '';
    } else {
      if ( n < this.MILLION ) {
        return Math.round( ( n / this.KILO ) * 10 ) / 10 + 'k';
      } else {
        return Math.round( ( n / this.MILLION ) * 10 ) / 10 + 'M';
      }
    }
  }

  setBrandLogoLoaded = () => {
    this.brandLogoLoaded = true;
  };

  private initCountUps() {
    const options = {
      useGrouping: false,
      duration: undefined,
      formattingFn: undefined,
      decimalPlaces: 0
    };

    this.npmProviderService.getNpmPackagesDownloadCount().then( ( count ) => {
      this.npmDownloadCounter.count = count;
      this.npmCounterLoading = false;
      this.startCounter( options, this.npmDownloadCounter );
    } );

    this.productTypesCounter.count = 0;
    this.openSourceRatioCounter.count = 0;
    for ( const productLine of PRODUCT_LINES ) {
      if ( productLine.key === 'generator' ) {
        continue;
      }
      this.productTypesCounter.count += productLine.products.length;

      for ( const product of productLine.products ) {
        if ( product.openSource ) {
          this.openSourceRatioCounter.count++;
        }
      }
    }
    this.openSourceRatioCounter.count = ( this.openSourceRatioCounter.count / this.productTypesCounter.count ) * 100;

    this.startCounter( options, this.productTypesCounter );
    this.startCounter( options, this.openSourceRatioCounter );
  }

  private startCounter( options: { duration: number; useGrouping: boolean; formattingFn, decimalPlaces: number }, counter ) {
    options.formattingFn = ( n: number ) => {
      return this.countUpFormatter( n );
    };

    if ( counter.count < this.KILO ) {
      options.duration = 2;
    } else if ( counter.count < this.MILLION ) {
      options.duration = 3;
    } else {
      options.duration = 4;
    }

    const eventCountUp = new CountUp( counter.id, counter.count, options );
    if ( !eventCountUp.error ) {
      eventCountUp.start();
    } else {
      console.error( eventCountUp.error );
    }
  }

  getPresentationCardFooter( isOpenSource: boolean ): string {
    return isOpenSource ? $localize`:@@productTypeTag.openSource:opensource` : $localize`:@@productTypeTag.premium:premium`;
  }
}
