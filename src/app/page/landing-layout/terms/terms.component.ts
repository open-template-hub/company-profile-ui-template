import { Component } from '@angular/core';
import { URLS } from '../../../data/constant';

@Component( {
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: [ './terms.component.scss', '../landing-layout.component.scss' ]
} )
export class TermsComponent {
  URLS = URLS;
}
