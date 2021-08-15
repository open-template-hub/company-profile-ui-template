import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable( {
  providedIn: 'root'
} )
export class BasicInfoService {

  public userInfo: Observable<any>;
  public userInfoSubject: BehaviorSubject<any>;

  constructor( private http: HttpClient ) {
    const userInfoStorageItem = localStorage.getItem( 'userInfo' ) ? localStorage.getItem( 'userInfo' ) : sessionStorage.getItem( 'userInfo' );
    this.userInfoSubject = new BehaviorSubject<any>( JSON.parse( userInfoStorageItem ) );
    this.userInfo = this.userInfoSubject.asObservable();
  }

  public get userInfoValue(): any {
    return this.userInfoSubject.value;
  }

  me() {
    return this.http.get<any>( `${ environment.serverUrl }/user/me` )
    .pipe( map( userInfo => {
      this.userInfoSubject.next( userInfo );

      if ( localStorage.getItem( 'currentUser' ) ) {
        localStorage.setItem( 'userInfo', JSON.stringify( userInfo ) );
      } else {
        sessionStorage.setItem( 'userInfo', JSON.stringify( userInfo ) );
      }

      return userInfo;
    } ) );
  }

  getUser( username: string ) {
    return this.http.get<any>( `${ environment.serverUrl }/user/public?username=${ username }` );
  }

  search( q: string ) {
    return this.http.get<any>( `${ environment.serverUrl }/user/search/?q=${ q }` );
  }

  createMyInfo() {
    return this.http.post<any>( `${ environment.serverUrl }/user/me`, {
      payload: {
        firstName: ''
      }
    } );
  }

  updateMyInfo( payload: any ) {
    return this.http.put<any>( `${ environment.serverUrl }/user/me`, { payload } );
  }

  logout() {
    this.userInfoSubject.next( null );
  }
}
