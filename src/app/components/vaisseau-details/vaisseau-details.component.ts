import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Vaisseau } from '../../models/vaisseau';
import { VaisseauService } from '../../services/vaisseau.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-vaisseau-details',
  templateUrl: './vaisseau-details.component.html',
  styleUrls: ['./vaisseau-details.component.css']
})
export class VaisseauDetailsComponent implements OnInit {

    id: number;
    vaisseau: Vaisseau;
    isLoading: boolean = false;

    constructor(private route: ActivatedRoute, private vaisseauService: VaisseauService, private router: Router, private toastr: ToastrService) { }

    ngOnInit(): void {
        this.isLoading = true;
        this.id = +this.route.snapshot.paramMap.get('id');
        // this.vaisseau = this.vaisseauService.getVaisseau(this.id);
        this.vaisseauService.getVaisseauHttp(this.id).subscribe(data => {
            this.isLoading = false;
            this.vaisseau =  data;
        });
    }

    deleteVaisseau(_vaisseau: Vaisseau)
    {
        // this.vaisseauService.deleteVaisseauService(_vaisseau);
        this.vaisseauService.deleteVaisseauServiceHttp(_vaisseau);
        this.router.navigate(['/vehicules']);
        this.toastr.error('Le vaisseau ' + this.vaisseau.nom + " à été démantelé.");
    }

}
