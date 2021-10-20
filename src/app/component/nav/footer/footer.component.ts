import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { PRODUCT_LINES, SERVICES } from 'src/app/data/product/product.data';
import { environment } from 'src/environments/environment';
import { environmentCommon } from 'src/environments/environment-common';
import { BRAND } from '../../../data/brand/brand.data';
import { DarkLightSettings, URLS } from '../../../data/constant';
import { ProductLine } from '../../../model/product/product.model';
import { ThemeService } from '../../../service/theme/theme.service';

@Component( {
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: [ './footer.component.scss' ]
} )
export class FooterComponent {

  @Input()
  hideShadow = false;
  @Input()
  popupPadding = false;

  PRODUCT_LINES: ProductLine[] = PRODUCT_LINES;
  SERVICES: ProductLine[] = SERVICES;
  BRAND = BRAND;
  URLS = URLS;

  appVersion = '1.0.0';
  poweredBy: string;

  environment = environment;
  environmentCommon = environmentCommon;

  constructor(
      private router: Router,
      private themeService: ThemeService
  ) {
    this.appVersion = themeService.appVersion;
    this.themeService.darkLightSetting.subscribe( darkLightSetting => {
      switch ( darkLightSetting ) {
        case DarkLightSettings.dark: {
          this.poweredBy = 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/min/badge/powered-by-dark-mode.min.png';
          break;
        }
        case DarkLightSettings.light: {
          this.poweredBy = 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/min/badge/powered-by-light-mode.min.png';
          break;
        }
        case DarkLightSettings.auto:
        default: {
          this.updatePoweredByWithDarkLightMode();
          window.matchMedia( '(prefers-color-scheme: dark)' ).addEventListener( 'change', () => {
            this.updatePoweredByWithDarkLightMode();
          } );
        }
      }
    } );
  }

  private updatePoweredByWithDarkLightMode() {
    if ( window.matchMedia && window.matchMedia( '(prefers-color-scheme: dark)' ).matches ) {
      this.poweredBy = 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/min/badge/powered-by-dark-mode.min.png';
    } else {
      this.poweredBy = 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/min/badge/powered-by-light-mode.min.png';
    }
  }

  getCurrentRoute() {
    return this.router.url;
  }
}
