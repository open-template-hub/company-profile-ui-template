import { Component } from '@angular/core';
import { BLOG } from '../../../data/blog/brand.data';

@Component( {
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: [ './blog-page.component.scss' ]
} )
export class BlogPageComponent {

  BLOG = BLOG;

  constructor() {
    // Intentionally Blank
  }
}
