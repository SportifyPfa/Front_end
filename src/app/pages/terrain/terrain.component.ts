import { Component, OnInit } from '@angular/core';
import { read } from 'fs';

@Component({
  selector: 'app-terrain',
  templateUrl: './terrain.component.html',
  styleUrls: ['./terrain.component.css']
})
export class TerrainComponent implements OnInit {

  constructor() { }

  imgURL:any;

  terrainFile:any;

  ngOnInit(): void {
  }
  //Upload Image
  select(event:any)
  {
    console.log("1")
    if(event.target.files.length>0){
      console.log("2")
        const file = event.target.files[0];
        this.terrainFile=file;
        console.log("3")
        var typeImage = event.target.files[0].type;
        console.log("4")
        if(typeImage.match(/image\/*/)==null){
          console.log("5")
          alert("Only Images are Supported");
          return;
        }
        var readFile = new FileReader();
        this.imgURL=file;
        readFile.readAsDataURL(file);
        readFile.onload = (_event) =>{
            this.imgURL=readFile.result;
        }
      
    }
  }

}
