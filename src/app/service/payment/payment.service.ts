import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { loadStripe } from '@stripe/stripe-js';
import { environment } from '../../../environments/environment';
import { LoadingService } from '../loading/loading.service';

@Injectable( {
  providedIn: 'root'
} )
export class PaymentService {

  constructor(
      private http: HttpClient,
      private loadingService: LoadingService ) {
  }

  initPayment( paymentConfig: any, productId: string, quantity: number ) {
    return this.http.post<any>( `${ environment.serverUrl }/payment`, {
      payment_config_key: paymentConfig.tag,
      product_id : productId,
      quantity
    } ).subscribe( async ( response ) => {

      if ( response.method === 'stripe' ) {
        this.loadingService.setLoading( false );
        const stripe = await loadStripe( paymentConfig.publishableKey );

        const { error } = await stripe.redirectToCheckout( {
          sessionId: response.payload.id
        } );

        console.error( error );
      } else if ( response.method === 'coinbase' ) {
        this.loadingService.setLoading( false );
        window.location.href = `https://commerce.coinbase.com/charges/${ response.payload.id }`;
      } else if ( response.method === 'paypal' ) {
        this.loadingService.setLoading( false );
        window.location.href = `https://www.sandbox.paypal.com/checkoutnow?version=${ paymentConfig.version }&fundingSource=paypal&env=${ paymentConfig.env }&clientID=${ paymentConfig.clientId }&token=${ response.payload.id }`;
      }
    } );
  }

  verify( paymentConfig: any, transactionHistoryId: string, productId: string ) {
    return this.http.post<any>( `${ environment.serverUrl }/payment/verify`, {
      payment_config_key: paymentConfig.tag,
      transaction_history_id : transactionHistoryId,
      product_id: productId
    } )
  }
}
