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

  constructor() {}

  ngOnInit(): void {}
}
