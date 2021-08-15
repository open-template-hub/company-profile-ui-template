import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AuthenticationService } from '../../../service/auth/authentication.service';
import { InformationService } from '../../../service/information/information.service';
import { LoadingService } from '../../../service/loading/loading.service';
import { ToastService } from '../../../service/toast/toast.service';
import { URLS } from '../../../util/constant';

@Component( {
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: [ './forget-password.component.scss', '../landing-layout.component.scss' ]
} )
export class ForgetPasswordComponent implements OnInit, OnDestroy {

  forgetPasswordForm: FormGroup;
  submitted = false;
  success = false;
  loading = false;

  URLS = URLS;

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

  // convenience getter for easy access to form fields
  get f() {
    return this.forgetPasswordForm.controls;
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

    if ( this.forgetPasswordForm.invalid ) {
      if ( this.f.username.invalid ) {
        this.toastService.error( 'Please provide a valid username.', '', {
          positionClass: this.route.parent.snapshot.data.layout
        } );
      }
      return;
    }

    this.authenticationService.forgetPassword( this.f.username.value )
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
