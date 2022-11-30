import { Injectable } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  
  // upload3(file: File,terrain : any): void {
  //   const formData: FormData = new FormData();
  //   formData.append('file', file);
  //   const xhr = new XMLHttpRequest()
  //   xhr.onreadystatechange = (e) => {

  //     if (xhr.status === 200) {
  //       console.log('SUCCESS', xhr.responseText);
  //       // Swal.fire({
  //       //   icon: 'success',
  //       //   title: 'Bien Importer ce fichier',
  //       //   showClass: {
  //       //     popup: 'animate__animated animate__fadeInDown'
  //       //   },
  //       //   hideClass: {
  //       //     popup: 'animate__animated animate__fadeOutUp'
  //       //   }
  //       // })
  //     } 
  //     // else 
  //     // if(xhr.status !== 200){
  //     //   console.warn('request_error');
  //     //   Swal.fire({
  //     //     icon: 'warning',
  //     //     title: 'Request Error !! le fichier doit etre Sous Forme : NOM | PRENOM | ADRESSE | TELEPHONE ',
  //     //     showClass: {
  //     //       popup: 'animate__animated animate__fadeInDown'
  //     //     },
  //     //     hideClass: {
  //     //       popup: 'animate__animated animate__fadeOutUp'
  //     //     }
  //     //   })
  //     // }
  //     if(xhr.status===400){
  //       console.log("Please upload an excel file!");
  //       // Swal.fire({
  //       //   icon: 'warning',
  //       //   title: 'Please upload an excel file!',
  //       //   showClass: {
  //       //     popup: 'animate__animated animate__fadeInDown'
  //       //   },
  //       //   hideClass: {
  //       //     popup: 'animate__animated animate__fadeOutUp'
  //       //   }
  //       // })
  //     }
      
  //   };
  //   xhr.open('POST', `http://localhost:8080/terrain/save`, terrain);
  //   xhr.send(formData);
  // }


//   ajouter(img:File,terrain:any){
//     const imageFormData = new FormData();
//     const formData: FormData = new FormData();
//     formData.append('terrain', JSON.stringify(terrain));
//     formData.append('img', img);
//       const xhr = new XMLHttpRequest()
// xhr.onreadystatechange = (e) => {

//   if (xhr.status === 200) {
//     console.log('SUCCESS', xhr.responseText);
    
//   } 

  
// };
// xhr.open('POST', `http://localhost:8080/terrain/save`,terrain);
// xhr.send(formData)
// }
  ajouter(terrain:any,img:any){
         img = new FormData();
        const formData: FormData = new FormData();
        formData.append('terrain', JSON.stringify(terrain));
        formData.append('img', img);
    return this.http.post(`http://localhost:8088/terrain/save`,terrain,img);
  }

    getallterrain() {
      return this.http.get(`http://localhost:8088/terrain/all`);
   }
  }

