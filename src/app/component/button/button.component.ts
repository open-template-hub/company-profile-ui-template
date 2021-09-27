import { Component, Input, TemplateRef } from '@angular/core';

export const ButtonClasses = {

  defaultTheme: 'default-theme',
  red: 'red-theme',
  yellow: 'default-theme yellow-theme',
  green: 'default-theme green-theme',
  blue: 'default-theme blue-theme',
  orange: 'default-theme orange-theme',
  purple: 'default-theme purple-theme',

  roundedBox: 'button-rounded-box',

  transparent: 'transparent-button',

  // Borders
  borderAndFontByDefaultTheme: 'border-and-font',

  // Shadows
  selectedButtonShadow: 'selected-button-shadow',

  // Dark Light Mode
  disableLightMode: 'disable-light-mode',
  disableDarkMode: 'disable-dark-mode'
};

@Component( {
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: [ './button.component.scss' ]
} )
export class ButtonComponent {
  @Input() iconTemplate: TemplateRef<any>;
  @Input() textTemplate: TemplateRef<any>;

  @Input() buttonClasses: string[];

  @Input() icon: string;
  @Input() text: string;

  constructor() {
    // Intentionally blank
  }
}
