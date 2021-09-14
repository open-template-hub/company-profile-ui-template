import { Component, Input, OnInit } from '@angular/core';
import { CommandType } from 'src/app/enum/command-type.enum';
import { CommandLine } from 'src/app/model/product/product.model';

@Component({
  selector: 'app-command-line',
  templateUrl: './command-line.component.html',
  styleUrls: ['./command-line.component.scss'],
})
export class CommandLineComponent implements OnInit {
  @Input() commandLine: CommandLine;

  defaultCallback = () => {
    console.log('Animation completed for ', this.commandLine.command);
  };

  @Input() animationComplete?: any = this.defaultCallback;

  animatedText: string = '';
  counter: number = 0;

  constructor() {}

  ngOnInit(): void {
    this.animateCommand();
  }

  animateCommand = () => {
    if (this.counter < this.commandLine.command.length) {
      this.animatedText += this.commandLine.command.charAt(this.counter);
      this.counter++;
      setTimeout(this.animateCommand, 30);
    } else {
      this.animationComplete();
    }
  };
}
