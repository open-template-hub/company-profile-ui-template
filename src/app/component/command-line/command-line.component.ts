import { Component, Input, OnInit } from '@angular/core';
import { CommandLine } from 'src/app/model/product/product.model';

@Component( {
  selector: 'app-command-line',
  templateUrl: './command-line.component.html',
  styleUrls: [ './command-line.component.scss' ],
} )
export class CommandLineComponent implements OnInit {
  @Input() commandLine: CommandLine;
  animatedText = '';
  counter = 0;

  defaultCallback = () => {
    // Intentionally blank
  };

  @Input() animationComplete?: any = this.defaultCallback;

  ngOnInit(): void {
    this.animateCommand();
  }

  animateCommand = () => {
    if ( this.counter < this.commandLine.command.length ) {
      this.animatedText += this.commandLine.command.charAt( this.counter );
      this.counter++;
      setTimeout( this.animateCommand, this.commandLine.timeout );
    } else {
      this.animationComplete();
    }
  };
}
