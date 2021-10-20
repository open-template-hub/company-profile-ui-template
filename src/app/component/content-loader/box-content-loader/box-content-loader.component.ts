import { Component, Input, OnInit } from '@angular/core';

@Component( {
  selector: 'app-box-content-loader',
  templateUrl: './box-content-loader.component.html',
  styleUrls: [ './box-content-loader.component.scss' ],
} )
export class BoxContentLoaderComponent implements OnInit {
  @Input() width?: string;
  @Input() height?: string;
  @Input() boxContentLoaderClass?: string;

  constructor() {
    /* Intentionally blank */
  }

  ngOnInit(): void {
    /* Intentionally blank */
  }
}
