import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingService } from '../../service/loading/loading.service';
import { ThemeService } from '../../service/theme/theme.service';
import { URLS } from '../../util/constant';

@Component( {
  selector: 'app-landing-layout',
  templateUrl: './landing-layout.component.html',
  styleUrls: [ './landing-layout.component.scss' ]
} )
export class LandingLayoutComponent {

  darkTheme: string;
  loading = false;

  brand = {
    brandLogo: '',
  };

  URLS = URLS;

  constructor(
      private router: Router,
      private themeService: ThemeService,
      private loadingService: LoadingService
  ) {
    this.themeService.darkTheme.subscribe( darkTheme => {
      this.darkTheme = darkTheme;
    } );

    this.brand = this.themeService.brand;

    this.loadingService.sharedLoading.subscribe( loading => this.loading = loading );
  }
}
