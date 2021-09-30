import { Component, Input, TemplateRef } from '@angular/core';
import { ThemeService } from '../../../service/theme/theme.service';

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

  brand = {
    brandLogo: ''
  };

  constructor( private themeService: ThemeService ) {
    this.brand = themeService.brand;
  }
}
