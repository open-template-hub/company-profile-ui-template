import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ThemeService } from '../../../service/theme/theme.service';

@Component( {
  selector: 'app-maintenance',
  templateUrl: './maintenance.component.html',
  styleUrls: [ './maintenance.component.scss', '../landing-layout.component.scss' ]
} )
export class MaintenanceComponent {

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
