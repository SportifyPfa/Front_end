import { Component, OnInit } from '@angular/core';
import { AuthentificationJWTService } from 'src/app/service/authentification-jwt.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  register = {
    id: '',
    username: '',
    password: '',
    age: '',
    genre: '',
    roleName: ''
    
  };

  role = {
    roleName: '' 
  };
  
  constructor(private service: AuthentificationJWTService) { }
  
  ngOnInit() {
  }

  getlogin() {
    const data = {
      username: this.register.username,
      age: this.register.age,
      genre: this.register.genre,
      password: this.register.password,
      roleName: this.register.roleName,

    }; 
    const data2 = {
      username: this.register.username,
      roleName: this.role.roleName,

    }; 
    
   // async seve(role: string,username:any,age:any,password,genre:any) {
 
    this.service.seve(data2,data.username,data.age,data.password,data.genre) ;
    //  this.service.save(data,data2)
  }

}
