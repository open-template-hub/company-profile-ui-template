import { Component, Input } from '@angular/core';
import { LoadingService } from '../../../service/loading/loading.service';

@Component( {
  selector: 'app-social-button',
  templateUrl: './social-button.component.html',
  styleUrls: [ './social-button.component.scss' ]
} )
export class SocialButtonComponent {

  @Input() text = '';
  @Input() brand = 'angular';
  @Input() placeholderIcon: string = undefined;
  @Input() localImage = '';
  @Input() classType = 'top-right-bottom-left-rounded-box';
  @Input() flexStart = false;
  @Input() noTextStyle = false;
  @Input() isSmallLogo = false;

  selected = false;
  loading = false;

  constructor( private loadingService: LoadingService ) {
    this.loadingService.sharedLoading.subscribe( loading => this.loading = loading );
  }
}
