import { Component, Input, OnInit } from '@angular/core';

@Component( {
  selector: 'app-text-content-loader',
  templateUrl: './text-content-loader.component.html',
  styleUrls: [ './text-content-loader.component.scss' ],
} )
export class TextContentLoaderComponent implements OnInit {
  @Input() size: string;

  constructor() {
    /* Intentionally blank */
  }

  ngOnInit(): void {
    /* Intentionally blank */
  }
}
