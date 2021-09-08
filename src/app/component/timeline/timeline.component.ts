import { Component, Input } from '@angular/core';
import { TimeLine } from '../../model/timeline/timeline.model';
import { ThemeService } from '../../service/theme/theme.service';

@Component( {
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: [ './timeline.component.scss' ]
} )
export class TimelineComponent {

  @Input() timeline: TimeLine[] = [];

  brand = {
    brandLogo: ''
  };

  constructor( private themeService: ThemeService ) {
    this.brand = this.themeService.brand;
  }
}
