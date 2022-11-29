import { Feature } from 'src/app/model/feature/feature.model';

export const FEATURES: Feature[] = [
  {
    title: $localize`:@@featureData.microServices.title:Lightweight Microservices`,
    description: $localize`:@@featuresData.microServices.description:Do not lost on functional dependencies, you can only focus on your business. All other layers like authentication, payment, mail, storage, analytics are covered by us with extremely lightweight and configurable microservices. Always be safe with encrypted service communications.`,
    icon: 'fas fa-feather-alt',
  },
  {
    title: $localize`:@@featureData.compactStorage.title:Compact Storage`,
    description: $localize`:@@featuresData.compactStorage.description:Store your data efficiently and do not waste your time on your data architecture and performance analysis. Open Template Hub provides you efficient storage, orients and keeps your data in NOSQL and RDBMS, handles connection pools and management in an effective way.`,
    icon: 'fas fa-database',
  },
  {
    title: $localize`:@@featuresData.reliableDesign.title:Reliable Design`,
    description: $localize`:@@featuresData.reliableDesign.description:Shout out your business to the world using our responsive and user friendly user interface components. Customise them with your own needs to have unique and great user experiences to your clients.`,
    icon: 'fas fa-desktop',
  },
];
