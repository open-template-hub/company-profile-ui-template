import { Component, ElementRef, HostListener, Input, ViewChild } from '@angular/core';
import { ThemeService } from '../../../service/theme/theme.service';
import { UtilService } from '../../../service/util/util.service';

export interface DropdownColumnOption {
  sectionTitle?: string,
  sectionDescription?: string,
  sectionColor?: string,
  menus: DropdownMenuOption[]
}

export interface DropdownMenuOption {
  itemColor?: string,
  brand: { brandLogo: string },
  header: string,
  description: string,
  link: {
    url: string,
    queryParam: any
  },
  hover?: boolean // this property only use on this class, do not set it from outside
}

@Component( {
  selector: 'app-dropdown-menu',
  templateUrl: './dropdown-menu.component.html',
  styleUrls: [ './dropdown-menu.component.scss' ]
} )
export class DropdownMenuComponent {
  brand = {
    brandLogo: '',
  };

  @Input() isDropdownOpen = false;
  @Input() minimumColumns = 1;
  @Input() minimumRows = 5;

  calculatedColumns;
  calculatedRows;

  @Input() options: DropdownColumnOption[] = [];

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

    if ( this.isDropdownOpen && window.innerWidth > 999) {
      let wantedColumns = this.minimumColumns;

      while ( wantedColumns * 330 > window.innerWidth - 255 ) {
        wantedColumns = wantedColumns - 2;
      }

      this.calculatedColumns = wantedColumns;

      if ( this.calculatedColumns < this.minimumColumns ) {
        this.calculatedRows = this.minimumRows - ( this.minimumColumns - this.calculatedColumns );
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
