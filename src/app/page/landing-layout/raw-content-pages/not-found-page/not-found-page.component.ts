import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { INFORMATION_TYPES, URLS } from 'src/app/data/constant';
import { BRAND } from '../../../../data/brand/brand.data';

@Component( {
  selector: 'app-not-found-page',
  templateUrl: './not-found-page.component.html',
  styleUrls: [ './not-found-page.component.scss' ]
} )
export class NotFoundPageComponent {

  URLS = URLS;
  BRAND = BRAND;
  INFORMATION_TYPES = INFORMATION_TYPES;

  appHeroContents = [{text: $localize `404 Page not found`, level: 1}, {text: $localize `Something went wrong!`}]

  constructor( public router: Router ) {
  }
}
