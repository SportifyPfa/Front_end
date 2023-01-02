import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthentificationJWTService } from 'src/app/service/authentification-jwt.service';
import { TokenStorageService } from 'src/app/service/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  constructor(private service: AuthentificationJWTService, private tokenService: TokenStorageService,private http: HttpClient) { }

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
        console.log("                   ")
        console.log("access")
        console.log("                   ")
        console.log(this.generate.access_token)
        console.log("                   ")
        console.log("refresh")
        console.log("                   ")
        console.log(this.generate.refresh_token)
        this.tokenService.saveToken(this.generate.access_token);
        this.tokenService.saveTokenRefresh(this.generate.refresh_token);
        this.tokenService.saveUser(data2.username);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        console.log("                   ")
        console.log("Save Acesss:")
        console.log("                   ")
        console.log(        this.tokenService.saveToken(this.generate.access_token)        )
        console.log("                   ")
        console.log("Save refresh:")
        console.log("                   ")
        console.log(        this.tokenService.saveTokenRefresh(this.generate.refresh_token)        )
        this.roles = this.tokenService.getUser();
        console.log("                   ")
        console.log("User :")
        console.log("                   ")
        console.log(this.tokenService.getUser())
        alert("bien login")
         console.log("methode")
       
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }
}
