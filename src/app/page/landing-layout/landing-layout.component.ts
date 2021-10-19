import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ThemeDesignSettings } from '../../data/constant';
import { LoadingService } from '../../service/loading/loading.service';
import { ThemeService } from '../../service/theme/theme.service';

@Component( {
  selector: 'app-landing-layout',
  templateUrl: './landing-layout.component.html',
  styleUrls: [ './landing-layout.component.scss' ]
} )
export class LandingLayoutComponent {

  loading = false;

  themeDesignSetting;

  ThemeDesignSettings = ThemeDesignSettings;

  constructor( private loadingService: LoadingService, private themeService: ThemeService, private route: ActivatedRoute, ) {

    this.loadingService.sharedLoading.subscribe( loading => this.loading = loading );

    if ( this.route.snapshot.data.customTopSvgDesign ) {
      this.themeService.themeDesignSetting.subscribe( themeDesignSetting => this.themeDesignSetting = themeDesignSetting );
    }
  }
}
