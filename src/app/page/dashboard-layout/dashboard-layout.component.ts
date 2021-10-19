import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingService } from '../../service/loading/loading.service';
import { ThemeService } from '../../service/theme/theme.service';

@Component( {
  selector: 'app-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: [ './dashboard-layout.component.scss' ]
} )
export class DashboardLayoutComponent {

  loading = false;

  sideNavClosed = 'false';

  constructor(
      private router: Router,
      private themeService: ThemeService,
      private loadingService: LoadingService
  ) {
    this.loadingService.sharedLoading.subscribe( loading => this.loading = loading );
    this.themeService.sideNavClosed.subscribe( sideNavClosed => this.sideNavClosed = sideNavClosed );
  }
}
