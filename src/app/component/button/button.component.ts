import { Component, Input, TemplateRef } from '@angular/core';

export enum ButtonType {
  RoundedBox = 'button-rounded-box'
}

export enum ButtonClass {
  // Social themes
  Github = 'github',

  // App themes
  DefaultTheme = 'default-theme',
  Red = 'default-theme red-theme',
  Yellow = 'default-theme yellow-theme',
  Green = 'default-theme green-theme',

  Transparent = 'transparent-button',

  // Borders
  BorderAndFontByDefaultTheme = 'border-and-font'
}

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() icon: TemplateRef<any>;
  @Input() text: TemplateRef<any>;

  @Input() buttonClasses: ButtonClass[];
  @Input() buttonType: ButtonType;

  @Input() defaultIconContent: string;

  constructor() {
    // Intentionally blank
  }
}
