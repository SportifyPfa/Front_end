import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jouer',
  templateUrl: './jouer.component.html',
  styleUrls: ['./jouer.component.css']
})
export class JouerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onClick() {
    document.getElementById("tes").innerHTML="user"
    
  }
  test:any;
}
