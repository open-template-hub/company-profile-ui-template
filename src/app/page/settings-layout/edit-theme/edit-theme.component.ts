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

  constructor( public themeService: ThemeService ) {

    this.themeService.darkLightSetting.subscribe( darkLightSetting => {
      this.darkLightSetting = darkLightSetting;
    } );

    this.themeService.themeColorSetting.subscribe( themeColorSetting => {
      this.themeColorSetting = themeColorSetting;
    } );
  }

  setDarkLightSetting( darkLightSetting: string ) {
    this.themeService.setDarkLightSetting( darkLightSetting );
  }

  setThemeColorSetting( themeColorSetting: string ) {
    this.themeService.setThemeColorSetting( themeColorSetting );
  }
}
