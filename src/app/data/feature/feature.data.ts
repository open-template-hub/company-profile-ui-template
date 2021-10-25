import { Feature } from 'src/app/model/feature/feature.model';

export const FEATURES: Feature[] = [
  {
    title: $localize`:@@featureData.microServices.title:Lightweight Microservices`,
    description: $localize`:@@featuresData.microServices.description:Do not lost on functional dependencies, you can only focus on your business. All other layers like authentication, payment, mail, storage, analytics are covered by us with extremely lightweight and configurable microservices. Always be safe with encrypted service communications. Order your out-of-transaction requests with message queues. Do not spend your resources on performance enhancements, enjoy fastest service response times.`,
    icon: 'fas fa-feather-alt',
  },
  {
    title: $localize`:@@featureData.compactStorage.title:Compact Storage`,
    description: $localize`:@@featuresData.compactStorage.description:Store your data efficiently and do not waste your time on your data architecture and performance analysis. Open Template Hub provides you efficient storage, orients and keeps your data in NOSQL and RDBMS, handles connection pools and management.`,
    icon: 'fas fa-database',
  },
  {
    title: $localize`:@@featuresData.reliableDesign.title:Reliable Design`,
    description: $localize`:@@featuresData.reliableDesign.description:Shout your business out to the world using responsive user interfaces with handy and highly customizable components.`,
    icon: 'fas fa-mobile',
  },
];
