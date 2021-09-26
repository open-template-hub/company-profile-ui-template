import { Component } from '@angular/core';
import { ButtonClass } from '../../../component/button/button.component';
import { DarkLightSettings, ThemeColorSettings } from '../../../data/constant';
import { ThemeService } from '../../../service/theme/theme.service';

@Component( {
  selector: 'app-edit-theme-page',
  templateUrl: './edit-theme-page.component.html',
  styleUrls: [ './edit-theme-page.component.scss' ]
} )
export class EditThemePageComponent {
  ButtonClass = ButtonClass

  darkLightSetting: string;
  themeColorSetting: string;

  loading = false;

  DarkLightSettings = DarkLightSettings;

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
        this.themeColorSettingsList.push( ThemeColorSettings[ key ] );
      }
    }
  }

  setDarkLightSetting( darkLightSetting: string ) {
    this.themeService.setDarkLightSetting( darkLightSetting );
  }

  setThemeColorSetting( themeColorSetting: string ) {
    this.themeService.setThemeColorSetting( themeColorSetting );
  }

  insertIf( condition: boolean, array: any[], element: any ) {
    return condition ? [ ...array, element ] : array
  }
}
