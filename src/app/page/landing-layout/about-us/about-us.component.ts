import { Component } from '@angular/core';
import { TIME_LINE } from 'src/app/data/timeline/timeline.data';
import { EMPLOYEES } from 'src/app/data/about-us/employees.data'

@Component( {
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: [ './about-us.component.scss' ]
} )
export class AboutUsComponent {

  TIME_LINE = TIME_LINE;
  EMPLOYEES = EMPLOYEES;

  constructor() {
    // Intentionally blank
  }
}
