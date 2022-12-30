import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { TerrainComponent } from './pages/terrain/terrain.component';
import { CarteTerrainComponent } from './pages/carte-terrain/carte-terrain.component';
import { IndexLayoutComponent } from './layouts/index-layout/index-layout.component';
import { HomeComponent } from './index/home/home.component';
import { JouerComponent } from './index/jouer/jouer.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { SeanceComponent } from './index/seance/seance.component';
import { AgmCoreModule } from '@agm/core';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    Ng2SearchPipeModule,
    
    
    
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    IndexLayoutComponent, 
   
   
    
  ],
  
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
