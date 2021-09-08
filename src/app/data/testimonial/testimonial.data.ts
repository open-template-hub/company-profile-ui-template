import { Testimonial } from '../../model/testimonial/testimonial.model';

export const TESTIMONIALS: Testimonial[] = [
  {
    review:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse in elit blandit, tempus risus vitae, elementum eros. Suspendisse nec orci at neque molestie dignissim. ',
    reviewer: {
      name: 'Furkan Yavuz',
      title: 'Co-Founder @ Open Template Hub',
      photoUri:
          'https://avatars0.githubusercontent.com/u/2248168?s=460&u=435ef6ade0785a7a135ce56cae751fb3ade1d126&v=4',
      social: {
        linkedIn: 'https://www.linkedin.com/in/furkanyavuz',
        twitter: 'https://twitter.com/furknyavuz',
      },
    },
    style: { themeColor: 'var(--warn)' },
  },
  {
    review:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse in elit blandit, tempus risus vitae, elementum eros. Suspendisse nec orci at neque molestie dignissim. ',
    reviewer: {
      name: 'Fatih Turker',
      title: 'Co-Founder @ Open Template Hub',
      photoUri:
          'https://avatars1.githubusercontent.com/u/2202179?s=460&u=261b1129e7106c067783cb022ab9999aad833bdc&v=4',
      social: {
        linkedIn: 'https://www.linkedin.com/in/fatihtrker',
        twitter: 'https://twitter.com/remoklify',
      },
    },
    style: { themeColor: 'var(--error)' },
  },
  {
    review:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse in elit blandit, tempus risus vitae, elementum eros. Suspendisse nec orci at neque molestie dignissim. ',
    reviewer: {
      name: 'Mert Sarac',
      title: 'Software Developer @ Open Template Hub',
      photoUri:
          'https://avatars1.githubusercontent.com/u/38442589?s=400&u=aa3cda11724fc297a0bfa6beb35c9be81687cf3c&v=4',
      social: {
        linkedIn: 'https://www.linkedin.com/in/mertlsarac',
        twitter: 'https://twitter.com/mertlsarac',
      },
    },
    style: { themeColor: 'var(--info)' },
  }
];
