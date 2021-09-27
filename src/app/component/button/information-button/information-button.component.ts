import { Component, Input } from '@angular/core';

@Component( {
  selector: 'app-information-button',
  templateUrl: './information-button.component.html',
  styleUrls: [ './information-button.component.scss' ]
} )
export class InformationButtonComponent {

  @Input() informationType: any;
  @Input() text: string;

  constructor() {
    // Intentionally blank
  }
}
