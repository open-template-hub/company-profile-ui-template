import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingService } from '../../service/loading/loading.service';
import { ThemeService } from '../../service/theme/theme.service';

@Component( {
  selector: 'app-settings-layout',
  templateUrl: './settings-layout.component.html',
  styleUrls: [ './settings-layout.component.scss' ]
} )
export class SettingsLayoutComponent {

  darkTheme: string;
  loading = false;

  brand = {
    brandLogo: '',
  };

  sideNavClosed = 'false';

  constructor(
      private router: Router,
      private themeService: ThemeService,
      private loadingService: LoadingService
  ) {
    this.themeService.darkTheme.subscribe( darkTheme => {
      this.darkTheme = darkTheme;
    } );

    this.themeService.sideNavClosed.subscribe( sideNavClosed => {
      this.sideNavClosed = sideNavClosed;
    } );

    this.brand = this.themeService.brand;

    this.loadingService.sharedLoading.subscribe( loading => this.loading = loading );
  }
}
