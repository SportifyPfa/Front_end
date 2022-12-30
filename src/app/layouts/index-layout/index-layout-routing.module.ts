import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/app/index/home/home.component';
import { JouerComponent } from 'src/app/index/jouer/jouer.component';
import { SeanceComponent } from 'src/app/index/seance/seance.component';

export const IndexLayoutroutes: Routes = [
  {path :'home' ,  component: HomeComponent},
  {path :'jouer' ,  component: JouerComponent},
  {path :'seance' ,  component: SeanceComponent},
];

@NgModule({
  imports: [RouterModule.forChild(IndexLayoutroutes)],
  exports: [RouterModule]
})
export class IndexLayoutRoutingModule { }
