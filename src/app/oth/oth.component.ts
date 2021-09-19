import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { GoogleTagManagerService } from 'angular-google-tag-manager';
import { ThemeService } from '../service/theme/theme.service';

@Component( {
  selector: 'app-root',
  templateUrl: './oth.component.html',
  styleUrls: [ './oth.component.scss' ]
} )
export class OthComponent {

  darkLightSetting: string;
  themeColorSetting: string;

  constructor(
      private themeService: ThemeService,
      private googleTagManagerService: GoogleTagManagerService,
      private router: Router ) {

    this.router.events.forEach( item => {
      if ( item instanceof NavigationEnd ) {

        const googleTagManagerTag = {
          event: 'page',
          pageName: item.url
        };

        this.googleTagManagerService.pushTag( googleTagManagerTag );
      }
    } );

    this.themeService.darkLightSetting.subscribe( darkLightSetting => {
      this.darkLightSetting = darkLightSetting;
    } );

    this.themeService.themeColorSetting.subscribe( themeColorSetting => {
      this.themeColorSetting = themeColorSetting;
    } );
  }
}
