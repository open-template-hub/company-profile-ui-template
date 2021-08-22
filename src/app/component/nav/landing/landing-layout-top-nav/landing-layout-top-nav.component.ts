import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingService } from '../../../../service/loading/loading.service';
import { ThemeService } from '../../../../service/theme/theme.service';
import { URLS } from '../../../../util/constant';
import { DropdownMenuOption } from '../../../common/dropdown-menu/dropdown-menu.component';

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

  productMenuOptions: DropdownMenuOption[] = [
    {
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
    }
  ]

  servicesMenuOptions: DropdownMenuOption[] = [
    {
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
    }
  ]

  constructor(
      private router: Router,
      private themeService: ThemeService,
      private loadingService: LoadingService
  ) {
    this.brand = this.themeService.brand;
    this.loadingService.sharedLoading.subscribe( loading => this.loading = loading );
  }

  switchTheme() {
    this.themeService.switchDarkTheme();
  }
}
