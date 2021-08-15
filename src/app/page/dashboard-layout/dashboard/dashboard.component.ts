import { formatDate } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../../../environments/environment';
import { CalendarEvent } from '../../../component/common/calendar/calendar.component';
import { Rate } from '../../../component/common/rate-bar/rate-bar.component';
import { AuthToken } from '../../../model/AuthToken';
import { AuthenticationService } from '../../../service/auth/authentication.service';
import { BasicInfoService } from '../../../service/basic-info/basic-info.service';
import { CategoryService } from '../../../service/category/category.service';
import { EventService } from '../../../service/event/event.service';
import { FileStorageService } from '../../../service/file-storage/file-storage.service';
import { FolloweeService } from '../../../service/followee/followee.service';
import { FollowerService } from '../../../service/follower/follower.service';
import { InformationService } from '../../../service/information/information.service';
import { LoadingService } from '../../../service/loading/loading.service';
import { UserActivityService } from '../../../service/user-activity/user-activity.service';
import { EventTypes, PROFILE_IMG, URLS } from '../../../util/constant';

@Component( {
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.scss' ]
} )
export class DashboardComponent implements OnInit, OnDestroy {

  currentUser: AuthToken;
  userInfo: any = {};
  environment = environment;
  profileImg = PROFILE_IMG;
  loading = false;
  userInterests = [];
  attendedEvents = [];
  myRecentlyCompletedEvents = [];
  myUpcomingEvents = [];
  unratedEvents = [];

  URLS = URLS;

  followerCount: number;
  followeeCount: number;

  rate = 0;
  formattedRateNumber: string;
  numberOfRate: number;

  rateObject: Rate;

  numberOfEventsMade: number;
  numberOfEventsTaken: number;
  topContributor: number;

  calendarEvents: CalendarEvent[] = []
  events: CalendarEvent[] = []

  constructor(
      private router: Router,
      private authenticationService: AuthenticationService,
      private loadingService: LoadingService,
      private basicInfoService: BasicInfoService,
      private fileStorageService: FileStorageService,
      private informationService: InformationService,
      private categoryService: CategoryService,
      private followerService: FollowerService,
      private followeeService: FolloweeService,
      private eventService: EventService,
      private userActivityService: UserActivityService
  ) {
    this.authenticationService.currentUser.subscribe( currentUser => {
          this.currentUser = currentUser;
        }
    );

    this.basicInfoService.userInfo.subscribe( userInfo => {
      this.userInfo = userInfo;

      // check interests area defined before service calling.
      if ( this.userInfo?.payload?.interests ) {
        // this.categoryService.getCategoriesFromId( this.userInfo?.payload?.interests ).subscribe( result => {
        //  this.userInterests = result;
        // } );
      }

      if ( userInfo?.username ) {
        this.userActivityService.getNumberOfEventsTaken( userInfo.username ).subscribe( result => {
          this.numberOfEventsTaken = result[0].numberOfEventsTaken
        })

        if ( userInfo.payload?.userProfileActivated ) {
          this.userActivityService.getNumberOfEventsMade( userInfo.username ).subscribe( result => {
            this.numberOfEventsMade = result.numberOfEventsMade
          } )

          this.userActivityService.getContributorRate( userInfo.username ).subscribe( rate => {
            this.rateObject = {
              userRating: rate.userRating,
              numberOfRates: rate.numberOfRates
            }
          })

          this.userActivityService.getTopContributors().subscribe( topContributors => {
            topContributors.forEach( ( value, index ) => {
              if( value.username === userInfo.username ) {
                this.topContributor = index;
              }
            } );
          })
        } else {
          this.numberOfEventsMade = undefined
          this.rateObject = undefined
          this.topContributor = undefined
        }
      }
    } );

    this.loadingService.sharedLoading.subscribe( loading => this.loading = loading );

    this.basicInfoService.me()
    .subscribe( userInfo => {
          this.userInfo = userInfo;

          if ( !this.userInfo.payload ) {
            this.basicInfoService.createMyInfo()
            .subscribe( () => {
                  this.router.navigate( [ URLS.settings.welcome ] );
                }
            );
          } else {
            this.followerService.count( userInfo.username ).subscribe( followerCount => {
              this.followerCount = followerCount[ 0 ].count;
            } );

            this.followeeService.count( userInfo.username ).subscribe( followeeCount => {
              this.followeeCount = followeeCount[ 0 ].count;
            } );

            this.fetchUnratedCompletedEvents()

            this.categoryService.getCategoriesFromId( this.userInfo?.payload?.interests ).subscribe( result => {
              this.userInterests = result;
            } );

            if ( this.userInfo?.payload?.profileImageId ) {
              this.fileStorageService.downloadProfileImage( this.userInfo.payload.profileImageId ).subscribe();
            }

            const userInterests = userInfo?.payload?.interests;
            const categories: any[] = [];

            if ( userInterests && userInterests.length > 0 ) {
              for ( const interest of userInterests ) {
                categories.push(
                    {
                      category: interest.category,
                      subCategory: interest.subCategory,
                      leafCategory: interest.leafCategory
                    }
                );
              }
            }

            this.eventService.initSearchEvents( categories );
          }
        }
    );

    this.eventService.attendedEvents.subscribe( attendedEvents => {
      this.attendedEvents = attendedEvents;
    } );

    this.eventService.getAttendedEvents().subscribe();

    this.fileStorageService.sharedProfileImage.subscribe( profileImg => {
      if ( profileImg?.file?.data ) {
        this.profileImg = 'data:image/png;base64,' + profileImg.file.data;
      }
    } );
  }

