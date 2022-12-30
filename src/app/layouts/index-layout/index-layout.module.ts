import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexLayoutRoutingModule, IndexLayoutroutes } from './index-layout-routing.module';
import { IndexLayoutComponent } from './index-layout.component';
import { FormsModule } from '@angular/forms';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { HomeComponent } from 'src/app/index/home/home.component';
import { SeanceComponent } from 'src/app/index/seance/seance.component';
import { JouerComponent } from 'src/app/index/jouer/jouer.component';
import { AgmCoreModule } from '@agm/core';



@NgModule({
  declarations: [
   SeanceComponent, HomeComponent,
   JouerComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(IndexLayoutroutes),
    FormsModule,
    NgbModule, 
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDiuN_yW2fbUfNxQl5iaszsf-MtNWCxoNE'
    }),
  ]
})
export class IndexLayoutModule { }
