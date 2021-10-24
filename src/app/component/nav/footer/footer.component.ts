import { Component, Input, LOCALE_ID } from '@angular/core';
import { Router } from '@angular/router';
import { PRODUCT_LINES, SERVICES } from 'src/app/data/product/product.data';
import { environment } from 'src/environments/environment';
import { environmentCommon } from 'src/environments/environment-common';
import { BRAND } from '../../../data/brand/brand.data';
import { URLS } from '../../../data/constant';
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

  environment = environment;
  environmentCommon = environmentCommon;

  currentLanguage = 'English';

  constructor(
    private router: Router,
    private themeService: ThemeService
  ) {
    this.appVersion = themeService.appVersion;

  }

  changeCurrentLanguage( option: any ) {
    for( const language of environmentCommon.languages ) {
      if( language.name === option ) {
        this.currentLanguage = language.name
        window.open( '/' + language.code + '/' + this.router.url, '_self' );
        return
      }
    }
  }
}
