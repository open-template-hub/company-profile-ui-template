import { Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component( {
  selector: 'app-content-loader',
  templateUrl: './content-loader.component.html',
  styleUrls: [ './content-loader.component.scss' ],
} )
export class ContentLoaderComponent implements OnInit {
  @Input() contentLoaderClass?: string;
  @Input() contentTemplate: TemplateRef<any>;

  constructor() {
    /* Intentionally blank */
  }

  ngOnInit(): void {
    /* Intentionally blank */
  }
}
