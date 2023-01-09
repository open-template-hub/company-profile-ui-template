import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import mixpanel from 'mixpanel-browser';
import { environment } from '../../../environments/environment';

@Injectable( {
  providedIn: 'root',
} )
export class AnalyticsService {

  mixpanelEnabled = false;

  constructor( private http: HttpClient ) {

    if ( environment.analytics.mixPanel.tag ) {
      mixpanel.init( environment.analytics.mixPanel.tag );
      this.mixpanelEnabled = true;
    }
  }

  logEvent( event: string, attributes: any ) {
    if ( this.mixpanelEnabled ) {
      mixpanel.track( event, attributes );
    } else {
      console.log( 'Event: ', event, attributes );
    }
  }

  getSystemInfo( key: string ) {
    return this.http.get<any>( `${ environment.serverUrl }/analytics/system-info?key=${ key }` );
  }
}
