import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../../../service/theme/theme.service';
import { URLS } from '../../../../util/constant';
import { environment } from '../../../../../environments/environment';

export interface TestimonialOption {
  review: string,
  brand: {
    brandLogo: string
  }
}

@Component({
  selector: 'app-testimonial-card',
  templateUrl: './testimonial-card.component.html',
  styleUrls: ['./testimonial-card.component.scss']
})
export class TestimonialCardComponent implements OnInit {
  URLS = URLS
  environment = environment;
  brand = {
    brandLogo: '',
  };

  option: TestimonialOption = {
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse in elit blandit, tempus risus vitae, elementum eros. Suspendisse nec orci at neque molestie dignissim. ',
    brand: this.themeService.brand
  }
  constructor(
    private themeService: ThemeService
  ) { }

  ngOnInit(): void {
  }

}
