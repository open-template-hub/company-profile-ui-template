import { Employee } from '../../model/employee/employee.model';

export const EMPLOYEES: Employee[] = [
  {
    profile: {
      name: 'Furkan Yavuz',
      title: $localize `:@@employeesData.coFounder:Co-Founder`,
      photoUri:
          'https://avatars0.githubusercontent.com/u/2248168?s=460&u=435ef6ade0785a7a135ce56cae751fb3ade1d126&v=4',
      social: {
        linkedIn: 'https://www.linkedin.com/in/furkanyavuz',
        twitter: 'https://twitter.com/furknyavuz',
        github: 'https://github.com/furknyavuz',
        mail: 'mailto:info@opentemplatehub.com'
      },
    }
  },
  {
    profile: {
      name: 'Fatih Turker',
      title: ':@@employeesData.coFounder:Co-Founder',
      photoUri:
          'https://avatars1.githubusercontent.com/u/2202179?s=460&u=261b1129e7106c067783cb022ab9999aad833bdc&v=4',
      social: {
        linkedIn: 'https://www.linkedin.com/in/fatihtrker',
        twitter: 'https://twitter.com/remoklify',
        github: 'https://github.com/fatihturker',
        mail: 'mailto:info@opentemplatehub.com'
      },
    }
  },
  {
    profile: {
      name: 'Mert Sarac',
      title: ':@@employeesData.fullStackDeveloper:Full-Stack Developer',
      photoUri:
          'https://avatars1.githubusercontent.com/u/38442589?s=400&u=aa3cda11724fc297a0bfa6beb35c9be81687cf3c&v=4',
      social: {
        linkedIn: 'https://www.linkedin.com/in/mertlsarac',
        twitter: 'https://twitter.com/mertlsarac',
        github: 'https://github.com/mertlsarac',
        mail: 'mailto:info@opentemplatehub.com'
      },
    }
  },
  {
    profile: {
      name: '???',
      title: $localize `:@@employeesData.joinOurTeam:Join our team`,
      photoUri:
          '',
      social: {
        linkedIn: 'https://www.linkedin.com/company/open-template-hub',
        twitter: 'https://twitter.com/opentemplatehub',
        github: 'https://github.com/open-template-hub',
        mail: 'mailto:info@opentemplatehub.com'
      },
    }
  }
];
