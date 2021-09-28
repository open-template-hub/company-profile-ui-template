import { Component, Input, TemplateRef } from '@angular/core';

export const ButtonClasses = {

  roundedBox: 'button-rounded-box',

  transparent: 'transparent-button',

  // Borders
  borderAndFontByDefaultTheme: 'border-and-font',

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
