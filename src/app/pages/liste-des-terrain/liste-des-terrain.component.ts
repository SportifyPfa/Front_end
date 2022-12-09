import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-liste-des-terrain',
  templateUrl: './liste-des-terrain.component.html',
  styleUrls: ['./liste-des-terrain.component.css']
})
export class ListeDesTerrainComponent implements OnInit {

  constructor(private service: ServiceService, private router: Router) { }
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

  tr:any;
  showtable() {
    this.service.getallterrain()
      .subscribe(
        data => {
          this.tr=data;
          //this.showImage(this.terrain.imgFileName);
          console.log("kaynin  " + data);
          console.log(data)
        },
        error => {
          console.log(error);
        });

  }
  deleteTerrainId(id: any) {
    this.service.deleteTerrain(id)
      .subscribe(
        data => {
          this.tr = data;
          console.log("delete  " + data);
          console.log(data)
        },
        error => {
          console.log(error);
        });

  }

}
