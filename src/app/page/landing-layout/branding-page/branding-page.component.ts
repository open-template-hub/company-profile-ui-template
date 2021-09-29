import { Component } from '@angular/core';
import { ThemeService } from '../../../service/theme/theme.service';

@Component( {
  selector: 'app-branding-page',
  templateUrl: './branding-page.component.html',
  styleUrls: [ './branding-page.component.scss' ]
} )
export class BrandingPageComponent {

  brand = {
    brandLogo: '',
    wallpapers: [],
    badges: []
  };

  themeColorSetting: string;

  colorPalette = {
    brandColor: '',
    cardColorLightMode: '',
    cardColorDarkMode: ''
  };

  externalColorInfoUrl = 'https://color-hex.org/color/';

  constructor( private themeService: ThemeService ) {
    this.brand = this.themeService.brand;

    this.themeService.themeColorSetting.subscribe( themeColorSetting => {
      this.themeColorSetting = themeColorSetting;
      this.colorPalette.brandColor = getComputedStyle( document.getElementById( 'oth-component' ) ).getPropertyValue( '--theme-color' );
      this.colorPalette.cardColorLightMode = getComputedStyle( document.getElementById( 'oth-component' ) ).getPropertyValue( '--card-light-mode' );
      this.colorPalette.cardColorDarkMode = getComputedStyle( document.getElementById( 'oth-component' ) ).getPropertyValue( '--card-dark-mode' );
    } );
  }
}
