import { Component } from '@angular/core';
import { ThemeService } from '../../../service/theme/theme.service';

@Component( {
  selector: 'app-branding-page',
  templateUrl: './branding-page.component.html',
  styleUrls: [ './branding-page.component.scss' ]
} )
export class BrandingPageComponent {

  themeColorSetting: string;

  constructor( private themeService: ThemeService ) {
    this.themeService.themeColorSetting.subscribe( themeColorSetting => {
      this.themeColorSetting = themeColorSetting;
    } );
  }
}
