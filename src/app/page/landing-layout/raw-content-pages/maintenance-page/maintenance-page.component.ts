import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BRAND } from '../../../../data/brand/brand.data';
import { INFORMATION_TYPES, URLS } from '../../../../data/constant';

@Component( {
  selector: 'app-maintenance-page',
  templateUrl: './maintenance-page.component.html',
  styleUrls: [ './maintenance-page.component.scss' ]
} )
export class MaintenancePageComponent {

  URLS = URLS;
  BRAND = BRAND;
  INFORMATION_TYPES = INFORMATION_TYPES;

  appHeroContents = [{text: $localize `Under maintenance`, level: 1}, {text: $localize `Please check again later`}]

  constructor( public router: Router ) {
  }
}
