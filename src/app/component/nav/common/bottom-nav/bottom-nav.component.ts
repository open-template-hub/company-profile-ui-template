import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { AuthToken } from '../../../../model/AuthToken';
import { AuthenticationService } from '../../../../service/auth/authentication.service';
import { BasicInfoService } from '../../../../service/basic-info/basic-info.service';
import { LoadingService } from '../../../../service/loading/loading.service';
import { PRODUCTS, SERVICES, URLS } from '../../../../util/constant';
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

  PRODUCTS: DropdownColumnOption[] = [];
  SERVICES: DropdownColumnOption[] = [];

  constructor(
      private router: Router,
      private authenticationService: AuthenticationService,
      private loadingService: LoadingService,
      private basicInfoService: BasicInfoService,
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

    this.PRODUCTS = PRODUCTS;
    this.SERVICES = SERVICES;
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
