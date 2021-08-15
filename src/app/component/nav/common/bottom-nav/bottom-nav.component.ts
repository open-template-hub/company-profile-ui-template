import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthToken } from '../../../../model/AuthToken';
import { AuthenticationService } from '../../../../service/auth/authentication.service';
import { BasicInfoService } from '../../../../service/basic-info/basic-info.service';
import { LoadingService } from '../../../../service/loading/loading.service';
import { ThemeService } from '../../../../service/theme/theme.service';
import { URLS } from '../../../../util/constant';

@Component( {
  selector: 'app-bottom-nav',
  templateUrl: './bottom-nav.component.html',
  styleUrls: [ './bottom-nav.component.scss' ]
} )
export class BottomNavComponent {

  currentUser: AuthToken;
  userInfo: any = {};
  loading = false;
  openSettings = false;
  openOtherSettings = false;

  URLS = URLS;

  constructor(
      private router: Router,
      private authenticationService: AuthenticationService,
      private themeService: ThemeService,
      private loadingService: LoadingService,
      private basicInfoService: BasicInfoService
  ) {
    this.authenticationService.currentUser.subscribe( currentUser => {
      this.currentUser = currentUser;
    } );

    this.loadingService.sharedLoading.subscribe( loading => this.loading = loading );

    this.basicInfoService.userInfo.subscribe( userInfo => {
          if ( userInfo ) {
            this.userInfo = userInfo;
          }
        }
    );
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

  closeSettings() {
    if ( this.openOtherSettings ) {
      this.openOtherSettings = false;
    } else {
      this.openSettings = false;
    }
  }
}
