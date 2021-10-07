import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../../../environments/environment';
import { environmentCommon } from '../../../../environments/environment-common';
import { Rate } from '../../../component/rate-bar/rate-bar.component';
import { PROFILE_IMG, URLS } from '../../../data/constant';
import { AuthToken } from '../../../model/auth/auth-token.model';
import { AuthenticationService } from '../../../service/auth/authentication.service';
import { BusinessLogicService } from '../../../service/business-logic/business-logic.service';
import { CategoryService } from '../../../service/category/category.service';
import { EventService } from '../../../service/event/event.service';
import { FileStorageService } from '../../../service/file-storage/file-storage.service';
import { FolloweeService } from '../../../service/followee/followee.service';
import { FollowerService } from '../../../service/follower/follower.service';
import { InformationService } from '../../../service/information/information.service';
import { LoadingService } from '../../../service/loading/loading.service';
import { ThemeService } from '../../../service/theme/theme.service';
import { UserActivityService } from '../../../service/user-activity/user-activity.service';

@Component( {
  selector: 'app-my-profile-page',
  templateUrl: './my-profile-page.component.html',
  styleUrls: [ './my-profile-page.component.scss' ]
} )
export class MyProfilePageComponent implements OnDestroy {

  currentUser: AuthToken;
  userInfo: any = {};

  environment = environment;
  environmentCommon = environmentCommon;

  profileImg = PROFILE_IMG;
  loading = false;
  loadingCount = false;
  loadingLessonsTaken = false;
  userInterests = [];
  numberOfEventsMade: number;
  numberOfEventsTaken: number;
  topContributor: number;

  rate = 0;
  rateObject: Rate;

  showBadge = false;
  URLS = URLS;

  followerCount: number;
  followeeCount: number;

  eventsInfo: any[] = [];
  lessonsInfo: any[] = [];
  colors: any[] = [];

  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = true;
  showYAxisLabel = false;

  eventsTakenXAxisLabel = '# of events taken';

  eventsXAxisLabel = '# of events.data.ts';

  eduMailPattern = '^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-.]+\.edu\.[a-z]{2}$';

  formattedRateNumber: string;

  constructor(
      private router: Router,
      private authenticationService: AuthenticationService,
      private loadingService: LoadingService,
      private businessLogicService: BusinessLogicService,
      private fileStorageService: FileStorageService,
      private informationService: InformationService,
      private categoryService: CategoryService,
      private followerService: FollowerService,
      private followeeService: FolloweeService,
      private eventService: EventService,
      private themeService: ThemeService,
      private userActivityService: UserActivityService ) {
    this.loadingCount = true;
    this.loadingLessonsTaken = true;

    this.authenticationService.currentUser.subscribe( currentUser => {
          this.currentUser = currentUser;
        }
    );

    this.businessLogicService.userInfo.subscribe( userInfo => {
      this.userInfo = userInfo;

      // check interests area defined before service calling.
      if ( this.userInfo?.payload?.interests ) {
        this.categoryService.getCategoriesFromId( this.userInfo?.payload?.interests ).subscribe( result => {
          this.userInterests = result;
        } );
      }

      if ( userInfo?.username ) {
        this.eventService.countUserEvents( userInfo.username ).subscribe( eventList => {
          this.eventsInfo = eventList;
          this.loadingCount = false;
        } );

        this.userActivityService.getEventsTaken( userInfo.username ).subscribe( eventList => {
          this.lessonsInfo = eventList;
          this.loadingLessonsTaken = false;
        } );

        this.followerService.count( userInfo.username ).subscribe( followerCount => {
          this.followerCount = followerCount[ 0 ].count;
        } );

        this.followeeService.count( userInfo.username ).subscribe( followeeCount => {
          this.followeeCount = followeeCount[ 0 ].count;
        } );

        this.userActivityService.getNumberOfEventsTaken( userInfo.username ).subscribe( result => {
          this.numberOfEventsTaken = result[ 0 ].numberOfEventsTaken;
        } );

        if ( userInfo.payload?.userProfileActivated ) {
          this.userActivityService.getNumberOfEventsMade( userInfo.username ).subscribe( result => {
            this.numberOfEventsMade = result.numberOfEventsMade;
          } );

          this.userActivityService.getContributorRate( userInfo.username ).subscribe( rate => {
            this.rateObject = {
              userRating: rate.userRating,
              numberOfRates: rate.numberOfRates
            };
          } );

          this.userActivityService.getTopContributors().subscribe( topContributors => {
            topContributors.forEach( ( value, index ) => {
              if ( value.username === userInfo.username ) {
                this.topContributor = index;
              }
            } );
          } );
        } else {
          this.numberOfEventsMade = undefined;
          this.rateObject = undefined;
          this.topContributor = undefined;
        }

        this.categoryService.getCategoriesFromId( this.userInfo.payload?.interests ).subscribe( result => {
          this.userInterests = result;
        } );
      }
    } );

    this.loadingService.sharedLoading.subscribe( loading => this.loading = loading );

    this.fileStorageService.sharedProfileImage.subscribe( profileImg => {
      if ( profileImg?.file?.data ) {
        this.profileImg = 'data:image/png;base64,' + profileImg.file.data;
      }
    } );
  }

  ngOnDestroy() {
    this.informationService.clearInformation();
  }

  goToUrl( url: string ) {
    window.open( url, '_blank' );
  }
}
