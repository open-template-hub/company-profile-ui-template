import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ThemeService } from '../../service/theme/theme.service';

@Component( {
  selector: 'app-splash-layout',
  templateUrl: './splash-layout.component.html',
  styleUrls: [ './splash-layout.component.scss' ]
} )
export class SplashLayoutComponent {

  darkTheme: string;

  constructor(
      private router: Router,
      private themeService: ThemeService
  ) {
    this.themeService.darkTheme.subscribe( darkTheme => {
      this.darkTheme = darkTheme;
    } );
  }
}
