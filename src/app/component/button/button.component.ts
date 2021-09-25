import { Component, Input, TemplateRef } from '@angular/core';

export enum ButtonType {
  RoundedBox = 'button-rounded-box'
}

export enum ButtonClass {
  // Social themes
  Github = 'github',
  Theme = 'theme'
}

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() icon: TemplateRef<any>;
  @Input() text: TemplateRef<any>;

  @Input() buttonClass: ButtonClass;
  @Input() buttonType: ButtonType;

  @Input() defaultIconContent: string;

  constructor() {
    // Intentionally blank
  }
}
