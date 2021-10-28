import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environmentCommon } from '../../../../environments/environment-common';
import { BRAND } from '../../../data/brand/brand.data';
import { URLS } from '../../../data/navigation/navigation.data';
import { ThemeColorSettings } from '../../../data/theme/theme.data';

@Component( {
  selector: 'app-external-redirect-page',
  templateUrl: './external-redirect-page.component.html',
  styleUrls: [ './external-redirect-page.component.scss' ],
} )
export class ExternalRedirectPageComponent {

  href: any;
  info: string;
  website: any;
  error = false;

  BRAND = BRAND;

  ThemeColorSettings = ThemeColorSettings;
  URLS = URLS;

  constructor( private route: ActivatedRoute, private router: Router ) {
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

  getRedirectText(error: boolean): string {
    return !error ? $localize `:@@externalRedirect.redirected:Will be redirected to: `
      :  $localize `:@@externalRedirect.linkBroken:Looks like the link is broken: `
  }
}
