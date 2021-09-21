import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { URLS } from '../../../data/constant';
import { AuthenticationService } from '../../../service/auth/authentication.service';
import { InformationService } from '../../../service/information/information.service';
import { PaymentService } from '../../../service/payment/payment.service';
import { ThemeService } from '../../../service/theme/theme.service';

@Component( {
  selector: 'app-callback-page',
  templateUrl: './callback-page.component.html',
  styleUrls: [ './callback-page.component.scss' ]
} )
export class CallbackPageComponent implements OnInit {

  oauth: any;
  payment: any;

  website: any;

  error = '';

  brand = {
    brandLogo: '',
  };

  URLS = URLS;

  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private themeService: ThemeService,
      private authenticationService: AuthenticationService,
      private informationService: InformationService,
      private paymentService: PaymentService
  ) {
  }

  ngOnInit(): void {
    this.brand = this.themeService.brand;

    this.oauth = this.route.snapshot.data.oauth;
    this.payment = this.route.snapshot.data.payment;

    if ( this.payment ) {
      const status = this.route.snapshot.queryParamMap.get( 'status' );
      const eventId = this.route.snapshot.queryParamMap.get( 'id' );
      const transactionId = this.route.snapshot.queryParamMap.get( 'transaction_id' );
      this.paymentCallback( this.payment, status, eventId, transactionId );
      this.website = this.payment;
    } else {
      this.website = this.oauth;
      this.socialLoginCallback();
    }
  }

  private paymentCallback( paymentConfig: string, status: string, eventId: string, transactionId: string ) {
    if ( status === 'success' ) {
      this.paymentService.verify( paymentConfig, transactionId, eventId ).subscribe( response => {
        this.informationService.setInformation( `Payment succeeded`, 'success' );
        this.router.navigate( [ URLS.dashboard.event ], { queryParams: { event_id: eventId } } );
      }, error => {
        this.router.navigate( [ URLS.dashboard.learn ] );
      } );
    } else {
      this.informationService.setInformation( `Payment canceled`, 'error' );
      this.router.navigate( [ URLS.dashboard.event ], { queryParams: { event_id: eventId } } );
    }
  }

  private socialLoginCallback() {
    const callbackParams = {
      code: undefined,
      state: undefined,
      oauth_token: undefined,
      oauth_verifier: undefined
    };

    if ( this.oauth.callbackParams.includes( 'code' ) ) {
      if ( !this.route.snapshot.queryParamMap.has( 'code' ) ) {
        this.error = 'Please try again later';
        return;
      }
      callbackParams.code = this.route.snapshot.queryParamMap.get( 'code' );
    }

    if ( this.oauth.callbackParams.includes( 'state' ) ) {
      if ( !this.route.snapshot.queryParamMap.has( 'state' ) ) {
        this.error = 'Please try again later';
        return;
      }
      callbackParams.state = this.route.snapshot.queryParamMap.get( 'state' );
    }

    if ( this.oauth.callbackParams.includes( 'oauth_token' ) ) {
      if ( !this.route.snapshot.queryParamMap.has( 'oauth_token' ) ) {
        this.error = 'Please try again later';
        return;
      }
      callbackParams.oauth_token = this.route.snapshot.queryParamMap.get( 'oauth_token' );
    }

    if ( this.oauth.callbackParams.includes( 'oauth_verifier' ) ) {
      if ( !this.route.snapshot.queryParamMap.has( 'oauth_verifier' ) ) {
        this.error = 'Please try again later';
        return;
      }
      callbackParams.oauth_verifier = this.route.snapshot.queryParamMap.get( 'oauth_verifier' );
    }

    this.authenticationService.socialLogin( this.oauth.tag, callbackParams )
    .pipe( first() )
    .subscribe(
        () => {
          this.router.navigate( [ URLS.dashboard.root ] );
        },
        errorResponse => {
          if ( typeof errorResponse.error === 'string' ) {
            this.error = errorResponse.error;
          } else if ( errorResponse.statusText ) {
            this.error = errorResponse.statusText;
          }
        } );
  }
}
