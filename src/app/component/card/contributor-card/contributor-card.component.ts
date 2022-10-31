import { Component, Input } from '@angular/core';
import { environment } from 'src/environments/environment';
import { environmentCommon } from 'src/environments/environment-common';
import { CONTRIBUTION_LEVELS } from '../../../data/contributor/contributor.data';
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
  CONTRIBUTION_LEVELS = CONTRIBUTION_LEVELS;

  @Input() contributor: Contributor = {
    profile: {
      name: '',
      photoUri: '',
      level: '',
      social: {}
    },
  };

  constructor() {
    // Intentionally blank
  }

  setContributorPhotoLoaded = () => {
    this.contributorPhotoLoaded = true;
  };
}
