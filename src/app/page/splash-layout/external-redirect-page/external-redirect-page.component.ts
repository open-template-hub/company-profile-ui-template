import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environmentCommon } from '../../../../environments/environment-common';
import { ButtonClass } from '../../../component/button/button.component';
import { ThemeColorSettings, URLS } from '../../../data/constant';
import { ThemeService } from '../../../service/theme/theme.service';

@Component( {
  selector: 'app-external-redirect-page',
  templateUrl: './external-redirect-page.component.html',
  styleUrls: [ './external-redirect-page.component.scss' ],
} )
export class ExternalRedirectPageComponent {
  buttonClasses = [ ButtonClass.green, ButtonClass.Transparent, ButtonClass.BorderAndFontByDefaultTheme ];

  href: any;
  info: string;
  website: any;
  error = false;

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
    this.brand = this.themeService.brand;

    this.route.queryParams.subscribe( ( params ) => {
      if ( !params.href ) {
        this.router.navigate( [ URLS.notFound ] );
      }

      this.href = params.href;
      this.info = params.info;

      for ( const key in environmentCommon.website ) {
        if ( this.href.startsWith( environmentCommon.website[ key ].url ) ) {
          this.website = environmentCommon.website[ key ];
          break;
        }
      }

      if ( !this.website ) {
        let url;

        try {
          url = new URL( this.href );

          const favicon =
              'https://www.google.com/s2/favicons?sz=64&domain=' + url.origin;

          this.website = {
            logo: favicon,
          };
        } catch ( e ) {
          console.error( 'Not valid URL', e );
          this.error = true;
        }
      }
    } );
  }

  redirect() {
    window.location.href = this.href;
  }
}
