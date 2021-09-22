import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable( {
  providedIn: 'root',
} )
export class MailService {
  constructor( private http: HttpClient ) {
  }

  sendContactUsMail( payload: any ) {
    const contactUs = {
      params: payload,
    };

    return this.http.post<any>( `${ environment.serverUrl }/mail/contact`, { contactUs } );
  }
}
