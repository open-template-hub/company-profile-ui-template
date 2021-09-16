import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { ToastService } from '../toast/toast.service';

@Injectable( {
  providedIn: 'root'
} )
export class InformationService {

  private error = new BehaviorSubject( '' );
  sharedError = this.error.asObservable();

  private warning = new BehaviorSubject( '' );
  sharedWarning = this.warning.asObservable();

  private success = new BehaviorSubject( '' );
  sharedSuccess = this.success.asObservable();

  private info = new BehaviorSubject( '' );
  sharedInfo = this.info.asObservable();

  constructor(
      private toastService: ToastService,
      private router: Router ) {
  }

  clearInformation() {
    this.error.next( '' );
    this.warning.next( '' );
    this.success.next( '' );
    this.info.next( '' );
  }

  setInformation( information: any, type: string ) {
    let informationString = '';
    if ( typeof information === 'string' ) {
      informationString = information;
    } else if ( information?.error?.message ) {
      informationString = information.error.message;
    } else {
      informationString = JSON.stringify( information );
    }

    if ( !informationString ) {
      return;
    }

    let currentChild = this.router.routerState.snapshot.root.firstChild;
    do {
      currentChild = currentChild.firstChild;
    } while ( currentChild );

    switch ( type ) {
      case 'error': {
        this.error.next( informationString );
        this.toastService.error( informationString, '' );
        break;
      }
      case 'warning': {
        this.warning.next( informationString );
        this.toastService.warning( informationString, '' );
        break;
      }
      case 'success': {
        this.success.next( informationString );
        this.toastService.success( informationString, '' );
        break;
      }
      case 'info':
      default: {
        this.info.next( informationString );
        this.toastService.info( informationString, '' );
        break;
      }
    }
  }
}
