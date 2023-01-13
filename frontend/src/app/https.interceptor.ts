import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { UserService } from './services/user.service';

@Injectable()
export class HttpsInterceptor implements HttpInterceptor {

  constructor(public _auth:UserService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this._auth.getToken();
    let users_jwt = localStorage['token']
      request = request.clone({setHeaders: {authorization: `Bearer ${users_jwt}` }});
      // return next.handle(request).pipe(catchError(err => {
      //   if(err.status === 401) {
      //     this._auth.logout();
      //   }
      //   return throwError(() => err);
      // }))
      return next.handle(request).pipe(tap((evt:any)=>{
        if(evt instanceof HttpResponse){
          if(evt.body.unauthorized){
          this._auth.logout();
          }
        }
      }))
  }
}
