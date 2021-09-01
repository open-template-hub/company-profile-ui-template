import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { ThemeService } from '../../../service/theme/theme.service';

export interface DropdownColumnOption {
  sectionTitle?: string,
  sectionDescription?: string,
  sectionColor?: string
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

  isComingFromToggleEvent = false;

  @Input() isDropdownOpen = false;

  @Input() options: DropdownColumnOption[] = [];

  @Input() isActive = false;

  @ViewChild( 'toggleButton' ) toggleButton: ElementRef;
  @ViewChild( 'dropdownContent' ) dropdownContent: ElementRef;

  constructor(
      private themeService: ThemeService
  ) {
    this.brand = this.themeService.brand;
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  closeDropdown() {
    this.isDropdownOpen = false;
  }
}
