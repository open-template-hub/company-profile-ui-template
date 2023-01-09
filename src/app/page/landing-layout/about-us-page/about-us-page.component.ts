import { Component } from '@angular/core';
import {
  BRONZE_CONTRIBUTORS,
  DIAMOND_CONTRIBUTORS,
  GOLD_CONTRIBUTORS,
  PLATINUM_CONTRIBUTORS,
  SILVER_CONTRIBUTORS
} from 'src/app/data/contributor/contributor.data';
import { EMPLOYEES } from 'src/app/data/employee/employee.data';
import { OTH_TIME_LINE } from 'src/app/data/timeline/timeline.data';
import { environmentCommon } from '../../../../environments/environment-common';

@Component( {
  selector: 'app-about-us-page',
  templateUrl: './about-us-page.component.html',
  styleUrls: [ './about-us-page.component.scss' ],
} )
export class AboutUsPageComponent {
  OTH_TIME_LINE = OTH_TIME_LINE;
  EMPLOYEES = EMPLOYEES;
  DIAMOND_CONTRIBUTORS = DIAMOND_CONTRIBUTORS;
  PLATINUM_CONTRIBUTORS = PLATINUM_CONTRIBUTORS;
  GOLD_CONTRIBUTORS = GOLD_CONTRIBUTORS;
  SILVER_CONTRIBUTORS = SILVER_CONTRIBUTORS;
  BRONZE_CONTRIBUTORS = BRONZE_CONTRIBUTORS;

  websites = [];

  employeeAppHeroContents = [
    {
      text: $localize`:@@aboutUs.employeeAppHero.text:Team Behind the Open Template Hub`,
      level: 1,
    },
  ];
  contributorAppHeroContents = [
    {
      text: $localize`Open Source Contributors`,
      level: 2,
    },
  ];
  followUsAppHeroContents = [
    {
      text: $localize`:@@aboutUs.followUsAppHero.followText:Follow us on social media`,
      level: 2,
    },
    {
      text: $localize`:@@aboutUs.followUsAppHero.descriptionText:Minimizes your effort while building a new software business with our open source GitHub micro server templates and responsive web UI + mobile UI templates`,
    },
  ];
  historyOfUsAppHeroContents = [
    {
      text: $localize`:@@aboutUs.historyOfUsAppHero.othText:History of the Open Template Hub`,
      level: 2,
    },
    {
      text: $localize`:@@aboutUs.historyOfUsAppHero.othDescription:Minimizes your effort while building a new software business with our open source GitHub micro server templates and responsive web UI + mobile UI templates`,
    },
  ];
  contactInformationAppHeroContents = [
    {
      text: $localize`:@@aboutUs.contactInfoAppHero.contactInfoText:Contact Information`,
      level: 2,
    },
  ];

  constructor() {
    for ( const website in environmentCommon.company.social ) {
      if ( environmentCommon.company.social[ website ] && website !== 'npm' ) {
        this.websites.push( {
          name: environmentCommon.website[ website ].name,
          handle: environmentCommon.company.social[ website ],
          cssClass: environmentCommon.website[ website ].cssClass,
          url: this.getUrl( website ),
        } );
      }
    }
  }

  redirect( href: string ) {
    window.location.href = href;
  }

  private getUrl( website: string ) {
    let url = environmentCommon.website[ website ].url;

    if ( environmentCommon.website[ website ].companyUrl ) {
      url = environmentCommon.website[ website ].companyUrl;
    } else if ( environmentCommon.website[ website ].channelUrl ) {
      url = environmentCommon.website[ website ].channelUrl;
    }

    return url;
  }
}
