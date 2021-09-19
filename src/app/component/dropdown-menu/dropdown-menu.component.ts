import { Component, ElementRef, HostListener, Input, ViewChild } from '@angular/core';
import { URLS } from '../../data/constant';
import { ProductLine } from '../../model/product/product.model';
import { ThemeService } from '../../service/theme/theme.service';
import { UtilService } from '../../service/util/util.service';

@Component( {
  selector: 'app-dropdown-menu',
  templateUrl: './dropdown-menu.component.html',
  styleUrls: [ './dropdown-menu.component.scss' ]
} )
export class DropdownMenuComponent {
  brand = {
    brandLogo: '',
  };

  URLS = URLS;

  @Input() isDropdownOpen = false;
  @Input() minimumColumns = 1;
  @Input() minimumRows = 6;

  calculatedColumns;
  calculatedRows;

  @Input() productLines: ProductLine[] = [];

  closeDropdownInternalClicked = false;

  @ViewChild( 'toggleButton' ) toggleButton: ElementRef;
  @ViewChild( 'dropdownContent' ) dropdownContent: ElementRef;

  constructor(
      private themeService: ThemeService,
      private utilService: UtilService
  ) {
    this.brand = this.themeService.brand;
    this.calculatedColumns = this.minimumColumns;
    this.calculatedRows = this.minimumRows;
  }

  @HostListener( 'window:resize', [ '$event' ] )
  onResize() {

    if ( this.isDropdownOpen && window.innerWidth > 999 ) {
      let wantedColumns = this.minimumColumns;

      while ( wantedColumns * 330 > window.innerWidth - 240 ) {
        wantedColumns = wantedColumns - 2;
      }

      this.calculatedColumns = wantedColumns;

      if ( this.calculatedColumns < this.minimumColumns ) {
        this.calculatedRows = this.minimumRows - ( this.minimumColumns - this.calculatedColumns + 2 );
      } else {
        this.calculatedRows = this.minimumRows;
      }
    }
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;

    if ( this.isDropdownOpen ) {
      this.onResize();
    }
  }

  closeDropdown() {
    this.isDropdownOpen = false;
    this.closeDropdownInternalClicked = false;
  }

  closeDropDownInternal() {
    this.closeDropdownInternalClicked = true;
    this.utilService.delay( 500 ).then( () => {
      this.closeDropdown();
    } );
  }
}
