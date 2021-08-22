import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RIBBONS, URLS } from '../../../../util/constant';

export interface PricingOption {
  title: string,
  ribbon?: { type:string, text: string },
  price: {
    currency: string,
    value: string,
    subscriptionTime: string
  },
  features: string[],
  styles: {
    height: string,
    width: string,
    fontSize: string,
    featureHeight: string
  },
  link?: string
}

@Component({
  selector: 'app-pricing-card',
  templateUrl: './pricing-card.component.html',
  styleUrls: ['./pricing-card.component.scss']
})
export class PricingCardComponent implements OnInit {
  RIBBONS = RIBBONS
  URLS = URLS
  @Input() option: PricingOption = {
    title: 'Basic',
    ribbon: { type: 'premium', text: 'DEAL' },
    price: {
      currency: '$',
      value: '9',
      subscriptionTime: 'mo.'
    },
    features: ['Up to 10 users', 'Maximum 100 photos/mo.', '500 queries'],
    styles: {
      width: '340px',
      height: '440px',
      fontSize: '0.8em',
      featureHeight: '10em'
    },
    link: URLS.maintenance
  }

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  routeToEvent( path: string ) {
    this.router.navigate( [ path ]);
  }
}
