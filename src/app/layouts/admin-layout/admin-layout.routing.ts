import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { TerrainComponent } from 'src/app/pages/terrain/terrain.component';
import { ListeDesTerrainComponent } from 'src/app/pages/liste-des-terrain/liste-des-terrain.component';
import { UpdateTerrainComponent } from 'src/app/pages/update-terrain/update-terrain.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'tables',         component: TablesComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'terrain',        component: TerrainComponent },
    { path: 'listTerrain',        component: ListeDesTerrainComponent },
    { path: 'updateTerrain/:id',        component: UpdateTerrainComponent }

];
