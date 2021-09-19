import { Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() headerTemplate: TemplateRef<any>;
  @Input() bodyTemplate: TemplateRef<any>;
  @Input() footerTemplate: TemplateRef<any>;
  @Input() bottomWrapperTemplate: TemplateRef<any>;

  constructor() { }

  ngOnInit(): void {
  }

}
