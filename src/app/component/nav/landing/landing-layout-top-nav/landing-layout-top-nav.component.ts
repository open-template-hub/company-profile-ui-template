import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingService } from '../../../../service/loading/loading.service';
import { ThemeService } from '../../../../service/theme/theme.service';
import { PRODUCT_LINES, SERVICES, URLS } from '../../../../data/constant';
import { DropdownColumnOption } from '../../../common/dropdown-menu/dropdown-menu.component';

@Component( {
  selector: 'app-landing-layout-top-nav',
  templateUrl: './landing-layout-top-nav.component.html',
  styleUrls: [ './landing-layout-top-nav.component.scss' ]
} )
export class LandingLayoutTopNavComponent {
  loading = false;
  brand = {
    brandLogo: '',
  };
  URLS = URLS;

  PRODUCT_LINES: DropdownColumnOption[] = PRODUCT_LINES;
  SERVICES: DropdownColumnOption[] = SERVICES;

  @ViewChild( 'dropdownMenuProducts' ) dropdownMenuProducts: ElementRef;
  @ViewChild( 'dropdownMenuServices' ) dropdownMenuServices: ElementRef;

  constructor(
      private router: Router,
      private themeService: ThemeService,
      private loadingService: LoadingService
  ) {
    this.brand = this.themeService.brand;
    this.loadingService.sharedLoading.subscribe( loading => this.loading = loading );
  }
}
