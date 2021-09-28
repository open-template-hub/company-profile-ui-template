import { Component, Input } from '@angular/core';

@Component( {
  selector: 'app-presentation-card',
  templateUrl: './presentation-card.component.html',
  styleUrls: [ './presentation-card.component.scss' ]
} )
export class PresentationCardComponent {

  @Input() href: string;
  @Input() internalLink: string;
  @Input() src: string;
  @Input() title: string;
  @Input() secondaryText: string;
  @Input() footerText: string;
  @Input() presentationItemClass: string;
  @Input() imgHeight: number;

  constructor() {
    // Intentionally blank
  }
}
