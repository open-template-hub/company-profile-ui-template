import { Component } from '@angular/core';
import { TIME_LINE } from 'src/app/data/timeline/timeline.data';

@Component( {
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: [ './about-us.component.scss' ]
} )
export class AboutUsComponent {

  TIME_LINE = TIME_LINE;

  constructor() {
    // Intentionally blank
  }
}
