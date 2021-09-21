import { Component, OnInit } from '@angular/core';
import { EventService } from '../../../service/event/event.service';

@Component( {
  selector: 'app-showroom-page',
  templateUrl: './showroom-page.component.html',
  styleUrls: [ './showroom-page.component.scss' ]
} )
export class ShowroomPageComponent implements OnInit {

  events: any;

  constructor(
      private eventService: EventService
  ) {
  }

  ngOnInit(): void {
    this.eventService.search( undefined, undefined, new Date().toISOString(), undefined,
        [] ).subscribe( results => {
      this.events = results;
    } );
  }
}
