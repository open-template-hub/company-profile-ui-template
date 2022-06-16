import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import mixpanel from 'mixpanel-browser';

@Injectable( {
  providedIn: 'root',
} )
export class AnalyticsService {
  constructor() {
    mixpanel.init( environment.analytics.mixPanel.tag );
  }

  logEvent( event: string, attributes: any ) {
    if (mixpanel) {
      mixpanel.track( event, attributes );
    }
  }
}
