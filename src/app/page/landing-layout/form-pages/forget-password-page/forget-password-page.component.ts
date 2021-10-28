import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { URLS } from '../../../../data/navigation/navigation.data';
import { AuthenticationService } from '../../../../service/auth/authentication.service';
import { InformationService } from '../../../../service/information/information.service';
import { LoadingService } from '../../../../service/loading/loading.service';
import { ToastService } from '../../../../service/toast/toast.service';

@Component( {
  selector: 'app-forget-password-page',
  templateUrl: './forget-password-page.component.html',
  styleUrls: [ './forget-password-page.component.scss' ]
} )
export class ForgetPasswordPageComponent implements OnInit, OnDestroy {

  forgetPasswordForm: FormGroup;
  submitted = false;
  success = false;
  loading = false;

  URLS = URLS;

  appHeroContents = [{text: $localize `:@@forgetPassword.appHero:Forget password`, level: 1}]

  constructor(
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      public router: Router,
      private authenticationService: AuthenticationService,
      private loadingService: LoadingService,
      private informationService: InformationService,
      private toastService: ToastService
  ) {
    // redirect to home if already logged in
    if ( this.authenticationService.currentUserValue ) {
      this.router.navigate( [ URLS.dashboard.root ] );
    }

    this.loadingService.sharedLoading.subscribe( loading => this.loading = loading );
  }

  ngOnInit() {
    this.forgetPasswordForm = this.formBuilder.group( {
      username: [ '', Validators.required ]
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

    if ( this.forgetPasswordForm.controls.username.invalid ) {
      this.toastService.error( $localize`Please provide a valid username.`, '' );
      return;
    }

    this.authenticationService.forgetPassword( this.forgetPasswordForm.controls.username.value )
    .pipe( first() )
    .subscribe(
        () => {
          this.success = true;
        },
        () => {
          this.success = false;
        } );
  }
}
