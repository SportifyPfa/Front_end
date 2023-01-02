import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthentificationJWTService } from 'src/app/service/authentification-jwt.service';
import { TokenStorageService } from 'src/app/service/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  constructor(private service: AuthentificationJWTService,private tokenService: TokenStorageService) { }

  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  login = {
    username: '',
    password: ''
  };
  ngOnInit() {
    if (this.tokenService.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenService.getUser().roles;
    }
  }

  ngOnDestroy() {
  }
  Login() {
    const data2 = {
      username: this.login.username,
      password: this.login.password,
    };
    this.service.login(data2.username, data2.password).subscribe(
      data => {
        this.tokenService.saveToken(data.accessToken);
        this.tokenService.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenService.getUser().roles;
       // this.reloadPage();
       alert("bien login")
       console.log(data.accessToken)
       console.log(data)
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }
}
