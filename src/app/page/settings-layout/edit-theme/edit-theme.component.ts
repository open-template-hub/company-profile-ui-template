import { Component } from '@angular/core';
import { ThemeService } from '../../../service/theme/theme.service';
import { DarkLightSettings, ThemeColorSettings } from '../../../util/constant';

@Component( {
  selector: 'app-edit-theme',
  templateUrl: './edit-theme.component.html',
  styleUrls: [ './edit-theme.component.scss' ]
} )
export class EditThemeComponent {

  darkLightSetting: string;
  themeColorSetting: string;

  loading = false;

  DarkLightSettings = DarkLightSettings;
  ThemeColorSettings = ThemeColorSettings;

  themeColorSettingsList = [];

  constructor( public themeService: ThemeService ) {

    this.themeService.darkLightSetting.subscribe( darkLightSetting => {
      this.darkLightSetting = darkLightSetting;
    } );

    this.themeService.themeColorSetting.subscribe( themeColorSetting => {
      this.themeColorSetting = themeColorSetting;
    } );

    for ( const key in ThemeColorSettings ) {
      if ( ThemeColorSettings.hasOwnProperty( key ) ) {
        this.themeColorSettingsList.push(ThemeColorSettings[key]);
      }
    }
  }

  setDarkLightSetting( darkLightSetting: string ) {
    this.themeService.setDarkLightSetting( darkLightSetting );
  }

  setThemeColorSetting( themeColorSetting: string ) {
    this.themeService.setThemeColorSetting( themeColorSetting );
  }
}
