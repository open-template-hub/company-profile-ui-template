import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ThemeService } from '../../../service/theme/theme.service';

@Component( {
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: [ './not-found.component.scss', '../raw-landing-layout.component.scss' ]
} )
export class NotFoundComponent {

  brand = {
    brandLogo: '',
  };

  constructor(
      public router: Router,
      private themeService: ThemeService ) {
    this.brand = this.themeService.brand;
  }
}
