import { AfterViewInit, Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { CountUp } from 'countup.js';
import { PARTNERS } from 'src/app/data/partner/partner.data';
import { TESTIMONIALS } from 'src/app/data/testimonial/testimonial.data';
import { NpmProviderService } from 'src/app/service/provider/npm-provider.service';
import { environment } from '../../../../environments/environment';
import { environmentCommon } from '../../../../environments/environment-common';
import { URLS } from '../../../data/constant';
import { Partner } from '../../../model/partner/partner.model';
import { AuthenticationService } from '../../../service/auth/authentication.service';

@Component( {
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: [ './home-page.component.scss' ],
} )
export class HomePageComponent implements AfterViewInit {
  npmDownloadCounter = { count: 0, id: 'npmDownloadCounterElement' };
  serverTypesCounter = { count: 7, id: 'serverTypesCounterElement' };
  uiTypesCounter = { count: 3, id: 'uiTypesCounterElement' };
  npmCounterLoading = true;

  URLS = URLS;
  PARTNERS: Partner[] = PARTNERS;
  TESTIMONIALS = TESTIMONIALS;

  KILO = 1000;
  MILLION = this.KILO * this.KILO;

  environment = environment;
  environmentCommon = environmentCommon;

  constructor(
      private formBuilder: FormBuilder,
      public router: Router,
      private authenticationService: AuthenticationService,
      private npmProviderService: NpmProviderService
  ) {
    // redirect to home if already logged in
    if ( this.authenticationService.currentUserValue ) {
      this.router.navigate( [ URLS.dashboard.root ] );
    }
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

  private initCountUps() {
    const options = {
      useGrouping: false,
      duration: undefined,
      formattingFn: undefined,
    };

    this.npmProviderService.getNpmPackagesDownloadCount().then( ( count ) => {
      this.npmDownloadCounter.count = count;
      this.npmCounterLoading = false;
      this.startCounter( options, this.npmDownloadCounter );
    } );

    this.startCounter( options, this.serverTypesCounter );

    this.startCounter( options, this.uiTypesCounter );
  }

  private startCounter(
      options: { duration: number; useGrouping: boolean; formattingFn },
      counter
  ) {
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
