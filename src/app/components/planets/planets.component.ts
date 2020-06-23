import { Component, OnInit } from '@angular/core';
import { PlanetService } from '../../services/planet.service';
import { Planet } from '../../models/planet';
import { LoggerService } from '../../services/logger.service';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class PlanetsComponent implements OnInit {

    planets: Planet[];
    url: string;

    constructor(private planetService: PlanetService, private loggerService: LoggerService) {

    }
    // PlanetService = Nom de la class de mon service

    ngOnInit(): void {
      this.planets = this.planetService.getAllPlanets();
      this.loggerService.message();
      //getAllPlanets = ma fonction poour récup l'objet
    }

}
