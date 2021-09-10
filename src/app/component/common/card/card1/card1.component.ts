import { Component, Input } from '@angular/core';
import { Ribbon } from '../../../../model/ribbon/ribbon.model';
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
  @Input() bottomWrapperColor = '';
  @Input() topWrapper = false;
  @Input() topWrapperInThemeColor = false;
  @Input() height = undefined;
  @Input() width = undefined;
  @Input() maxHeight = false;
  @Input() ribbon: Ribbon = { text: '', theme: '' };
  @Input() isCardContentOverflowVisible = false;
  @Input() topLayer = false;
  @Input() bottomLayer = false;
  @Input() topLayerMarginTop = 'initial';
  @Input() topLayerMinHeight = '250px';
  @Input() topLayerBackgroundColor = '';
  @Input() bottomLayerBackgroundColor = '';
  @Input() testimonialSizeActive = false;
  @Input() headerType = 'top-right-bottom-left-rounded-box';

  loading = false;

  constructor( private loadingService: LoadingService ) {
    this.loadingService.sharedLoading.subscribe( loading => this.loading = loading );
  }
}
