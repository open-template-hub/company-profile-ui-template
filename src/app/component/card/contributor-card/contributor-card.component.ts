import { Component, Input } from '@angular/core';
import { environment } from 'src/environments/environment';
import { environmentCommon } from 'src/environments/environment-common';
import { Contributor } from '../../../model/contributor/contributor.model';

@Component( {
  selector: 'app-contributor-card',
  templateUrl: './contributor-card.component.html',
  styleUrls: [ './contributor-card.component.scss' ],
} )
export class ContributorCardComponent {
  environment = environment;
  environmentCommon = environmentCommon;
  contributorPhotoLoaded = false;

  @Input() contributor: Contributor = {
    profile: {
      name: '',
      photoUri: '',
      level: ''
    },
  };

  constructor() {
    // Intentionally blank
  }

  setContributorPhotoLoaded = () => {
    this.contributorPhotoLoaded = true;
  };
}
