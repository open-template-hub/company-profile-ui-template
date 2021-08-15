import { Component, OnInit } from '@angular/core';
import { URLS } from '../../../util/constant';

@Component( {
  selector: 'app-cookies',
  templateUrl: './cookie-popup.component.html',
  styleUrls: [ './cookie-popup.component.scss' ]
} )
export class CookiePopupComponent implements OnInit {

  accepted = false;

  public URLS = URLS;

  ngOnInit(): void {
    if ( localStorage.getItem( 'cookiesAccepted' ) ) {
      this.accepted = true;
    }
  }

  setAccepted() {
    this.accepted = true;
    if ( !localStorage.getItem( 'cookiesAccepted' ) ) {
      localStorage.setItem( 'cookiesAccepted', JSON.stringify( true ) );
    }
  }
}
