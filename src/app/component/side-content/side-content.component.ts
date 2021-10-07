import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { URLS } from '../../data/constant';
import { BusinessLogicService } from '../../service/business-logic/business-logic.service';
import { CategoryService } from '../../service/category/category.service';
import { EventService } from '../../service/event/event.service';
import { InformationService } from '../../service/information/information.service';

@Component( {
  selector: 'app-side-content',
  templateUrl: './side-content.component.html',
  styleUrls: [ './side-content.component.scss' ]
} )
export class SideContentComponent {

  userInfo: any = {};
  URLS = URLS;
  recommendedEvents: any = [];
  recommendedEventsByFollowingList: any = [];
  environment = environment;

  numberOfAttemptedRetrieveInitSearchEvents = 0;
  maxNumberOfServiceCall = 1;

  constructor(
      private categoryService: CategoryService,
      private businessLogicService: BusinessLogicService,
      private eventService: EventService,
      private informationService: InformationService,
      private router: Router
  ) {
    this.businessLogicService.userInfo.subscribe( userInfo => {
      this.userInfo = userInfo;

      this.eventService.recommendedEvents.subscribe( recommendedEvents => {
        if ( recommendedEvents ) {
          this.recommendedEvents = recommendedEvents;
        } else if ( this.numberOfAttemptedRetrieveInitSearchEvents < this.maxNumberOfServiceCall ) {
          // purpose of this control is to fix side content is null when user refreshed the page outside of the dasboard page
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
          this.numberOfAttemptedRetrieveInitSearchEvents += 1;
        }
      } );

      this.eventService.recommendedEventsByFollowingList.subscribe( recommendedEvents => {
        this.recommendedEventsByFollowingList = recommendedEvents;
      } );
    } );


  }

  /*
   @HostListener( 'document:click', [ '$event' ] )
   onDocumentClick( event ) {
   if ( this.searchArea?.nativeElement.contains( event.target ) ) {
   this.searchEnabled = true;
   } else {
   this.searchEnabled = false;
   }
   }

   search( event: any ) {
   const q = event.target.value;

   if ( !q || q.length < 3 ) {
   this.userSearchResults = [];
   this.categorySearchResults = [];
   return;
   }

   this.businessLogicService.search( q ).subscribe( results => {
   this.userSearchResults = results.slice( 0, 10 );
   } );

   this.categoryService.search( q ).subscribe( results => {
   this.categorySearchResults = results.slice( 0, 10 );
   } );

   this.eventService.search( undefined, undefined, new Date().toISOString(), q, [] )
   .subscribe( results => {
   this.eventSearchResults = results;
   } );
   }*/

  openEventDetails( event ) {
    this.router.navigate( [ URLS.dashboard.event ], { queryParams: { event_id: event } } );
  }
}
