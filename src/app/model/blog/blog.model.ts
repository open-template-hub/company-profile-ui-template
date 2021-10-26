import { Employee } from '../employee/employee.model';

export interface Blog {
  key: string;
  url: string;
  date: string;
  title: string;
  excerpt: string;
  author: Employee;
  tag: string;
}
