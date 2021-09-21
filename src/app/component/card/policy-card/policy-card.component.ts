import { Component, Input, TemplateRef } from '@angular/core';

@Component( {
  selector: 'app-policy-card',
  templateUrl: './policy-card.component.html',
  styleUrls: [ './policy-card.component.scss' ]
} )
export class PolicyCardComponent {

  @Input() policyHeader: TemplateRef<any>;
  @Input() policyBody: TemplateRef<any>;

  @Input() defaultHeaderContent: string;
  @Input() defaultBodyContent: string;

  constructor() {
    // Intentionally blank
  }
}
