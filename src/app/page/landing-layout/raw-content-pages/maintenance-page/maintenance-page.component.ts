import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ThemeService } from '../../../../service/theme/theme.service';

@Component( {
  selector: 'app-maintenance-page',
  templateUrl: './maintenance-page.component.html',
  styleUrls: [ './maintenance-page.component.scss', '../../landing-layout.component.scss' ]
} )
export class MaintenancePageComponent {

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