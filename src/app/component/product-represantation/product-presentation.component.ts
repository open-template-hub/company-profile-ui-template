import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { environmentCommon } from '../../../environments/environment-common';
import { BRAND } from '../../data/brand/brand.data';
import { DarkLightSettings } from '../../data/constant';
import { PRODUCT_LINES } from '../../data/product/product.data';
import { Image } from '../../model/image/image.model';
import { Partner } from '../../model/partner/partner.model';
import { Product } from '../../model/product/product.model';
import { ThemeService } from '../../service/theme/theme.service';

@Component( {
  selector: 'app-product-presentation',
  templateUrl: './product-presentation.component.html',
  styleUrls: [ './product-presentation.component.scss' ]
} )
export class ProductPresentationComponent implements OnInit {

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

  darkLightSetting;

  constructor( public router: Router, private themeService: ThemeService ) {
    // Intentionally Blank
  }

  ngOnInit(): void {
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
      if ( productLine.key === 'server' ) {
        for ( const product of productLine.products ) {
          this.OTH_SERVER_PARTNERS.push( {
            name: product.name,
            logo: product.logo,
            url: product.url
          } );
        }
      }
    }

    this.themeService.darkLightSetting.subscribe( darkLightSetting => this.darkLightSetting = darkLightSetting );
  }

  setPresentation() {
    switch ( this.product.key ) {
      case 'auth-server-template': {
        this.presentationText = $localize`:@@productPresentation.authServer.text:Integrate your servers with social login providers in minutes.`;
        this.presentationPartners = this.SOCIAL_LOGIN_PARTNERS;
        break;
      }
      case 'payment-server-template': {
        this.presentationText = $localize`:@@productPresentation.paymentServer.text:Integrate your servers with payment solution providers in minutes.`;
        this.presentationPartners = this.PAYMENT_PARTNERS;
        break;
      }
      case 'file-storage-server-template': {
        this.presentationText = $localize`:@@productPresentation.fileStorageServer.text:Integrate your servers with file storage solution providers in minutes.`;
        this.presentationPartners = this.FILE_STORAGE_PARTNERS;
        break;
      }
      case 'mail-server-template': {
        this.presentationText = $localize`:@@productPresentation.mailServer.text:Integrate your servers with email service providers in minutes.`;
        this.presentationPartners = this.MAIL_PARTNERS;
        break;
      }
      case 'orchestration-server-template': {
        this.presentationText = $localize`:@@productPresentation.orchestrationServer.text:Orchestrate all of your servers from one place.`;
        this.presentationPartners = this.OTH_SERVER_PARTNERS;
        break;
      }
      default: {
        this.presentationText = '';
        this.presentationPartners = [];
        break;
      }
    }

    return this.presentationPartners.map( ( partner ) => {
      const image: Image = {
        url: partner.logo,
        description: partner.name
      };
      return image;
    } );
  }

  partnerNameFormat( name: string, isLast: boolean ) {
    return name.split( /(?=[A-Z])/ ).join( ' ' ) + ( isLast ? '*' : ',' );
  }

  getDemonstrationImg( product: Product ) {
    const light = product.demonstrationImg;
    const dark = product.demonstrationAlter ? product.demonstrationAlter : product.demonstrationImg;
    switch ( this.darkLightSetting ) {
      case DarkLightSettings.light:
        return light;
      case DarkLightSettings.dark:
        return dark;
      case DarkLightSettings.auto:
      default:
        return this.themeService.selectDarkLightByCSS( light, dark );
    }
  }
}
