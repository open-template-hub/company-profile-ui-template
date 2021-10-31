import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { LoadingService } from '../../service/loading/loading.service';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

  constructor(
      private loadingService: LoadingService
  ) {
  }

  intercept( request: HttpRequest<unknown>, next: HttpHandler ): Observable<HttpEvent<unknown>> {
    this.loadingService.setLoading( true );
    if ( environment.identity !== 'production' ) {
      console.log( request.url );
    }
    return next.handle( request );
  }
}
