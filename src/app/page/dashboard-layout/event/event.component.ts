import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BasicInfoService } from '../../../service/basic-info/basic-info.service';
import { EventService } from '../../../service/event/event.service';
import { FileStorageService } from '../../../service/file-storage/file-storage.service';
import { InformationService } from '../../../service/information/information.service';
import { EventTypes, PROFILE_IMG, URLS } from '../../../util/constant';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit, OnDestroy {

  event;

  profileImg = PROFILE_IMG;
  PROFILE_IMG = PROFILE_IMG;
  isProfileImageLoading;

  URLS = URLS;
  completed = false;

  constructor(
    private route: ActivatedRoute,
    private eventService: EventService,
    private basicInfoService: BasicInfoService,
    private fileStorageService: FileStorageService,
    private router: Router,
    private informationService: InformationService
  ) { }

  ngOnInit(): void {
    this.eventService.searchedEvents.subscribe( searchedEvent => {
      this.isProfileImageLoading = true;
      if ( searchedEvent && searchedEvent.length > 0 ) {
        this.event = searchedEvent[0];
        if ( new Date() > new Date( new Date( this.event.date ).getTime() + this.event.duration * 60000 ) ) {
          this.completed = true;
        } else {
          this.completed = false;
        }

        this.basicInfoService.getUser( this.event.user.username )
        .subscribe( visitedUserInfo => {
          if ( visitedUserInfo.payload?.profileImageId ) {
            this.fileStorageService.downloadVisitedProfileImage( visitedUserInfo.payload?.profileImageId ).subscribe( profileImg => {
              this.profileImg = 'data:image/png;base64,' + profileImg.file.data;
              this.isProfileImageLoading = false;
            } );
          }
        });
      }
    } );

    this.route.queryParams.subscribe( params => {
      this.eventService.search( params.event_id, undefined, undefined,
        undefined, [], EventTypes.Searched ).subscribe( () => {}, () => {
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
