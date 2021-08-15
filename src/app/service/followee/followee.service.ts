import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable( {
  providedIn: 'root'
} )
export class FolloweeService {

  constructor(
      private http: HttpClient
  ) {
  }

  count( username: string ) {
    if ( environment.mockDataEnabled ) {
      return of( [ { count: 1 } ] )
    } else {
      return this.http.get<any>( `${ environment.serverUrl }/followee/count?username=${ username }` );
    }
  }
}
