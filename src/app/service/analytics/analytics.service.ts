import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import mixpanel from 'mixpanel-browser';

@Injectable( {
  providedIn: 'root',
} )
export class AnalyticsService {

  mixpanelEnabled = false;

  constructor() {
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
}
