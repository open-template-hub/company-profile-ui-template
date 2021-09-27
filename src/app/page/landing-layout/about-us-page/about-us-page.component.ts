import { Component } from '@angular/core';
import { EMPLOYEES } from 'src/app/data/employees/employees.data';
import { OTH_TIME_LINE } from 'src/app/data/timeline/timeline.data';
import { environmentCommon } from '../../../../environments/environment-common';

@Component( {
  selector: 'app-about-us-page',
  templateUrl: './about-us-page.component.html',
  styleUrls: [ './about-us-page.component.scss' ]
} )
export class AboutUsPageComponent {

  OTH_TIME_LINE = OTH_TIME_LINE;
  EMPLOYEES = EMPLOYEES;

  websites = [];

  constructor() {
    for ( const website in environmentCommon.oth.social ) {
      if ( environmentCommon.oth.social[ website ] ) {
        this.websites.push( {
          name: website,
          handle: environmentCommon.oth.social[ website ],
          cssClass: environmentCommon.website[ website ].cssClass,
          url: environmentCommon.website[ website ].companyUrl ?
              environmentCommon.website[ website ].companyUrl :
              environmentCommon.website[ website ].url
        } );
      }
    }
  }

  redirect( href: string ) {
    window.location.href = href;
  }
}
