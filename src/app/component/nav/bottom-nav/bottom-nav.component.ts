import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { PRODUCT_LINES, SERVICES } from 'src/app/data/product/product.data';
import { URLS } from '../../../data/navigation/navigation.data';
import { ProductLine } from '../../../model/product/product.model';
import { LoadingService } from '../../../service/loading/loading.service';

@Component( {
  selector: 'app-bottom-nav',
  templateUrl: './bottom-nav.component.html',
  styleUrls: [ './bottom-nav.component.scss' ]
} )
export class BottomNavComponent {
  loading = false;
  openSettings = false;
  openOtherSettings = false;

  URLS = URLS;

  PRODUCT_LINES: ProductLine[] = PRODUCT_LINES;
  SERVICES: ProductLine[] = SERVICES;

  @ViewChild( 'dropdownMenuProducts' ) dropdownMenuProducts: ElementRef;
  @ViewChild( 'dropdownMenuServices' ) dropdownMenuServices: ElementRef;

  constructor(
      private router: Router,
      private loadingService: LoadingService
  ) {
    this.loadingService.sharedLoading.subscribe( loading => this.loading = loading );
  }

  closeSettings() {
    if ( this.openOtherSettings ) {
      this.openOtherSettings = false;
    } else {
      this.openSettings = false;
    }
  }
}
