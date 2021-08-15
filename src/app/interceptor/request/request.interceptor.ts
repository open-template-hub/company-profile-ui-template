import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { AuthenticationService } from '../../service/auth/authentication.service';
import { LoadingService } from '../../service/loading/loading.service';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

  constructor( private authenticationService: AuthenticationService,
    private loadingService: LoadingService ) {
  }

  intercept( request: HttpRequest<unknown>, next: HttpHandler ): Observable<HttpEvent<unknown>> {
    this.loadingService.setLoading( true );
    request = this.authenticationService.addAuthorizationHeader( request );
    if ( environment.identity !== 'production' ) {
      console.log( request.url );
    }
    return next.handle( request );
  }
}
