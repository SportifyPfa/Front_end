import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/app/index/home/home.component';
import { JouerComponent } from 'src/app/index/jouer/jouer.component';

export const IndexLayoutroutes: Routes = [
  {path :'home' ,  component: HomeComponent},
  {path :'jouer' ,  component: JouerComponent}
];

@NgModule({
  imports: [RouterModule.forChild(IndexLayoutroutes)],
  exports: [RouterModule]
})
export class IndexLayoutRoutingModule { }
