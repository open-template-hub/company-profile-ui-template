import { Component, Input } from '@angular/core';

@Component( {
  selector: 'app-presentation-card',
  templateUrl: './presentation-card.component.html',
  styleUrls: [ './presentation-card.component.scss' ]
} )
export class PresentationCardComponent {

  @Input() href: string;
  @Input() src: string;
  @Input() text: string;
  @Input() secondaryText: string;
  @Input() presentationItemClass: string;
  @Input() imgHeight: number;

  constructor() {
  }
}
