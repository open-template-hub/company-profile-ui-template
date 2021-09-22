import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { environmentCommon } from '../../../environments/environment-common';
import { Partner } from '../../model/partner/partner.model';
import { Product } from '../../model/product/product.model';
import { ProductService } from '../../service/product/product.service';
import { ThemeService } from '../../service/theme/theme.service';

@Component( {
  selector: 'app-product-presentation',
  templateUrl: './product-presentation.component.html',
  styleUrls: [ './product-presentation.component.scss' ]
} )
export class ProductPresentationComponent {

  @Input() product: Product = undefined;

  brand = {
    brandLogo: '',
  };

  SOCIAL_LOGIN_PARTNERS: Partner[] = [];

  constructor(
      public router: Router,
      private productService: ProductService,
      private themeService: ThemeService
  ) {
    this.brand = this.themeService.brand;

    for ( const website in environment.oauth ) {
      // filter only oauth configured websites
      if ( environmentCommon.website[ website ].tag && environmentCommon.website[ website ].logo ) {
        this.SOCIAL_LOGIN_PARTNERS.push( { brandLogo: environmentCommon.website[ website ].logo, name: website } );
      }
    }
  }
}
