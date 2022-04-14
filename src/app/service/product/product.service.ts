import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { URLS } from '../../data/navigation/navigation.data';
import { Product, ProductLine } from '../../model/product/product.model';

@Injectable( {
  providedIn: 'root'
} )
export class ProductService {

  URLS = URLS;

  public product: Observable<Product>;
  private productSubject: BehaviorSubject<Product>;

  constructor( private router: Router ) {
    let productStorageItem: Product = JSON.parse( localStorage.getItem( 'product' ) ?
        localStorage.getItem( 'product' ) : sessionStorage.getItem( 'product' ) );
    productStorageItem = productStorageItem ? productStorageItem : undefined;

    this.productSubject = new BehaviorSubject<Product>( productStorageItem );
    this.product = this.productSubject.asObservable();
  }

  setSelectedProduct( product: Product ) {
    if ( product ) {
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

  redirectToProductUrl( product: Product, productLine: ProductLine ) {
    if ( product.redirectToUrl ) {
      window.open( product.url, '_blank' );
    } else if ( product.redirectToUrlAlter ) {
      window.open( product.urlAlter, '_blank' );
    } else {
      this.router.navigate( [ URLS.product + '/' + productLine.key + '/' + product.key ] ).then( () => {
        return true;
      } );
    }
  }
}
