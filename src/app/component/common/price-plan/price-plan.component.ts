import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { URLS } from '../../../data/constant';
import { Product, ProductLine } from '../../../model/product/product.model';

@Component({
  selector: 'app-price-plan',
  templateUrl: './price-plan.component.html',
  styleUrls: ['./price-plan.component.scss']
})
export class PricePlanComponent implements OnInit {
  URLS = URLS
  @Input() product: Product

  hiddenMainFeatures = new Set()

  constructor(
    public router: Router
  ) { }

  ngOnInit(): void {
  }

  accordionClicked(coreFeature: string) {
    if( this.hiddenMainFeatures.has( coreFeature ) ) {
      this.hiddenMainFeatures.delete( coreFeature )
    } else {
      this.hiddenMainFeatures.add( coreFeature )
    }
  }
}
