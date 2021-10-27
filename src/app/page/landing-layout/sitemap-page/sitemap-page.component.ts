import { Component } from '@angular/core';
import { PRODUCT_LINES, SERVICES } from 'src/app/data/product/product.data';
import { environmentCommon } from 'src/environments/environment-common';
import { URLS } from '../../../data/navigation/navigation.data';
import { ProductLine } from '../../../model/product/product.model';

@Component( {
  selector: 'app-sitemap-page',
  templateUrl: './sitemap-page.component.html',
  styleUrls: [ './sitemap-page.component.scss' ]
} )
export class SitemapPageComponent {

  PRODUCT_LINES: ProductLine[] = PRODUCT_LINES;
  SERVICES: ProductLine[] = SERVICES;
  URLS = URLS;

  appVersion = '1.0.0';

  environmentCommon = environmentCommon;

  constructor() {
    // Intentionally blank
  }
}
