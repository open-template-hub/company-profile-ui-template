import { Component, Input, TemplateRef } from '@angular/core';
import { Ribbon } from '../../model/ribbon/ribbon.model';

@Component( {
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: [ './card.component.scss' ]
} )
export class CardComponent {
  @Input() header: TemplateRef<any>;
  @Input() body: TemplateRef<any>;
  @Input() footer: TemplateRef<any>;
  @Input() bottomWrapper: TemplateRef<any>;
  @Input() ribbon: Ribbon;
  @Input() defaultHeaderContent: string;
  @Input() defaultBodyContent: string;
  @Input() defaultFooterContent: string;

  constructor() {
    // Intentionally blank
  }
}
