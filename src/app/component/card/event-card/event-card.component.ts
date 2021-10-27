import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { DEFAULT_RIBBON, EVENT_RIBBONS } from 'src/app/data/ribbon/ribbon.data';
import { URLS } from '../../../data/navigation/navigation.data';
import { BusinessLogicService } from '../../../service/business-logic/business-logic.service';

@Component( {
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: [ './event-card.component.scss' ]
} )
export class EventCardComponent implements OnInit {
  DEFAULT_RIBBON = DEFAULT_RIBBON;
  EVENT_RIBBONS = EVENT_RIBBONS;

  username: string;

  @Input() event: any;
  @Input() isPublicPage = false;
  @Input() isEditable = false;
  @Input() fillLayout = false;
  @Input() maxHeight = false;
  @Input() addMarginToDescription = false;
  @Input() profileImg;
  @Input() centeredTitle = false;
  @Input() showCalendar = true;
  @Input() markAsCompleted = false;
  @Input() inProgress = false;
  @Input() showHamburgerMenu = true;
  @Input() showRateBar = false;
  @Input() completed = false;

  @Output() itemIdForFillingForm = new EventEmitter<string>();
  @Output() markAsCompletedButtonClicked = new EventEmitter<string>();
  @Output() rateButtonClicked = new EventEmitter();

  constructor(
      private router: Router,
      private businessLogicService: BusinessLogicService
  ) {
  }

  ngOnInit(): void {
    this.businessLogicService.userInfo.subscribe( userInfo => {
      this.username = userInfo?.username;
    } );
  }

  routeToEvent() {
    this.router.navigate( [ URLS.dashboard.event ], { queryParams: { event_id: this.event._id } } );
  }

  emitIdForFillingForm( event ): void {
    this.itemIdForFillingForm.emit( event );
  }

  emitIdForCompletedButton( event ): void {
    this.markAsCompletedButtonClicked.emit( event );
  }
}
