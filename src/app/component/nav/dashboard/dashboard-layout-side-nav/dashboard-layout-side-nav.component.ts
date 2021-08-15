import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthToken } from '../../../../model/AuthToken';
import { AuthenticationService } from '../../../../service/auth/authentication.service';
import { BasicInfoService } from '../../../../service/basic-info/basic-info.service';
import { CategoryService } from '../../../../service/category/category.service';
import { FileStorageService } from '../../../../service/file-storage/file-storage.service';
import { ThemeService } from '../../../../service/theme/theme.service';
import { PROFILE_IMG, URLS } from '../../../../util/constant';

@Component( {
  selector: 'app-dashboard-layout-side-nav',
  templateUrl: './dashboard-layout-side-nav.component.html',
  styleUrls: [ './dashboard-layout-side-nav.component.scss' ]
} )
export class DashboardLayoutSideNavComponent {

  darkTheme: string;
  sideNavClosed = 'false';
  userInfo: any = {};
  profileImg = PROFILE_IMG;
  userSearchResults = [];
  categorySearchResults = [];
  searchEnabled = true;

  brand = {
    brandLogo: '',
  };

  URLS = URLS;

  currentUser: AuthToken;
  openSettings = false;
  openOtherSettings = false;

  @ViewChild( 'searchArea' )
  searchArea: ElementRef;

  constructor(
      private router: Router,
      private authenticationService: AuthenticationService,
      private basicInfoService: BasicInfoService,
      private fileStorageService: FileStorageService,
      private themeService: ThemeService,
      private _eref: ElementRef,
      private categoryService: CategoryService
  ) {
    this.authenticationService.currentUser.subscribe( currentUser => {
      this.currentUser = currentUser;
    } );

    this.themeService.darkTheme.subscribe( darkTheme => {
      this.darkTheme = darkTheme;
    } );

    this.themeService.sideNavClosed.subscribe( sideNavClosed => {
      this.sideNavClosed = sideNavClosed;
    } );

    this.brand = this.themeService.brand;

    this.basicInfoService.userInfo.subscribe( userInfo => {
          if ( userInfo ) {
            this.userInfo = userInfo;
          }

          if ( this.userInfo.profileImg ) {
            this.profileImg = userInfo.profileImg;
          }
        }
    );

    this.fileStorageService.sharedProfileImage.subscribe( profileImg => {
          if ( profileImg?.file?.data ) {
            this.profileImg = 'data:image/png;base64,' + profileImg.file.data;
          }
        }
    );
  }

  @HostListener( 'document:click', [ '$event' ] )
  onDocumentClick( event ) {
    if ( this.searchArea?.nativeElement.contains( event.target ) ) {
      this.searchEnabled = true;
    } else {
      this.searchEnabled = false;
    }
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

  toggleSideNav() {
    this.themeService.toggleSideNav();
  }

  search( event: any ) {
    const q = event.target.value;

    if ( !q || q.length < 3 ) {
      this.userSearchResults = [];
      this.categorySearchResults = [];
      return;
    }

    this.basicInfoService.search( q ).subscribe( results => {
      this.userSearchResults = results.slice( 0, 10 );
    } );

    this.categoryService.search( q ).subscribe( results => {
      this.categorySearchResults = results.slice( 0, 10 );
    } );
  }
}
