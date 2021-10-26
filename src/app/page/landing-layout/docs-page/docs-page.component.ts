import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DOCS } from 'src/app/data/doc/doc.data';
import { NAVIGATIONS } from 'src/app/data/navigation/navigation.data';

@Component({
  selector: 'app-docs-page',
  templateUrl: './docs-page.component.html',
  styleUrls: ['./docs-page.component.scss'],
})
export class DocsPageComponent {
  DOCS = DOCS;
  constructor(public router: Router) {}

  openDoc = (tag: string, key: string) => {
    this.router.navigate([NAVIGATIONS.docs.url + '/' + tag + '/' + key]);
  };
}
