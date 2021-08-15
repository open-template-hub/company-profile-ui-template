import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from '../../../../environments/environment';
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
import { ThemeService } from '../../../service/theme/theme.service';
import { UserActivityService } from '../../../service/user-activity/user-activity.service';
import { PROFILE_IMG, URLS } from '../../../util/constant';

@Component( {
  selector: 'app-public-profile',
  templateUrl: './public-profile.component.html',
  styleUrls: [ './public-profile.component.scss' ]
} )
export class PublicProfileComponent implements OnInit, OnDestroy {

  currentUser: AuthToken;
  currentUserInfo: any;
  environment = environment;
  profileImg = PROFILE_IMG;
  pageLoading = false;
  userInfo: any = {};
  isFollowing: boolean = null;
  username = '';
  userInterests = [];
  followerCount: number;
  followeeCount: number;

  numberOfEventsMade: number;
  numberOfEventsTaken: number;
  topContributor: number;

  loading = false;
  loadingCount = false;
  loadingLessonsTaken = false;

  isPublic = false;
  URLS = URLS;

  eventsInfo: any[] = [];
  lessonsInfo: any[] = [];

  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = true;
  showYAxisLabel = false;

  rate = 0;
  rateObject: Rate;
  formattedRateNumber: string;
  numberOfRate: number;
  colorScheme = {
    domain: [
      ''
    ]
  };

  eventsTakenXAxisLabel = '# of events taken';

  eventsXAxisLabel = '# of events.ts';

  constructor(
      private router: Router,
      private route: ActivatedRoute,
      private authenticationService: AuthenticationService,
      private loadingService: LoadingService,
      private basicInfoService: BasicInfoService,
      private fileStorageService: FileStorageService,
      private informationService: InformationService,
      private categoryService: CategoryService,
      private followerService: FollowerService,
      private followeeService: FolloweeService,
      private eventService: EventService,
      private userActivityService: UserActivityService,
      private themeService: ThemeService
  ) {
    this.loadingService.sharedLoading.subscribe( loading => this.loading = loading );

    this.pageLoading = true;
    this.loadingCount = true;

    this.route.params.subscribe( params => {
      this.profileImg = PROFILE_IMG;
      this.username = params.username;

      this.basicInfoService.getUser( this.username )
      .subscribe( visitedUserInfo => {
        this.userInfo = visitedUserInfo;
        this.categoryService.getCategoriesFromId( this.userInfo?.payload?.interests ).subscribe( result => {
          this.userInterests = result;
        } );

        // no user found in so redirect to not-found page
        if ( !this.userInfo?.username ) {
          this.router.navigate( [ URLS.notFound ] ).then( () => {
            return false;
          } );
        }

        // check badges
        this.userActivityService.getNumberOfEventsTaken( visitedUserInfo.username ).subscribe( result => {
          this.numberOfEventsTaken = result[0].numberOfEventsTaken
        })

        if ( visitedUserInfo.payload?.userProfileActivated ) {
          this.userActivityService.getNumberOfEventsMade( visitedUserInfo.username ).subscribe( result => {
            this.numberOfEventsMade = result.numberOfEventsMade
          } )

          this.userActivityService.getContributorRate( visitedUserInfo.username ).subscribe( rate => {
            this.rateObject = {
              userRating: rate.userRating,
              numberOfRates: rate.numberOfRates
            }
          })

          this.userActivityService.getTopContributors().subscribe( topContributors => {
            topContributors.forEach( ( value, index ) => {
              if( value.username === visitedUserInfo.username ) {
                this.topContributor = index;
              }
            } );
          })
        } else {
          this.numberOfEventsMade = undefined
          this.rateObject = undefined
          this.topContributor = undefined
        }
        // check if currentUser follows publicProfile
        this.basicInfoService.userInfo.subscribe( currentUserInfo => {
          this.currentUserInfo = currentUserInfo;
          if ( currentUserInfo && this.username !== currentUserInfo?.username )
            this.followerService.isFollowing( this.username ).subscribe( result => {
              this.isFollowing = result[ 0 ].isFollowing;
            } );
        } );

        // get follower and followed count
        this.followerService.count( this.username ).subscribe( followerCount => {
          this.followerCount = followerCount[ 0 ].count;
        } );

        this.followeeService.count( this.username ).subscribe( followeeCount => {
          this.followeeCount = followeeCount[ 0 ].count;
        } );

        if ( this.userInfo?.payload?.profileImageId ) {
          this.fileStorageService.downloadVisitedProfileImage( this.userInfo.payload.profileImageId ).subscribe( profileImg => {
            this.profileImg = 'data:image/png;base64,' + profileImg.file.data;
            this.pageLoading = false;
          } );
        } else {
          this.pageLoading = false;
        }

        this.eventService.countUserEvents( visitedUserInfo.username ).subscribe( eventList => {
          this.eventsInfo = eventList
          this.loadingCount = false;
        } )

        this.userActivityService.getEventsTaken( visitedUserInfo.username ).subscribe( eventList => {
          this.lessonsInfo = eventList
          this.loadingLessonsTaken = false
        } )
      } );
    } );
  }

  ngOnInit(): void {
    this.isPublic = this.route.snapshot.data.isPublic;
  }

  ngOnDestroy() {
    this.informationService.clearInformation();
  }

  goToUrl( url: string ) {
    window.open( url, '_blank' );
  }

  follow() {
    this.followerService.follow( this.username ).subscribe( response => {
      this.informationService.setInformation( `${ this.username } is followed`, 'info' );
      this.isFollowing = true;
      this.followeeService.count( this.username ).subscribe( followeeCount => {
        this.followeeCount = followeeCount[ 0 ].count;
      } );
    } );
  }

  unfollow() {
    this.followerService.unfollow( this.username ).subscribe( response => {
      this.informationService.setInformation( ` ${ this.username } is unfollowed`, 'info' );
      this.isFollowing = false;
      this.followeeService.count( this.username ).subscribe( followeeCount => {
        this.followeeCount = followeeCount[ 0 ].count;
      } );
    } );
  }

  barCustomColors( array: any[] ) {
    const result: any[] = [];
    const style = getComputedStyle( document.body )

    for (let i = 0; i < array.length; i++) {
      result.push({name: array[i].name, value: style
        .getPropertyValue( this.themeService.colors[ Math.floor( i / 2 ) ] )});
    }

    return result;
  }
}
