import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Activity } from '../../../model/activity/activity.model';

@Component( {
  selector: 'app-activity-history-card',
  templateUrl: './activity-history-card.component.html',
  styleUrls: [ './activity-history-card.component.scss' ]
} )
export class ActivityHistoryCardComponent implements OnChanges {

  @Input() title: string;
  @Input() activities: Activity[] = [];

  activitySumByDate: Map<string, number> = new Map();

  days;

  constructor() {
    this.days = Array( 365 );
  }

  getChartItemClass( numberOfActivities?: number ) {
    if ( !numberOfActivities ) {
      return '';
    } else if ( numberOfActivities >= 5 ) {
      return 'level-4';
    } else if ( numberOfActivities >= 4 ) {
      return 'level-3';
    } else if ( numberOfActivities >= 2 ) {
      return 'level-2';
    } else if ( numberOfActivities >= 1 ) {
      return 'level-1';
    }
  }


  ngOnChanges( changes: SimpleChanges ): void {
    this.activitySumByDate = new Map();
    this.days = new Array( 365 );

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
}
