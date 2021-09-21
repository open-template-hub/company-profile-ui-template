import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ThemeService } from '../../../../service/theme/theme.service';

@Component( {
  selector: 'app-not-found-page',
  templateUrl: './not-found-page.component.html',
  styleUrls: [ './not-found-page.component.scss', '../../landing-layout.component.scss' ]
} )
export class NotFoundPageComponent {

  brand = {
    brandLogoBroken: '',
  };

  constructor(
      public router: Router,
      private themeService: ThemeService ) {
    this.brand = this.themeService.brand;
  }
}
