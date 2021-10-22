import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { DEFAULT_SYSTEM_STATUS } from '../../../data/status/status.data';
import { MonitoringService } from '../../../service/monitoring/monitoring.service';

@Component( {
  selector: 'app-status-page',
  templateUrl: './status-page.component.html',
  styleUrls: [ './status-page.component.scss' ]
} )
export class StatusPageComponent {

  overallSystemStatus = DEFAULT_SYSTEM_STATUS;

  constructor( private monitoringService: MonitoringService ) {
    this.monitoringService.alive();

    this.monitoringService.systemStatuses.subscribe( systemStatuses => {
      if ( !systemStatuses ) {
        return;
      } else if ( systemStatuses instanceof HttpErrorResponse && systemStatuses.statusText === 'Unknown Error' ) {
        this.overallSystemStatus = DEFAULT_SYSTEM_STATUS;
        this.overallSystemStatus.checkDate = new Date();
        this.overallSystemStatus.overall = 'WARN';

        for ( const systemStatus of this.overallSystemStatus.systemStatuses ) {
          systemStatus.overall = 'WARN';
          for ( const status of systemStatus.statuses ) {
            status.alive = 'WARN';
          }
        }
        return;
      }

      this.overallSystemStatus = {
        systemStatuses: [],
        overall: '',
        checkDate: undefined
      };

      for ( const systemStatusKey in systemStatuses ) {
        if ( !systemStatuses[ systemStatusKey ] ) {
          continue;
        }

        const systemStatus = {
          name: systemStatusKey,
          overall: '',
          statuses: []
        };

        for ( const status in systemStatuses[ systemStatusKey ] ) {
          if ( !systemStatuses[ systemStatusKey ][ status ] ) {
            continue;
          }

          let name = status[ 0 ].toUpperCase();

          if ( status.length > 1 ) {
            name += status.substring( 1 ).split( /(?=[A-Z])/ ).join( ' ' );
          }

          systemStatus.statuses.push( {
            name,
            alive: systemStatuses[ systemStatusKey ][ status ].alive
          } );

          if ( systemStatuses[ systemStatusKey ][ status ].alive !== 'UP' ) {
            systemStatus.overall = systemStatuses[ systemStatusKey ][ status ].alive;
            this.overallSystemStatus.overall = systemStatuses[ systemStatusKey ][ status ].alive;
          }
        }
        if ( !systemStatus.overall ) {
          systemStatus.overall = 'UP';
        }

        this.overallSystemStatus.systemStatuses.push( systemStatus );
      }

      if ( !this.overallSystemStatus.overall ) {
        this.overallSystemStatus.overall = 'UP';
      }

      this.overallSystemStatus.checkDate = new Date();
    } );
  }
}
