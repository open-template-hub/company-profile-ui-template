import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import { AuthenticationService } from '../../../service/auth/authentication.service';
import { BasicInfoService } from '../../../service/basic-info/basic-info.service';
import { EventService } from '../../../service/event/event.service';
import { FileStorageService } from '../../../service/file-storage/file-storage.service';
import { InformationService } from '../../../service/information/information.service';
import { LoadingService } from '../../../service/loading/loading.service';
import { ToastService } from '../../../service/toast/toast.service';
import { URLS } from '../../../util/constant';

@Component( {
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.scss', '../landing-layout.component.scss' ]
} )
export class LoginComponent implements OnInit, OnDestroy {

  loginForm: FormGroup;
  submitted = false;
  returnUrl: string;
  environment = environment;
  loading = false;
  disabled = false;

  URLS = URLS;

  constructor(
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private router: Router,
      private authenticationService: AuthenticationService,
      private basicInfoService: BasicInfoService,
      private informationService: InformationService,
      private fileStorageService: FileStorageService,
      private eventService: EventService,
      private loadingService: LoadingService,
      private toastService: ToastService
  ) {
    if ( this.authenticationService.currentUserValue ) {
      this.router.navigate( [ URLS.dashboard.root ] );
    }
    this.loadingService.sharedLoading.subscribe( loading => this.loading = loading );
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.loginForm.controls;
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group( {
      username: [ '', Validators.required ],
      password: [ '', Validators.required ],
      rememberMe: [ true, Validators.required ]
    } );

    // get return url from route parameters or default to '/dashboard'
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || URLS.dashboard.root;
  }

  ngOnDestroy() {
    this.informationService.clearInformation();
  }

  onSubmit() {
    if ( this.loading ) {
      return;
    }

    this.submitted = true;

    if ( this.loginForm.invalid ) {
      if ( this.f.password.invalid ) {
        this.toastService.error( 'Please provide a valid password.', '', {
          positionClass: this.route.parent.snapshot.data.layout
        } );
      }
      if ( this.f.username.invalid ) {
        this.toastService.error( 'Please provide a valid username.', '', {
          positionClass: this.route.parent.snapshot.data.layout
        } );
      }
      return;
    }

    this.authenticationService.login( this.f.username.value, this.f.password.value, this.f.rememberMe.value )
    .pipe( first() )
    .subscribe(
        () => {
          if ( this.returnUrl !== URLS.dashboard.root ) {
            // Special case for initialization (if return url is else than dashboard)
            this.basicInfoService.me()
            .subscribe( userInfo => {
                  this.router.navigateByUrl( this.returnUrl );
                  if ( !userInfo.payload ) {
                    this.basicInfoService.createMyInfo()
                    .subscribe( () => {
                          this.router.navigate( [ URLS.settings.welcome ] );
                        }
                    );
                  } else {
                    this.fileStorageService.downloadProfileImage( userInfo.payload.profileImageId ).subscribe();

                    const userInterests = userInfo?.payload?.interests;
                    const categories: any[] = [];

                    if ( userInterests && userInterests.length > 0 ) {
                      for ( const interest of userInterests ) {
                        categories.push(
                            {
                              category: interest.category,
                              subCategory: interest.subCategory,
                              leafCategory: interest.leafCategory
                            }
                        );
                      }
                    }

                    this.eventService.initSearchEvents(categories);
                  }
                }
            );
          } else {
            this.router.navigate( [ this.returnUrl ] );
          }
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
        } );
  }
}
