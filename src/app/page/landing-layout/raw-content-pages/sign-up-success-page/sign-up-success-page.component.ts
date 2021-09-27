import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ThemeService } from '../../../../service/theme/theme.service';

@Component( {
  selector: 'app-sign-up-success-page',
  templateUrl: './sign-up-success-page.component.html',
  styleUrls: [ './sign-up-success-page.component.scss' ]
} )
export class SignUpSuccessPageComponent implements OnInit {

  email = '';

  brand = {
    brandLogo: '',
  };

  constructor(
      private route: ActivatedRoute,
      public router: Router,
      private themeService: ThemeService ) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe( params => {
      if ( params.email ) {
        this.email = params.email;
      }
    } );

    this.brand = this.themeService.brand;
  }
}
