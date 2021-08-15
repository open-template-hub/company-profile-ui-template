import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { unratedCompletedEventsData } from '../../mockData/events';
import { CategoryService } from '../category/category.service';

@Injectable({
  providedIn: 'root'
})
export class UserActivityService {

  constructor(
    private http: HttpClient,
    private categoryService: CategoryService
  ) { }

  getEventsTaken( username: string, limit = 10 ) {
    if ( environment.mockDataEnabled ) {
      const eventsTaken = [
        { _id:{category:1,subCategory:1},count:7},
        { _id:{category:1,subCategory:3, leafCategory: 3},count: 5}
      ] as any

      return of(this.getEventsTakenProcess( eventsTaken ))
    } else {
      return this.http.get<any>( `${ environment.serverUrl }/user-activity/events-taken?username=${ username }&limit=${ limit }` )
      .pipe( map( counts => {
        return this.getEventsTakenProcess( counts )
      } ) );
    }
  }

  getEventsTakenProcess( eventsTaken: any ) {
    eventsTaken.map( categories => {
      const categoryResult = this.categoryService.getCategoryFromId( categories._id.category,
        categories._id.subCategory, categories._id.leafCategory );

      categories._id = categoryResult
    } );

    const newEventsList = []
    eventsTaken.map( category => {
      let categoryName: string

      if ( category._id.leafCategory ) {
        categoryName = category._id.leafCategory.name
      } else if ( category._id.subCategory ) {
        categoryName = category._id.subCategory.name
      } else {
        categoryName = category._id.category.name
      }

      // if there is duplicated category then do not push to array, just add value to the existing category
      let duplicatedNameIndex = -1
      for( let i = 0; i < newEventsList.length; i++ ) {
        if ( newEventsList[i].name === categoryName ) {
          duplicatedNameIndex = i
          break
        }
      }
      if  ( duplicatedNameIndex === -1 ) {
        newEventsList.push( {
          name: categoryName,
          value: category.count
        } )
      } else {
        newEventsList[duplicatedNameIndex].value += category.count
        newEventsList.sort( ( x, y ) => x.value > y.value ? -1 : 1)
      }
    } )

    return newEventsList
  }

  getContributorRate( username: string ) {
    if ( environment.mockDataEnabled ) {
      return of( {
        userRating: 10,
        numberOfRates: 3
      })
    } else {
      return this.http.get<any>( `${ environment.serverUrl }/user-activity/user-rate?username=${ username }` );
    }
  }

  getNumberOfEventsMade( username: string ) {
    if ( environment.mockDataEnabled ) {
      return of( { numberOfEventsMade: 4 } )
    } else {
      return this.http.get<any>( `${ environment.serverUrl }/user-activity/number-of-events-made?username=${ username }` );
    }
  }

  getUnratedCompletedEvents () {
    if ( environment.mockDataEnabled ) {
      const getUnratedCompletedEventsData = [{completedEvents: []}]
      unratedCompletedEventsData[0].completedEvents.forEach((val, index) => {
        getUnratedCompletedEventsData[0].completedEvents.push(Object.assign({}, val))
        getUnratedCompletedEventsData[0].completedEvents[index].payload = Object.assign( {}, val.payload )
      })
      return of( this.getUnratedCompletedEventsProcess( getUnratedCompletedEventsData ) )
    } else {
      return this.http.get<any>( `${ environment.serverUrl }/user-activity/event` ).pipe( map( response => {
        this.getUnratedCompletedEventsProcess( response )
      } ) );
    }
  }

  getUnratedCompletedEventsProcess(getUnratedCompletedEventsData: any) {
    getUnratedCompletedEventsData[0].completedEvents.map( event => {
      const categoryResult = this.categoryService.getCategoryFromId( event.payload?.category,
        event.payload?.subCategory, event.payload?.leafCategory );

      if ( categoryResult.category ) {
        event.payload.category = categoryResult.category;
      }

      if ( categoryResult.subCategory ) {
        event.payload.subCategory = categoryResult.subCategor;
      }

      if ( categoryResult.leafCategory ) {
        event.payload.leafCategory = categoryResult.leafCategory;
      }
    } );
    return getUnratedCompletedEventsData
  }

  rate( id: string, rate: number ) {
    if ( !environment.mockDataEnabled ) {
      return this.http.put<any>( `${ environment.serverUrl }/user-activity/rate`, {
        id,
        rate
      } );
    }
  }

  formatNumberOfRates( rateNumber: number ): string {
    let fractionDigits = 1
    if( rateNumber > 999 && rateNumber < 1000000 ){
      if ( rateNumber % 1000 < 100 ) {
        fractionDigits = 0
      }
      return ( rateNumber / 1000 ).toFixed( fractionDigits ) + 'K';
    } else if( rateNumber > 999999 ) {
      if ( rateNumber % 1000000 < 100000 ) {
        fractionDigits = 0
      }
      return ( rateNumber / 1000000 ).toFixed( fractionDigits ) + 'M';
    } else if( rateNumber < 1000 ) {
      return rateNumber.toString(); // if value < 1000, nothing to do
    }
  }

  getTopContributors( limit: number = 3 ) {
    if ( environment.mockDataEnabled ) {
      return of( [ { username: 'gandalf' }, { username: 'bilbo' }, { username: 'gollum' } ] )
    } else {
      return this.http.get<any>( `${ environment.serverUrl }/user-activity/top-users?limit=${ limit }` );
    }
  }

  getNumberOfEventsTaken( username: string ) {
    if ( environment.mockDataEnabled ) {
      return of( [ { numberOfEventsTaken: 3 } ] )
    } else {
      return this.http.get<any>( `${ environment.serverUrl }/user-activity/number-of-events-taken?username=${ username }` );
    }
  }
}
