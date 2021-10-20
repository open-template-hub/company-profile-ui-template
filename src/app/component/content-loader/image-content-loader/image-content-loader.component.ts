import { Component, Input, OnInit } from '@angular/core';

@Component( {
  selector: 'app-image-content-loader',
  templateUrl: './image-content-loader.component.html',
  styleUrls: [ './image-content-loader.component.scss' ],
} )
export class ImageContentLoaderComponent implements OnInit {
  @Input() imageContentLoaderClass?: string;

  constructor() {
    /* Intentionally blank */
  }

  ngOnInit(): void {
    /* Intentionally blank */
  }
}
