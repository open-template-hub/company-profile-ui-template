import { Component, Input, OnInit } from '@angular/core';
import { ThemeService } from '../../../../service/theme/theme.service';
import { URLS } from '../../../../util/constant';
import { environment } from '../../../../../environments/environment';

export interface TestimonialOption {
  review: string,
  brand: {
    brandLogo: string
  },
  style: {
    themeColor: string
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

  @Input() marginTop = 'initial';
  @Input() minHeight = '250px';

  @Input() option: TestimonialOption = {
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse in elit blandit, tempus risus vitae, elementum eros. Suspendisse nec orci at neque molestie dignissim. ',
    brand: this.themeService.brand,
    style: {
      themeColor: 'var(--brand-color-lighter-2)'
    }
  }
  constructor(
    private themeService: ThemeService
  ) { }

  ngOnInit(): void {
  }

}
