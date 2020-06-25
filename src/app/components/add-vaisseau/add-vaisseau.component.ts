import { Component, OnInit } from '@angular/core';
import { Vaisseau } from '../../models/vaisseau';
import { VaisseauService } from '../../services/vaisseau.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-vaisseau',
  templateUrl: './add-vaisseau.component.html',
  styleUrls: ['./add-vaisseau.component.css']
})
export class AddVaisseauComponent implements OnInit {

    newVaisseau = new Vaisseau();
    isLoading = true;

    constructor(private vaisseauService: VaisseauService, private router: Router, private toastr: ToastrService) { }

    ngOnInit(): void {
    }

    addVaisseau() : void
    {
        // console.log(this.newVaisseau);
        this.isLoading = true;
        this.vaisseauService.addVaisseauServiceHttp(this.newVaisseau).subscribe(data => {
            this.isLoading = false;
            this.router.navigate(['/vehicules']);
            this.toastr.success('Le vaisseau ' + this.newVaisseau.nom + " à été ajouté");
        });

    }

}
