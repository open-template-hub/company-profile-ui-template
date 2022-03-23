import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { LIBRARIES, PRODUCT_LINES, SERVICES } from 'src/app/data/product/product.data';
import { URLS } from '../../../data/navigation/navigation.data';
import { ProductLine } from '../../../model/product/product.model';
import { LoadingService } from '../../../service/loading/loading.service';
import { DropdownMenuComponent } from '../../dropdown-menu/dropdown-menu.component';

@Component( {
  selector: 'app-bottom-nav',
  templateUrl: './bottom-nav.component.html',
  styleUrls: [ './bottom-nav.component.scss' ]
} )
export class BottomNavComponent {
  loading = false;
  pageTwoOpened = false;

  URLS = URLS;

  PRODUCT_LINES: ProductLine[] = PRODUCT_LINES;
  SERVICES: ProductLine[] = SERVICES;
  LIBRARIES: ProductLine[] = LIBRARIES;

  @ViewChild( 'dropdownMenuProducts' ) dropdownMenuProducts: ElementRef;
  @ViewChild( 'dropdownMenuServices' ) dropdownMenuServices: ElementRef;

  constructor(
      private router: Router,
      private loadingService: LoadingService
  ) {
    this.loadingService.sharedLoading.subscribe( loading => this.loading = loading );
  }

  closeDropdowns( dropdownMenus: DropdownMenuComponent[] ) {
    dropdownMenus.forEach( dropdownMenu => dropdownMenu.closeDropdown() );
  }
}
