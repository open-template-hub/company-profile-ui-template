import { Component } from '@angular/core';
import { environmentCommon } from '../../../../../environments/environment-common';
import { BRAND } from '../../../../data/brand/brand.data';
import { URLS } from '../../../../data/navigation/navigation.data';

@Component( {
  selector: 'app-terms-page',
  templateUrl: './terms-page.component.html',
  styleUrls: [ './terms-page.component.scss' ]
} )
export class TermsPageComponent {

  BRAND = BRAND;

  URLS = URLS;

  environmentCommon = environmentCommon;

  constructor() {
    // Intentionally Blank
  }
}
