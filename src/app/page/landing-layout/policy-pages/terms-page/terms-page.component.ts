import { Component } from '@angular/core';
import { URLS } from '../../../../data/navigation/navigation.data';

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
