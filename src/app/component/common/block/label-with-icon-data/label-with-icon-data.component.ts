import { Component, Input } from '@angular/core';
import { URLS } from '../../../../util/constant';

@Component( {
  selector: 'app-label-with-icon-data',
  templateUrl: './label-with-icon-data.component.html',
  styleUrls: [ './label-with-icon-data.component.scss' ]
} )
export class LabelWithIconDataComponent {
  @Input() data = '';
  @Input() brand = '';
  @Input() user = '';
  @Input() solid = '';
  @Input() urlPrefix = 'http://';
  @Input() noMargin = '';
  @Input() isClickable = false;
  @Input() isClickableWithinApp = false;
  @Input() highlight = false;
  @Input() noMarginIcon = false;
  @Input() target = '_blank';
  @Input() urlData: string = undefined;
  @Input() queryParams: any = undefined;
  @Input() fixWidth = false;

  URLS = URLS;

}
