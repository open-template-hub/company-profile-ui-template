import { AfterViewInit, Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { CountUp } from 'countup.js';
import { AuthenticationService } from '../../../service/auth/authentication.service';
import { ThemeService } from '../../../service/theme/theme.service';
import { URLS } from '../../../util/constant';

@Component( {
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [ './home.component.scss', '../raw-landing-layout.component.scss' ]
} )
export class HomeComponent implements AfterViewInit {

  // TODO: Will be initialized by apis
  eventCounter = 2700;
  studentCounter = 7;
  userCounter = 5;

  brand = {
    brandLogo: '',
  };

  URLS = URLS;

  KILO = 1000;
  MILLION = this.KILO * this.KILO;

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
      return this.countUpFormatter( n, this.eventCounter );
    };

    if ( this.eventCounter < this.KILO ) {
      options.duration = 2
    } else if ( this.eventCounter < this.MILLION ) {
      options.duration = 3
    } else {
      options.duration = 4
    }

    const eventCountUp = new CountUp( 'npmCounterElement', this.eventCounter, options );

    options.formattingFn = ( n: number ) => {
      return this.countUpFormatter( n, this.studentCounter );
    };
    if ( this.studentCounter < this.KILO ) {
      options.duration = 2
    } else if ( this.studentCounter < this.MILLION ) {
      options.duration = 3
    } else {
      options.duration = 4
    }

    const studentCountUp = new CountUp( 'githubStarCounterElement', this.studentCounter, options );

    options.formattingFn = ( n: number ) => {
      return this.countUpFormatter( n, this.userCounter );
    };
    if ( this.userCounter < this.KILO ) {
      options.duration = 2
    } else if ( this.userCounter < this.MILLION ) {
      options.duration = 3
    } else {
      options.duration = 4
    }

    const userCountUp = new CountUp( 'serverTypesCounterElement', this.userCounter, options );

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
      return n + ''
    } else {
      if ( n < this.MILLION ) {
        return Math.round( n / this.KILO * 10 ) / 10 + 'k'
      } else {
        return Math.round( n / this.MILLION * 10 ) / 10 + 'M'
      }
    }
  }
}
