import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { PRODUCT_LINES, SERVICES } from 'src/app/data/product/product.data';
import { BRAND } from '../../../../data/brand/brand.data';
import { URLS } from '../../../../data/navigation/navigation.data';
import { ProductLine } from '../../../../model/product/product.model';
import { LoadingService } from '../../../../service/loading/loading.service';

@Component( {
  selector: 'app-landing-layout-top-nav',
  templateUrl: './landing-layout-top-nav.component.html',
  styleUrls: [ './landing-layout-top-nav.component.scss' ]
} )
export class LandingLayoutTopNavComponent {
  loading = false;

  URLS = URLS;
  BRAND = BRAND;

  PRODUCT_LINES: ProductLine[] = PRODUCT_LINES;
  SERVICES: ProductLine[] = SERVICES;

  @ViewChild( 'dropdownMenuProducts' ) dropdownMenuProducts: ElementRef;
  @ViewChild( 'dropdownMenuServices' ) dropdownMenuServices: ElementRef;
  @ViewChild( 'dropdownMenuParent' ) dropdownMenuParent: ElementRef;

  constructor( private router: Router, private loadingService: LoadingService ) {
    this.loadingService.sharedLoading.subscribe( loading => this.loading = loading );
  }
}
