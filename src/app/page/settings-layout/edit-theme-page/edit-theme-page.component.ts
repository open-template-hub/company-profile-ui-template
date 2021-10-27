import { Component } from '@angular/core';
import { DarkLightSettings, DEFAULT_THEME, ThemeColorSettings, ThemeDesignSettings } from '../../../data/theme/theme.data';
import { ThemeService } from '../../../service/theme/theme.service';

@Component( {
  selector: 'app-edit-theme-page',
  templateUrl: './edit-theme-page.component.html',
  styleUrls: [ './edit-theme-page.component.scss' ]
} )
export class EditThemePageComponent {

  darkLightSetting: string;
  themeColorSetting: string;

  loading = false;

  DEFAULT_THEME = DEFAULT_THEME;

  DarkLightSettings = DarkLightSettings;

  themeColorSettingsList = [];
  themeDesignSettingsList = [];

  constructor( public themeService: ThemeService ) {

    this.themeService.darkLightSetting.subscribe( darkLightSetting => {
      this.darkLightSetting = darkLightSetting;
    } );

    this.themeService.themeColorSetting.subscribe( themeColorSetting => {
      this.themeColorSetting = themeColorSetting;
    } );

    for ( const key in ThemeColorSettings ) {
      if ( ThemeColorSettings.hasOwnProperty( key ) ) {
        this.themeColorSettingsList.push( ThemeColorSettings[ key ] );
      }
    }

    for ( const key in ThemeDesignSettings ) {
      if ( ThemeDesignSettings.hasOwnProperty( key ) ) {
        this.themeDesignSettingsList.push( ThemeDesignSettings[ key ] );
      }
    }
  }

  setDarkLightSetting( setting: string ) {
    this.themeService.setDarkLightSetting( setting );
  }

  setThemeColorSetting( setting: string ) {
    this.themeService.setThemeColorSetting( setting );
  }

  setThemeDesignSetting( setting: string ) {
    this.themeService.setThemeDesignSetting( setting );
  }

  insertIf( condition: boolean, array: any[], element: any ) {
    return condition ? [ ...array, element ] : array;
  }

  restoreDefaultSettings() {
    this.setDarkLightSetting( DarkLightSettings.auto );
    this.setThemeColorSetting( DEFAULT_THEME );
    this.setThemeDesignSetting( DEFAULT_THEME );
  }
}
