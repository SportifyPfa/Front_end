import { Component, OnInit, ElementRef } from '@angular/core';
import { ROUTES } from '../sidebar/sidebar.component';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Router } from '@angular/router';
import { HttpClient,HttpHeaders, HttpEventType } from '@angular/common/http';
import { InterceptorInterceptor } from 'src/app/interceptor/interceptor.interceptor';
import { TokenService } from 'src/app/service/token.service';
import { TokenStorageService } from 'src/app/service/token-storage.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public focus;
  public listTitles: any[];
  public location: Location;
  message:any;
  constructor(location: Location,  private element: ElementRef, private tokenService:TokenStorageService,private router: Router,private http:HttpClient) {
    this.location = location;
  }
  ngOnInit() {
    this.listTitles = ROUTES.filter(listTitle => listTitle);
    this.tokenService.getUser();
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${InterceptorInterceptor.access_token}`
      })
    };
    this.http.get('http://localhost:8900/SPORTIFYAUTHENTIFICATION/auth/user_auth',httpOptions)
      .subscribe({
        next: (res: any) => {
          this.message = `Hi ${res.username}`;
        },
        error: () => {
          this.router.navigate(['/login']);
        }
      });
      if(this.tokenService.isUserLoggedIn()==false){
        this.router.navigate(['/login'])
      }
  }
  getTitle(){
    var titlee = this.location.prepareExternalUrl(this.location.path());
    if(titlee.charAt(0) === '#'){
        titlee = titlee.slice( 1 );
    }

    for(var item = 0; item < this.listTitles.length; item++){
        if(this.listTitles[item].path === titlee){
            return this.listTitles[item].title;
        }
    }
    return '';
  }
  logout(){
    
    window.sessionStorage.clear();
    window.localStorage.clear();
    console.log("ok");
    this.router.navigate(['/login']);
  }
}
