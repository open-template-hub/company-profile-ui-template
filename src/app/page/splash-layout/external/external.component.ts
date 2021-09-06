import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environmentCommon } from '../../../../environments/environment-common';
import { ThemeColorSettings, URLS } from '../../../data/constant';
import { ThemeService } from '../../../service/theme/theme.service';

@Component( {
  selector: 'app-external',
  templateUrl: './external.component.html',
  styleUrls: [ './external.component.scss' ]
} )
export class ExternalComponent {

  href: any;
  info: string;
  website: any;

  brand = {
    brandLogo: '',
  };

  ThemeColorSettings = ThemeColorSettings;
  URLS = URLS;

  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private themeService: ThemeService
  ) {
    this.website = {
      logo: './assets/common/globe.png'
    };

    this.brand = this.themeService.brand;

    this.route.queryParams.subscribe( params => {
      this.href = params.href;
      this.info = params.info;

      for ( const key in environmentCommon.website ) {
        if ( this.href.startsWith( environmentCommon.website[ key ].url ) ) {
          this.website = environmentCommon.website[ key ];
          break;
        }
      }
    } );
  }

  redirect() {
    window.location.href = this.href;
  }
}
