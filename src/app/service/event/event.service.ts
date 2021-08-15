import { formatDate } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { attendedEventsData, showroomEvents } from '../../mockData/events';
import { EventModel } from '../../model/EventModel';
import { CountModel } from '../../model/CountModel';
import { EventTypes } from '../../util/constant';
import { CategoryService } from '../category/category.service';

@Injectable( {
  providedIn: 'root'
} )
export class EventService {

  public recommendedEvents: Observable<any>;
  private recommendedEventsSubject: BehaviorSubject<any>;

  public recommendedEventsByFollowingList: Observable<any>;
  private recommendedEventsByFollowingListSubject: BehaviorSubject<any>;

  public attendedEvents: Observable<any>;
  private attendedEventsSubject: BehaviorSubject<any>;

  public searchedEvents: Observable<any>;
  private searchedEventsSubject: BehaviorSubject<any>;

  constructor(
    private http: HttpClient,
    private categoryService: CategoryService
  ) {
    this.recommendedEventsSubject = new BehaviorSubject<any>( null );
    this.recommendedEvents = this.recommendedEventsSubject.asObservable();

    this.recommendedEventsByFollowingListSubject = new BehaviorSubject<any>( null );
    this.recommendedEventsByFollowingList = this.recommendedEventsByFollowingListSubject.asObservable();

    this.attendedEventsSubject = new BehaviorSubject<any>( null );
    this.attendedEvents = this.attendedEventsSubject.asObservable();

    this.searchedEventsSubject = new BehaviorSubject<any>(null);
    this.searchedEvents = this.searchedEventsSubject.asObservable();
  }

  create( event: any ) {
    return of([])
  }

  update( event: any ) {
    return of([])
  }

  countUserEvents( username: string, isPastOnly: string = 'true' ) {
    if ( environment.mockDataEnabled ) {
      const countData = [
        { _id:{category:13,subCategory:5},count:27},
        { _id:{category:11,subCategory:5, leafCategory: 3},count:10}
      ] as CountModel[]

      return of(this.countUserEventsProcess(countData))
    } else {
      return this.http.get<any>( `${ environment.serverUrl }/event/count?username=${ username }&isPastOnly=${ isPastOnly }` )
      .pipe( map( counts => {
         return this.countUserEventsProcess(counts)
      } ) );
    }
  }

  countUserEventsProcess(countData: any) {
    countData.map( categories => {
      const categoryResult = this.categoryService.getCategoryFromId( categories._id.category,
        categories._id.subCategory, categories._id.leafCategory );

      categories._id = categoryResult
    } );

    const newEventsList = []

    countData.map( category => {
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
    } );

    return newEventsList
  }

  me( isNewOnly: string = 'false', isCompleted: string = 'false', startDate?: string, endDate?:string, title?: string ) {

    if ( environment.mockDataEnabled ) {
      return of(this.meProcess( [], isNewOnly ))
    } else {
      let queryParams = `isNewOnly=${ isNewOnly }&isCompleted=${ isCompleted }`

      if ( startDate ) {
        queryParams += `&startDate=${ startDate }`
      }

      if ( endDate ) {
        queryParams += `&endDate=${ endDate }`
      }

      if ( title ) {
        queryParams += `&title=${ title }`
      }

      return this.http.get<any>( `${ environment.serverUrl }/event/me?` + queryParams ).pipe( map( myEvents => {
        return this.meProcess(myEvents, isNewOnly)
      } ) );
    }
  }

  meProcess(myEvents: any, isNewOnly: string) {
    myEvents.map( event => {
      const categoryResult = this.categoryService.getCategoryFromId( event.payload?.category,
        event.payload?.subCategory, event.payload?.leafCategory );

      if ( categoryResult.category ) {
        event.payload.category = categoryResult.category;
      }

      if ( categoryResult.subCategory ) {
        event.payload.subCategory = categoryResult.subCategory;
      }

      if ( categoryResult.leafCategory ) {
        event.payload.leafCategory = categoryResult.leafCategory;
      }

      // check if event is in progress only for upcomings
      if ( isNewOnly === 'true' ) {
        this.checkInProgress( event )
      }

      event.date = formatDate( new Date( event.date ), 'yyyy/MM/dd HH:mm Z', 'en-US' );
    } );

    return myEvents;
  }

