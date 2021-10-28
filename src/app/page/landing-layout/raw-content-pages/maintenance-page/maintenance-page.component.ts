import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BRAND } from '../../../../data/brand/brand.data';
import { INFORMATION_TYPES } from '../../../../data/information/information.data';
import { URLS } from '../../../../data/navigation/navigation.data';

@Component( {
  selector: 'app-maintenance-page',
  templateUrl: './maintenance-page.component.html',
  styleUrls: [ './maintenance-page.component.scss' ]
} )
export class MaintenancePageComponent {

  URLS = URLS;
  BRAND = BRAND;
  INFORMATION_TYPES = INFORMATION_TYPES;

  appHeroContents = [
    {text: $localize `:@@maintenance.appHero.1:Under maintenance`, level: 1},
    {text: $localize `:@@maintenance.appHero.2:Please check again later`}
  ]

  constructor( public router: Router ) {
  }
}
