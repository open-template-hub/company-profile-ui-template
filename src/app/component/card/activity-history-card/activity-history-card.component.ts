import { Component, Input, OnInit } from '@angular/core';
import { Activity } from '../../../model/activity/activity.model';

@Component( {
  selector: 'app-activity-history-card',
  templateUrl: './activity-history-card.component.html',
  styleUrls: [ './activity-history-card.component.scss' ]
} )
export class ActivityHistoryCardComponent implements OnInit {

  @Input() title: string;
  @Input() activities: Activity[] = [];

  activitySumByDate: Map<string, number> = new Map();

  weeks;
  days;

  constructor() {
    this.days = Array( 365 );
  }

  ngOnInit(): void {
    const today = new Date( new Date().toISOString().split( 'T' )[ 0 ] );

    for ( const activity of this.activities ) {
      const dateStr = activity.date.toISOString().split( 'T' )[ 0 ];
      if ( this.activitySumByDate.has( dateStr ) ) {
        this.activitySumByDate.set( dateStr, this.activitySumByDate.get( dateStr ) + 1 );
      } else {
        this.activitySumByDate.set( dateStr, 1 );
      }
    }

    for ( const activitySum of this.activitySumByDate ) {

      const activityDate = activitySum[ 0 ];

      const diff = Math.abs( today.getTime() - new Date( activityDate ).getTime() );
      const diffDays = Math.ceil( diff / ( 1000 * 3600 * 24 ) );

      this.days[ 364 - diffDays ] = activitySum[ 1 ];
    }
  }

  getDayClass( numberOfActivity?: number ) {
    if ( !numberOfActivity ) {
      return '';
    } else if ( numberOfActivity >= 50 ) {
      return 'number-of-activity-4';
    } else if ( numberOfActivity >= 20 ) {
      return 'number-of-activity-3';
    } else if ( numberOfActivity >= 5 ) {
      return 'number-of-activity-2';
    } else if ( numberOfActivity >= 0 ) {
      return 'number-of-activity-1';
    }
  }
}
