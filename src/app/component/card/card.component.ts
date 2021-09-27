import { Component, Input, TemplateRef } from '@angular/core';
import { Ribbon } from '../../model/ribbon/ribbon.model';

@Component( {
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: [ './card.component.scss' ]
} )
export class CardComponent {
  @Input() headerTemplate: TemplateRef<any>;
  @Input() bodyTemplate: TemplateRef<any>;
  @Input() footerTemplate: TemplateRef<any>;
  @Input() bottomWrapperTemplate: TemplateRef<any>;

  @Input() cardClass: string;

  @Input() header: string;
  @Input() body: string;
  @Input() footer: string;

  @Input() ribbon: Ribbon;

  constructor() {
    // Intentionally blank
  }
}
