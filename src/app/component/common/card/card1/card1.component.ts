import { Component, Input } from '@angular/core';
import { LoadingService } from '../../../../service/loading/loading.service';

@Component( {
  selector: 'app-card1',
  templateUrl: './card1.component.html',
  styleUrls: [ './card1.component.scss' ]
} )
export class Card1Component {

  @Input() title = 'Title';
  @Input() isSmall = false;
  @Input() isScrollable = false;
  @Input() headerProfileImg;
  @Input() subHeaderProfileImg;
  @Input() underHeaderProfileImg;
  @Input() enableHeader = true;
  @Input() enableHeaderFullImg = false;
  @Input() paddingContent = true;
  @Input() paddingTopContent = true;
  @Input() margin = true;
  @Input() shadow = true;
  @Input() isBackgroundColor = false;
  @Input() bottomWrapper = true;
  @Input() bottomWrapperInBrandColor = false;
  @Input() topWrapper = false;
  @Input() topWrapperInBrandColor = false;
  @Input() height = undefined;
  @Input() width = undefined;
  @Input() maxHeight = false;
  @Input() containsVideo = false;
  @Input() ribbon = { text: '', type: '' };
  @Input() isCardContentOverflowVisible = false;

  loading = false;

  constructor( private loadingService: LoadingService ) {
    this.loadingService.sharedLoading.subscribe( loading => this.loading = loading );
  }
}
