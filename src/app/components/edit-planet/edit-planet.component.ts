import { Component, OnInit } from '@angular/core';
import { Planet } from '../../models/planet';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PlanetService } from '../../services/planet.service';

@Component({
  selector: 'app-edit-planet',
  templateUrl: './edit-planet.component.html',
  styleUrls: ['./edit-planet.component.css']
})
export class EditPlanetComponent implements OnInit {

    planet: Planet;
    isLoading: Boolean = true;

    constructor(private activatedRoute : ActivatedRoute, private router: Router, private planetService: PlanetService, private toastr: ToastrService) { }

    ngOnInit(): void
    {
        const id = +this.activatedRoute.snapshot.paramMap.get('id');
        this.planetService.getPlanetHttp(id).subscribe(data => {
            this.planet = data;
            this.isLoading = false;
            console.log(this.planet);
        });

  }

  editPlanet()
  {
      // this.planetService.edit(this.planet);
      this.planetService.editHttp(this.planet).subscribe(data => {
          this.router.navigate(['/planets'])
          this.toastr.success('La planète ' + this.planet.nom + " à été modifié");
      });

  }
}
