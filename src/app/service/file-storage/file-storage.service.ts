import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable( {
  providedIn: 'root'
} )
export class FileStorageService {

  public sharedProfileImage: Observable<any>;
  private profileImageSubject: BehaviorSubject<any>;

  constructor( private http: HttpClient ) {
    const profileImageStorageItem = localStorage.getItem( 'profileImage' ) ? localStorage.getItem( 'profileImage' ) : sessionStorage.getItem( 'profileImage' );
    this.profileImageSubject = new BehaviorSubject<any>( JSON.parse( profileImageStorageItem ) );
    this.sharedProfileImage = this.profileImageSubject.asObservable();
  }

  public setProfileImageFileData( profileImg: any ) {
    if ( !this.profileImageSubject.value ) {
      this.profileImageSubject.next( { file: {} } );
    }
    this.profileImageSubject.value.file.data = profileImg.substring( 'data:image/png;base64,'.length );
    this.profileImageSubject.next( this.profileImageSubject.value );
  }

  downloadProfileImage( id: any ) {
    if ( !id ) {
      this.profileImageSubject.next( { file: {} } );
      return this.profileImageSubject.value;
    }
    return this.http.get<any>( `${ environment.serverUrl }/file/me`, { params: { id } } )
    .pipe( map( profileImage => {
      this.profileImageSubject.next( profileImage );

      if ( localStorage.getItem( 'currentUser' ) ) {
        localStorage.setItem( 'profileImage', JSON.stringify( profileImage ) );
      } else {
        sessionStorage.setItem( 'profileImage', JSON.stringify( profileImage ) );
      }

      return profileImage;
    } ) );
  }

  downloadVisitedProfileImage( id: any ) {
    return this.http.get<any>( `${ environment.serverUrl }/file/public`, { params: { id } } );
  }

  createFile( file: any, title: string, description: string, contentType: string ) {
    return this.http.post<any>( `${ environment.serverUrl }/file/me`, {
      key: 'S3',
      payload: {
        title,
        description,
        content_type: contentType,
        data: file,
        is_public: true
      }
    } );
  }

  logout() {
    this.profileImageSubject.next( null );
  }
}
