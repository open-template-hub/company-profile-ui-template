import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { environment } from '../../../../../environments/environment';
import { environmentCommon } from '../../../../../environments/environment-common';
import { URLS } from '../../../../data/navigation/navigation.data';
import { AnalyticsService } from '../../../../service/analytics/analytics.service';
import { AuthenticationService } from '../../../../service/auth/authentication.service';
import { InformationService } from '../../../../service/information/information.service';
import { LoadingService } from '../../../../service/loading/loading.service';
import { ToastService } from '../../../../service/toast/toast.service';

@Component( {
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: [ './sign-up-page.component.scss' ]
} )
export class SignUpPageComponent implements OnInit, OnDestroy {

  form: FormGroup;
  submitted = false;

  environment = environment;
  environmentCommon = environmentCommon;

  loading = false;
  disabled = false;

  URLS = URLS;

  appHeroContents = [{text: $localize `:@@signUp.appHero:Register`, level: 1}]

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

  ngOnInit() {
    this.form = this.formBuilder.group( {
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

    const errorMessages = {
      username: $localize `:@@signUp.error.username:Please provide a valid username`,
      email: $localize `:@@signUp.error.email:Please provide a valid email address`,
      password: $localize `:@@signUp.error.password:Please provide a valid password (min length 6)`,
      confirmPassword: $localize `:@@signUp.error.confirmPassword:Please provide the same value for confirm password`
    };

    if ( this.form.invalid ) {
      for ( const control in this.form.controls ) {
        if ( this.form.controls[ control ].invalid ) {
          this.toastService.error( errorMessages[ control ], '' );
        }
      }
      return;
    }

    this.authenticationService.signUp(
        this.form.controls.username.value,
        this.form.controls.email.value,
        this.form.controls.password.value )
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
