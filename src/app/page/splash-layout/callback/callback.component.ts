import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AuthenticationService } from '../../../service/auth/authentication.service';
import { InformationService } from '../../../service/information/information.service';
import { PaymentService } from '../../../service/payment/payment.service';
import { ThemeService } from '../../../service/theme/theme.service';
import { URLS } from '../../../util/constant';

@Component( {
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: [ './callback.component.scss' ]
} )
export class CallbackComponent implements OnInit {

  social: any;
  payment: any;
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

    this.social = this.route.snapshot.data.social;
    this.payment = this.route.snapshot.data.payment;

    if (this.payment) {
      const status = this.route.snapshot.queryParamMap.get( 'status' );
      const eventId = this.route.snapshot.queryParamMap.get( 'id' );
      const transactionId = this.route.snapshot.queryParamMap.get( 'transaction_id' )
      this.paymentCallback( this.payment , status, eventId, transactionId );
    } else {
      this.socialLoginCallback();
    }
  }

  private paymentCallback( paymentConfig: string, status: string, eventId: string, transactionId: string ) {
    switch ( status ) {
      case 'success':
        this.paymentService.verify( paymentConfig, transactionId, eventId ).subscribe( response => {
          this.informationService.setInformation( `Payment succeeded`, 'success' );
          this.router.navigate( [ URLS.dashboard.event ], { queryParams: { event_id: eventId } } );
        }, error => {
          this.router.navigate( [ URLS.dashboard.learn ] );
        } );
        break;
      default:
        this.informationService.setInformation( `Payment canceled`, 'error' );
        this.router.navigate( [ URLS.dashboard.event ], { queryParams: { event_id: eventId } } );
        break;
    }
  }

  private socialLoginCallback() {
    const callbackParams = {
      code: undefined,
      state: undefined,
      oauth_token: undefined,
      oauth_verifier: undefined
    };

    if ( this.social.callbackParams.includes( 'code' ) ) {
      if ( !this.route.snapshot.queryParamMap.has( 'code' ) ) {
        this.error = 'Please try again later';
        return;
      }
      callbackParams.code = this.route.snapshot.queryParamMap.get( 'code' );
    }

    if ( this.social.callbackParams.includes( 'state' ) ) {
      if ( !this.route.snapshot.queryParamMap.has( 'state' ) ) {
        this.error = 'Please try again later';
        return;
      }
      callbackParams.state = this.route.snapshot.queryParamMap.get( 'state' );
    }

    if ( this.social.callbackParams.includes( 'oauth_token' ) ) {
      if ( !this.route.snapshot.queryParamMap.has( 'oauth_token' ) ) {
        this.error = 'Please try again later';
        return;
      }
      callbackParams.oauth_token = this.route.snapshot.queryParamMap.get( 'oauth_token' );
    }

    if ( this.social.callbackParams.includes( 'oauth_verifier' ) ) {
      if ( !this.route.snapshot.queryParamMap.has( 'oauth_verifier' ) ) {
        this.error = 'Please try again later';
        return;
      }
      callbackParams.oauth_verifier = this.route.snapshot.queryParamMap.get( 'oauth_verifier' );
    }

    this.authenticationService.socialLogin( this.social.tag, callbackParams )
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
