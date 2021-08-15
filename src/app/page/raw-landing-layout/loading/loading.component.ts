import { Component } from '@angular/core';
import { LoadingService } from '../../../service/loading/loading.service';
import { ThemeService } from '../../../service/theme/theme.service';

@Component( {
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: [ './loading.component.scss' ]
} )
export class LoadingComponent {
  darkTheme: string;

  brand = {
    brandLogo: '',
  };


  constructor( private loadingService: LoadingService,
      private themeService: ThemeService ) {
    this.themeService.darkTheme.subscribe( darkTheme => {
      this.darkTheme = darkTheme;
    } );

    this.brand = this.themeService.brand;
  }
}
