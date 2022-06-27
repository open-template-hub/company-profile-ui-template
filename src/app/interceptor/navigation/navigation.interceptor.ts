import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, } from '@angular/router';
import { Observable } from 'rxjs';
import { NAVIGATIONS } from 'src/app/data/navigation/navigation.data';
import { SeoMetaData } from 'src/app/model/seo/seo.model';
import { SeoService } from 'src/app/service/seo/seo.service';
import { AnalyticsService } from '../../service/analytics/analytics.service';

@Injectable( {
  providedIn: 'root',
} )
export class NavigationInterceptor implements CanActivate {
  constructor( private seoService: SeoService, private analyticsService: AnalyticsService ) {
  }

  canActivate(
      _next: ActivatedRouteSnapshot,
      state: RouterStateSnapshot
  ):
      | Observable<boolean | UrlTree>
      | Promise<boolean | UrlTree>
      | boolean
      | UrlTree {
    const navObj = this.getObjectByUrl( state.url );
    if ( navObj && navObj.title ) {
      const seoMetaData = {
        title: navObj.title,
        description: navObj.description,
        keywords: navObj.keywords,
        robots: navObj.keywords,
      } as SeoMetaData;
      this.seoService.setMetaData( seoMetaData );
      this.analyticsService.logEvent( 'Route', navObj );
    }

    return true;
  }

  getObjectByUrl = ( url: string ) => {
    const moduleName = url.substring( url.lastIndexOf( '/' ) + 1 );
    const key = Object.keys( NAVIGATIONS ).find(
        ( k: string ) => NAVIGATIONS[ k ].url === moduleName
    );
    return NAVIGATIONS[ key ];
  };
}
