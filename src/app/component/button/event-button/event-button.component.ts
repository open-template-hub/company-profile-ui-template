import { Component, Input } from '@angular/core';

@Component( {
  selector: 'app-event-button',
  templateUrl: './event-button.component.html',
  styleUrls: [ './event-button.component.scss' ]
} )
export class EventButtonComponent {
  eventTypes = {
    drop: 'lighter-contrast-border-color lighter-contrast-font-color transparent-button',
    attended: 'whitesmoke-font-color theme-color-lighter-4-background-color no-shadow-box',
    completed: 'whitesmoke-font-color theme-color-lighter-4-background-color no-shadow-box cursor-not-allowed',
    inProgress: 'whitesmoke-font-color cursor-not-allowed'
  };

  @Input() icon: string;
  @Input() text: string;
  @Input() eventType: string;

  constructor() {
    // Intentionally blank
  }
}
