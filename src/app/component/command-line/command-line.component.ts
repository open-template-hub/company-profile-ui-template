import { Component, Input, OnInit } from '@angular/core';
import { CommandType } from 'src/app/enum/command-type.enum';

@Component({
  selector: 'app-command-line',
  templateUrl: './command-line.component.html',
  styleUrls: ['./command-line.component.scss'],
})
export class CommandLineComponent implements OnInit {
  @Input() command: string = '';
  @Input() type: CommandType = CommandType.Request;

  defaultCallback = () => {
    console.log('Animation completed for ', this.command);
  };

  @Input() animationComplete?: any = this.defaultCallback;

  animatedText: string = '';
  counter: number = 0;

  constructor() {}

  ngOnInit(): void {
    this.animateCommand();
  }

  animateCommand = () => {
    if (this.counter < this.command.length) {
      this.animatedText += this.command.charAt(this.counter);
      this.counter++;
      setTimeout(this.animateCommand, 30);
    } else {
      this.animationComplete();
    }
  };
}
