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
    document.getElementById("tes").innerHTML="user";
    document.getElementById("pogba").style.backgroundImage="url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx0CIy3mIbpe2nuLRfK5xxPcwxmTvXjJsBNw&usqp=CAU)"
    
  }
  test:any;
}
