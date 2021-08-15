import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthToken } from '../../../../model/AuthToken';
import { AuthenticationService } from '../../../../service/auth/authentication.service';
import { LoadingService } from '../../../../service/loading/loading.service';
import { ThemeService } from '../../../../service/theme/theme.service';
import { URLS } from '../../../../util/constant';

@Component( {
  selector: 'app-landing-layout-top-nav',
  templateUrl: './landing-layout-top-nav.component.html',
  styleUrls: [ './landing-layout-top-nav.component.scss' ]
} )
export class LandingLayoutTopNavComponent {

  currentUser: AuthToken;
  loading = false;

  brand = {
    brandLogo: '',
  };

  URLS = URLS;

  constructor(
      private router: Router,
      private authenticationService: AuthenticationService,
      private themeService: ThemeService,
      private loadingService: LoadingService
  ) {
    this.authenticationService.currentUser.subscribe( currentUser => {
      this.currentUser = currentUser;
    } );

    this.brand = this.themeService.brand;

    this.loadingService.sharedLoading.subscribe( loading => this.loading = loading );
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate( [ '/' ] ).then( () => {
      return true;
    } );
  }

  switchTheme() {
    this.themeService.switchDarkTheme();
  }
}
