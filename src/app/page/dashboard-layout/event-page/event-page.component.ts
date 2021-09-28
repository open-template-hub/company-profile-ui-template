import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PROFILE_IMG, URLS } from '../../../data/constant';
import { EventTypes } from '../../../data/event/events.data';
import { BusinessLogicService } from '../../../service/business-logic/business-logic.service';
import { EventService } from '../../../service/event/event.service';
import { FileStorageService } from '../../../service/file-storage/file-storage.service';

@Component( {
  selector: 'app-event-page',
  templateUrl: './event-page.component.html',
  styleUrls: [ './event-page.component.scss' ]
} )
export class EventPageComponent implements OnInit, OnDestroy {

  event;

  profileImg = PROFILE_IMG;
  PROFILE_IMG = PROFILE_IMG;
  isProfileImageLoading;

  URLS = URLS;
  completed = false;

  constructor(
      private route: ActivatedRoute,
      private eventService: EventService,
      private businessLogicService: BusinessLogicService,
      private fileStorageService: FileStorageService,
      private router: Router
  ) {
  }

  ngOnInit(): void {
    this.eventService.searchedEvents.subscribe( searchedEvent => {
      this.isProfileImageLoading = true;
      if ( searchedEvent && searchedEvent.length > 0 ) {
        this.event = searchedEvent[ 0 ];
        if ( new Date() > new Date( new Date( this.event.date ).getTime() + this.event.duration * 60000 ) ) {
          this.completed = true;
        } else {
          this.completed = false;
        }

        this.businessLogicService.getUser( this.event.user.username )
        .subscribe( visitedUserInfo => {
          if ( visitedUserInfo.payload?.profileImageId ) {
            this.fileStorageService.downloadVisitedProfileImage( visitedUserInfo.payload?.profileImageId ).subscribe( profileImg => {
              this.profileImg = 'data:image/png;base64,' + profileImg.file.data;
              this.isProfileImageLoading = false;
            } );
          }
        } );
      }
    } );

    this.route.queryParams.subscribe( params => {
      this.eventService.search( params.event_id, undefined, undefined,
          undefined, [], EventTypes.Searched ).subscribe( () => {
        // Intentionally blank
      }, () => {
        this.router.navigate( [ URLS.dashboard.learn ] );
      } );
    } );
  }

  ngOnDestroy() {
    this.eventService.resetEvents( EventTypes.Searched );
  }

  updateSearchedEvents( updatedEvent ) {
    this.event = updatedEvent;
  }

  fillForm() {
    this.router.navigate( [ URLS.dashboard.contribute ], { queryParams: { event_id: this.event._id, editable: true } } );
  }
}
