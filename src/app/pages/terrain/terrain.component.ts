import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { read } from 'fs';
import { ServiceService } from 'src/app/service/service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-terrain',
  templateUrl: './terrain.component.html',
  styleUrls: ['./terrain.component.css']
})
export class TerrainComponent implements OnInit {

  constructor(private service: ServiceService, private router: Router) { }

  imgURL: any;
  terrainFile: any;

  terrain = {
    id: '',
    name: '',
    numberOfPlayer: '',
    disponibility_from: '',
    disponibility_to: '',
    price: '',
    imgFileName: '',
    location: '',
    description: ''
  };

  ngOnInit(): void {
    this.showtable();
  }
  
  select(event: any) {
    console.log("1")
    if (event.target.files.length > 0) {
      console.log("2")
      const file = event.target.files[0];
      this.terrainFile = file;
      console.log("3")
      var typeImage = event.target.files[0].type;
      console.log("4")
      if (typeImage.match(/image\/*/) == null) {
        console.log("5")
        Swal.fire({
          icon: 'warning',
          title: 'Only Images are Supported',
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          }
        })
        return;
      }
      
      var readFile = new FileReader();
      this.imgURL = file;
      readFile.readAsDataURL(file);
      readFile.onload = (_event) => {
        this.imgURL = readFile.result;
      }

    }
  }

  ajouterTerrain() {
    const data = {
      name: this.terrain.name,
      numberOfPlayer: this.terrain.numberOfPlayer,
      disponibility_from: this.terrain.disponibility_from,
      disponibility_to: this.terrain.disponibility_to,
      price: this.terrain.price,
      imgFileName: this.terrain.imgFileName,
      location: this.terrain.location,
      description: this.terrain.description,
    };  
    this.service.save(data, this.terrainFile);
  }
  
  tr: any;
  showtable() {
    this.service.getallterrain()
      .subscribe(
        data => {
          this.tr = data;
          console.log("kaynin  " + data);
          console.log(data)
        },
        error => {
          console.log(error);
        });

  }

  img: any
  showImage(immage: any) {
    this.service.getImage(immage)
      .subscribe(
        data => {
          this.img = data;
          console.log("kaynin  " + data);
          console.log(data)
        },
        error => {
          console.log(error);
        });

  }

  listeDesTerrains(){
    this.router.navigate(['/listTerrain'])
  }


  //Ouijdane Test

 
}
