import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { ThemeService } from '../../../service/theme/theme.service';

export interface DropdownColumnOption {
  sectionTitle?: string,
  sectionColor?: string
  menus: DropdownMenuOption[]
}

export interface DropdownMenuOption {
  backgroundColor: string,
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
export class DropdownMenuComponent implements OnInit {
  brand = {
    brandLogo: '',
  };

  isComingFromToggleEvent = false;

  @Input() isDropdownOpen = false;
  @Input() toggleEvent: Observable<void>;

  @Input() options: DropdownColumnOption[] = [];

  @Input() menuType: 'top' | 'bottom' = 'top';
  @Input() isActive = false;

  @ViewChild( 'toggleButton' ) toggleButton: ElementRef;
  @ViewChild( 'dropdownContent' ) dropdownContent: ElementRef;

  constructor(
      private themeService: ThemeService,
      private renderer: Renderer2
  ) {
    this.brand = this.themeService.brand;

    this.renderer.listen( 'window', 'click', ( e: Event ) => {
      if ( this.menuType === 'top' ) {
        if ( this.toggleButton.nativeElement.contains( e.target ) ) {
          this.toggleDropdown();
        } else if ( !this.dropdownContent?.nativeElement.contains( e.target ) ) {
          this.isDropdownOpen = false;
        }
      } else if ( !this.isComingFromToggleEvent && !this.dropdownContent?.nativeElement.contains( e.target ) ) {
        this.isDropdownOpen = false;
      }

      this.isComingFromToggleEvent = false;
    } );
  }

  ngOnInit() {
    this.toggleEvent?.subscribe( () => {
      this.isComingFromToggleEvent = true;
      this.toggleDropdown();
    } );
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
    console.log( this.isDropdownOpen );
  }
}
