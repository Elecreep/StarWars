import { Component, OnInit } from '@angular/core';
import { VaisseauService } from '../../services/vaisseau.service';
import { Vaisseau } from '../../models/vaisseau';

@Component({
  selector: 'app-vehicules',
  templateUrl: './vehicules.component.html',
  styleUrls: ['./vehicules.component.css']
})
export class VehiculesComponent implements OnInit {

    vaisseaux: Vaisseau[];
    constructor(private vaisseauService: VaisseauService) { }
    // PlanetService = Nom de la class de mon service

    ngOnInit(): void {
      this.vaisseaux = this.vaisseauService.getAllVaisseau();
      // getAllVaisseau = ma fonction poour récup l'objet
    }

}
