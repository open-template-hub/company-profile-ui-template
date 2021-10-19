import { Component } from '@angular/core';
import { DEFAULT_THEME, ThemeDesignSettings } from '../../data/constant';
import { LoadingService } from '../../service/loading/loading.service';
import { ThemeService } from '../../service/theme/theme.service';

@Component( {
  selector: 'app-landing-layout',
  templateUrl: './landing-layout.component.html',
  styleUrls: [ './landing-layout.component.scss' ]
} )
export class LandingLayoutComponent {

  loading = false;

  private DEFAULT_SVG_PATH = 'M 0,240 1000,110 V 0 H 0 Z';

  topSvgPath = this.DEFAULT_SVG_PATH;

  constructor( private loadingService: LoadingService, private themeService: ThemeService ) {

    this.loadingService.sharedLoading.subscribe( loading => this.loading = loading );

    this.themeService.themeDesignSetting.subscribe( themeDesignSetting => this.setDesign( themeDesignSetting ) );
  }

  private setDesign( themeDesignSetting: string ) {

    switch ( themeDesignSetting ) {
      case ThemeDesignSettings.sharp :
        this.topSvgPath = this.DEFAULT_SVG_PATH;
        break;
      case ThemeDesignSettings.leaf :
        this.topSvgPath = this.DEFAULT_SVG_PATH;
        break;
      case ThemeDesignSettings.counterBorders :
        this.topSvgPath = this.DEFAULT_SVG_PATH;
        break;
      case ThemeDesignSettings.round :
        this.topSvgPath = this.DEFAULT_SVG_PATH;
        break;
      case DEFAULT_THEME :
      default : {
        this.topSvgPath = this.DEFAULT_SVG_PATH;
        break;
      }
    }
  }
}
