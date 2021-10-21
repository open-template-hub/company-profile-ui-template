import { Component } from '@angular/core';
import { TESTIMONIALS } from 'src/app/data/testimonial/testimonial.data';
import { Testimonial } from '../../../model/testimonial/testimonial.model';

@Component( {
  selector: 'app-customers-page',
  templateUrl: './customers-page.component.html',
  styleUrls: [ './customers-page.component.scss' ]
} )
export class CustomersPageComponent {

  TESTIMONIALS: Testimonial[] = TESTIMONIALS;

  testimonialsTitle = [
    { text: $localize`Customer Testimonials`, level: 1 },
    { text: $localize`What our customers are saying...` }
  ];

  constructor() {
    // Intentionally Blank
  }
}
