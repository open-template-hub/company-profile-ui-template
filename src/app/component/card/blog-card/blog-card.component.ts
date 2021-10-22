import { Component, Input, TemplateRef } from '@angular/core';
import { BRAND } from 'src/app/data/brand/brand.data';

@Component( {
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: [ './blog-card.component.scss' ]
} )
export class BlogCardComponent {

  @Input() blogHeader: TemplateRef<any>;
  @Input() src: string;
  @Input() date: string;

  @Input() defaultHeaderContent: string;

  BRAND = BRAND;

  constructor() {
    // Intentionally blank
  }
}
