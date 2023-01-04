import { Injectable } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { InterceptorInterceptor } from '../interceptor/interceptor.interceptor';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient,private router: Router) { }

  save(t: any, img: File) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${InterceptorInterceptor.access_token}`
      })
    };
    const formData = new  FormData();
     formData.append('terrain',new Blob([JSON.stringify(t)],{type:'application/json'}));
     formData.append('img',img); 
    this.http
    .post(`https://terrain-web-service.onrender.com/terrain/save`, formData,httpOptions)
    .subscribe(_ => {
      Swal.fire({
        icon: 'success',
        title: 'Le terrain a bien ete ajoute',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        },
        confirmButtonText: 'OK',
      }).then((result) => {
        if (result.isConfirmed) {
          this.router.navigate(['/listTerrain'])  
        } 
      })
      
    }, error => 
    Swal.fire({
      icon: 'error',
      title: 'Image name already exists please change it',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      },
    })

    );
  }
  //ouijdane 
  getallterrain() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${InterceptorInterceptor.access_token}`
      })
    };
    return this.http.get(`http://localhost:8900/SPORTIFYENTITY/terrain/all`,httpOptions);
  }
  getImage(img: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${InterceptorInterceptor.access_token}`
      })
    };
    return this.http.get(`https://terrain-web-service.onrender.com/terrain/images/${img}`,httpOptions);
  }

  deleteTerrain(id:any){
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${InterceptorInterceptor.access_token}`
      })
    };
    return this.http.delete(`https://terrain-web-service.onrender.com/terrain/delete/${id}`,httpOptions)
  }

  //byid
  getIdTerrain(id: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${InterceptorInterceptor.access_token}`
      })
    };
    return this.http.get(`https://terrain-web-service.onrender.com/terrain/${id}`,httpOptions);
  }

  //modifier
  modifier(id: any, terrain: any, img: File) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${InterceptorInterceptor.access_token}`
      })
    };
    const formData = new  FormData();
    formData.append('terrain',new Blob([JSON.stringify(terrain)],{type:'application/json'}));
     formData.append('img',img); 
   return  this.http
    .put(`https://terrain-web-service.onrender.com/terrain/${id}`, formData,httpOptions)
    
  
  }
}

