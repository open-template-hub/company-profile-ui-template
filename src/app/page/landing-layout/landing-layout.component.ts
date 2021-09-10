import { Component } from '@angular/core';
import { LoadingService } from '../../service/loading/loading.service';

@Component( {
  selector: 'app-landing-layout',
  templateUrl: './landing-layout.component.html',
  styleUrls: [ './landing-layout.component.scss' ]
} )
export class LandingLayoutComponent {

  loading = false;

  constructor( private loadingService: LoadingService ) {
    this.loadingService.sharedLoading.subscribe( loading => this.loading = loading );
  }
}
