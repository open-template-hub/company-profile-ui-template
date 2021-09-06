import { Component, Input } from '@angular/core';
import { environment } from 'src/environments/environment';
import { environmentCommon } from 'src/environments/environment-common';
import { URLS } from '../../../../data/constant';
import { ThemeService } from '../../../../service/theme/theme.service';

export interface TestimonialOption {
  review: string;
  reviewer: {
    name: string;
    title: string;
    photoUri: string;
    social: {
      linkedIn: string;
      twitter: string;
    };
  };
  style: {
    themeColor: string;
  };
}

@Component( {
  selector: 'app-testimonial-card',
  templateUrl: './testimonial-card.component.html',
  styleUrls: [ './testimonial-card.component.scss' ],
} )
export class TestimonialCardComponent {
  URLS = URLS;

  environment = environment;
  environmentCommon = environmentCommon;

  brand = {
    brandLogo: '',
  };

  @Input() option: TestimonialOption = {
    review:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse in elit blandit, tempus risus vitae, elementum eros. Suspendisse nec orci at neque molestie dignissim. ',
    reviewer: {
      name: 'Open Template Hub',
      title: 'Co-Founder',
      photoUri: '',
      social: {
        linkedIn: '',
        twitter: '',
      },
    },
    style: {
      themeColor: 'var(--brand-color-lighter-2)',
    },
  };

  constructor( private themeService: ThemeService ) {
  }
}
