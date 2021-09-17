import { Component } from '@angular/core';
import { MonitoringService } from '../../../service/monitoring/monitoring.service';

@Component( {
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: [ './status.component.scss' ]
} )
export class StatusComponent {

  systemStatus = {
    overall: '',
    statuses: [],
    checkDate: undefined
  };

  Object = Object;

  constructor( private monitoringService: MonitoringService ) {
    this.monitoringService.statuses.subscribe( statuses => {
      for ( status in statuses ) {
        if ( statuses[ status ] ) {
          const alive = statuses[ status ];
          this.systemStatus.statuses.push( {
            name: status.split( /(?=[A-Z])/ ).join( ' ' ),
            alive
          } );

          if ( alive === 'DOWN' ) {
            this.systemStatus.overall = alive;
          }
        }
      }

      if ( this.systemStatus.overall !== 'DOWN') {
        this.systemStatus.overall = 'UP';
      }

      this.systemStatus.checkDate = new Date();
    } );
  }
}
