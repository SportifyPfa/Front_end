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
    .post(`http://localhost:8088/terrain/save`, formData).subscribe(_ => {
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
      
    });
  }
  //ouijdane 
  getallterrain() {
    return this.http.get(`http://localhost:8088/terrain/all`);
  }
  getImage(img: any) {
    return this.http.get(`http://localhost:8088/terrain/images/${img}`);
  }
}

