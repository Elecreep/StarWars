import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Vaisseau } from '../../models/vaisseau';
import { VaisseauService } from '../../services/vaisseau.service';

@Component({
  selector: 'app-edit-vaisseau',
  templateUrl: './edit-vaisseau.component.html',
  styleUrls: ['./edit-vaisseau.component.css']
})
export class EditVaisseauComponent implements OnInit {

    vaisseau: Vaisseau;
    isLoading: Boolean = true;

    constructor(private activeRoute: ActivatedRoute, private vaisseauService : VaisseauService, private router: Router, private toastr: ToastrService) { }

    ngOnInit(): void
    {
        const id = +this.activeRoute.snapshot.paramMap.get('id');
        this.vaisseauService.getVaisseauHttp(id).subscribe(data => {
            this.isLoading = false;
            this.vaisseau = data;
        });
    }

    editVaisseau(_vaisseau: Vaisseau): void
    {
      // this.vaisseauService.edit(this.vaisseau);
      this.vaisseauService.editHttp(this.vaisseau).subscribe(data => {
          this.router.navigate(['/vehicules']);
          this.toastr.success('Le vaisseau ' + this.vaisseau.nom + " à été modifié");
      });

    }
}
