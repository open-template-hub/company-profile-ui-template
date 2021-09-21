import { Component } from '@angular/core';
import { URLS } from '../../../data/constant';

@Component( {
  selector: 'app-privacy-policy-page',
  templateUrl: './privacy-policy-page.component.html',
  styleUrls: [ './privacy-policy-page.component.scss', '../landing-layout.component.scss' ]
} )
export class PrivacyPolicyPageComponent {
  URLS = URLS;
}
