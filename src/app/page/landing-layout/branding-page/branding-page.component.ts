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
    secondaryColor: '',
    tertiaryColor: ''
  };

  externalColorInfoUrl = 'https://color-hex.org/color/';

  constructor( private themeService: ThemeService ) {
    this.brand = themeService.brand;

    this.themeService.themeColorSetting.subscribe( themeColorSetting => {
      this.themeColorSetting = themeColorSetting;
      this.colorPalette.brandColor = getComputedStyle( document.getElementById( 'oth-component' ) ).getPropertyValue( '--theme-color' );
      this.colorPalette.secondaryColor = getComputedStyle( document.getElementById( 'oth-component' ) ).getPropertyValue( '--theme-color-secondary' );
      this.colorPalette.tertiaryColor = getComputedStyle( document.getElementById( 'oth-component' ) ).getPropertyValue( '--theme-color-tertiary' );
    } );
  }
}
