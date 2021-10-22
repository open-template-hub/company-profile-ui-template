import { Component } from '@angular/core';
import { EMPLOYEES } from 'src/app/data/employee/employee.data';
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

  employeeAppHeroContents = [
    { text: $localize`Team Behind the Open Template Hub`, level: 1 }
  ];
  followUsAppHeroContents = [
    { text: $localize`Follow us on social media`, level: 2 },
    { text: $localize`Minimizes your effort while building a new software business with our open source GitHub micro server templates and responsive web UI + mobile UI templates` }
  ];
  historyOfUsAppHerContents = [
    { text: $localize`History of the Open Template Hub`, level: 2 },
    { text: $localize`Minimizes your effort while building a new software business with our open source GitHub micro server templates and responsive web UI + mobile UI templates` }
  ];

  constructor() {
    for ( const website in environmentCommon.oth.social ) {
      if ( environmentCommon.oth.social[ website ] ) {
        this.websites.push( {
          name: website.split( /(?=[A-Z])/ ).join( ' ' ),
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
