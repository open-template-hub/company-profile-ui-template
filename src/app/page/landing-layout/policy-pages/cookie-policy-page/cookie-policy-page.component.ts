import { Component } from '@angular/core';
import { environmentCommon } from '../../../../../environments/environment-common';
import { BRAND } from '../../../../data/brand/brand.data';

@Component( {
  selector: 'app-cookie-policy-page',
  templateUrl: './cookie-policy-page.component.html',
  styleUrls: [ './cookie-policy-page.component.scss' ]
} )
export class CookiePolicyPageComponent {

  BRAND = BRAND;

  environmentCommon = environmentCommon;

  constructor() {
    // Intentionally Blank
  }
}
