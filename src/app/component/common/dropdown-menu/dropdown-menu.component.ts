import { Component, ElementRef, Input, OnChanges, Renderer2, ViewChild } from '@angular/core';
import { ThemeService } from '../../../service/theme/theme.service';

export interface DropdownMenuOption {
  backgroundColor: string,
  brand: { brandLogo: string },
  header: string,
  description: string,
  link: string,
  hover?: boolean // this property only use on this class, do not set it from outside
}

@Component({
  selector: 'app-dropdown-menu',
  templateUrl: './dropdown-menu.component.html',
  styleUrls: ['./dropdown-menu.component.scss']
})
export class DropdownMenuComponent {
  isDropdownOpen = false
  brand = {
    brandLogo: '',
  };

  @Input() options: DropdownMenuOption[] = [
    {
      backgroundColor: 'rgba(255, 0, 0, 0.2)',
      brand: { brandLogo: '' },
      header: 'Open Template Hub',
      description: 'Open Template Hub is an organization that develops open source micro servers as templates including authentication server, payment server and more..',
      link: '/'
    }
  ]

  @ViewChild('toggleButton') toggleButton: ElementRef
  @ViewChild('dropdownContent') dropdownContent: ElementRef

  constructor(
    private themeService: ThemeService,
    private renderer: Renderer2
  ) {
    this.brand = this.themeService.brand

    this.renderer.listen('window', 'click', (e: Event) => {
      if( this.toggleButton.nativeElement.contains( e.target ) ) {
        this.toggleDropdown()
      } else if ( !this.dropdownContent?.nativeElement.contains( e.target ) ) {
        this.isDropdownOpen = false
      }
    } )
  }

  toggleDropdown() {
    console.log('test')
    this.isDropdownOpen = !this.isDropdownOpen
  }
}
