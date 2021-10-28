import { Component, Input } from '@angular/core';
import { Doc } from 'src/app/model/doc/doc.model';

@Component({
  selector: 'app-doc-holder-card',
  templateUrl: './doc-holder-card.component.html',
  styleUrls: ['./doc-holder-card.component.scss'],
})
export class DocHolderCardComponent {
  @Input() doc: Doc = {
    title: '',
    date: '',
    imgUri: '',
    url: '',
    excerpt: '',
    tag: '',
  } as Doc;

  constructor() {
    // Intentionally blank
  }
}
