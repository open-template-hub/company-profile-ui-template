import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BRAND } from '../../../../data/brand/brand.data';

@Component( {
  selector: 'app-sign-up-success-page',
  templateUrl: './sign-up-success-page.component.html',
  styleUrls: [ './sign-up-success-page.component.scss' ]
} )
export class SignUpSuccessPageComponent implements OnInit {

  email = '';

  BRAND = BRAND;

  appHeroContents;

  constructor( private route: ActivatedRoute, public router: Router ) {
    // Intentionally blank
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe( params => {
      if ( params.email ) {
        this.email = params.email;
        this.appHeroContents = [
          {text: $localize `:@@signUpSuccess.appHero.1:Registration successful 🎉`, level: 2},
          {text: $localize `:@@signUpSuccess.appHero.2:Verification email sent to: ` + this.email}
        ]
      }
    } );
  }
}
