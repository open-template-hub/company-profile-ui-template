import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ThemeService } from '../theme/theme.service';

@Injectable( {
  providedIn: 'root'
} )
export class ToastService {

  darkLightSetting: string;

  constructor( private toastrService: ToastrService, private themeService: ThemeService ) {

    this.themeService.darkLightSetting.subscribe( darkLightSetting => {
      this.darkLightSetting = darkLightSetting;
    } );
  }

  error( message?: string, title?: string ) {
    this.toastrService.error( message, title, this.applyTheme() );
  }

  warning( message?: string, title?: string ) {
    this.toastrService.warning( message, title, this.applyTheme() );
  }

  success( message?: string, title?: string ) {
    this.toastrService.success( message, title, this.applyTheme() );
  }

  info( message?: string, title?: string ) {
    this.toastrService.info( message, title, this.applyTheme() );
  }

  private applyTheme() {
    const config: any = {};
    if ( this.darkLightSetting === 'dark' ) {
      config.toastClass = 'ngx-toastr-dark-mode';
    }
    if ( this.darkLightSetting === 'light' ) {
      config.toastClass = 'ngx-toastr-light-mode';
    }

    return config;
  }
}
