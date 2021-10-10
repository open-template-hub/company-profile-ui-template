import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-led',
  templateUrl: './led.component.html',
  styleUrls: ['./led.component.scss']
})
export class LedComponent implements OnInit {

  @Input() color: 'green' | 'red' | 'yellow' | 'blue' | '' = 'yellow';

  constructor() { }

  ngOnInit(): void {
  }

}
