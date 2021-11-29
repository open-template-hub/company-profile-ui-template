import { Component } from '@angular/core';
import { CONTACT_INFO } from 'src/app/data/contact-info/contact-info.data';

@Component( {
  selector: 'app-contact-information-card',
  templateUrl: './contact-information-card.component.html',
  styleUrls: [ './contact-information-card.component.scss' ]
} )
export class ContactInformationCardComponent {
  CONTACT_INFO = CONTACT_INFO;

  constructor() {
    // Intentionally blank
  }
}
