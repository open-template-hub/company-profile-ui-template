import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { URLS, PRODUCT_QUERY_PARAMS } from '../../../data/constant';
import { environmentCommon } from '../../../../environments/environment-common';
import { FormControl } from '@angular/forms';

export interface Counter {
  name: string,
  value: string
}

export interface Product {
  title: string,
  description: string,
  sectionColor?: string,
  href: string,
  image: string,
  counters?: Counter[]
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  URLS = URLS
  environmentCommon = environmentCommon
  product: Product
  emailControl = new FormControl('')

  constructor(
    private route: ActivatedRoute,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe( params => {
      const product = PRODUCT_QUERY_PARAMS[params.name]

      if ( product ) {
        this.product = product
      } else { // if the product is not available, redirect to not-found
        this.router.navigate( [ URLS.notFound ] ).then( () => {
          return false;
        } );
      }

    } )
  }
}
