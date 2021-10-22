import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BLOG } from 'src/app/data/blog/brand.data';
import { URLS } from 'src/app/data/constant';
import { Blog } from 'src/app/model/blog/blog.model';

@Component({
  selector: 'app-blog-content-page',
  templateUrl: './blog-content-page.component.html',
  styleUrls: ['./blog-content-page.component.scss'],
})
export class BlogContentPageComponent implements OnInit {
  blog: Blog = {
    key: '',
    title: '',
    date: '',
    url: '',
  } as Blog;

  constructor(private route: ActivatedRoute, public router: Router) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (!params.blogKey) {
        this.router.navigate([URLS.notFound]);
        return;
      }

      let found: Blog = BLOG.find((b) => b.key === params.blogKey);
      this.blog = found;
    });
  }
}
