import { Injectable } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient,private router: Router) { }

  save(t: any, img: File) {
    const formData = new  FormData();
     formData.append('terrain',new Blob([JSON.stringify(t)],{type:'application/json'}));
     formData.append('img',img); 
    this.http
    .post(`https://terrain-web-service.onrender.com/terrain/save`, formData)
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
    return this.http.get(`https://terrain-web-service.onrender.com/terrain/all`);
  }
  getImage(img: any) {
    return this.http.get(`https://terrain-web-service.onrender.com/terrain/images/${img}`);
  }

  deleteTerrain(id:any){
    return this.http.delete(`https://terrain-web-service.onrender.com/terrain/delete/${id}`)
  }

  //byid
  getIdTerrain(id: any) {
    return this.http.get(`https://terrain-web-service.onrender.com/terrain/${id}`);
  }

  //modifier
  modifier(id: any, terrain: any, img: File) {
    const formData = new  FormData();
    formData.append('terrain',new Blob([JSON.stringify(terrain)],{type:'application/json'}));
     formData.append('img',img); 
   return  this.http
    .put(`https://terrain-web-service.onrender.com/terrain/${id}`, formData)
    
  
  }
}

