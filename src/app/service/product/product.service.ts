import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../../model/product/product.model';

@Injectable( {
  providedIn: 'root'
} )
export class ProductService {

  public product: Observable<Product>;
  private productSubject: BehaviorSubject<Product>;

  constructor() {
    let productStorageItem: Product = JSON.parse( localStorage.getItem( 'product' ) ?
        localStorage.getItem( 'product' ) : sessionStorage.getItem( 'product' ) );
    productStorageItem = productStorageItem ? productStorageItem : undefined;

    this.productSubject = new BehaviorSubject<Product>( productStorageItem );
    this.product = this.productSubject.asObservable();
  }

  setSelectedProduct( product: Product ) {
    if (product) {
      if ( localStorage.getItem( 'currentUser' ) ) {
        sessionStorage.removeItem( 'product' );
        localStorage.setItem( 'product', JSON.stringify( product ) );
      } else {
        sessionStorage.setItem( 'product', JSON.stringify( product ) );
      }
      this.productSubject.next( product );
    } else {
      localStorage.removeItem( 'product' );
      sessionStorage.removeItem( 'product' );
    }
  }
}
