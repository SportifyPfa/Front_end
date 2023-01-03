import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {catchError, Observable, switchMap, throwError} from 'rxjs';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';


@Injectable()
export class InterceptorInterceptor implements HttpInterceptor {

  static access_token = '';
  static refresh_token = '';
  refresh = false;

  constructor(private http: HttpClient) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const req = request.clone({
      setHeaders: {
        Authorization: `Bearer ${InterceptorInterceptor.access_token}`
      }
    });

    return next.handle(req).pipe(catchError((err: HttpErrorResponse) => {
      if (err.status === 403 && !this.refresh) {
        this.refresh = true;

        return this.http.post('http://localhost:8900/SPORTIFYAUTHENTIFICATION/auth/refreshToken', {}, {withCredentials: true}).pipe(
          switchMap((res: any) => {
            InterceptorInterceptor.access_token = res.access_token;
            InterceptorInterceptor.refresh_token = res.refresh_token;

            return next.handle(request.clone({
              setHeaders: {
                Authorization: `Bearer ${InterceptorInterceptor.refresh_token}`
              } 
            }));
          })
        );
      }
      this.refresh = false;
      return throwError(() => err);
    }));
}
}
