import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { URLS } from 'src/app/data/constant';
import { DOCS } from 'src/app/data/doc/doc.data';
import { Doc } from 'src/app/model/doc/doc.model';

@Component({
  selector: 'app-docs-content-page',
  templateUrl: './docs-content-page.component.html',
  styleUrls: ['./docs-content-page.component.scss'],
})
export class DocsContentPageComponent {
  URLS = URLS;

  doc: Doc = {
    key: '',
    title: '',
    date: '',
    url: '',
  } as Doc;

  constructor(private route: ActivatedRoute, public router: Router) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (!params.docKey) {
        this.router.navigate([URLS.notFound]);
        return;
      }

      let found: Doc = DOCS.find((b) => b.key === params.docKey);
      this.doc = found;
      console.log(this.doc.url);
    });
  }
}
