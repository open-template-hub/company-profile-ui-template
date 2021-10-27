import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { version } from '../../../environments/version';
import { DarkLightSettings, DEFAULT_THEME } from '../../data/theme/theme.data';

@Injectable( {
  providedIn: 'root'
} )
export class ThemeService {

  public appVersion = '1.0.0';
  public darkLightSetting: Observable<string>;
  public themeColorSetting: Observable<string>;
  public themeDesignSetting: Observable<string>;
  public sideNavClosed: Observable<string>;

  private darkLightSettingSubject: BehaviorSubject<string>;
  private themeColorSettingSubject: BehaviorSubject<string>;
  private themeDesignSettingSubject: BehaviorSubject<string>;
  private sideNavClosedSubject: BehaviorSubject<string>;

  constructor() {
    let themeColorSettingStorageItem = localStorage.getItem( 'themeColorSetting' ) ?
        localStorage.getItem( 'themeColorSetting' ) : sessionStorage.getItem( 'themeColorSetting' );
    themeColorSettingStorageItem = themeColorSettingStorageItem ? themeColorSettingStorageItem : DEFAULT_THEME;

    this.themeColorSettingSubject = new BehaviorSubject<string>( themeColorSettingStorageItem );
    this.themeColorSetting = this.themeColorSettingSubject.asObservable();

    let themeDesignSettingStorageItem = localStorage.getItem( 'themeDesignSetting' ) ?
        localStorage.getItem( 'themeDesignSetting' ) : sessionStorage.getItem( 'themeDesignSetting' );
    themeDesignSettingStorageItem = themeDesignSettingStorageItem ? themeDesignSettingStorageItem : DEFAULT_THEME;

    this.themeDesignSettingSubject = new BehaviorSubject<string>( themeDesignSettingStorageItem );
    this.themeDesignSetting = this.themeDesignSettingSubject.asObservable();

    let darkLightSettingStorageItem = localStorage.getItem( 'darkLightSetting' ) ?
        localStorage.getItem( 'darkLightSetting' ) : sessionStorage.getItem( 'darkLightSetting' );
    darkLightSettingStorageItem = darkLightSettingStorageItem ? darkLightSettingStorageItem : 'auto';

    this.darkLightSettingSubject = new BehaviorSubject<string>( darkLightSettingStorageItem );
    this.darkLightSetting = this.darkLightSettingSubject.asObservable();

    let sideNavClosedStorageItem = localStorage.getItem( 'sideNavClosed' ) ?
        localStorage.getItem( 'sideNavClosed' ) : sessionStorage.getItem( 'sideNavClosed' );
    sideNavClosedStorageItem = sideNavClosedStorageItem ? sideNavClosedStorageItem : 'auto';

    this.sideNavClosedSubject = new BehaviorSubject<string>( sideNavClosedStorageItem );
    this.sideNavClosed = this.sideNavClosedSubject.asObservable();

    this.sideNavClosedSubject = new BehaviorSubject<string>( sideNavClosedStorageItem );
    this.sideNavClosed = this.sideNavClosedSubject.asObservable();

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

  setThemeDesignSetting( themeDesignSetting: string ) {
    if ( localStorage.getItem( 'currentUser' ) ) {
      sessionStorage.removeItem( 'themeDesignSetting' );
      localStorage.setItem( 'themeDesignSetting', themeDesignSetting );
    } else {
      sessionStorage.setItem( 'themeDesignSetting', themeDesignSetting );
    }
    this.themeDesignSettingSubject.next( themeDesignSetting );
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

  selectDarkLightByCSS( light: string, dark: string ) {
    return window.matchMedia && window.matchMedia( '(prefers-color-scheme: dark)' ).matches ? dark : light;
  }

  logout() {
    if ( localStorage.getItem( 'currentUser' ) ) {
      localStorage.removeItem( 'darkLightSetting' );
      localStorage.removeItem( 'themeColorSetting' );
      localStorage.removeItem( 'themeDesignSetting' );
      localStorage.removeItem( 'sideNavClosed' );
    }
    sessionStorage.removeItem( 'darkLightSetting' );
    sessionStorage.removeItem( 'themeColorSetting' );
    sessionStorage.removeItem( 'themeDesignSetting' );
    sessionStorage.removeItem( 'sideNavClosed' );

    this.darkLightSettingSubject.next( DarkLightSettings.auto );
    this.themeColorSettingSubject.next( DEFAULT_THEME );
    this.themeDesignSettingSubject.next( DEFAULT_THEME );
    this.sideNavClosedSubject.next( 'false' );
  }
}
