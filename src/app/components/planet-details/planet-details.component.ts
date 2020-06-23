import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Planet } from '../../models/planet';
import { PlanetService } from '../../services/planet.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-planet-details',
  templateUrl: './planet-details.component.html',
  styleUrls: ['./planet-details.component.css']
})
export class PlanetDetailsComponent implements OnInit {

    id: number; // Va contenir le résultat du GET dans l'url
    planet: Planet;

    constructor(private route: ActivatedRoute, private planetService: PlanetService,  private router: Router, private toastr: ToastrService) { }

    ngOnInit(): void {
      this.id = +this.route.snapshot.paramMap.get('id'); // Pour récupérer l'élément GET du l'URL
      this.planet = this.planetService.getPlanet(this.id); // Pour retrouner une planet en utilisant son ID. Le fonction se trouve dans planeteService
    }

    deletePlanet(_planet: Planet)
    {
        this.planetService.deletePlanetService(_planet);
        this.router.navigate(['/planets']);
        this.toastr.error('La planète ' + this.planet.nom + " à été détruite ! BOUUUM !!");
    }
}
