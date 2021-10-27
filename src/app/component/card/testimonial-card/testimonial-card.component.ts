import { Component, Input } from '@angular/core';
import { environment } from 'src/environments/environment';
import { environmentCommon } from 'src/environments/environment-common';
import { URLS } from '../../../data/navigation/navigation.data';
import { DEFAULT_THEME } from '../../../data/theme/theme.data';
import { Testimonial } from '../../../model/testimonial/testimonial.model';

@Component( {
  selector: 'app-testimonial-card',
  templateUrl: './testimonial-card.component.html',
  styleUrls: [ './testimonial-card.component.scss' ],
} )
export class TestimonialCardComponent {
  URLS = URLS;

  environment = environment;
  environmentCommon = environmentCommon;

  @Input() testimonial: Testimonial = {
    review:
        '',
    reviewer: {
      name: '',
      title: '',
      photoUri: '',
      social: {
        linkedIn: '',
        twitter: '',
      },
    },
    theme: DEFAULT_THEME
  };

  constructor() {
    // Intentionally blank
  }
}
