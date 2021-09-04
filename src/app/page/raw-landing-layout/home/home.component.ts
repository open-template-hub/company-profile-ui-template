import { AfterViewInit, Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { CountUp } from 'countup.js';
import { environment } from '../../../../environments/environment';
import { environmentCommon } from '../../../../environments/environment-common';
import { TestimonialOption } from '../../../component/common/card/testimonial-card/testimonial-card.component';
import { DropdownColumnOption } from '../../../component/common/dropdown-menu/dropdown-menu.component';
import { Partner } from '../../../component/common/swiper-wrapper/swiper-wrapper.component';
import { PARTNERS, PRODUCT_LINES, URLS } from '../../../data/constant';
import { AuthenticationService } from '../../../service/auth/authentication.service';
import { ThemeService } from '../../../service/theme/theme.service';

@Component( {
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [ './home.component.scss', '../raw-landing-layout.component.scss' ]
} )
export class HomeComponent implements AfterViewInit {

  downloadCounter = 6100;
  serverTypesCounter = 5;
  uiTypesCounter = 3;

  brand = {
    brandLogo: '',
  };

  URLS = URLS;
  PRODUCT_LINES: DropdownColumnOption[] = PRODUCT_LINES;
  PARTNERS: Partner[] = PARTNERS;

  KILO = 1000;
  MILLION = this.KILO * this.KILO;

  environment = environment;
  environmentCommon = environmentCommon;

  option1: TestimonialOption = {
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse in elit blandit, tempus risus vitae, elementum eros. Suspendisse nec orci at neque molestie dignissim. ',
    brand: { brandLogo: '../../../../assets/common/social/buymeacoffee-logo.png' },
    style: { themeColor: 'var(--warn)' }
  };

  option2: TestimonialOption = {
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse in elit blandit, tempus risus vitae, elementum eros. Suspendisse nec orci at neque molestie dignissim. ',
    brand: { brandLogo: '../../../../assets/common/social/reddit-logo.png' },
    style: { themeColor: 'var(--error)' }
  };

  option3: TestimonialOption = {
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse in elit blandit, tempus risus vitae, elementum eros. Suspendisse nec orci at neque molestie dignissim. ',
    brand: { brandLogo: '../../../../assets/common/social/facebook-logo.png' },
    style: { themeColor: 'var(--info)' }
  };

  constructor(
      private formBuilder: FormBuilder,
      public router: Router,
      private authenticationService: AuthenticationService,
      private themeService: ThemeService
  ) {
    // redirect to home if already logged in
    if ( this.authenticationService.currentUserValue ) {
      this.router.navigate( [ URLS.dashboard.root ] );
    }

    this.brand = this.themeService.brand;
  }

  ngAfterViewInit() {
    this.initCountUps();
  }

  private initCountUps() {
    const options = {
      useGrouping: false,
      duration: undefined,
      formattingFn: undefined
    };

    options.formattingFn = ( n: number ) => {
      return this.countUpFormatter( n, this.downloadCounter );
    };

    if ( this.downloadCounter < this.KILO ) {
      options.duration = 2;
    } else if ( this.downloadCounter < this.MILLION ) {
      options.duration = 3;
    } else {
      options.duration = 4;
    }

    const eventCountUp = new CountUp( 'npmCounterElement', this.downloadCounter, options );

    options.formattingFn = ( n: number ) => {
      return this.countUpFormatter( n, this.serverTypesCounter );
    };
    if ( this.serverTypesCounter < this.KILO ) {
      options.duration = 2;
    } else if ( this.serverTypesCounter < this.MILLION ) {
      options.duration = 3;
    } else {
      options.duration = 4;
    }

    const studentCountUp = new CountUp( 'githubStarCounterElement', this.serverTypesCounter, options );

    options.formattingFn = ( n: number ) => {
      return this.countUpFormatter( n, this.uiTypesCounter );
    };
    if ( this.uiTypesCounter < this.KILO ) {
      options.duration = 2;
    } else if ( this.uiTypesCounter < this.MILLION ) {
      options.duration = 3;
    } else {
      options.duration = 4;
    }

    const userCountUp = new CountUp( 'serverTypesCounterElement', this.uiTypesCounter, options );

    if ( !eventCountUp.error ) {
      eventCountUp.start();
    } else {
      console.error( eventCountUp.error );
    }
    if ( !studentCountUp.error ) {
      studentCountUp.start();
    } else {
      console.error( studentCountUp.error );
    }
    if ( !userCountUp.error ) {
      userCountUp.start();
    } else {
      console.error( userCountUp.error );
    }
  }

  countUpFormatter( n: number, lastNumber: number ) {
    if ( n < this.KILO ) {
      return n + '';
    } else {
      if ( n < this.MILLION ) {
        return Math.round( n / this.KILO * 10 ) / 10 + 'k';
      } else {
        return Math.round( n / this.MILLION * 10 ) / 10 + 'M';
      }
    }
  }
}
