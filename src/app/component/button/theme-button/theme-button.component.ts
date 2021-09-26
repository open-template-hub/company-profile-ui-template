import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ButtonClass, ButtonType } from '../../../component/button/button.component';

@Component({
  selector: 'app-theme-button',
  templateUrl: './theme-button.component.html',
  styleUrls: ['./theme-button.component.scss']
})
export class ThemeButtonComponent implements OnChanges {
  buttonType = ButtonType.RoundedBox
  @Input() buttonClasses: ButtonClass[] = [ ButtonClass.DefaultTheme ]

  @Input() buttonBrandIcon: string;
  @Input() buttonIcon: string;
  @Input() buttonText: string;

  constructor() { }

  ngOnChanges( changes: SimpleChanges ) {
    if ( this.buttonBrandIcon ) {
      console.log( Object.values( ButtonClass ).includes( this.buttonBrandIcon as ButtonClass ) )
      if ( Object.values( ButtonClass ).includes( this.buttonBrandIcon as ButtonClass ) ) {
        this.buttonClasses.push( this.buttonBrandIcon as ButtonClass )
      }
    }
  }
}
