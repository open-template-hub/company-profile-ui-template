import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MailService {
  constructor(private http: HttpClient) {}

  sendContactUsMail(payload: any) {
    var contactUs = {
      params: payload,
    };

    this.http
      .post<any>(`${environment.serverUrl}/mail/contact`, {
        contactUs,
      })
      .subscribe((data) => {
        console.log(data);
      });
  }
}