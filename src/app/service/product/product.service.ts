import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../../model/product/product.model';

@Injectable( {
  providedIn: 'root'
} )
export class ProductService {

  private productSubject: BehaviorSubject<Product>;

  public product: Observable<Product>;

  constructor() {
    let productStorageItem: Product = JSON.parse( localStorage.getItem( 'product' ) ?
        localStorage.getItem( 'product' ) : sessionStorage.getItem( 'product' ) );
    productStorageItem = productStorageItem ? productStorageItem : undefined;

    this.productSubject = new BehaviorSubject<Product>( productStorageItem );
    this.product = this.productSubject.asObservable();
  }

  setSelectedProduct( product: Product ) {
    if ( localStorage.getItem( 'currentUser' ) ) {
      sessionStorage.removeItem( 'product' );
      localStorage.setItem( 'product', JSON.stringify( product ) );
    } else {
      sessionStorage.setItem( 'product', JSON.stringify( product ) );
    }
    this.productSubject.next( product );
  }
}