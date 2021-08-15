import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ThemeService } from '../../../service/theme/theme.service';

@Component( {
  selector: 'app-sign-up-success',
  templateUrl: './sign-up-success.component.html',
  styleUrls: [ './sign-up-success.component.scss', '../raw-landing-layout.component.scss' ]
} )
export class SignUpSuccessComponent implements OnInit {

  email = '';

  brand = {
    brandLogo: '',
  };

  constructor(
      private route: ActivatedRoute,
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
