import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import mixpanel from 'mixpanel-browser';

@Injectable( {
  providedIn: 'root',
} )
export class AnalyticsService {
  constructor() {
    if ( environment.analytics.mixPanel.tag ) {
      mixpanel.init( environment.analytics.mixPanel.tag, { debug: true } );
    }
  }

  logEvent( event: string, attributes: any ) {
    mixpanel.track( event, attributes );
  }
}
