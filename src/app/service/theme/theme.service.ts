import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { version } from '../../../environments/version';

@Injectable( {
  providedIn: 'root'
} )
export class ThemeService {

  public appVersion = '1.0.0';

  public darkLightSetting: Observable<string>;
  public themeColorSetting: Observable<string>;
  public sideNavClosed: Observable<string>;

  private darkLightSettingSubject: BehaviorSubject<string>;
  private themeColorSettingSubject: BehaviorSubject<string>;
  private sideNavClosedSubject: BehaviorSubject<string>;

  public brand = {
    brandLogo: ''
  };

  private maxAspectRatioMedia;
  private maxHeightMedia;

  colors = [
    '--brand-color',
    '--brand-color-lighter-1',
    '--brand-color-lighter-2',
    '--brand-color-lighter-3',
    '--brand-color-lighter-4',
    '--brand-color-lighter-5',
    '--brand-color-lighter-6',
    '--brand-color-lighter-7',
    '--brand-color-lighter-8',
    '--brand-color-lighter-9'
  ];

  constructor() {
    let themeColorSettingStorageItem = localStorage.getItem( 'themeColorSetting' ) ?
        localStorage.getItem( 'themeColorSetting' ) : sessionStorage.getItem( 'themeColorSetting' );
    themeColorSettingStorageItem = themeColorSettingStorageItem ? themeColorSettingStorageItem : 'auto';

    this.themeColorSettingSubject = new BehaviorSubject<string>( themeColorSettingStorageItem);
    this.themeColorSetting = this.themeColorSettingSubject.asObservable();

    let darkLightSettingStorageItem = localStorage.getItem( 'darkLightSetting' ) ?
        localStorage.getItem( 'darkLightSetting' ) : sessionStorage.getItem( 'darkLightSetting' );
    darkLightSettingStorageItem = darkLightSettingStorageItem ? darkLightSettingStorageItem : 'auto';

    this.darkLightSettingSubject = new BehaviorSubject<string>(darkLightSettingStorageItem);
    this.darkLightSetting = this.darkLightSettingSubject.asObservable();

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
    this.brand.brandLogo = './assets/production/brand-logo.png';

    if ( version ) {
      this.appVersion = version;
    }
  }

  setDarkLightSetting( darkLightSetting: string ) {
    if ( localStorage.getItem( 'currentUser' ) ) {
      sessionStorage.removeItem( 'darkLightSetting' );
      localStorage.setItem( 'darkLightSetting', darkLightSetting );
    } else {
      sessionStorage.setItem( 'darkLightSetting', darkLightSetting );
    }
    this.darkLightSettingSubject.next( darkLightSetting );
  }

  setThemeColorSetting( themeColorSetting: string ) {
    if ( localStorage.getItem( 'currentUser' ) ) {
      sessionStorage.removeItem( 'themeColorSetting' );
      localStorage.setItem( 'themeColorSetting', themeColorSetting );
    } else {
      sessionStorage.setItem( 'themeColorSetting', themeColorSetting );
    }
    this.themeColorSettingSubject.next( themeColorSetting );
  }

  initSideNavClosed( sideNavClosePreferred: boolean ) {
    const sideNavClosedStorageItem = sideNavClosePreferred ? 'true' : 'false';

    if ( localStorage.getItem( 'currentUser' ) ) {
      sessionStorage.removeItem( 'sideNavClosed' );
      localStorage.setItem( 'sideNavClosed', sideNavClosedStorageItem );
    } else {
      sessionStorage.setItem( 'sideNavClosed', sideNavClosedStorageItem );
    }
    this.sideNavClosedSubject.next( sideNavClosedStorageItem );
  }

  toggleSideNav() {
    const sideNavClosedStorageItem = localStorage.getItem( 'sideNavClosed' ) ?
        localStorage.getItem( 'sideNavClosed' ) : sessionStorage.getItem( 'sideNavClosed' );
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
      localStorage.removeItem( 'darkLightSetting' );
      localStorage.removeItem( 'themeColorSetting' );
      localStorage.removeItem( 'sideNavClosed' );
    }
    sessionStorage.removeItem( 'darkLightSetting' );
    sessionStorage.removeItem( 'themeColorSetting' );
    sessionStorage.removeItem( 'sideNavClosed' );

    this.darkLightSettingSubject.next( 'auto' );
    this.themeColorSettingSubject.next( 'default' );
    this.sideNavClosedSubject.next( 'false' );
  }
}
