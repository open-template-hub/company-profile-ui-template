import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { BRAND } from '../../../../data/brand/brand.data';
import { INFORMATION_TYPES } from '../../../../data/information/information.data';
import { URLS } from '../../../../data/navigation/navigation.data';
import { AuthenticationService } from '../../../../service/auth/authentication.service';
import { InformationService } from '../../../../service/information/information.service';
import { LoadingService } from '../../../../service/loading/loading.service';

@Component( {
  selector: 'app-verify-account-page',
  templateUrl: './verify-account-page.component.html',
  styleUrls: [ './verify-account-page.component.scss' ]
} )
export class VerifyAccountPageComponent implements OnInit, OnDestroy {

  INFORMATION_TYPES = INFORMATION_TYPES;

  loading = true;
  error = '';
  token = '';

  URLS = URLS;
  BRAND = BRAND;

  verifyingAccountAppHeroContents = [
    {text: $localize `:@@verifyAccount.verifyAccountAppHero:Verifying account...`, level: 2}
  ]
  accountVerificationFailedAppHeroContents = [
    {text: $localize `:@@verifyAccount.accountVerificationFailedAppHero.1:Account verification failed`, level: 2},
    {text: $localize `:@@verifyAccount.accountVerificationFailedAppHero.2:Something went wrong!`}
  ]
  accountVerifiedAppHeroContents = [
    {text: $localize `:@@verifyAccount.verifiedAppHero.1:Account verified 🎉`, level: 2},
    {text: $localize `:@@verifyAccount.verifiedAppHero.2:Please proceed with login`}
  ]

  constructor( private route: ActivatedRoute,
      public router: Router,
      private authenticationService: AuthenticationService,
      private loadingService: LoadingService,
      private informationService: InformationService
  ) {
    this.informationService.sharedError.subscribe( error => this.error = error );
    this.loadingService.sharedLoading.subscribe( loading => this.loading = loading );
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe( params => {
      this.token = params.token;

      this.authenticationService.verify( this.token )
      .pipe( first() ).subscribe();
    } );
  }

  ngOnDestroy() {
    this.informationService.clearInformation();
  }
}
