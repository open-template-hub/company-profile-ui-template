import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component( {
  selector: 'app-presentation-card',
  templateUrl: './presentation-card.component.html',
  styleUrls: [ './presentation-card.component.scss' ]
} )
export class PresentationCardComponent {

  @Input() href: string = undefined;
  @Input() src: string;
  @Input() title: string;
  @Input() secondaryText: string;
  @Input() footerText: string;
  @Input() imgHeight: number;
  @Input() maintenance = false;

  constructor( private router: Router ) {
    // Intentionally blank
  }

  redirect() {
    if ( !this.href ) {
      return;
    }

    if ( this.href.startsWith( '/' ) ) {
      this.router.navigate( [ this.href ] ).then( () => {
        return true;
      } );
    } else {
      window.open( this.href, '_blank' );
    }
  }
}
