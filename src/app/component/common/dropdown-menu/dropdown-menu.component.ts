import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { ThemeService } from '../../../service/theme/theme.service';
import { UtilService } from '../../../service/util/util.service';

export interface DropdownColumnOption {
  sectionTitle?: string,
  sectionDescription?: string,
  sectionColor?: string,
  menus: DropdownMenuOption[]
}

export interface DropdownMenuOption {
  backgroundColor?: string,
  brand: { brandLogo: string },
  header: string,
  description: string,
  link: string,
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

  @Input() options: DropdownColumnOption[] = [];

  closeDropdownInternalClicked = false;

  @ViewChild( 'toggleButton' ) toggleButton: ElementRef;
  @ViewChild( 'dropdownContent' ) dropdownContent: ElementRef;

  constructor(
      private themeService: ThemeService,
      private utilService: UtilService
  ) {
    this.brand = this.themeService.brand;
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  closeDropdown() {
    this.isDropdownOpen = false;
    this.closeDropdownInternalClicked = false;
  }

  closeDropDownInternal() {
    this.closeDropdownInternalClicked = true;
    this.utilService.delay( 500 ).then( () => {
      this.closeDropdown();
      console.log('closed');
    } );
  }
}
