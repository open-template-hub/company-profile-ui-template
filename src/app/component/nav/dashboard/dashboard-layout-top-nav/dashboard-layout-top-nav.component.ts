import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { PROFILE_IMG, URLS } from '../../../../data/constant';
import { BusinessLogicService } from '../../../../service/business-logic/business-logic.service';
import { CategoryService } from '../../../../service/category/category.service';
import { FileStorageService } from '../../../../service/file-storage/file-storage.service';
import { LoadingService } from '../../../../service/loading/loading.service';
import { ThemeService } from '../../../../service/theme/theme.service';

@Component( {
  selector: 'app-dashboard-layout-top-nav',
  templateUrl: './dashboard-layout-top-nav.component.html',
  styleUrls: [ './dashboard-layout-top-nav.component.scss' ]
} )
export class DashboardLayoutTopNavComponent {

  userInfo: any = {};
  loading = false;
  profileImg = PROFILE_IMG;

  userSearchResults = [];
  categorySearchResults = [];

  searchEnabled = true;

  brand = {
    brandLogo: ''
  };

  URLS = URLS;
  @ViewChild( 'searchArea' ) searchArea: ElementRef;

  constructor(
      private businessLogicService: BusinessLogicService,
      private fileStorageService: FileStorageService,
      private themeService: ThemeService,
      private loadingService: LoadingService,
      private _eref: ElementRef,
      private categoryService: CategoryService
  ) {
    this.brand = this.themeService.brand;

    this.businessLogicService.userInfo.subscribe( userInfo => {
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

    this.loadingService.sharedLoading.subscribe( loading => this.loading = loading );
  }

  @HostListener( 'document:click', [ '$event' ] )
  onDocumentClick( event ) {
    if ( this.searchArea.nativeElement.contains( event.target ) ) {
      this.searchEnabled = true;
    } else {
      this.searchEnabled = false;
    }
  }

  search( event: any ) {
    const q = event.target.value;

    if ( !q || q.length < 3 ) {
      this.userSearchResults = [];
      this.categorySearchResults = [];
      return;
    }

    this.businessLogicService.search( q ).subscribe( results => {
      this.userSearchResults = results.slice( 0, 10 );
    } );

    this.categoryService.search( q ).subscribe( results => {
      this.categorySearchResults = results.slice( 0, 10 );
    } );
  }
}
