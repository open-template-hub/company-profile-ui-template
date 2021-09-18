import { Component, OnInit } from '@angular/core';
import { Product } from '../../../../model/product/product.model';
import { ProductService } from '../../../../service/product/product.service';

@Component( {
  selector: 'app-product-presentation',
  templateUrl: './product-presentation.component.html',
  styleUrls: [ './product-presentation.component.scss' ]
} )
export class ProductPresentationComponent implements OnInit {

  product: Product = undefined;

  constructor( private productService: ProductService ) {
    this.productService.product.subscribe( product => {
      this.product = product;
    } );

  }

  ngOnInit(): void {
  }
}
