import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { URLS } from '../../../data/constant';
import { AuthenticationService } from '../../../service/auth/authentication.service';
import { InformationService } from '../../../service/information/information.service';
import { LoadingService } from '../../../service/loading/loading.service';
import { ThemeService } from '../../../service/theme/theme.service';

@Component( {
  selector: 'app-verify-account',
  templateUrl: './verify-account.component.html',
  styleUrls: [ './verify-account.component.scss', '../landing-layout.component.scss' ]
} )
export class VerifyAccountComponent implements OnInit, OnDestroy {

  loading = true;
  error = '';
  token = '';

  brand = {
    brandLogoBroken: '',
    brandLogoMerge: '',
    brandLogoMerged: '',
  };

  URLS = URLS;

  constructor( private route: ActivatedRoute,
      public router: Router,
      private authenticationService: AuthenticationService,
      private themeService: ThemeService,
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

    this.brand = this.themeService.brand;
  }

  ngOnDestroy() {
    this.informationService.clearInformation();
  }
}
