import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingService } from '../../service/loading/loading.service';
import { ThemeService } from '../../service/theme/theme.service';
import { URLS } from '../../data/constant';

@Component( {
  selector: 'app-landing-layout',
  templateUrl: './landing-layout.component.html',
  styleUrls: [ './landing-layout.component.scss' ]
} )
export class LandingLayoutComponent {

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
    this.brand = this.themeService.brand;

    this.loadingService.sharedLoading.subscribe( loading => this.loading = loading );
  }
}
