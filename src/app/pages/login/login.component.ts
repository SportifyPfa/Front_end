import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthentificationJWTService } from 'src/app/service/authentification-jwt.service';
import { TokenStorageService } from 'src/app/service/token-storage.service';
import { InterceptorInterceptor } from 'src/app/interceptor/interceptor.interceptor';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  constructor(private service: AuthentificationJWTService, private tt: TokenService, private tokenService: TokenStorageService, private http: HttpClient, private router: Router) { }

  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  login = {
    username: '',
    password: ''
  };
  currentUser: any;
  ngOnInit() {
    // this.Login();
  }
  ngOnDestroy() {
  }
  generate: any;
  access_token: any;
  refresh_token: any;
  Login() {
    const data2 = {
      username: this.login.username,
      password: this.login.password,
    };
    this.service.login(data2.username, data2.password).subscribe(
      data => {
        this.generate = data;
        this.tokenService.saveToken(this.generate.access_token);
        this.tokenService.saveTokenRefresh(this.generate.refresh_token);
        this.tokenService.saveUser(data2.username);
        this.tokenService.saveAcessToken(this.generate.access_token);
        this.tokenService.saveRefreshToken2(this.generate.refresh_token);
        TokenStorageService.getToken();
        TokenStorageService.getToken2();
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        console.log("                   ")
        console.log("Save Acesss:")
        console.log("                   ")
        console.log(this.tokenService.saveToken(this.generate.access_token))
        console.log("                   ")
        console.log("Save refresh:")
        console.log("                   ")
        console.log(this.tokenService.saveTokenRefresh(this.generate.refresh_token))
        this.roles = this.tokenService.getUser();
        console.log("                   ")
        console.log("User :")
        console.log("                   ")
        console.log(this.tokenService.getUser())
        //alert("bien login")
        console.log("methode")
        InterceptorInterceptor.access_token = TokenStorageService.getToken();
        console.log(InterceptorInterceptor.access_token)
        InterceptorInterceptor.refresh_token = TokenStorageService.getToken2();
        console.log(InterceptorInterceptor.refresh_token)
        this.router.navigate(['/terrain']);
      },
      err => {
        console.log(err)
      }
    );
  }
  reloadPage(): void {
    //window.location.reload();
    this.router.navigate(['/terrain']);
  }
}
