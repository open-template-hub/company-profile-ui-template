import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { INFORMATION_TYPES, URLS } from 'src/app/data/constant';
import { ThemeService } from '../../../../service/theme/theme.service';

@Component( {
  selector: 'app-not-found-page',
  templateUrl: './not-found-page.component.html',
  styleUrls: [ './not-found-page.component.scss' ]
} )
export class NotFoundPageComponent {

  URLS = URLS;
  INFORMATION_TYPES = INFORMATION_TYPES;

  brand = {
    brandLogoBroken: '',
  };

  constructor(
      public router: Router,
      private themeService: ThemeService ) {
    this.brand = this.themeService.brand;
  }
}