  updateCalendar( events: any[], backgroundColor: 'red' | 'blue' ) {
    if ( events === null ) { return }

    events.forEach( (event, index) => {
      const start = formatDate( new Date( event.date ), 'yyyy-MM-dd HH:mm', 'en-US' );
      const end = formatDate( new Date( new Date( event.date ).getTime() + event.duration * 60000 ), 'yyyy-MM-dd HH:mm', 'en-US' );
      this.calendarEvents.push( { id: event._id, title: event.title, start, end, backgroundColor } )
      this.events = [...this.calendarEvents]
    });
  }

  datesSet( data ) {
    this.calendarEvents = []
    const startDate = data.start.toDateString()
    const endDate = data.end.toDateString()
    this.getUserEventsWithDate( startDate, endDate )
    this.getAttendedEventsWithDate( startDate, endDate )
  }

  ngOnInit(): void {
    this.getUserEvents();
  }

  getUserEvents() {
    this.eventService.me( 'true' )
    .subscribe( myEvents => {
      this.myUpcomingEvents = myEvents;
    } );

    this.eventService.me('false')
    .subscribe( myRecentlyCompletedEvents => {
      this.myRecentlyCompletedEvents = myRecentlyCompletedEvents
    } )
  }

  getUserEventsWithDate( startDate: string, endDate: string ) {
    this.eventService.me( 'false', 'false', startDate, endDate ).subscribe( events => {
      this.updateCalendar( events, 'red' )
    } )
  }

  getAttendedEventsWithDate( startDate: string, endDate: string ) {
    this.eventService.getAttendedEvents( startDate, endDate ).subscribe( events => {
      this.updateCalendar( events, 'blue' )
    } )
  }

  ngOnDestroy() {
    this.informationService.clearInformation();
    this.eventService.resetEvents( EventTypes.Attended );
  }

  // handleDateClick(arg) {}

  handleEventClick(arg) {
    this.router.navigate( [ URLS.dashboard.event ], { queryParams: { event_id: arg.event.id } } );
  }

  goToUrl( url: string ) {
    window.open( url, '_blank' );
  }

  fillForm(id: string) {
    this.router.navigate( [ URLS.dashboard.contribute ], { queryParams: { event_id: id, editable: true } } );
  }

  markAsCompletedButtonClicked( event: string ) {
    // remove the item from recentlyPassedEvents
    this.myRecentlyCompletedEvents.forEach( ( item, index ) => {
      if ( item._id === event ) {
        this.myRecentlyCompletedEvents.splice( index, 1 )
      }
    } )

    // refresh passedEvents
    this.eventService.me('false', 'true' )
    .subscribe( myPassedEvents => {
      this.myUpcomingEvents = myPassedEvents
    })
  }

  handleDateClick(arg) { console.log(arg +  ' clicked') }

  fetchUnratedCompletedEvents() {
    this.userActivityService.getUnratedCompletedEvents().subscribe( unratedEvents => {
      this.unratedEvents = unratedEvents[0].completedEvents
    } )
  }
}
