import { Component, OnInit } from '@angular/core';
import { VaisseauService } from '../../services/vaisseau.service';
import { Vaisseau } from '../../models/vaisseau';
import { LoggerService } from '../../services/logger.service';

@Component({
  selector: 'app-vehicules',
  templateUrl: './vehicules.component.html',
  styleUrls: ['./vehicules.component.css']
})
export class VehiculesComponent implements OnInit {

    vaisseaux: Vaisseau[];
    errorHttp: boolean = false;
    constructor(private vaisseauService: VaisseauService, private loggerService: LoggerService) { }
    // PlanetService = Nom de la class de mon service

    ngOnInit(): void {
      // this.vaisseaux = this.vaisseauService.getAllVaisseau();
      this.vaisseauService.getAllVaisseauHttp().subscribe(
          data => {this.vaisseaux = data},
          error => {
              this.errorHttp = true;
              this.vaisseaux = this.vaisseauService.getAllVaisseau();
          }
      );
      this.loggerService.message();
      // getAllVaisseau = ma fonction poour récup l'objet
    }

}
