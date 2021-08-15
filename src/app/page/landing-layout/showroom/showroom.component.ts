import { Component, OnInit } from '@angular/core';
import { EventService } from '../../../service/event/event.service';

@Component( {
  selector: 'app-showroom',
  templateUrl: './showroom.component.html',
  styleUrls: [ './showroom.component.scss' ]
} )
export class ShowroomComponent implements OnInit {

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
