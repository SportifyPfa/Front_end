import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import Swal from 'sweetalert2';


@Injectable({
  providedIn: 'root'
})
export class AuthentificationJWTService {
  
  
  refresh_token="";
  access_token="";
  constructor(private http: HttpClient) {

    this.access_token = localStorage.getItem("access_token")? localStorage.getItem("access_token")+"":"";
    this.refresh_token = localStorage.getItem("refresh_token")? localStorage.getItem("refresh_token")+"":"";
   }
  async save(role: any, username: any, age: any, password, genre: any) {
    try {
      const req = await this.http.post('http://localhost:8900/SPORTIFYAUTHENTIFICATION/auth/save_user', {
        username: username,
        age: age,
        genre: genre,
        password: password,
        role: role,
      }).subscribe(_ => {
        console.log(username)
        console.log(role)
        console.log("ouijdane")
        return this.http.post('http://localhost:8900/SPORTIFYAUTHENTIFICATION/auth/addRoleToUser', role).toPromise();

      }, error =>
        Swal.fire({
          icon: 'error',
          title: 'this account  already exists please change it',
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          },
        })

      )
    } catch (error) {
      console.log('An error occurred while registering');
    }
  }
  
  login(username: string, password: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.post("http://localhost:8900/SPORTIFYAUTHENTIFICATION/login", {
      username,
      password
    }, httpOptions);
  }

  // public loginRequest( username:string, password:string){
  //   return new Promise<boolean>( (resolve, reject)=>{
  //     this.http.post<any>(`http://localhost:8900/SPORTIFYAUTHENTIFICATION/login?username=`+`${username}&&password=${password}`,{headers:this.requestHeader}).subscribe({
  //       next:res=>{
  //         this.access_token = res.accessToken
  //         this.refresh_token = res.refreshToken
  //         console.log(res.accessToken)
  //         localStorage.setItem("access_token", this.access_token)
  //         localStorage.setItem("refresh_token", this.refresh_token)
  //         //this.getUser()
  //         resolve(true)
  //       },
  //       error: err=>{
  //         this.access_token = this.refresh_token = ""
  //         reject(false)
  //       }
  //     })
  //   })
  // }

  // public getUser(){
  //   if( this.access_token.length==0 ) return;
  //   const authorizationHeader = "Bearer "+this.access_token
  //   this.http.get("http://localhost:8900/SPORTIFYAUTHENTIFICATION/auth/user_auth", { headers: {
  //     "Authorization": authorizationHeader
  //   } }).subscribe({
  //     next:res=>{
  //       this.user = res;
  //       console.log(res.appRoles.forEach(role=>console.log(role.roleName)))
  //       this.userSubject.next(res)
  //     },
  //     error: err=>{
  //       console.error(err.message);
  //       this.refreshToken()
  //     }
  //   })
  // }
  public refreshToken(){
    const authorizationHeader = "Bearer "+this.refresh_token
    return this.http.get<any>("http://localhost:8900/SPORTIFYAUTHENTIFICATION/auth/refreshToken", { headers: {
      "refresh_token": authorizationHeader
    } })
  }

  public logout(){
    this.access_token = this.refresh_token = ""
    localStorage.removeItem("access_token")
    localStorage.removeItem("refresh_token")
    // this.user= undefined;
    // this.userSubject.next(undefined)
  }
  // refreshToken(token:any){
  //   return this.http.get('http://localhost:8900/SPORTIFYAUTHENTIFICATION/auth/refreshToken',token);
  // }


}
