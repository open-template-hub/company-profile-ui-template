export interface Event {
  _id: string;
  attended: boolean;
  user: { username: string, email?: string };
  count: number;
  createdDate: string;
  date: string;
  title: string;
  isFeatured: boolean;
  isNew: boolean;
  isPremium: boolean;
  link: string;
  duration: number;
  payload: any;
  __v?: number;
}

export interface EventCount {
  _id: { category: any, subCategory?: any, leafCategory?: any };
  count: number;
}
