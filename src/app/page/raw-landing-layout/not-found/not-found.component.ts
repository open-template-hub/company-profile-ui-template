import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ThemeService } from '../../../service/theme/theme.service';
import { QUOTES } from '../../../util/constant';

@Component( {
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: [ './not-found.component.scss', '../raw-landing-layout.component.scss' ]
} )
export class NotFoundComponent implements OnInit {

  brand = {
    brandLogo: '',
  };

  selectedQuote = {
    quote: '',
    author: ''
  };

  constructor(
      public router: Router,
      private themeService: ThemeService ) {
    this.brand = this.themeService.brand;
  }

  ngOnInit(): void {
    const rand = Math.floor( Math.random() * 110 );
    this.selectedQuote = QUOTES[ rand ];
  }
}
