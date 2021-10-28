import { Employee } from '../../model/employee/employee.model';

export const EMPLOYEES: Employee[] = [
  {
    profile: {
      name: 'Furkan Yavuz',
      title: $localize `:@@employeesData.coFounder:Co-Founder`,
      bio: $localize`:@@employees.furkan.bio:Furkan is an experienced full-stack developer who has worked on various projects, including online payment solutions and fraud detection areas, in a well-known airline company. He\'s co-founded a startup to discover talents from the open-source community. After one year, Furkan successfully exited from his startup and then co-founded Open Template Hub.`,
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
      title: $localize `:@@employeesData.coFounder:Co-Founder`,
      bio: $localize`:@@employees.fatih.bio:Fatih is a young professional with wide-ranging experience in software design and technology. He worked several years on Finance and Telecom business areas. He is now a Founder and CEO at Remoklify. He also co-founded Open Template Hub.`,
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
      title: $localize `:@@employeesData.fullStackDeveloper:Full-Stack Developer`,
      bio: $localize`:@@employees.mert.bio:Mert is a new grad software engineer who has been experienced various technologies in his bachelor years. He worked on e-commercial and banking areas. Now, he is a full-stack developer at Open Template Hub and also working on native iOS applications.`,
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
      bio: $localize`:@@employees.???.bio:Would you like to join our team? Please feel free to reach us from info@opentemplatehub.com or from jobs page.`,
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
