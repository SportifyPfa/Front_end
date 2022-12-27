import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexLayoutRoutingModule, IndexLayoutroutes } from './index-layout-routing.module';
import { IndexLayoutComponent } from './index-layout.component';
import { FormsModule } from '@angular/forms';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { HomeComponent } from 'src/app/index/home/home.component';


@NgModule({
  declarations: [
   
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(IndexLayoutroutes),
    FormsModule,
    NgbModule
  ]
})
export class IndexLayoutModule { }
