import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {catchError, Observable, switchMap, throwError,BehaviorSubject} from 'rxjs';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { TokenStorageService } from '../service/token-storage.service';
import { AuthentificationJWTService } from '../service/authentification-jwt.service';


@Injectable()
export class InterceptorInterceptor implements HttpInterceptor {

   static access_token = TokenStorageService.getToken();
   static refresh_token = TokenStorageService.getToken2();
   constructor(private securityService: AuthentificationJWTService) {}

  intercept(req: HttpRequest<any>,next: HttpHandler): Observable<HttpEvent<any>> {
    // const token = InterceptorInterceptor.access_token;

    // if (token) {
    //   req = this.addToken(req, token);
    //   console.log('req' );
    //   console.log(req );
    // }
    // console.log("ouijdane")
    // console.log(token)
    return next.handle(req);
    // return next.handle(req).pipe(
    //   catchError((err) => {
    //     if ( err instanceof HttpErrorResponse && (err.status === 401 || err.status === 403) ) {
    //       console.log('refreshing token ...');
    //       console.log('1');
    //       console.log(req );
    //       console.log('2');
    //       return this.handle401Error(req, next);
    //     }
    //     // const error = err.error.message || err.statusText;
    //     const error = err;
    //     return throwError(() => new Error(error));
    //   })      
    // )
  }

  private addToken(request: HttpRequest<any>, token: string) {
    return request.clone({
      setHeaders: {
        'Authorization': `Bearer  ${token}`
      }
    });
  }


  private isRefreshing = false;
  private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  private handle401Error(request: HttpRequest<any>, next: HttpHandler) {
    if (!this.isRefreshing) {
      this.isRefreshing = true;
      this.refreshTokenSubject.next(null);
      console.log("hh")
      return this.securityService.refreshToken().pipe(
        switchMap((token: any) => {
          this.isRefreshing = false;
          alert("is refreshing ")
          console.log(token)
          //this.refreshTokenSubject.next(token.refresh_token);
          InterceptorInterceptor.access_token = token.access_token
          console.log(InterceptorInterceptor.access_token)
          console.log(InterceptorInterceptor.refresh_token)
         // InterceptorInterceptor.refresh_token = token.refresh_token
          localStorage.setItem("access_token", InterceptorInterceptor.access_token)
         // localStorage.setItem("refresh_token", token.refresh_token)
          return next.handle(this.addToken(request, InterceptorInterceptor.access_token));
        }));
    } else {
      // return this.refreshTokenSubject.pipe(
      //   switchMap((jwt :any)=> {
      //     return next.handle(this.addToken(request, jwt));
      //   }));
    }
  }


}






