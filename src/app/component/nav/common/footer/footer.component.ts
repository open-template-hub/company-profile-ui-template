import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { environmentCommon } from 'src/environments/environment-common';
import { URLS } from '../../../../data/constant';
import { ThemeService } from '../../../../service/theme/theme.service';

@Component( {
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: [ './footer.component.scss' ]
} )
export class FooterComponent {

  @Input()
  hideShadow = false;
  @Input()
  popupPadding = false;

  brand = {
    brandLogo: '',
  };

  appVersion = '1.0.0';

  environment = environment;
  environmentCommon = environmentCommon;
  URLS = URLS;

  constructor( private router: Router,
      private themeService: ThemeService
  ) {
    this.brand = this.themeService.brand;
    this.appVersion = this.themeService.appVersion;
  }
}
