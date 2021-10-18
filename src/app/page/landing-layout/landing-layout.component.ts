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

  topSvgPath = 'M 0,240 1000,110 V 0 H 0 Z';

  constructor( private loadingService: LoadingService, private themeService: ThemeService ) {

    this.loadingService.sharedLoading.subscribe( loading => this.loading = loading );

    this.themeService.themeDesignSetting.subscribe( themeDesignSetting => this.setDesign( themeDesignSetting ) );
  }

  private setDesign( themeDesignSetting: string ) {

    switch ( themeDesignSetting ) {
      case ThemeDesignSettings.sharp : {
        this.topSvgPath = 'M 0,240 1000,110 V 0 H 0 Z';
        break;
      }
      case ThemeDesignSettings.leaf : {
        this.topSvgPath = 'm 320,200 c 313.8384,-42.50051 365.51464,-49.11691 680,-90 V 0 H 0 v 0 c 1.1136394,46.09311 20.88663,241.94628 320,200 z';
        break;
      }
      case ThemeDesignSettings.counterBorders :
      case ThemeDesignSettings.round :
      case DEFAULT_THEME :
      default : {
        this.topSvgPath = 'M 0,240 1000,110 V 0 H 0 Z';
        break;
      }
    }
  }
}
