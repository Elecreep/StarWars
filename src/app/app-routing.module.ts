import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { VehiculesComponent } from './components/vehicules/vehicules.component';
import { AddVaisseauComponent } from './components/add-vaisseau/add-vaisseau.component';
import { VaisseauDetailsComponent } from './components/vaisseau-details/vaisseau-details.component';
import { PlanetsComponent } from './components/planets/planets.component';
import { AddPlanetComponent } from './components/add-planet/add-planet.component';
import { EditPlanetComponent } from './components/edit-planet/edit-planet.component';
import { EditVaisseauComponent } from './components/edit-vaisseau/edit-vaisseau.component';
import { PlanetDetailsComponent } from './components/planet-details/planet-details.component';


const routes: Routes = [
    { path: '',   redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent},
    { path: 'vehicules', component: VehiculesComponent},
    { path: 'planets', component: PlanetsComponent},
    { path: 'planets/add', component: AddPlanetComponent}, // A placer avant le :id, sinon il va confondre les deux
    { path: 'planets/edit/:id', component: EditPlanetComponent}, // :id = L'élément GET de l'url
    { path: 'planets/:id', component: PlanetDetailsComponent}, // :id = L'élément GET de l'url
    { path: 'vehicules/add', component: AddVaisseauComponent}, // A placer avant le :id, sinon il va confondre les deux
    { path: 'vehicules/edit/:id', component: EditVaisseauComponent}, // :id = L'élément GET de l'url
    { path: 'vehicules/:id', component: VaisseauDetailsComponent} // :id = L'élément GET de l'url

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
