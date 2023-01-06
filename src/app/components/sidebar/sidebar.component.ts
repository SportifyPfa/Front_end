import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/service/token-storage.service';
import { HttpClient,HttpHeaders, HttpEventType } from '@angular/common/http';
import { InterceptorInterceptor } from 'src/app/interceptor/interceptor.interceptor';
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'ni-tv-2 text-primary', class: '' },
    { path: '/terrain', title: 'Terrain',  icon:'ni-circle-08 text-pink', class: '' },

    // { path: '/icons', title: 'Icons',  icon:'ni-planet text-blue', class: '' },
    // { path: '/maps', title: 'Maps',  icon:'ni-pin-3 text-orange', class: '' },
    // { path: '/user-profile', title: 'User profile',  icon:'ni-single-02 text-yellow', class: '' },
    // { path: '/tables', title: 'Tables',  icon:'ni-bullet-list-67 text-red', class: '' },
    // { path: '/login', title: 'Login',  icon:'ni-key-25 text-info', class: '' },
    // { path: '/register', title: 'Register',  icon:'ni-circle-08 text-pink', class: '' }
   
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;

  constructor(private router: Router, private tokenService:TokenStorageService,private http:HttpClient) { }
  message:any;
  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
   });
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
  logout(){
    
    window.sessionStorage.clear();
    window.localStorage.clear();
    console.log("ok");
    this.router.navigate(['/login']);
  }
}
