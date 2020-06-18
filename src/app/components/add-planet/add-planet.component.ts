import { Component, OnInit } from '@angular/core';
import { Planet } from '../../models/planet';
import { PlanetService } from '../../services/planet.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-planet',
  templateUrl: './add-planet.component.html',
  styleUrls: ['./add-planet.component.css']
})
export class AddPlanetComponent implements OnInit {

    newPlanet = new Planet();

    constructor(private planetService: PlanetService, private router: Router) { }

    ngOnInit(): void {
    }

    addPlanet() : void
    {
        this.newPlanet.id = Math.floor(Math.random() * Math.floor(1000));
        // console.log(this.newPlanet);
        this.planetService.addPlanetService(this.newPlanet);
        this.router.navigate(['/planets'])
    }
}
