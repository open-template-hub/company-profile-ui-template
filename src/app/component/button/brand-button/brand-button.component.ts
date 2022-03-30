import { Component, Input } from '@angular/core';

@Component( {
  selector: 'app-brand-button',
  templateUrl: './brand-button.component.html',
  styleUrls: [ './brand-button.component.scss' ]
} )
export class BrandButtonComponent {

  @Input() icon: string;
  @Input() text: string;

  @Input() disabled = false;

  constructor() {
    // Intentionally blank
  }
}
