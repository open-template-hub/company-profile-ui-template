import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { version } from '../../../environments/version';

@Injectable( {
  providedIn: 'root'
} )
export class ThemeService {

  public darkTheme: Observable<string>;
  public sideNavClosed: Observable<string>;
  public brand = {
    brandLogo: ''
  };
  public appVersion = '1.0.0';
  private darkThemeSubject: BehaviorSubject<string>;
  private sideNavClosedSubject: BehaviorSubject<string>;
  private maxAspectRatioMedia;
  private maxHeightMedia;

  colors = [
    '--brand-color',
    '--brand-color-v1',
    '--brand-color-v2',
    '--brand-color-v3',
    '--brand-color-v4'
  ]

  constructor() {
    let darkThemeStorageItem = localStorage.getItem( 'darkTheme' ) ? localStorage.getItem( 'darkTheme' ) : sessionStorage.getItem( 'darkTheme' );
    darkThemeStorageItem = darkThemeStorageItem ? darkThemeStorageItem : 'false';

    this.darkThemeSubject = new BehaviorSubject<string>( darkThemeStorageItem );
    this.darkTheme = this.darkThemeSubject.asObservable();

    this.maxAspectRatioMedia = window.matchMedia( 'screen and (max-aspect-ratio: 1/1)' );
    this.maxHeightMedia = window.matchMedia( 'screen and (max-height: 999px)' );

    let sideNavClosedStorageItem: string
    if ( this.maxAspectRatioMedia || this.maxHeightMedia.matches ) {
      sideNavClosedStorageItem = 'true'
    } else {
      sideNavClosedStorageItem = 'false'
    }

    if ( localStorage.getItem( 'currentUser' ) ) {
      sessionStorage.removeItem( 'sideNavClosed' );
      localStorage.setItem( 'sideNavClosed', sideNavClosedStorageItem );
    } else {
      sessionStorage.setItem( 'sideNavClosed', sideNavClosedStorageItem );
    }

    this.sideNavClosedSubject = new BehaviorSubject<string>( sideNavClosedStorageItem );
    this.sideNavClosed = this.sideNavClosedSubject.asObservable();
    this.brand.brandLogo = './assets/' + environment.identity + '/brand-logo.png';

    if ( version ) {
      this.appVersion = version;
    }
  }

  initTheme( darkThemePreferred: boolean ) {
    const darkThemePreferredStorageItem = darkThemePreferred ? 'true' : 'false';

    if ( localStorage.getItem( 'currentUser' ) ) {
      sessionStorage.removeItem( 'darkTheme' );
      localStorage.setItem( 'darkTheme', darkThemePreferredStorageItem );
    } else {
      sessionStorage.setItem( 'darkTheme', darkThemePreferredStorageItem );
    }
    this.darkThemeSubject.next( darkThemePreferredStorageItem );
  }

  initSideNavClosed( sideNavClosePreferred: boolean ) {
    const sideNavClosedStorageItem = sideNavClosePreferred ? 'true' : 'false';

    if ( localStorage.getItem( 'currentUser' ) ) {
      sessionStorage.removeItem( 'sideNavClosed' );
      localStorage.setItem( 'sideNavClosed', sideNavClosedStorageItem );
    } else {
      sessionStorage.setItem( 'sideNavClosed', sideNavClosedStorageItem );
    }
    this.darkThemeSubject.next( sideNavClosedStorageItem );
  }

  switchDarkTheme() {
    const darkThemeStorageItem = localStorage.getItem( 'darkTheme' ) ?
      localStorage.getItem( 'darkTheme' ) : sessionStorage.getItem( 'darkTheme' );
    const switchedTheme = darkThemeStorageItem === 'true' ? 'false' : 'true';

    if ( localStorage.getItem( 'currentUser' ) ) {
      sessionStorage.removeItem( 'darkTheme' );
      localStorage.setItem( 'darkTheme', switchedTheme );
    } else {
      sessionStorage.setItem( 'darkTheme', switchedTheme );
    }

    this.darkThemeSubject.next( switchedTheme );
  }

  toggleSideNav() {
    const sideNavClosedStorageItem = localStorage.getItem( 'sideNavClosed' ) ? localStorage.getItem( 'sideNavClosed' ) : sessionStorage.getItem( 'sideNavClosed' );
    const toggledSideNavClosed = sideNavClosedStorageItem === 'true' ? 'false' : 'true';

    if ( localStorage.getItem( 'currentUser' ) ) {
      sessionStorage.removeItem( 'sideNavClosed' );
      localStorage.setItem( 'sideNavClosed', toggledSideNavClosed );
    } else {
      sessionStorage.setItem( 'sideNavClosed', toggledSideNavClosed );
    }

    this.sideNavClosedSubject.next( toggledSideNavClosed );

  }

  logout() {
    if ( localStorage.getItem( 'currentUser' ) ) {
      localStorage.removeItem( 'darkTheme' );
      localStorage.removeItem( 'sideNavClosed' );
    }
    sessionStorage.removeItem( 'darkTheme' );
    sessionStorage.removeItem( 'sideNavClosed' );

    this.darkThemeSubject.next( 'false' );
    this.sideNavClosedSubject.next( 'false' );
  }
}
