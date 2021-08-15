import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ThemeService } from '../../../service/theme/theme.service';
import { QUOTES } from '../../../util/constant';

@Component( {
  selector: 'app-maintenance',
  templateUrl: './maintenance.component.html',
  styleUrls: [ './maintenance.component.scss', '../raw-landing-layout.component.scss' ]
} )
export class MaintenanceComponent implements OnInit {

  brand = {
    brandLogo: '',
  };

  selectedQuote = {
    quote: '',
    author: ''
  };

  topShadow = true;

  constructor(
      private route: ActivatedRoute,
      public router: Router,
      private themeService: ThemeService ) {

    this.brand = this.themeService.brand;
  }

  ngOnInit(): void {
    this.topShadow = this.route.snapshot.data.topShadow;

    const rand = Math.floor( Math.random() * 110 );
    this.selectedQuote = QUOTES[ rand ];
  }
}
