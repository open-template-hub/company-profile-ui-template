import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environmentCommon } from '../../../environments/environment-common';
import { BRAND } from '../../data/brand/brand.data';
import { DarkLightSettings } from '../../data/theme/theme.data';
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

  BRAND = BRAND;

  presentationText: string;
  presentationPartners: Partner[] = [];

  darkLightSetting;

  constructor( public router: Router, private themeService: ThemeService ) {
    // Intentionally Blank
  }

  ngOnInit(): void {
    this.themeService.darkLightSetting.subscribe( darkLightSetting => this.darkLightSetting = darkLightSetting );
  }

  getPresentationModel() {
    if ( this.product.commandLines ) {
      return 'command-line';
    } else if ( this.product.video ) {
      return 'video';
    } else if ( this.product.integrations ) {
      return 'integrations';
    } else if ( this.product.demonstrationImg ) {
      return 'demonstration-image';
    } else {
      return '';
    }
  }

  getPresentationSwiperItems() {
    this.presentationPartners = [];
    if ( this.product.integrations ) {
      for ( const website in this.product.integrations ) {
        // filter only oauth configured websites
        if ( environmentCommon.website[ website ].logo ) {
          this.presentationPartners.push( {
            name: website,
            src: environmentCommon.website[ website ].logo,
            website: environmentCommon.website[ website ].url
          } );
        }
      }

      switch ( this.product.key ) {
        case 'auth-server-template': {
          this.presentationText = $localize`:@@productPresentation.authServer.text:Integrate your servers with social login providers in minutes.`;
          break;
        }
        case 'payment-server-template': {
          this.presentationText = $localize`:@@productPresentation.paymentServer.text:Integrate your servers with payment solution providers in minutes.`;
          break;
        }
        case 'file-storage-server-template': {
          this.presentationText = $localize`:@@productPresentation.fileStorageServer.text:Integrate your servers with file storage solution providers in minutes.`;
          break;
        }
        case 'mail-server-template': {
          this.presentationText = $localize`:@@productPresentation.mailServer.text:Integrate your servers with email service providers in minutes.`;
          break;
        }
        default: {
          this.presentationText = '';
          break;
        }
      }
    }

    return this.presentationPartners.map( ( partner ) => {
      const image: Image = {
        src: partner.src,
        description: partner.name
      };
      return image;
    } );
  }

  partnerNameFormat( name: string, isLast: boolean ) {
    return name.split( /(?=[A-Z])/ ).join( ' ' ) + ( isLast ? '*' : ',' );
  }

  getDemonstrationImg( product: Product ) {
    const light = product.demonstrationImg.src;
    const dark = product.demonstrationAlter?.src ? product.demonstrationAlter.src : product.demonstrationImg.src;
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
