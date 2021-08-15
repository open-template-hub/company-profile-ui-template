import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable( {
  providedIn: 'root'
} )
export class FollowerService {

  constructor(
      private http: HttpClient
  ) {
  }

  follow( username: string ) {
    if ( !environment.mockDataEnabled ) {
      return this.http.get<any>( `${ environment.serverUrl }/follower/follow?username=${ username }` );
    }
  }

  unfollow( username: string ) {
    if ( !environment.mockDataEnabled ) {
      return this.http.get<any>( `${ environment.serverUrl }/follower/unfollow?username=${ username }` );
    }
  }

  count( username: string ) {
    if ( environment.mockDataEnabled ) {
      return of( [ { count: 2 } ] )
    } else {
      return this.http.get<any>( `${ environment.serverUrl }/follower/count?username=${ username }` );
    }
  }

  isFollowing( username: string ) {
    if ( !environment.mockDataEnabled ) {
      return this.http.get<any>( `${ environment.serverUrl }/follower/is-following?username=${ username }` );
    }
  }
}
