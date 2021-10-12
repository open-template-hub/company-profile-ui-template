import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { URLS } from '../../../data/constant';
import { PRODUCT_LINES } from '../../../data/product/product.data';

@Component( {
  selector: 'app-status-card',
  templateUrl: './status-card.component.html',
  styleUrls: [ './status-card.component.scss' ]
} )
export class StatusCardComponent {
  @Input() overallSystemStatus = {
    systemStatuses: [],
    overall: '',
    checkDate: undefined
  };

  PRODUCT_LINES = PRODUCT_LINES;

  constructor(
      private router: Router
  ) {
    // Intentionally blank
  }

  navigate( overallStatusName: string, statusName: string ) {
    for ( const product of PRODUCT_LINES ) {
      if ( product.name.toLowerCase() === overallStatusName.toLowerCase() ) {
        for ( const subProduct of product.products ) {
          if ( statusName.toLowerCase() === subProduct.name.toLowerCase() ) {
            this.router.navigate( [ URLS.product + '/' + product.key + '/' + subProduct.key ] );
            break;
          }
        }
      }
    }
  }

  setOverallStatusLed() {
    switch ( this.overallSystemStatus.overall ) {
      case 'UP': {
        return 'success';
      }
      case 'WARN': {
        return 'warning';
      }
      case 'DOWN': {
        return 'error';
      }
      default: {
        return 'info';
      }
    }
  }
}
