import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { PRODUCT_LINES, SERVICES } from 'src/app/data/product/product.data';
import { URLS } from '../../../data/constant';
import { AuthToken } from '../../../model/auth/auth-token.model';
import { ProductLine } from '../../../model/product/product.model';
import { AuthenticationService } from '../../../service/auth/authentication.service';
import { BusinessLogicService } from '../../../service/business-logic/business-logic.service';
import { LoadingService } from '../../../service/loading/loading.service';

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

  PRODUCT_LINES: ProductLine[] = PRODUCT_LINES;
  SERVICES: ProductLine[] = SERVICES;

  @ViewChild( 'dropdownMenuProducts' ) dropdownMenuProducts: ElementRef;
  @ViewChild( 'dropdownMenuServices' ) dropdownMenuServices: ElementRef;

  constructor(
      private router: Router,
      private authenticationService: AuthenticationService,
      private loadingService: LoadingService,
      private businessLogicService: BusinessLogicService,
  ) {
    this.authenticationService.currentUser.subscribe( currentUser => {
      this.currentUser = currentUser;
    } );

    this.loadingService.sharedLoading.subscribe( loading => this.loading = loading );

    this.businessLogicService.userInfo.subscribe( userInfo => {
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
