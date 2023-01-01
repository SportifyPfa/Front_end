import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthentificationJWTService {

  constructor(private http: HttpClient) { }
  async seve(role: any,username:any,age:any,password,genre:any) {
    try {
      const  req  = await this.http.post('http://localhost:8900/SPORTIFYAUTHENTIFICATION/auth/save_user', {
        username: username,
        age:age,
        genre:genre,
        password: password,
        role: role,
      }).subscribe(_ => {
        console.log(username)
        console.log(role)
        console.log("ouijdane")
          return this.http.post('http://localhost:8900/SPORTIFYAUTHENTIFICATION/auth/addRoleToUser', role).toPromise();
       }, error => 
          console.log("erreur")

       )
    } catch (error) {
      console.log('An error occurred while registering');
    }
  }


}
