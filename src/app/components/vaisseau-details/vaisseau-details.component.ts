import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Vaisseau } from '../../models/vaisseau';
import { VaisseauService } from '../../services/vaisseau.service';

@Component({
  selector: 'app-vaisseau-details',
  templateUrl: './vaisseau-details.component.html',
  styleUrls: ['./vaisseau-details.component.css']
})
export class VaisseauDetailsComponent implements OnInit {

    id: number;
    vaisseau: Vaisseau;

    constructor(private route: ActivatedRoute, private vaisseauService: VaisseauService) { }

    ngOnInit(): void {
        this.id = +this.route.snapshot.paramMap.get('id');
        this.vaisseau = this.vaisseauService.getVaisseau(this.id);
    }

}
