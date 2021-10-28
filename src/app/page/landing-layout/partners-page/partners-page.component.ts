import { Component } from '@angular/core';
import { PARTNERS } from 'src/app/data/partner/partner.data';
import { URLS } from '../../../data/navigation/navigation.data';
import { Partner } from '../../../model/partner/partner.model';

@Component( {
  selector: 'app-partners-page',
  templateUrl: './partners-page.component.html',
  styleUrls: [ './partners-page.component.scss' ]
} )
export class PartnersPageComponent {

  PARTNERS: Partner[] = PARTNERS;
  URLS = URLS;

  partnersTitle = [
    { text: $localize`:@@partnersPage.partnersTitle.1:Business Partners`, level: 1 },
    { text: $localize`:@@partnersPage.partnersTitle.2:Create and run your online business with Open Template Hub and our partners.` }
  ];

  constructor() {
    // Intentionally Blank
  }
}

