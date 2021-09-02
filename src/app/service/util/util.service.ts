import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor() {
    /* Intentionally blank */
  }

  delay( ms: number ) {
    return new Promise( resolve => setTimeout( resolve, ms ) );
  }
}
