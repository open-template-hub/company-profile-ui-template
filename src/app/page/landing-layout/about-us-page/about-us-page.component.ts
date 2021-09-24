import { Component } from '@angular/core';
import { OTH_TIME_LINE } from 'src/app/data/timeline/timeline.data';
import { EMPLOYEES } from 'src/app/data/employees/employees.data'

@Component( {
  selector: 'app-about-us-page',
  templateUrl: './about-us-page.component.html',
  styleUrls: [ './about-us-page.component.scss' ]
} )
export class AboutUsPageComponent {

  OTH_TIME_LINE = OTH_TIME_LINE;
  EMPLOYEES = EMPLOYEES;

  constructor() {
    // Intentionally blank
  }
}
