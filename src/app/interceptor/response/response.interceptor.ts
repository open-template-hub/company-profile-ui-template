import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, filter, finalize, switchMap, take } from 'rxjs/operators';
import { AuthToken } from '../../model/AuthToken';
import { AuthenticationService } from '../../service/auth/authentication.service';
import { InformationService } from '../../service/information/information.service';
import { LoadingService } from '../../service/loading/loading.service';
import { ResponseCode } from '../../util/constant';

@Injectable()
export class ResponseInterceptor implements HttpInterceptor {

  private refreshingToken = false;
  private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>( null );

  constructor( private authenticationService: AuthenticationService,
      private informationService: InformationService,
      private loadingService: LoadingService ) {
  }

  intercept( request: HttpRequest<unknown>, next: HttpHandler ): Observable<HttpEvent<unknown>> {
    return next.handle( request ).pipe(
        catchError( ( errorResponse: HttpErrorResponse ) => {
              if ( errorResponse.error instanceof ErrorEvent || errorResponse.error instanceof ProgressEvent ) {
                // client-side error or network error
                console.error( 'network error' );
                this.informationService.setInformation( 'There is something wrong with our servers. We will take care of it as soon as possible.', 'warning' );
              } else if ( errorResponse.error?.message === 'jwt expired' ) {
                if ( !this.refreshingToken ) {
                  console.log( 'token refreshing attempt' );
                  this.refreshingToken = true;
                  this.refreshTokenSubject.next( null );

                  return this.authenticationService.refreshToken( this.authenticationService.currentUserValue.refreshToken ).pipe(
                      switchMap( ( currentUser: AuthToken ) => {
                        this.refreshingToken = false;
                        this.refreshTokenSubject.next( currentUser );
                        request = this.authenticationService.addAuthorizationHeader( request );
                        console.log( 'token refreshed' );
                        return next.handle( request );
                      } ) );
                } else {
                  return this.refreshTokenSubject.pipe(
                      filter( currentUser => currentUser != null ),
                      take( 1 ),
                      switchMap( jwt => {
                        request = this.authenticationService.addAuthorizationHeader( request );
                        return next.handle( request );
                      } ) );
                }
              } else if ( errorResponse.status === ResponseCode.INVALID_TOKEN || errorResponse.status === ResponseCode.UNAUTHORIZED ) {
                console.error( errorResponse );
                this.authenticationService.logout();
                location.reload();
              } else {
                console.error( errorResponse );
                this.informationService.setInformation( errorResponse.error?.message, 'error' );
              }
              return throwError( errorResponse );
            }
        ),
        finalize( () => {
          this.loadingService.setLoading( false );
        } )
    );
  }
}
