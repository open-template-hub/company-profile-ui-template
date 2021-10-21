import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { environmentCommon } from '../../../environments/environment-common';
import { BRAND } from '../../data/brand/brand.data';
import { PRODUCT_LINES } from '../../data/product/product.data';
import { Partner } from '../../model/partner/partner.model';
import { Product } from '../../model/product/product.model';

@Component( {
  selector: 'app-product-presentation',
  templateUrl: './product-presentation.component.html',
  styleUrls: [ './product-presentation.component.scss' ]
} )
export class ProductPresentationComponent {

  @Input() product: Product;
  @Input() productLineKey: string;

  SOCIAL_LOGIN_PARTNERS: Partner[] = [];
  PAYMENT_PARTNERS: Partner[] = [];
  FILE_STORAGE_PARTNERS: Partner[] = [];
  MAIL_PARTNERS: Partner[] = [];
  OTH_SERVER_PARTNERS: Partner[] = [];
  BRAND = BRAND;

  presentationText: string;
  presentationPartners: Partner[] = [];

  constructor( public router: Router ) {

    for ( const website in environment.oauth ) {
      // filter only oauth configured websites
      if ( environmentCommon.website[ website ].logo ) {
        this.SOCIAL_LOGIN_PARTNERS.push( {
          name: website,
          logo: environmentCommon.website[ website ].logo,
          url: environmentCommon.website[ website ].url
        } );
      }
    }

    for ( const website in environment.payment ) {
      // filter only oauth configured websites
      if ( environmentCommon.website[ website ].logo ) {
        this.PAYMENT_PARTNERS.push( {
          name: website,
          logo: environmentCommon.website[ website ].logo,
          url: environmentCommon.website[ website ].url
        } );
      }
    }

    for ( const website in environment.fileStorage ) {
      // filter only oauth configured websites
      if ( environmentCommon.website[ website ].logo ) {
        this.FILE_STORAGE_PARTNERS.push( {
          name: website,
          logo: environmentCommon.website[ website ].logo,
          url: environmentCommon.website[ website ].url
        } );
      }
    }

    for ( const website in environment.mail ) {
      // filter only oauth configured websites
      if ( environmentCommon.website[ website ].logo ) {
        this.MAIL_PARTNERS.push( {
          name: website,
          logo: environmentCommon.website[ website ].logo,
          url: environmentCommon.website[ website ].url
        } );
      }
    }

    for ( const productLine of PRODUCT_LINES ) {
      if (productLine.key === 'servers') {
        for ( const product of productLine.products ) {
          this.OTH_SERVER_PARTNERS.push( {
            name: product.name,
            logo: product.logo,
            url: product.url
          } );
        }
      }
    }
  }

  setPresentation() {
    switch ( this.product.key ) {
      case 'auth-server-template': {
        this.presentationText = 'Integrate your servers with social login providers in minutes.';
        this.presentationPartners = this.SOCIAL_LOGIN_PARTNERS;
        return this.SOCIAL_LOGIN_PARTNERS.map( partner => partner.logo );
      }
      case 'payment-server-template': {
        this.presentationText = 'Integrate your servers with payment solution providers in minutes.';
        this.presentationPartners = this.PAYMENT_PARTNERS;
        return this.PAYMENT_PARTNERS.map( partner => partner.logo );
      }
      case 'file-storage-server-template': {
        this.presentationText = 'Integrate your servers with file storage solution providers in minutes.';
        this.presentationPartners = this.FILE_STORAGE_PARTNERS;
        return this.FILE_STORAGE_PARTNERS.map( partner => partner.logo );
      }
      case 'mail-server-template': {
        this.presentationText = 'Integrate your servers with email service providers in minutes.';
        this.presentationPartners = this.MAIL_PARTNERS;
        return this.MAIL_PARTNERS.map( partner => partner.logo );
      }
      case 'orchestration-server-template': {
        this.presentationText = 'Orchestrate all of your servers from one place.';
        this.presentationPartners = this.OTH_SERVER_PARTNERS;
        return this.OTH_SERVER_PARTNERS.map( partner => partner.logo );
      }
      default: {
        this.presentationText = '';
        this.presentationPartners = [];
        return [];
      }
    }
  }

  partnerNameFormat( name: string, isLast: boolean ) {
    return name.split( /(?=[A-Z])/ ).join( ' ' ) + ( isLast ? '*' : ',' );
  }
}
