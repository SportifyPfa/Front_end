import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-seance',
  templateUrl: './seance.component.html',
  styleUrls: ['./seance.component.css']
})
export class SeanceComponent implements OnInit {

  constructor(private router: Router) { }
  selectedDate:any;
  ngOnInit(): void {
  }
  onClick() {
    this.router.navigate(['/jouer']);
  }
}
