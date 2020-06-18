import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './components/menu/menu.component';
import { VehiculesComponent } from './components/vehicules/vehicules.component';
import { PlanetsComponent } from './components/planets/planets.component';
import { HomeComponent } from './components/home/home.component';
import { PlanetDetailsComponent } from './components/planet-details/planet-details.component';
import { VaisseauDetailsComponent } from './components/vaisseau-details/vaisseau-details.component';
import { KonamiModule } from 'ngx-konami';
import { AddPlanetComponent } from './components/add-planet/add-planet.component';
import { AddVaisseauComponent } from './components/add-vaisseau/add-vaisseau.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    VehiculesComponent,
    PlanetsComponent,
    HomeComponent,
    PlanetDetailsComponent,
    VaisseauDetailsComponent,
    AddPlanetComponent,
    AddVaisseauComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    KonamiModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
