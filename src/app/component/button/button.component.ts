import { Component, Input, TemplateRef } from '@angular/core';

export enum ButtonType {
  RoundedBox = 'button-rounded-box'
}

export enum ButtonClass {
  // Social themes
  Github = 'github',

  // App themes
  DefaultTheme = 'default-theme',
  red = 'default-theme red-theme',
  yellow = 'default-theme yellow-theme',
  green = 'default-theme green-theme',
  blue = 'default-theme blue-theme',
  orange = 'default-theme orange-theme',
  purple = 'default-theme purple-theme',

  Transparent = 'transparent-button',

  // Borders
  BorderAndFontByDefaultTheme = 'border-and-font',

  // Shadows
  SelectedButtonShadow = 'selected-button-shadow',

  // Dark Light Mode
  DisableLightMode = 'disable-light-mode',
  DisableDarkMode = 'disable-dark-mode'
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
