import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ThemeService } from './service/theme/theme.service';

@Component( {
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
} )
export class AppComponent {

  darkLightSetting: string;
  themeColorSetting: string;
  themeDesignSetting: string;

  constructor(
      private themeService: ThemeService,
      private router: Router ) {

    this.themeService.darkLightSetting.subscribe( darkLightSetting => {
      this.darkLightSetting = darkLightSetting;
    } );

    this.themeService.themeColorSetting.subscribe( themeColorSetting => {
      this.themeColorSetting = themeColorSetting;
    } );

    this.themeService.themeDesignSetting.subscribe( themeDesignSetting => {
      this.themeDesignSetting = themeDesignSetting;
    } );
  }

  setTheme() {
    let themeConfig = 'default-theme';

    if ( this.themeColorSetting ) {
      themeConfig = this.themeColorSetting;
    }

    if ( this.themeDesignSetting ) {
      themeConfig += ' ' + this.themeDesignSetting;
    }

    return themeConfig;
  }
}
