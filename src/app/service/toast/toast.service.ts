import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { IndividualConfig } from 'ngx-toastr/toastr/toastr-config';
import { ThemeService } from '../theme/theme.service';

@Injectable( {
  providedIn: 'root'
} )
export class ToastService {

  darkLightSetting: string;

  constructor(
      private toastrService: ToastrService,
      private themeService: ThemeService ) {

    this.themeService.darkLightSetting.subscribe( darkLightSetting => {
      this.darkLightSetting = darkLightSetting;
    } );
  }

  error( message?: string, title?: string, override?: Partial<IndividualConfig> ) {
    override = this.applyTheme( override );
    this.toastrService.error( message, title, override );
  }

  warning( message?: string, title?: string, override?: Partial<IndividualConfig> ) {
    override = this.applyTheme( override );
    this.toastrService.warning( message, title, override );
  }

  success( message?: string, title?: string, override?: Partial<IndividualConfig> ) {
    override = this.applyTheme( override );
    this.toastrService.success( message, title, override );
  }

  info( message?: string, title?: string, override?: Partial<IndividualConfig> ) {
    override = this.applyTheme( override );
    this.toastrService.info( message, title, override );
  }

  private applyTheme( override?: Partial<IndividualConfig> ) {
    if ( override && this.darkLightSetting === 'dark' ) {
      override.toastClass = 'ngx-toastr-dark-mode';
    }
    if ( override && this.darkLightSetting === 'light' ) {
      override.toastClass = 'ngx-toastr-light-mode';
    }
    return override;
  }
}
