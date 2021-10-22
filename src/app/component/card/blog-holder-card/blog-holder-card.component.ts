import { Component, Input } from '@angular/core';
import { Blog } from 'src/app/model/blog/blog.model';

@Component({
  selector: 'app-blog-holder-card',
  templateUrl: './blog-holder-card.component.html',
  styleUrls: ['./blog-holder-card.component.scss'],
})
export class BlogHolderCardComponent {
  @Input() blog: Blog = {
    title: '',
    date: '',
    url: '',
  } as Blog;

  constructor() {
    // Intentionally blank
  }
}
