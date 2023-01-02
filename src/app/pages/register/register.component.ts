import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AuthentificationJWTService } from 'src/app/service/authentification-jwt.service';
import Swal from 'sweetalert2';

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
  confirm: any;
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
   
      if (data.password !== this.confirm) {
          Swal.fire({
            icon: 'error',
            title: 'Password no Compatible',
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          });
      } else {
        this.service.seve(data2, data.username, data.age, data.password, data.genre);
          Swal.fire({
            icon: 'success',
            title: 'Bravo registerition',
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          });
      }
    }

}
