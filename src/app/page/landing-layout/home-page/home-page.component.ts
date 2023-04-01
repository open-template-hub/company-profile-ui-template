import { AfterViewInit, Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { CountUp } from 'countup.js';
import { forkJoin } from 'rxjs';
import { FEATURES } from 'src/app/data/feature/feature.data';
import { PARTNERS } from 'src/app/data/partner/partner.data';
import { TESTIMONIALS } from 'src/app/data/testimonial/testimonial.data';
import { Feature } from 'src/app/model/feature/feature.model';
import { Testimonial } from 'src/app/model/testimonial/testimonial.model';
import Swiper from 'swiper';
import { environment } from '../../../../environments/environment';
import { environmentCommon } from '../../../../environments/environment-common';
import { BRAND } from '../../../data/brand/brand.data';
import { URLS } from '../../../data/navigation/navigation.data';
import { LIBRARIES, PLUGINS, PRODUCT_LINES } from '../../../data/product/product.data';
import { Partner } from '../../../model/partner/partner.model';
import { AnalyticsService } from '../../../service/analytics/analytics.service';
import { LoadingService } from '../../../service/loading/loading.service';
import { GithubProviderService } from '../../../service/provider/github-provider.service';

export interface SwiperData {
  title: string;
  description: string;
  img: string;
  background?: string;
  url?: string;
  buttonText?: string;
}

@Component( {
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: [ './home-page.component.scss' ],
} )
export class HomePageComponent implements AfterViewInit {
  npmDownloadCounter = { count: 0, id: 'npmDownloadCounterElement' };
  totalStarsCounter = { count: 0, id: 'totalStarsCounterElement' };
  openSourceRatioCounter = { count: 0, id: 'openSourceRatioCounterElement' };
  npmCounterLoading = true;
  githubCounterLoading = true;
  swiper: Swiper;

  BRAND = BRAND;
  URLS = URLS;
  PRODUCT_LINES = PRODUCT_LINES;
  LIBRARIES = LIBRARIES;
  PLUGINS = PLUGINS;

  slides: SwiperData[] = [];

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
    { text: $localize`:@@homePage.exploreTitle.1:Explore our Products`, level: 1 },
    { text: $localize`:@@homePage.exploreTitle.2:Explore our open source and premium products to get started today.` }
  ];

  andMoreTitle = [
    { text: `And more..`, level: 1 },
    { text: `Open Source libraries and plugins..` }
  ];

  partnershipBadgesTitle = [
    { text: `Business Partners`, level: 1 },
    { text: `Create and run your online business with us and our partners` }
  ];

  constructor(
      private formBuilder: FormBuilder,
      public router: Router,
      private githubService: GithubProviderService,
      private analyticsService: AnalyticsService,
      private loadingService: LoadingService
  ) {
    for ( const productLine of PRODUCT_LINES ) {
      for ( const product of productLine.products ) {
        this.slides.push( {
          title: product.name,
          description: product.description,
          img: product.logo.replace( '/min', '' ).replace( '.min', '' ),
          background: './assets/slide/background-1.jpg',
          url: product.triable ? product.url : (productLine.key === 'premium' ? URLS.contactUs : product.url),
          buttonText: product.triable ? 'Try For Free' : ( product.openSource ? 'Open Source' : 'Contact Us' )
        } );
      }
    }
    for ( const productLine of LIBRARIES ) {
      for ( const product of productLine.products ) {
        this.slides.push( {
          title: product.name,
          description: product.description,
          img: product.logo.replace( '/min', '' ).replace( '.min', '' ),
          background: './assets/slide/background-1.jpg',
          url: productLine.key === 'premium' ? URLS.contactUs : product.url,
          buttonText: product.openSource ? 'Open Source' : 'Contact Us'
        } );
      }
    }
  }

  ngAfterViewInit() {
    this.initCountUps();

    this.swiper = new Swiper( '.hero-swiper', {
      speed: 600,
      parallax: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    } );
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

  getPresentationCardFooter( isOpenSource: boolean ): string {
    return isOpenSource ? $localize`:@@productTypeTag.openSource:opensource` : $localize`:@@productTypeTag.premium:premium`;
  }

  private initCountUps() {
    const options = {
      useGrouping: false,
      duration: undefined,
      formattingFn: undefined,
      decimalPlaces: 0
    };

    this.analyticsService.getSystemInfo( 'npm-downloads' ).subscribe( ( count ) => {
      this.npmCounterLoading = false;
      this.loadingService.setLoading( this.npmCounterLoading );
      this.npmDownloadCounter.count = count;
      this.startCounter( options, this.npmDownloadCounter );
    } );

    this.totalStarsCounter.count = 0;

    let totalProducts = 0;

    this.openSourceRatioCounter.count = 0;

    const promises: Promise<any>[] = [];
    for ( const system of [ PRODUCT_LINES, LIBRARIES, PLUGINS ] ) {

      for ( const productLine of system ) {

        totalProducts += productLine.products.length;

        for ( const product of productLine.products ) {
          if ( product.url !== URLS.maintenance && product.openSource ) {
            promises.push( this.githubService.getGithubStars( product.key ) );
          }

          if ( product.openSource ) {
            this.openSourceRatioCounter.count++;
          }
        }
      }
    }

    forkJoin( promises ).subscribe( results => {
      results.forEach( result => {
        this.githubCounterLoading = false;
        this.totalStarsCounter.count += result.count;
      } );
      this.startCounter( options, this.totalStarsCounter );
    } );

    this.openSourceRatioCounter.count = ( this.openSourceRatioCounter.count / totalProducts ) * 100;

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
}
