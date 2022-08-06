import { Contributor } from '../../model/contributor/contributor.model';

export const CONTRIBUTION_LEVELS = {
  diamond: 'Diamond Contributor',
  platinum: 'Platinum Contributor',
  gold: 'Gold Contributor',
  silver: 'Silver Contributor',
  bronze: 'Bronze Contributor',
}

export const CONTRIBUTORS: Contributor[] = [
  {
    profile: {
      name: '???',
      photoUri: '',
      level: CONTRIBUTION_LEVELS.diamond
    },
  },
];
