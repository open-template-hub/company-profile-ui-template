import { Injectable } from '@angular/core';

@Injectable( {
  providedIn: 'root',
} )
export class UtilService {
  constructor() {
    // Intentionally blank
  }

  isTouchDevice() {
    return ( ( 'ontouchstart' in window ) ||
        ( navigator.maxTouchPoints > 0 ) );
  }

  isSmallScreen() {
    return window.matchMedia && window.matchMedia( '(max-width: 999px)' ).matches;
  }

  delay( ms: number ) {
    return new Promise( ( resolve ) => setTimeout( resolve, ms ) );
  }

  formatDate = ( date ) => {
    const d = new Date( date );
    const year = d.getFullYear();
    let month = '' + ( d.getMonth() + 1 );
    let day = '' + d.getDate();

    if ( month.length < 2 ) {
      month = '0' + month;
    }

    if ( day.length < 2 ) {
      day = '0' + day;
    }

    return [ year, month, day ].join( '-' );
  };

  corsRequest = ( uri: string ) => {
    return new Promise( ( resolve, reject ) => {
      const xmlHttpRequest = new XMLHttpRequest();
      xmlHttpRequest.onreadystatechange = function () {
        if ( this.readyState === 4 ) {
          if ( this.status === 200 )
            resolve( this.responseText );
          else
            reject( null );
        }
      };
      xmlHttpRequest.open( 'GET', uri );
      xmlHttpRequest.send();
    } );
  };
}
