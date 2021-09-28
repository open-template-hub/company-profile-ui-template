import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { INFORMATION_TYPES, URLS } from '../../../../data/constant';
import { ThemeService } from '../../../../service/theme/theme.service';

@Component( {
  selector: 'app-maintenance-page',
  templateUrl: './maintenance-page.component.html',
  styleUrls: [ './maintenance-page.component.scss' ]
} )
export class MaintenancePageComponent {

  URLS = URLS;
  INFORMATION_TYPES = INFORMATION_TYPES;

  brand = {
    brandLogoMerge: ''
  };

  constructor(
      private route: ActivatedRoute,
      public router: Router,
      private themeService: ThemeService ) {

    this.brand = this.themeService.brand;
  }
}