  search( _id, user, date, title, categories: any[],
    eventType: EventTypes = EventTypes.Other, fill = false,
    excludeCurrentUserEvents = false, limit = 20) {
    if ( environment.mockDataEnabled ) {
      const searchedEvents = []
      showroomEvents.forEach((val, index) => {
          searchedEvents.push(Object.assign({}, val))
          searchedEvents[index].payload = Object.assign( {}, val.payload )
        })
      return of( this.searchProcess( searchedEvents, eventType ) )
    } else {
      return this.http.post<any>( `${ environment.serverUrl }/event/search`, {
       _id,
       user,
       date,
       title,
       categories,
       fill,
       limit,
       excludeCurrentUserEvents
       } ).pipe( map( events => {
        return this.searchProcess( events, eventType )
      }));
    }
  }

  searchProcess( searchedEvents: any, eventType: EventTypes ) {
    searchedEvents.map( event => {
      const categoryResult = this.categoryService.getCategoryFromId( event.payload?.category,
        event.payload?.subCategory, event.payload?.leafCategory );

      if ( categoryResult.category ) {
        event.payload.category = categoryResult.category;
      }

      if ( categoryResult.subCategory ) {
        event.payload.subCategory = categoryResult.subCategory;
      }

      if ( categoryResult.leafCategory ) {
        event.payload.leafCategory = categoryResult.leafCategory;
      }

      this.checkInProgress( event )

      event.date = formatDate( new Date( event.date ), 'yyyy/MM/dd HH:mm Z', 'en-US' );
    } );

    if ( eventType === EventTypes.Recommended ) {
      this.recommendedEventsSubject.next( searchedEvents );
      return [];
    } else if ( eventType === EventTypes.Searched ) {
      this.searchedEventsSubject.next( searchedEvents );
      return [];
    } else if ( eventType === EventTypes.Other ) {
      return searchedEvents;
    }
  }

  attend( eventId: string) {
    if ( !environment.mockDataEnabled ) {
      return this.http.get<any>( `${ environment.serverUrl }/event/attend?id=${ eventId }` )
      .pipe( map ( updatedEvent => {
        this.updateEvent( updatedEvent, this.recommendedEventsSubject );
        this.updateEvent( updatedEvent, this.recommendedEventsByFollowingListSubject );

        if ( this.attendedEventsSubject.getValue() ) {
          this.getAttendedEvents().subscribe();
        } else if ( this.searchedEventsSubject.getValue() ) {
          this.updateEvent( updatedEvent, this.searchedEventsSubject )
        }

        return updatedEvent;
      }));
    }
  }

  drop( eventId: string ) {
    if ( !environment.mockDataEnabled ) {
      return this.http.get<any>( `${ environment.serverUrl }/event/drop?id=${ eventId }` )
      .pipe( map( updatedEvent => {
        this.updateEvent( updatedEvent, this.recommendedEventsSubject );
        this.updateEvent( updatedEvent, this.recommendedEventsByFollowingListSubject );

        // if attendedEvents contains the event remove it
        const attendedEvents = this.attendedEventsSubject.getValue();

        if ( attendedEvents ) {
          this.attendedEventsSubject.next(
            attendedEvents.filter( event => event._id !== updatedEvent[0]._id )
          );
        }

        if ( this.searchedEventsSubject.getValue() ) {
          this.updateEvent( updatedEvent, this.searchedEventsSubject );
        }

        return updatedEvent;
      }));
    }
  }

  private updateEvent( updatedEvent, targetEvents ): void {
    const events = targetEvents.getValue();

    const foundRecommendIndex = events.findIndex( x => x._id === updatedEvent[0]._id );

    if ( foundRecommendIndex !== -1 ) {
      events[foundRecommendIndex].count = updatedEvent[0].count;
      events[foundRecommendIndex].attended = updatedEvent[0].attended;
      targetEvents.next(events);
    }
  }

  resetEvents( eventType: EventTypes ): void {
    if ( eventType === EventTypes.Attended ) {
      this.attendedEventsSubject.next( null );
    } else if ( eventType === EventTypes.Searched ) {
      this.searchedEventsSubject.next( null );
    }
  }

  count( eventId: string ) {
    if ( !environment.mockDataEnabled ) {
      return this.http.get<any>( `${ environment.serverUrl }/event/count?id=${ eventId }` );
    }
  }

