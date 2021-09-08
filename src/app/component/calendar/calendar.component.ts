import { Component, Input, OnChanges, Output, SimpleChanges, EventEmitter } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';

export interface CalendarEvent {
  id: string,
  title: string,
  backgroundColor: string,
  start: string,
  end: string
}

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnChanges {
  @Output() handleEventClick = new EventEmitter<any>();
  @Output() handleDateClick = new EventEmitter<any>();

  // callback function runs when months are changed by user.
  @Output() handleDatesSet = new EventEmitter<any>();

  @Input() calendarEvents: CalendarEvent[] = []

  calendarOptions: CalendarOptions

  ngOnChanges( changes: SimpleChanges ): void {
    this.createCalendar()
  }

  public createCalendar() {
    this.calendarOptions = {
      initialView: 'dayGridMonth',
      events: [...this.calendarEvents],
      dateClick: ( arg => {
        this.handleDateClick.emit( arg )
      }),
      eventClick: ( arg => {
        this.handleEventClick.emit( arg )
      } ),
      datesSet: ( data => {
        this.handleDatesSet.emit( data )
      } )
    }
  }
}
