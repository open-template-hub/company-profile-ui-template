import { Component, Input } from '@angular/core';

@Component( {
  selector: 'app-led',
  templateUrl: './led.component.html',
  styleUrls: [ './led.component.scss' ]
} )
export class LedComponent {

  @Input() informationType = '';

  constructor() {
    // Intentionally blank
  }
}
