import { Component, Input } from '@angular/core';
import { StepTimeLineItem } from 'src/app/model/timeline/step-timeline.model';

@Component({
  selector: 'app-step-timeline-card',
  templateUrl: './step-timeline-card.component.html',
  styleUrls: ['./step-timeline-card.component.scss'],
})
export class StepTimelineCardComponent {
  @Input() step: StepTimeLineItem;
  @Input() rotation: string;
  @Input() num: number;

  constructor() {
    // Intentionally blank
  }
}
