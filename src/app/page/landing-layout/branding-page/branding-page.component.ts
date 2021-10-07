import { Component } from '@angular/core';
import { BRAND } from '../../../data/brand/brand.data';
import { ThemeService } from '../../../service/theme/theme.service';

@Component( {
  selector: 'app-branding-page',
  templateUrl: './branding-page.component.html',
  styleUrls: [ './branding-page.component.scss' ]
} )
export class BrandingPageComponent {

  BRAND = BRAND;

  themeColorSetting: string;

  colorPalette = {
    brandColor: '',
    secondaryColor: '',
    tertiaryColor: ''
  };

  externalColorInfoUrl = 'https://color-hex.org/color/';

  constructor( private themeService: ThemeService ) {

    this.themeService.themeColorSetting.subscribe( themeColorSetting => {
      this.themeColorSetting = themeColorSetting;
      this.colorPalette.brandColor = getComputedStyle( document.getElementById( 'oth-component' ) ).getPropertyValue( '--theme-color' );
      this.colorPalette.secondaryColor = getComputedStyle( document.getElementById( 'oth-component' ) ).getPropertyValue( '--theme-color-secondary' );
      this.colorPalette.tertiaryColor = getComputedStyle( document.getElementById( 'oth-component' ) ).getPropertyValue( '--theme-color-tertiary' );
    } );
  }
}
