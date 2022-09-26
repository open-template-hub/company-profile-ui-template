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
      name: 'Kerim Alp Kaya',
      photoUri: 'https://avatars.githubusercontent.com/u/90132495?v=4',
      level: CONTRIBUTION_LEVELS.silver,
      social: {
        linkedIn: 'https://www.linkedin.com/in/kerimalpkaya/',
        github: 'https://github.com/kerimalp',
      },
    },
  },
  {
    profile: {
      name: 'Emre Yurtay',
      photoUri: 'https://avatars.githubusercontent.com/u/111579804?v=4',
      level: CONTRIBUTION_LEVELS.silver,
      social: {
        linkedIn: 'https://www.linkedin.com/in/yunus-emre-yurtay-b3745316a/',
        github: 'https://github.com/emreyurtay',
      },
    },
  },
  {
    profile: {
      name: '???',
      photoUri: '',
      level: CONTRIBUTION_LEVELS.bronze,
      social: {
        linkedIn: 'https://www.linkedin.com/company/open-template-hub',
        github: 'https://github.com/open-template-hub',
      },
    },
  },
];
