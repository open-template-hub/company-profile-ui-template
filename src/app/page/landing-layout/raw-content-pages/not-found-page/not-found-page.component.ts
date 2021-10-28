import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BRAND } from '../../../../data/brand/brand.data';
import { INFORMATION_TYPES } from '../../../../data/information/information.data';
import { URLS } from '../../../../data/navigation/navigation.data';

@Component( {
  selector: 'app-not-found-page',
  templateUrl: './not-found-page.component.html',
  styleUrls: [ './not-found-page.component.scss' ]
} )
export class NotFoundPageComponent {

  URLS = URLS;
  BRAND = BRAND;
  INFORMATION_TYPES = INFORMATION_TYPES;

  appHeroContents = [
    {text: $localize `:@@notFound.appHero.1:404 Page not found`, level: 1},
    {text: $localize `:@@notFound.appHero.2:Something went wrong!`}
  ]

  constructor( public router: Router ) {
  }
}
