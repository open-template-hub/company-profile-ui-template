import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component( {
  selector: 'app-asset-card',
  templateUrl: './asset-card.component.html',
  styleUrls: [ './asset-card.component.scss' ]
} )
export class AssetCardComponent {

  @Input() href: string = undefined;
  @Input() src: string;
  @Input() title: string;
  @Input() secondaryText: string;
  @Input() footerText: string;
  @Input() assetItemClass: string;
  @Input() imgHeight: number;

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
