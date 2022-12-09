import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from 'src/app/service/service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-terrain',
  templateUrl: './update-terrain.component.html',
  styleUrls: ['./update-terrain.component.css']
})
export class UpdateTerrainComponent implements OnInit {

  constructor(private service: ServiceService, private router: Router,private route:ActivatedRoute) { }

  id:any;
  terrain:any;
  imgURL: any;
  terrainFile: any;


  ngOnInit(): void {
    //dkchi li f whatt
    this.id=this.route.snapshot.params['id'];
    this.service.getIdTerrain(this.id).subscribe(
      data => {
        this.terrain=data;
        //this.showImage(this.terrain.imgFileName);
        console.log("kaynin  " + data);
        console.log(data)
        
      },
      error => {
        console.log(error);
      });
      // this.service.getImage(this.imgURL).subscribe(
      //   data => {
      //     this.imgURL=data;
      //     //this.showImage(this.terrain.imgFileName);
      //     console.log("kaynin  " + data);
      //     console.log(data)
          
      //   },
      //   error => {
      //     console.log(error);
      //   });

      
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
        if(this.imgURL==true){
          this.terrain.imgFileName=false;
        }
       
      }

    }
  }


  //update2
  updateTerrain(){
     this.service.modifier(this.id,this.terrain,this.terrainFile)
     .subscribe(
        data => {
          this.terrain=data;
          //this.showImage(this.terrain.imgFileName);
          console.log("update dazt  " + data);
          console.log(data)
          this.router.navigate(["/listTerrain"]);
        },
        error => {
          console.log(error);
        });

      
  }
  }
  
