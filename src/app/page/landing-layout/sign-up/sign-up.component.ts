import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import { AnalyticsService } from '../../../service/analytics/analytics.service';
import { AuthenticationService } from '../../../service/auth/authentication.service';
import { InformationService } from '../../../service/information/information.service';
import { LoadingService } from '../../../service/loading/loading.service';
import { ToastService } from '../../../service/toast/toast.service';
import { URLS } from '../../../util/constant';

@Component( {
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: [ './sign-up.component.scss', '../landing-layout.component.scss' ]
} )
export class SignUpComponent implements OnInit, OnDestroy {

  signUpForm: FormGroup;
  submitted = false;
  environment = environment;
  loading = false;
  disabled = false;

  URLS = URLS;

  constructor(
      private formBuilder: FormBuilder,
      private router: Router,
      private route: ActivatedRoute,
      private authenticationService: AuthenticationService,
      private loadingService: LoadingService,
      private informationService: InformationService,
      private toastService: ToastService,
      private analyticsService: AnalyticsService
  ) {
    // redirect to home if already logged in
    if ( this.authenticationService.currentUserValue ) {
      this.router.navigate( [ URLS.dashboard.root ] );
    }

    this.loadingService.sharedLoading.subscribe( loading => this.loading = loading );
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.signUpForm.controls;
  }

  ngOnInit() {
    this.signUpForm = this.formBuilder.group( {
      username: [ '', Validators.required ],
      email: [ '', Validators.compose( [ Validators.required, Validators.email ] ) ],
      password: [ '', Validators.compose( [ Validators.required, Validators.minLength( 6 ) ] ) ],
      confirmPassword: [ '', Validators.required ]
    }, {
      validator: this.MustMatch( 'password', 'confirmPassword' )
    } );
  }

  ngOnDestroy() {
    this.informationService.clearInformation();
  }

  onSubmit() {
    if ( this.loading ) {
      return;
    }

    this.submitted = true;

    // stop here if form is invalid
    if ( this.signUpForm.invalid ) {
      if ( this.f.confirmPassword.invalid ) {
        this.toastService.error( 'Please provide the same value for confirm password.', '', {
          positionClass: this.route.parent.snapshot.data.layout,
        } );
      }
      if ( this.f.password.invalid ) {
        this.toastService.error( 'Please provide a valid password (min length 6).', '', {
          positionClass: this.route.parent.snapshot.data.layout
        } );
      }
      if ( this.f.email.invalid ) {
        this.toastService.error( 'Please provide a valid email address.', '', {
          positionClass: this.route.parent.snapshot.data.layout,
        } );
      }
      if ( this.f.username.invalid ) {
        this.toastService.error( 'Please provide a valid username', '', {
          positionClass: this.route.parent.snapshot.data.layout
        } );
      }
      return;
    }

    this.authenticationService.signUp( this.f.username.value, this.f.email.value, this.f.password.value )
    .pipe( first() )
    .subscribe(
        data => {
          this.analyticsService.logRegisteredUser( data ).subscribe();

          this.router.navigate( [ '/signup-success' ], { queryParams: { email: data.email } } );
        }
    );
  }

  socialLogin( social: any ) {
    if ( this.loading || this.disabled ) {
      return;
    }

    this.disabled = true;

    this.authenticationService.socialLoginRedirect( social )
    .pipe( first() )
    .subscribe(
        data => {
          window.location.href = data.loginUrl;
        },
        error => {
          this.disabled = false;
        }
    );
  }

  private MustMatch( controlName: string, matchingControlName: string ) {
    return ( formGroup: FormGroup ) => {
      const control = formGroup.controls[ controlName ];
      const matchingControl = formGroup.controls[ matchingControlName ];

      if ( matchingControl.errors && !matchingControl.errors.mustMatch ) {
        // return if another validator has already found an error on the matchingControl
        return;
      }

      // set error on matchingControl if validation fails
      if ( control.value !== matchingControl.value ) {
        matchingControl.setErrors( { mustMatch: true } );
      } else {
        matchingControl.setErrors( null );
      }
    };
  }
}
