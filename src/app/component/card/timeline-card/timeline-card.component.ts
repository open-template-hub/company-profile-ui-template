import { Component, Input } from '@angular/core';
import { TimeLineItem } from '../../../model/timeline/timeline.model';

@Component( {
  selector: 'app-timeline-card',
  templateUrl: './timeline-card.component.html',
  styleUrls: [ './timeline-card.component.scss' ]
} )
export class TimelineCardComponent {

  @Input() timelineItem: TimeLineItem;
  @Input() arrow: string;

  constructor() {
    // Intentionally blank
  }
}
