import { Component } from '@angular/core';
import { URLS } from '../../../util/constant';

@Component( {
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: [ './privacy-policy.component.scss', '../raw-landing-layout.component.scss' ]
} )
export class PrivacyPolicyComponent {
  URLS = URLS;
}
