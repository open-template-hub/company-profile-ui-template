import { Component, Input, TemplateRef } from '@angular/core';
import { BRAND } from 'src/app/data/brand/brand.data';

@Component( {
  selector: 'app-doc-card',
  templateUrl: './doc-card.component.html',
  styleUrls: [ './doc-card.component.scss' ]
} )
export class DocCardComponent {

  @Input() docHeader: TemplateRef<any>;
  @Input() src: string;
  @Input() date: string;

  @Input() defaultHeaderContent: string;

  BRAND = BRAND;

  constructor() {
    // Intentionally blank
  }
}
