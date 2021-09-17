import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable( {
  providedIn: 'root'
} )
export class MonitoringService {

  public statuses: Observable<any>;
  private statusesSubject: BehaviorSubject<any>;

  constructor( private http: HttpClient ) {
    this.statusesSubject = new BehaviorSubject<any>( {} );
    this.statuses = this.statusesSubject.asObservable();
  }

  alive() {
    return this.http.get<any>( `${ environment.serverUrl }/monitor/alive` ).subscribe( response => {
      this.statusesSubject.next( response );
    } );
  }
}
