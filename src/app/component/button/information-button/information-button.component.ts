import { Component, Input } from '@angular/core';
import { INFORMATION_TYPES } from '../../../data/constant';

@Component( {
  selector: 'app-information-button',
  templateUrl: './information-button.component.html',
  styleUrls: [ './information-button.component.scss' ]
} )
export class InformationButtonComponent {

  INFORMATION_TYPES = INFORMATION_TYPES;

  @Input() informationType: any;
  @Input() text: string;

  constructor() {
    // Intentionally blank
  }
}
