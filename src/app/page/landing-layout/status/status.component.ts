import { Component } from '@angular/core';
import { MonitoringService } from '../../../service/monitoring/monitoring.service';

@Component( {
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: [ './status.component.scss' ]
} )
export class StatusComponent {

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
        this.overallSystemStatus.systemStatuses.push( systemStatus );
      }

      if ( !this.overallSystemStatus.overall ) {
        this.overallSystemStatus.overall = 'UP';
      }

      this.overallSystemStatus.checkDate = new Date();
      console.log( this.overallSystemStatus );
    } );
  }
}
