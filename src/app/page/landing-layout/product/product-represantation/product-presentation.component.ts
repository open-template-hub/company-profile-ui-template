import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../../../model/product/product.model';
import { ProductService } from '../../../../service/product/product.service';

@Component( {
  selector: 'app-product-presentation',
  templateUrl: './product-presentation.component.html',
  styleUrls: [ './product-presentation.component.scss' ]
} )
export class ProductPresentationComponent {

  product: Product = undefined;

  constructor(
      public router: Router,
      private productService: ProductService
  ) {
    this.productService.product.subscribe( product => {
      this.product = product;
    } );
  }
}
