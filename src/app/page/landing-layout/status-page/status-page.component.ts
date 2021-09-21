import { Component } from '@angular/core';
import { MonitoringService } from '../../../service/monitoring/monitoring.service';

@Component( {
  selector: 'app-status-page',
  templateUrl: './status-page.component.html',
  styleUrls: [ './status-page.component.scss' ]
} )
export class StatusPageComponent {

  overallSystemStatus = {
    systemStatuses: [],
    overall: '',
    checkDate: undefined
  };

  Object = Object;

  constructor( private monitoringService: MonitoringService ) {
    this.monitoringService.alive();

    this.monitoringService.systemStatuses.subscribe( systemStatuses => {
      if ( !systemStatuses ) {
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

          systemStatus.statuses.push( {
            name: status.split( /(?=[A-Z])/ ).join( ' ' ),
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
