import { Component } from '@angular/core';
import { URLS } from '../../../../data/navigation/navigation.data';

@Component( {
  selector: 'app-privacy-policy-page',
  templateUrl: './privacy-policy-page.component.html',
  styleUrls: [ './privacy-policy-page.component.scss' ]
} )
export class PrivacyPolicyPageComponent {

  URLS = URLS;

  constructor() {
    // Intentionally Blank
  }
}
