import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { AuthToken } from '../../../../model/AuthToken';
import { AuthenticationService } from '../../../../service/auth/authentication.service';
import { BasicInfoService } from '../../../../service/basic-info/basic-info.service';
import { LoadingService } from '../../../../service/loading/loading.service';
import { ThemeService } from '../../../../service/theme/theme.service';
import { URLS } from '../../../../util/constant';
import { DropdownColumnOption } from '../../../common/dropdown-menu/dropdown-menu.component';

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

  productToggleEvent: Subject<void> = new Subject<void>();
  serviceToggleEvent: Subject<void> = new Subject<void>();

  URLS = URLS;

  productMenuOptions: DropdownColumnOption[] = [
    {
      sectionTitle: 'Payment',
      menus: [ {
        backgroundColor: 'rgba(255, 0, 0, 0.2)',
        brand: this.themeService.brand,
        header: 'Open Template Hub',
        description: 'Open Template Hub is an organization that develops open source micro servers as templates including authentication server, payment server and more..',
        link: URLS.maintenance
      },
        {
          backgroundColor: 'rgba(0, 255, 0, 0.2)',
          brand: this.themeService.brand,
          header: 'Open Template Hub',
          description: 'Open Template Hub is an organization that develops open source micro servers as templates including authentication server, payment server and more..',
          link: URLS.maintenance
        }],
    },
    {
      sectionTitle: 'Financial Services',
      menus: [ {
        backgroundColor: 'rgba(0, 0, 255, 0.2)',
        brand: this.themeService.brand,
        header: 'Open Template Hub',
        description: 'Open Template Hub is an organization that develops open source micro servers as templates including authentication server, payment server and more..',
        link: URLS.maintenance
      } ]
    }
  ]

  servicesMenuOptions: DropdownColumnOption[] = [
    {
      menus: [ {
        backgroundColor: 'rgba(255, 0, 0, 0.2)',
        brand: this.themeService.brand,
        header: 'Open Template Hub',
        description: 'Open Template Hub is an organization that develops open source micro servers as templates including authentication server, payment server and more..',
        link: URLS.maintenance
      },
        {
          backgroundColor: 'rgba(0, 0, 255, 0.2)',
          brand: this.themeService.brand,
          header: 'Open Template Hub',
          description: 'Open Template Hub is an organization that develops open source micro servers as templates including authentication server, payment server and more..',
          link: URLS.maintenance
        } ]
    }
  ]

  constructor(
      private router: Router,
      private authenticationService: AuthenticationService,
      private loadingService: LoadingService,
      private basicInfoService: BasicInfoService,
      private themeService: ThemeService
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

  closeSettings() {
    if ( this.openOtherSettings ) {
      this.openOtherSettings = false;
    } else {
      this.openSettings = false;
    }
  }
}
