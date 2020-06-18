import { Component, OnInit } from '@angular/core';
import { PlanetService } from '../../services/planet.service';
import { Planet } from '../../models/planet';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class PlanetsComponent implements OnInit {

    planets: Planet[];
    url: string;

    constructor(private planetService: PlanetService) {
        
    }
    // PlanetService = Nom de la class de mon service

    ngOnInit(): void {
      this.planets = this.planetService.getAllPlanets();
      //getAllPlanets = ma fonction poour récup l'objet
    }

}