  initSearchEvents(categories: any[]) {
    this.getRecommendedEventsByFollowingList( '10' ).subscribe();

    this.search( undefined, undefined, new Date().toISOString(), undefined,
      categories, EventTypes.Recommended, categories.length !== 0, true ).subscribe();
  }

  getAttendedEvents( startDate?: string, endDate?: string ) {
    if ( environment.mockDataEnabled ) {
      const attendedData = []
      attendedEventsData.forEach((val, index) => {
        attendedData.push(Object.assign({}, val))
        attendedData[index].payload = Object.assign( {}, val.payload )
      })

      return of( this.getAttendedEventsProcess( attendedData, startDate, endDate ) )
    } else {
      let queryParams = ``

      if ( startDate && endDate ) {
        queryParams += `startDate=${ startDate }&endDate=${ endDate }`
      }

      return this.http.get<any>( `${ environment.serverUrl }/event/attended?` + queryParams ).pipe(map( attendedEvents => {
        return this.getAttendedEventsProcess( attendedEvents, startDate, endDate )
      } ) );
    }
  }

  getAttendedEventsProcess( attendedData: any, startDate?: string, endDate?: string ) {
    attendedData.map( event => {
      const categoryResult = this.categoryService.getCategoryFromId( event.payload?.category,
        event.payload?.subCategory, event.payload?.leafCategory );

      if ( categoryResult.category ) {
        event.payload.category = categoryResult.category;
      }

      if ( categoryResult.subCategory ) {
        event.payload.subCategory = categoryResult.subCategory;
      }

      if ( categoryResult.leafCategory ) {
        event.payload.leafCategory = categoryResult.leafCategory;
      }

      this.checkInProgress( event )
      event.date = formatDate( new Date( event.date ), 'yyyy/MM/dd HH:mm Z', 'en-US' );
    } );

    if ( startDate && endDate ) {
      return attendedData
    } else {
      this.attendedEventsSubject.next( attendedData );
    }
    return []
  }

  markAsCompleted( eventId: string ) {
    if ( !environment.mockDataEnabled ) {
      return this.http.get<any>( `${ environment.serverUrl }/event/mark?id=${ eventId }` );
    }
  }

  getRecommendedEventsByFollowingList( limit: string ) {
    if ( environment.mockDataEnabled ) {
      const recommendedEventsData = []
      attendedEventsData.forEach((val, index) => {
        recommendedEventsData.push(Object.assign({}, val))
        recommendedEventsData[index].payload = Object.assign( {}, val.payload )
      })

      this.getRecommendedEventsByFollowingListProcess( recommendedEventsData )
      return of()
    } else {
      return this.http.get<any>( `${ environment.serverUrl }/event/by-following?limit=${ limit }` ).pipe( map( events => {
        this.getRecommendedEventsByFollowingListProcess( events )
      } ) );
    }
  }

  getRecommendedEventsByFollowingListProcess( recommendedEventsData: any ) {
    recommendedEventsData.map( event => {
      const categoryResult = this.categoryService.getCategoryFromId( event.payload?.category,
        event.payload?.subCategory, event.payload?.leafCategory );

      if ( categoryResult.category ) {
        event.payload.category = categoryResult.category;
      }

      if ( categoryResult.subCategory ) {
        event.payload.subCategory = categoryResult.subCategory;
      }

      if ( categoryResult.leafCategory ) {
        event.payload.leafCategory = categoryResult.leafCategory;
      }

      event.date = formatDate( new Date( event.date ), 'yyyy/MM/dd HH:mm Z', 'en-US' );
    } );

    this.recommendedEventsByFollowingListSubject.next( recommendedEventsData );
  }

  private checkInProgress( event ) {
    const currentDate = new Date()
    const eventDate = new Date( event.date )
    if ( eventDate.getTime() < currentDate.getTime() &&
      eventDate.getTime() + event.duration * 60000 > currentDate.getTime() ) {
      event.inProgress = true
    }
  }

  getEvents(): Observable<EventModel[]> {
    return this.http.get<EventModel[]>( 'api/eventData' ).pipe(
      tap(_ => console.log('fetched events'),
        catchError( this.handleError<EventService[]>('getEvents', []) ))
    )
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result);
    };
  }

  logout() {
    this.recommendedEventsSubject.next( null );
    this.recommendedEventsByFollowingListSubject.next( null );
  }
}
