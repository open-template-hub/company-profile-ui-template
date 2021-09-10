import { Component, Input } from '@angular/core';
import { LoadingService } from '../../../../service/loading/loading.service';

@Component( {
  selector: 'app-button1',
  templateUrl: './button1.component.html',
  styleUrls: [ './button1.component.scss' ]
} )
export class Button1Component {

  @Input() text = 'Button';
  @Input() classType = 'top-right-bottom-left-rounded-box';
  @Input() brandColor = false;
  @Input() brandLightColor = false;
  @Input() transparent = false;
  @Input() success = false;
  @Input() isContribute = false;
  @Input() icon;
  @Input() lighterContrast = false;
  @Input() hoverWithColor = true;
  @Input() mobileView = false;
  @Input() fixedWidth = false;
  @Input() isAttendee = false;
  @Input() isSleekButton = false;
  @Input() alwaysLight = false;
  @Input() alwaysDark = false;
  @Input() cursor = 'pointer';
  @Input() themeColor = '';
  @Input() disabled = false;
  @Input() selected = false;
  @Input() relativeToParent = false
  loading = false;

  constructor( private loadingService: LoadingService ) {
    this.loadingService.sharedLoading.subscribe( loading => this.loading = loading );
  }
}
