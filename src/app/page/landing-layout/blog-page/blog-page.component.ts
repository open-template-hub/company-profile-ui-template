import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NAVIGATIONS } from 'src/app/data/navigation/navigation.data';
import { BLOG } from '../../../data/blog/blog.data';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.scss'],
})
export class BlogPageComponent {
  BLOG = BLOG;

  constructor(public router: Router) {}

  openBlog = (tag: string, key: string) => {
    this.router.navigate([NAVIGATIONS.blog.url + '/' + tag + '/' + key]);
  };
}
