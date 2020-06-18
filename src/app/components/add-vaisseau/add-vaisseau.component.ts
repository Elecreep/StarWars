import { Component, OnInit } from '@angular/core';
import { Vaisseau } from '../../models/vaisseau';

@Component({
  selector: 'app-add-vaisseau',
  templateUrl: './add-vaisseau.component.html',
  styleUrls: ['./add-vaisseau.component.css']
})
export class AddVaisseauComponent implements OnInit {

    newVaisseau = new Vaisseau();

    constructor() { }

    ngOnInit(): void {
    }

    addVaisseau() : void
    {
        this.newVaisseau.id = Math.floor(Math.random() * Math.floor(1000));
        console.log(this.newVaisseau);
    }

}
