import { Component, ElementRef, HostListener, Input, ViewChild, } from '@angular/core';
import { URLS } from '../../data/constant';
import { Product, ProductLine } from '../../model/product/product.model';
import { UtilService } from '../../service/util/util.service';

@Component( {
  selector: 'app-dropdown-menu',
  templateUrl: './dropdown-menu.component.html',
  styleUrls: [ './dropdown-menu.component.scss' ],
} )
export class DropdownMenuComponent {
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

  constructor( private utilService: UtilService ) {
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
        this.calculatedRows =
            this.minimumRows - ( this.minimumColumns - this.calculatedColumns + 2 );
      } else {
        this.calculatedRows = this.minimumRows;
      }
    }
  }

  setImageLoaded = ( product: Product ) => {
    product.imageLoaded = true;
  };

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
