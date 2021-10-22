import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable( {
  providedIn: 'root'
} )
export class MonitoringService {

  public systemStatuses: Observable<any>;
  private systemStatusesSubject: BehaviorSubject<any>;

  constructor( private http: HttpClient ) {
    this.systemStatusesSubject = new BehaviorSubject<any>( undefined );
    this.systemStatuses = this.systemStatusesSubject.asObservable();
  }

  alive() {

    const observer = {
      next: response => this.systemStatusesSubject.next( response ),
      error: error => this.systemStatusesSubject.next( error )
    };

    return this.http.get<any>( `${ environment.serverUrl }/monitor/alive` ).subscribe( observer );
  }
}
