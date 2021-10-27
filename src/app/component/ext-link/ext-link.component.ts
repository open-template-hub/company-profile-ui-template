import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { URLS } from '../../data/navigation/navigation.data';

@Component( {
  selector: 'app-ext-link',
  templateUrl: './ext-link.component.html',
  styleUrls: [ './ext-link.component.scss' ]
} )
export class ExtLinkComponent {

  @Input() href = environment.clientUrl;
  @Input() target = '_blank';
  @Input() rel = '';
  @Input() website = '';

  @Input() linkClass = '';

  URLS = URLS;

  constructor( private router: Router ) {
    // Intentionally blank
  }

  redirect() {
    if ( !this.href.startsWith( environment.clientUrl ) && this.target !== '_blank' ) {
      this.router.navigate( [ URLS.external ], {
        queryParams: {
          href: this.href,
          website: this.website,
          info: 'You are about to leave this website. Please remember, don\'t click on unknown links or download unverified software.'
        }
      } );
    } else {
      window.open( this.href, this.target );
    }
  }
}
