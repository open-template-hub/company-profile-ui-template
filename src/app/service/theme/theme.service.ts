import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { version } from '../../../environments/version';
import { DarkLightSettings, ThemeColorSettings } from '../../data/constant';

@Injectable( {
  providedIn: 'root'
} )
export class ThemeService {

  public appVersion = '1.0.0';
  public darkLightSetting: Observable<string>;
  public themeColorSetting: Observable<string>;
  public sideNavClosed: Observable<string>;
  public brand = {
    brandLogo: '',
    brandLogoBroken: '',
    brandLogoMerge: '',
    brandLogoMerged: '',
    wallpapers: [],
    badges: []
  };
  colors = [
    '--theme-color',
    '--theme-color-lighter-1',
    '--theme-color-lighter-2',
    '--theme-color-lighter-3',
    '--theme-color-lighter-4',
    '--theme-color-lighter-5',
    '--theme-color-lighter-6',
    '--theme-color-lighter-7',
    '--theme-color-lighter-8',
    '--theme-color-lighter-9',
    '--theme-color-darker-1',
    '--theme-color-darker-2',
    '--theme-color-darker-3',
    '--theme-color-darker-4',
    '--theme-color-darker-5',
    '--theme-color-darker-6',
    '--theme-color-darker-7',
    '--theme-color-darker-8',
    '--theme-color-darker-9'
  ];
  private darkLightSettingSubject: BehaviorSubject<string>;
  private themeColorSettingSubject: BehaviorSubject<string>;
  private sideNavClosedSubject: BehaviorSubject<string>;

  constructor() {
    let themeColorSettingStorageItem = localStorage.getItem( 'themeColorSetting' ) ?
        localStorage.getItem( 'themeColorSetting' ) : sessionStorage.getItem( 'themeColorSetting' );
    themeColorSettingStorageItem = themeColorSettingStorageItem ? themeColorSettingStorageItem : ThemeColorSettings.default;

    this.themeColorSettingSubject = new BehaviorSubject<string>( themeColorSettingStorageItem );
    this.themeColorSetting = this.themeColorSettingSubject.asObservable();

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

    this.brand.brandLogo = 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/min/logo/brand-logo.min.png';
    this.brand.brandLogoBroken = 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/min/logo/brand-logo-broken.png';
    this.brand.brandLogoMerge = 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/logo/brand-logo-merge.gif';
    this.brand.brandLogoMerged = 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/min/logo/brand-logo-merged.png';

    this.brand.badges.push( 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/min/badge/powered-by-light-mode.min.png' );
    this.brand.badges.push( 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/min/badge/powered-by-dark-mode.min.png' );

    this.brand.wallpapers.push( 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/min/wallpaper/logo-text-v-color.min.png' );
    this.brand.wallpapers.push( 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/min/wallpaper/logo-text-v-light.min.png' );
    this.brand.wallpapers.push( 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/min/wallpaper/logo-text-v-dark.min.png' );

    this.brand.wallpapers.push( 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/min/wallpaper/oth-packages-color.min.png' );
    this.brand.wallpapers.push( 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/min/wallpaper/oth-packages-light.min.png' );
    this.brand.wallpapers.push( 'https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/min/wallpaper/oth-packages-dark.min.png' );

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

    this.darkLightSettingSubject.next( DarkLightSettings.auto );
    this.themeColorSettingSubject.next( ThemeColorSettings.default );
    this.sideNavClosedSubject.next( 'false' );
  }

  barCustomColors( array: any[] ) {
    const result: any[] = [];

    for ( let i = 0; i < array.length; i++ ) {
      let value;
      if ( i >= this.colors.length ) {
        value = 'var(' + this.colors[ length - 1 ] + ')';
      } else {
        value = 'var(' + this.colors[ i ] + ')';
      }

      result.push( {
        name: array[ i ].name, value
      } );
    }

    return result;
  }
}
