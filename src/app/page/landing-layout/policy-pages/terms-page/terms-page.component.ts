import { Component } from '@angular/core';
import { URLS } from '../../../../data/constant';

@Component( {
  selector: 'app-terms-page',
  templateUrl: './terms-page.component.html',
  styleUrls: [ './terms-page.component.scss' ]
} )
export class TermsPageComponent {

  URLS = URLS;

  constructor() {
    // Intentionally Blank
  }
}
