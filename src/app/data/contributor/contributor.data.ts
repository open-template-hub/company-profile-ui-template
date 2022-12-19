import { Contributor } from '../../model/contributor/contributor.model';

export const CONTRIBUTION_LEVELS = {
  diamond: 'diamond',
  platinum: 'platinum',
  gold: 'gold',
  silver: 'silver',
  bronze: 'bronze',
};

export const DIAMOND_CONTRIBUTORS: Contributor[] = [];
export const PLATINUM_CONTRIBUTORS: Contributor[] = [];
export const GOLD_CONTRIBUTORS: Contributor[] = [
  {
    profile: {
      name: 'Kerim Alp Kaya',
      photoUri: 'https://avatars.githubusercontent.com/u/90132495?v=4',
      level: CONTRIBUTION_LEVELS.diamond,
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
      level: CONTRIBUTION_LEVELS.diamond,
      social: {
        linkedIn: 'https://www.linkedin.com/in/yunus-emre-yurtay-b3745316a/',
        github: 'https://github.com/emreyurtay',
      },
    },
  },
];
export const SILVER_CONTRIBUTORS: Contributor[] = [
  {
    profile: {
      name: 'Ulas Arda Burak',
      photoUri: 'https://media-exp1.licdn.com/dms/image/C4E03AQGVNBJ_v3PK5A/profile-displayphoto-shrink_800_800/0/1628159346378?e=1672876800&v=beta&t=8LxzKxKtm40VOTKLWrVVFziBzjBg1kf5UVF_hoVOX94',
      level: CONTRIBUTION_LEVELS.gold,
      social: {
        linkedIn: 'https://www.linkedin.com/in/ulasardaburak/',
        github: 'https://github.com/Zulk0rne1n',
      },
    },
  },
];
export const BRONZE_CONTRIBUTORS: Contributor[] = [
  {
    profile: {
      name: '???',
      photoUri: '',
      level: CONTRIBUTION_LEVELS.silver,
      social: {
        linkedIn: 'https://www.linkedin.com/company/open-template-hub',
        github: 'https://github.com/open-template-hub',
      },
    },
  },
];
