import { Component } from '@angular/core';
import { DOCS } from 'src/app/data/doc/doc.data';

@Component( {
  selector: 'app-docs-page',
  templateUrl: './docs-page.component.html',
  styleUrls: [ './docs-page.component.scss' ]
} )
export class DocsPageComponent {

  DOCS = DOCS;

  constructor() {
    // Intentionally Blank
  }
}
