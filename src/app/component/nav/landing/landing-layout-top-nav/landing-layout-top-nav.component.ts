import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingService } from '../../../../service/loading/loading.service';
import { ThemeService } from '../../../../service/theme/theme.service';
import { PRODUCTS, SERVICES, URLS } from '../../../../util/constant';
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

  PRODUCTS: DropdownColumnOption[] = [];
  SERVICES: DropdownColumnOption[] = [];

  constructor(
      private router: Router,
      private themeService: ThemeService,
      private loadingService: LoadingService
  ) {
    this.brand = this.themeService.brand;
    this.loadingService.sharedLoading.subscribe( loading => this.loading = loading );

    this.PRODUCTS = PRODUCTS;
    this.SERVICES = SERVICES;
  }
}
