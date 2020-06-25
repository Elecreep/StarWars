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

    constructor(private planetService: PlanetService, private loggerService: LoggerService) {

    }

    planets: Planet[];
    errorHttp: boolean = false;
    // planetsHTTP: Object;

    ngOnInit(): void {
        this.planetService.getAllPlanetHttp().subscribe(
            data => {this.planets = data, this.planetService.planets = data},
            error => {
                this.errorHttp = true;
                this.planets = this.planetService.getAllPlanets();
            }
        );

      // this.planets = this.planetService.getAllPlanets();
      // this.loggerService.message();
    }

}
