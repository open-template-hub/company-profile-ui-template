import { Component } from '@angular/core';
import { ThemeService } from './service/theme/theme.service';

@Component( {
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
} )
export class AppComponent {

  darkTheme: string;

  constructor(private themeService: ThemeService) {
    const head = document.getElementsByTagName( 'head' )[ 0 ];
    const links = head.getElementsByTagName( 'link' );
    for ( let i = 0; i < links.length; ++i ) {
      const link = links.item( i );
      if ( link.rel && link.rel === 'apple-touch-icon' ) {
        link.href = link.href + '?v=' + ( new Date() ).getTime();
      }
    }

    this.themeService.darkTheme.subscribe( darkTheme => {
      this.darkTheme = darkTheme;
    } );
  }
}
