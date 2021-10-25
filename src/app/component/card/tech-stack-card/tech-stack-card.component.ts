import { Component, Input } from '@angular/core';
import { Image } from '../../../model/image/image.model';

@Component( {
  selector: 'app-tech-stack-card',
  templateUrl: './tech-stack-card.component.html',
  styleUrls: [ './tech-stack-card.component.scss' ]
} )
export class TechStackCardComponent {

  @Input() techStack: Image[] = [];

  constructor() {
    // Intentionally blank
  }
}
