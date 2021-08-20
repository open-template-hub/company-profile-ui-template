import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { ThemeService } from '../../service/theme/theme.service';

@Component( {
  selector: 'app-landing-layout',
  templateUrl: './raw-landing-layout.component.html',
  styleUrls: [ './raw-landing-layout.component.scss' ]
} )
export class RawLandingLayoutComponent {

  darkTheme: string;

  environment = environment;

  constructor(
      private router: Router,
      private themeService: ThemeService
  ) {
    this.themeService.darkTheme.subscribe( darkTheme => {
      this.darkTheme = darkTheme;
    } );
  }
}
