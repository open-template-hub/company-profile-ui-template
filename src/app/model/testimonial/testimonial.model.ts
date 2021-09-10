export interface Testimonial {
  review: string;
  reviewer: {
    name: string;
    title: string;
    photoUri: string;
    social: {
      linkedIn: string;
      twitter: string;
    };
  };
  style: {
    themeColor: string;
  };
}
