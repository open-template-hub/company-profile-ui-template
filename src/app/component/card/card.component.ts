import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { Ribbon } from '../../model/ribbon/ribbon.model';

@Component( {
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: [ './card.component.scss' ]
} )
export class CardComponent implements OnInit {
  @Input() header: TemplateRef<any>;
  @Input() body: TemplateRef<any>;
  @Input() footer: TemplateRef<any>;
  @Input() bottomWrapper: TemplateRef<any>;
  @Input() ribbon: Ribbon;

  constructor() {
  }

  ngOnInit(): void {
  }

}
