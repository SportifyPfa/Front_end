import { Component, Input, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service/service.service';
import { Router } from '@angular/router';
import { toString } from '@ng-bootstrap/ng-bootstrap/util/util';
@Component({
  selector: 'app-carte-terrain',
  templateUrl: './carte-terrain.component.html',
  styleUrls: ['./carte-terrain.component.css']
})
export class CarteTerrainComponent implements OnInit {
  terrains : any =null ;
  datt : any =document.getElementById("datee1")
  ;
  
  constructor(private servicet: ServiceService,private router: Router ,private test :ServiceService) {this.gett() , this.ma_fonction() }
  searchText : string='';
  
  ngOnInit(): void {
  }

  gett(){
    this.servicet.getallterrain().subscribe(
      (res) =>{
        console.log(res);
        this.terrains=res;
      },(err) =>{
        console.log(err)
      }
    )
  }
  getallterrain() {
    fetch('https://terrain-web-service.onrender.com/terrain/all', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
    })
      .then(response => response.text())
      .then(text => console.log(text))
  }
   ma_fonction() {
    console.log(this.datt.value);
}

}


