import { Component, Input } from '@angular/core';

@Component( {
  selector: 'app-status-card',
  templateUrl: './status-card.component.html',
  styleUrls: [ './status-card.component.scss' ]
} )
export class StatusCardComponent {

  @Input() overallSystemStatus = {
    systemStatuses: [],
    overall: '',
    checkDate: undefined
  };

  constructor() {
    // Intentionally blank
  }
}
